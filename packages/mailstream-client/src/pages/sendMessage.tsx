import React, { useState } from 'react';

interface SendMessageProps {
  wallet: SolanaWallet; // Define your wallet type
}

const SendMessage: React.FC<SendMessageProps> = ({ wallet }) => {
  const [recipient, setRecipient] = useState('');
  const [subject, setSubject] = useState('');
  const [messageBody, setMessageBody] = useState('');
  const [messageStatus, setMessageStatus] = useState('');

  const handleSendMessage = async () => {
    try {
      // Validate recipient, subject, and message inputs

      // Compose the message object
      const message = {
        to: recipient,
        subject,
        body: messageBody,
      };

      // Send the message using the wallet's sendMessage function
      const response = await wallet.sendMessage(message);

      setMessageStatus('Message sent successfully.');
    } catch (error) {
      setMessageStatus(`Error: ${error.message}`);
    }
  };

  return (
    <div>
      <h2>Send Message</h2>
      <div>
        <label>Recipient:</label>
        <input
          type="text"
          value={recipient}
          onChange={(e) => setRecipient(e.target.value)}
        />
      </div>
      <div>
        <label>Subject:</label>
        <input
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
      </div>
      <div>
        <label>Message:</label>
        <textarea
          value={messageBody}
          onChange={(e) => setMessageBody(e.target.value)}
        />
      </div>
      <button onClick={handleSendMessage}>Send Message</button>
      <div>{messageStatus}</div>
    </div>
  );
};

export default SendMessage;
