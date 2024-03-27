import React, { useState } from 'react';
import "./message.css"

const MessagingApp = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [recipient, setRecipient] = useState('');

  const sendMessage = () => {
    if (newMessage.trim() !== '' && recipient.trim() !== '') {
      const newMessageObj = {
        sender: 'You',
        recipient: recipient,
        content: newMessage,
      };

      setMessages([...messages, newMessageObj]);
      setNewMessage('');
    }
  };

  return (
    <div>
      <h1>Messaging App</h1>

      <div>
        <label htmlFor="recipient">Recipient:</label>
        <input
          type="text"
          id="recipient"
          value={recipient}
          onChange={(e) => setRecipient(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="newMessage">Message:</label>
        <input
          type="text"
          id="newMessage"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button onClick={sendMessage}>Send</button>
      </div>

      <div>
        <h2>Messages</h2>
        <ul>
          {messages.map((message, index) => (
            <li key={index}>
              <strong>{message.sender}:</strong> {message.content} (To:{' '}
              {message.recipient})
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MessagingApp;
