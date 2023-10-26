## MailStream SDK Developer Instructions

About the contents of specific files within `mailstream-sdk` package. The purpose and potential contents of each of these files:

1. **`mailstream-sdk/src/mailstream.ts`**:
   - This file contains the core functionality related to the MailStream integration, such as sending messages and handling message encryption.
   - It define a class or a set of functions for interacting with the MailStream API.
   - The file could include logic for composing, formatting, and sending messages via MailStream.

2. **`mailstream-sdk/src/index.ts`**:
   - The `index.ts` file typically serves as the main entry point for MailStream SDK package.
   - It export classes, functions, or objects that you want to make accessible to users of your SDK.
   - It can serve as a convenient way for users to import and access SDK features.

3. **`mailstream-sdk/src/solana.ts`**:
   - This file is responsible for the Solana blockchain integration within MailStream SDK.
   - It´s define classes or functions for interacting with Solana, such as sending transactions or querying blockchain data.
   - It´s include logic for handling Solana wallet and transaction-related operations.

4. **`mailstream-sdk/src/sns.ts`**:
   - This file is focused on the Solana Name Service (SNS) integration within MailStream SDK.
   - It´s contain functions or classes for registering names, transferring ownership, resolving names to addresses, and managing associated metadata for names.

5. **`mailstream-sdk/src/utils.ts`**:
   - Utility functions that are commonly used throughout MailStream SDK can be placed in this file.
   - These functions can include generic helper methods that are used across different parts of your SDK.
   - Organizing utility functions in a separate file enhances code modularity and reusability.

### An example of how these files might be structured:

```typescript
// mailstream-sdk/src/mailstream.ts
export class MailStream {
  constructor(apiKey: string) {
    // Initialize MailStream with the API key
  }

  sendMessage(recipient: string, message: string): Promise<void> {
    // Send a message via MailStream
  }

  // Other MailStream-related methods
}

// mailstream-sdk/src/solana.ts
import { Wallet } from 'solana-web3.js';

export class SolanaService {
  constructor(private wallet: Wallet, private solanaEndpoint: string) {
    // Initialize SolanaService with the wallet and endpoint
  }

  sendTransaction(recipient: string, amountLamports: number): Promise<string> {
    // Send a transaction on the Solana blockchain
  }

  // Other Solana-related methods
}

// mailstream-sdk/src/sns.ts
export class SnsService {
  constructor() {
    // Initialize SnsService
  }

  registerName(name: string, owner: string): Promise<void> {
    // Register a name on Solana Name Service
  }

  // Other SNS-related methods
}

// mailstream-sdk/src/utils.ts
export function formatDate(timestamp: number): string {
  // Utility function to format timestamps
}

export function encryptMessage(message: string, publicKey: string): string {
  // Utility function to encrypt a message
}
```
 `index.ts` file in the `mailstream-sdk/src/` exporting components and pages in addition to the core functionality and utility functions. This can be a helpful organization if SDK includes components and pages that users may want to incorporate into their applications.

A summary of what is exported from `index.ts` file:

1. **Core SDK Functionality**:
   - Everything from `mailstream.ts`, `solana.ts`, and `sns.ts`, which includes the core functionality of your SDK related to MailStream, Solana integration, and Solana Name Service.

2. **Components and Pages**:
   - Exporting components and pages from SDK. This can be beneficial when SDK provides user interface components and page templates that users can use in their applications. It allows users to easily import and integrate these components and pages into their projects.

3. **Utility Functions**:
   - Utility functions from `utils.ts` are still being exported, which is valuable for users who may need common utility functions.

Overall, making it convenient for users to access various aspects of our SDK, including its core features, UI components, and utility functions. It enhances the flexibility and usability of SDK in different application scenarios.