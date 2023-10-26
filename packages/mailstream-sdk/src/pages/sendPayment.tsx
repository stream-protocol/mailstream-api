import React, { useState } from 'react';

interface SendPaymentProps {
  wallet: SolanaWallet; // Define your wallet type
}

const SendPayment: React.FC<SendPaymentProps> = ({ wallet }) => {
  const [recipientAddress, setRecipientAddress] = useState('');
  const [amount, setAmount] = useState('');
  const [transactionStatus, setTransactionStatus] = useState('');

  const handleSendPayment = async () => {
    try {
      // Validate recipientAddress and amount inputs

      // Send the payment using the wallet's sendPayment function
      const transactionSignature = await wallet.sendPayment(
        recipientAddress,
        parseInt(amount, 10) // Convert to an integer
      );

      setTransactionStatus(`Payment sent. Transaction ID: ${transactionSignature}`);
    } catch (error) {
      setTransactionStatus(`Error: ${error.message}`);
    }
  };

  return (
    <div>
      <h2>Send Payment</h2>
      <div>
        <label>Recipient Address:</label>
        <input
          type="text"
          value={recipientAddress}
          onChange={(e) => setRecipientAddress(e.target.value)}
        />
      </div>
      <div>
        <label>Amount (Lamports):</label>
        <input
          type="text"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <button onClick={handleSendPayment}>Send Payment</button>
      <div>{transactionStatus}</div>
    </div>
  );
};

export default SendPayment;
