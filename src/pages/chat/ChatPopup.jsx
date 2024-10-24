import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import socket from "../../utils/socketService";
import { BASE_URL } from "../../utils/config";
import MessageInput from "../../components/sections/MessageInput";
import { toast } from "react-toastify";

const formatTimestamp = (date) => {
  const datePart = new Date(date).toLocaleDateString([], {
    month: "2-digit",
    day: "2-digit",
  });
  const timePart = new Date(date)
    .toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    })
    .toLowerCase();
  return `${datePart} - ${timePart}`;
};

const ChatPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [customerData, setCustomerData] = useState(null); // Make sure to set this from your authentication or user data
  const [selectedChat, setSelectedChat] = useState([]);
  const messageContainerRef = useRef(null);

  const scrollToBottom = () => {
    if (messageContainerRef.current) {
      messageContainerRef.current.scrollTop =
        messageContainerRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    if (customerData) {
      const fetchChatHistory = async () => {
        try {
          const response = await axios.get(
            `${BASE_URL}/chat/${customerData._id}/traveler/66ae207e9c65e169f36d0014/tourGuide`
          );
          setSelectedChat(response?.data);
        } catch (error) {
          console.error("Error fetching chat history:", error);
        }
      };

      fetchChatHistory();
    }
  }, [customerData]);

  useEffect(() => {
    socket.on("message", (message) => {
      // Only add the message if it's not from the current user
      if (message.sender !== "66ae1fc246ed1e5b26def522") {
        setSelectedChat((prevChat) => [...prevChat, message]);
      }
    });

    return () => {
      socket.off("message");
    };
  }, [customerData]);

  useEffect(() => {
    scrollToBottom();
  }, [selectedChat]);

//   useEffect(() => {
//     const fetchCustomerData = async () => {
//       try {
//         const response = await axios.get(`${BASE_URL}/users/currentuser`, {
//           withCredentials: true, // Ensure cookies are sent with the request
//         });
//         setCustomerData(response.data);
//         console.log("Customer Data:", response.data);
//       } catch (error) {
//         console.error("Error fetching customer data:", error.response?.data);
//       }
//     };
  
//     fetchCustomerData();
//   }, []);
  

  const handleSendMessage = async (message) => {
    const newMessage = {
      sender: "66ae1fc246ed1e5b26def522", // Use dynamic sender ID
    //   sender: customerData?._id, // Use dynamic sender ID
      senderModel: "traveler",
      receiver: "66ae207e9c65e169f36d0014", // Replace with actual receiver ID as needed
      receiverModel: "tourGuide",
      message,
    };
    try {
      await axios.post(`${BASE_URL}/chat`, newMessage);
      // Add the message as 'Me'
      setSelectedChat((prevChat) => [
        ...prevChat,
        { ...newMessage, sender: "Me" },
      ]);
      scrollToBottom();
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Chat toggle button */}
      <button
        onClick={toggleChat}
        className="fixed bottom-5 right-5  text-white p-3 rounded-full shadow-lg" style={{ backgroundColor: '#008080' }}
      >
        {isOpen ? "Close Chat" : "Chat"}
      </button>

      {/* Chat popup window */}
      {isOpen && (
        <div
          className="w-80 h-96 bg-white border border-gray-300 rounded-lg shadow-lg p-4 fixed bottom-20 right-5 flex flex-col"
          style={{ zIndex: 9999 }} // Add a high z-index value here
        >
          <div className="text-white p-2 flex justify-between items-center" style={{ backgroundColor: '#008080' }}>
            <h2 className="text-lg">Chat with Guide</h2>
            <button className="text-white" onClick={toggleChat}>
              &#x2715; {/* Close icon */}
            </button>
          </div>

          <div
            className="flex-grow overflow-y-auto mt-3 mb-4"
            ref={messageContainerRef}
          >
            {selectedChat?.map((message, index) => (
              <div
                className={`flex flex-col mb-3 ${
                  message?.senderModel === "traveler"
                    ? "items-end"
                    : "items-start"
                }`}
                key={index}
              >
                <div
                  className={`p-2 rounded-md ${
                    message?.senderModel === "traveler"
                      ? "text-white"
                      : "bg-gray-200 text-black"
                  }`}
                  style={{
                    backgroundColor: message?.senderModel === "traveler" ? '#008080' : undefined,
                  }}
                >
                  <div className="text-xs font-bold">
                    {message?.senderModel === "traveler" ? "You" : "tourGuide"}
                  </div>
                  <div>{message?.message}</div>
                  <div className="text-xs text-gray-200 mt-1">
                    {formatTimestamp(message?.timestamp)}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="p-2">
            <MessageInput onSend={handleSendMessage} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatPopup;
