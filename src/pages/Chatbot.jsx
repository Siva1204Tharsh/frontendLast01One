// import React, { useEffect, useState } from 'react';
// import io from 'socket.io-client';
// // import {Button, Link} from 'react-router-dom';

// const socket = io('http://localhost:5000');

// const Chatbot = () => {
//   const [messages, setMessages] = useState([]);
//   const [message, setMessage] = useState('');

//   useEffect(() => {
//     socket.on('message', (message) => {
//       setMessages((prevMessages) => [...prevMessages, message]);
//     });

//     return () => {
//       socket.off('message');
//     };
//   }, []);

//   const sendMessage = () => {
//     const msg = { content: message, sender: 'User' };
//     socket.emit('message', msg);
//     setMessage('');
//   };

//   return (
//     <div>
//       <h1>Chatbot</h1>
//       <div id="chatbox">
//         {messages.map((msg, index) => (
//           <div key={index}>{msg.content}</div>
//         ))}
//       </div>
//       <input
//         type="text"
//         value={message}
//         onChange={(e) => setMessage(e.target.value)}
//         placeholder="Type a message..."
//       />
//       <button onClick={sendMessage} 
//       className="bg-gray-800 text-center hover:bg-gray-600 text-white font-bold py-2 px-4 rounded cursor-pointer lg:mt-0 mt-3"
//       >Send</button>
//     </div>
//   );
// };

// export default Chatbot;