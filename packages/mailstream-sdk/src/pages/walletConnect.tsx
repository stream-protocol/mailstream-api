const {
    Connection,
    PublicKey,
    Transaction,
    SystemProgram,
    sendAndConfirmTransaction,
  } = require('@solana/web3.js');
  
  const solanaConnection = new Connection('https://api.mainnet-beta.solana.com'); 
  
  const wallet = {
    publicKey: new PublicKey('YOUR_PUBLIC_KEY'), // Replace with your public key
    privateKey: null, // Replace with your private key (if available)
  };
  
  async function checkWalletBalance() {
    try {
      const balance = await solanaConnection.getBalance(wallet.publicKey);
      return balance;
    } catch (error) {
      throw new Error(`Error checking wallet balance: ${error.message}`);
    }
  }
  
  async function sendPaymentToMailStream(recipientAddress, amountLamports) {
    try {
      // Check wallet balance before proceeding
      const balance = await checkWalletBalance();
      if (balance < amountLamports) {
        throw new Error('Insufficient balance in the wallet');
      }
  
      const transaction = new Transaction().add(
        SystemProgram.transfer({
          fromPubkey: wallet.publicKey,
          toPubkey: new PublicKey(recipientAddress),
          lamports: amountLamports,
        })
      );
  
      if (wallet.privateKey) {
        transaction.sign(new Uint8Array([wallet.privateKey]));
      }
  
      const signature = await sendAndConfirmTransaction(
        solanaConnection,
        transaction
      );
  
      console.log(`Payment successful. Transaction ID: ${signature}`);
  
      return signature;
    } catch (error) {
      console.error('Error sending payment:', error.message);
      throw error;
    }
  }
  
  async function main() {
    try {
      const recipientAddress = 'MAILSTREAM_RECIPIENT_ADDRESS';
      const amountLamports = 1000000; // Adjust as needed
      const walletBalance = await checkWalletBalance();
  
      console.log(`Wallet balance: ${walletBalance} lamports`);
  
      if (walletBalance < amountLamports) {
        console.error('Insufficient balance for the payment');
      } else {
        const transactionSignature = await sendPaymentToMailStream(
          recipientAddress,
          amountLamports
        );
        // Handle success and perform any additional actions
      }
    } catch (error) {
      // Handle errors
      console.error('Error:', error.message);
    }
  }
  
  main();
  