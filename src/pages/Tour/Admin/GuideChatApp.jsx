
import React, { useEffect, useRef, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import MessageInput from "../../../components/sections/MessageInput";
import socket from "../../../utils/socketService";
import axios from "axios";
import { toast } from "react-toastify";
import avatar from "../../../assets/images/ava-1.jpg"; // Adjust the path accordingly
import { BASE_URL } from "../../../utils/config";


const formatTimestamp = (date) => {
  const datePart = new Date(date).toLocaleDateString([], { month: '2-digit', day: '2-digit' });
  const timePart = new Date(date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true }).toLowerCase();
  return `${datePart} - ${timePart}`;
};

const GuideChatApp = () => {

  const [userData, setUserData] = useState(null);
  const [chats, setChats] = useState([]);
  const [selectedChat, setSelectedChat] = useState([]);
  const [receivers, setReceivers] = useState([]);
  const [selectedReceiver, setSelectedReceiver] = useState(null);
  const [filteredReceivers, setFilteredReceivers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const messageContainerRef = useRef(null);

  const scrollToBottom = () => {
    if (messageContainerRef.current) {
      messageContainerRef.current.scrollTop = messageContainerRef.current.scrollHeight;
    }
  };

//   // Fetch Customer Details
//   useEffect(() => {
//     const fetchCustomerDetails = async () => {
//       try {
//         const response = await axios.get(`${process.env.api_base_url}/customers`, { withCredentials: true });
//         if (response.data && Array.isArray(response.data)) {
//           setReceivers(response.data);
//           setFilteredReceivers(response.data);
//           if (response.data.length === 0) {
//             toast.info("No Customers data available");
//           }
//         } else {
//           toast.error("Error fetching Customer details");
//         }
//       } catch (error) {
//         console.error("Error fetching customer details:", error);
//         toast.error("Error fetching Customer details");
//       }
//     };

//     fetchCustomerDetails();
//   }, []);

//    // Fetch User Info
//    useEffect(() => {
//     const fetchUserInfo = async () => {
//       try {
//         const response = await axios.get(`${process.env.api_base_url}/users/currentuser`, { withCredentials: true });
//         if (response.status === 200) {
//           setUserData(response.data);
//         }
//       } catch (error) {
//         console.error("Error fetching user info:", error);
//       }
//     };

//     fetchUserInfo();
//   }, []);

  // Fetch Chat History
  useEffect(() => {
    const fetchChatHistory = async () => {
      if (userData && selectedReceiver) {
        try {
          const response = await axios.get(
            `${BASE_URL}/chat/${userData._id}/traveler/66ae207e9c65e169f36d0014/tourGuide`
          );
          setSelectedChat(response.data);
        } catch (error) {
          console.error("Error fetching chat history:", error);
        }
      }
    };

    fetchChatHistory();
  }, [userData, selectedReceiver]);

  // Socket listener for new messages
  useEffect(() => {
    // Listen for incoming messages
    socket.on("newMessage", (message) => {
      // Check if the message is intended for this guide
      if (message.receiver === "66ae207e9c65e169f36d0014") { // Adjust the condition based on your logic
        setSelectedChat((prevChat) => [...prevChat, message]);
      }
    });
  
    return () => {
      socket.off("newMessage");
    };
  }, []); // Make sure this only runs once

  useEffect(() => {
    scrollToBottom();
  }, [selectedChat]);

  const handleSendMessage = async (message) => {
    if (!selectedReceiver) return;
    const newMessage = {
    //   senderId: userData?._id,
    //   senderModel: "User",
    //   receiverId: selectedReceiver?._id,
    //   receiverModel: "Customer",
    //   message,
    sender: "66ae1fc246ed1e5b26def522", // Use dynamic sender ID
      senderModel: "traveler",
      receiver: "66ae207e9c65e169f36d0014", // Replace with actual receiver ID as needed
      receiverModel: "tourGuide",
      message,
    };
    try {
        await axios.post(`${BASE_URL}/chat`, newMessage);
        setSelectedChat((prevChat) => [
        ...prevChat,
        {
          ...newMessage,
          sender: "Me",
        },
      ]);
      scrollToBottom();
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);
    setFilteredReceivers(
      receivers.filter((receiver) =>
        `${receiver?.fname} ${receiver?.lname}`.toLowerCase().includes(query)
      )
    );
  };

 

    return (
        <div className="container-fluid Communication-section p-5">
  <div className="flex flex-row">
    <div className="w-2/3">
      <div className="box-1 bg-[#ecf6fd] rounded-lg p-4">
        {selectedReceiver ? (
          <div>
            <div
              className="flex items-center gap-2 rounded p-1"
              style={{ backgroundColor: "var(--primary-color)" }}
            >
              <img
                src={
                  selectedReceiver?.profilePic || avatar
                }
                alt="Profile Picture"
                className="rounded-full w-12 h-12"
              />
              <h4 className="m-0 text-white">
                {selectedReceiver ? `${selectedReceiver?.fname} ${selectedReceiver?.lname}` : ""}
              </h4>
            </div>
            <div
              className="message-container message-overflow-container flex flex-col gap-2 overflow-y-auto max-h-[50vh] p-4"
              ref={messageContainerRef}
            >
              {selectedChat?.map((message, index) => (
                <div
                  className={`message flex flex-col max-w-[75%] p-2 rounded-lg ${
                    message?.senderModel === "User"
                      ? "self-end bg-blue-500 text-white"
                      : "self-start bg-[#ced5e4] text-gray-800"
                  }`}
                  key={index}
                >
                  <div className="sender-info font-bold text-xs">
                    {message?.senderModel === "User" ? "You" : `${selectedReceiver?.fname}`}
                  </div>
                  <div>{message.message}</div>
                  <div
                    className={`timestamp flex justify-end text-xs ${
                      message.senderModel === "User"
                        ? "text-white"
                        : "text-gray-500"
                    }`}
                  >
                    {formatTimestamp(message?.timestamp)}
                  </div>
                </div>
              ))}
            </div>
            <MessageInput onSend={handleSendMessage} />
          </div>
        ) : (
          <div>
            <h4 className="text-center rounded p-2" style={{ backgroundColor: '#008080' }}>
              Welcome to Message Section
            </h4>
          </div>
        )}
      </div>
    </div>
    <div className="w-1/3">
      <div className="box-2 bg-[#008080] text-white rounded-lg p-4">
        <h3 className="text-white font-semibold uppercase">Chats</h3>
        <hr className="border-white" />
        <div className="mb-3 relative">
          <form>
            <input
              className="form-control bg-[#008080] text-white border border-white p-2 rounded w-full placeholder-gray-400"
              type="text"
              placeholder="Search Customer"
              value={searchQuery}
              onChange={handleSearch}
            />
            <div className="search-icon absolute right-4 top-1/2 transform -translate-y-1/2 text-white">
              <SearchIcon />
            </div>
          </form>
        </div>
        <div className="receiver-list message-overflow-container flex flex-col gap-2 overflow-y-auto max-h-[50vh]">
          {filteredReceivers?.map((receiver) => (
            <div
              className="receiver-item cursor-pointer p-2 border-b border-white hover:bg-[#4aeaea] rounded"
              key={receiver?._id}
              onClick={() => setSelectedReceiver(receiver)}
            >
              <div className="font-bold">
                {receiver?.fname} {receiver?.lname}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
</div>

    );
};

export default GuideChatApp;
