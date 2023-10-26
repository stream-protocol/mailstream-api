import { Wallet, Connection, Transaction, PublicKey } from 'solana-web3.js';

class SolanaService {
  private connection: Connection;
  private wallet: Wallet;

  constructor(wallet: Wallet, solanaEndpoint: string) {
    this.wallet = wallet;
    this.connection = new Connection(solanaEndpoint, 'confirmed');
  }

  async sendPayment(recipientAddress: string, amountLamports: number): Promise<string> {
    try {
      // Parse recipient's public key
      const recipientPublicKey = new PublicKey(recipientAddress);

      // Create a transaction
      const transaction = new Transaction().add(
        SystemProgram.transfer({
          fromPubkey: this.wallet.publicKey,
          toPubkey: recipientPublicKey,
          lamports: amountLamports,
        })
      );

      // Sign the transaction
      transaction.recentBlockhash = (
        await this.connection.getRecentBlockhash('max')
      ).blockhash;
      transaction.sign(this.wallet);

      // Send the transaction
      const transactionSignature = await this.connection.sendTransaction(transaction, [
        this.wallet,
      ]);

      return transactionSignature;
    } catch (error) {
      throw new Error(`Failed to send payment: ${error.message}`);
    }
  }

  async getBalance(): Promise<number> {
    try {
      const balance = await this.connection.getBalance(this.wallet.publicKey);
      return balance;
    } catch (error) {
      throw new Error(`Failed to get balance: ${error.message}`);
    }
  }
}

export default SolanaService;
