## Configurations

The folder structure: `config/client/`, `config/server/`, and `config/sdk/`
```plaintext
config/
│
├── client/
│   ├── config.ts
│   └── ...
│
├── server/
│   ├── config.ts
│   └── ...
│
└── sdk/
    ├── config.ts
    └── ...
```

- **`config/client/`**: This directory contains configuration files specific to the client application. You can store settings related to the client's behavior, MailStream API endpoints, or any other client-specific configurations in `config.ts` or other configuration files in this directory.

- **`config/server/`**: MailStream project includes a server component (e.g., a backend server), you can store server-specific configurations in this directory. This might include database connection settings, server ports, authentication configurations, and other settings relevant to the server.

- **`config/sdk/`**: Configuration files specific to MailStream SDK can be stored in this directory. For example, you can include settings related to the Solana blockchain network, wallet credentials, and other configurations needed for the SDK to interact with Solana and MailStream.

### Usage in Code:

- In MailStream code files, you can import the specific configuration settings you need by using the appropriate import path. For instance, if you're working on a client-related feature, you can import settings from `config/client/config.ts` like this:

```typescript
import { apiEndpoint } from '../../config/client/config';

// Use apiEndpoint in your client code
```

Likewise, if you're working on SDK-related code, you can import settings from `config/sdk/config.ts` in a similar manner.

This structured approach to configuration management helps keep settings organized, prevents naming conflicts, and makes it easier to maintain and update configuration values when necessary.