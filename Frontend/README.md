<h1 align="center">Frontend React</h1>

## How to Run the Project

Follow these steps to set up and run the project:

### 1. Navigate to the Frontend Directory

First, change to the `Frontend` directory:

```bash
cd Frontend
```

### 2. Install Yarn (if not already installed)

> If you don't have Yarn installed, you can install it globally via npm:

```bash
npm install -g yarn
```

### 3. Install Dependencies

Open the integrated terminal in your IDE and run the following command to install the project’s dependencies:

```bash
yarn install
```

### 4. Set Up Environment Variables

Duplicate the `example.env` file and rename the duplicated file to `.env.local.` This file will be used to store environment variables for your project.

### 5. Obtain Google OAuth Client ID and Secret

To obtain the OAuth client ID and secret, follow these steps:

- Go to the `Google Cloud Console`.
- Create a `new project` or select an `existing project`.
- Navigate to the `API & Services` section and then to Credentials.
- Click on `Create Credentials` and select `OAuth 2.0 Client IDs`.
- Configure the OAuth consent screen if prompted.
- Choose `Web application` as the application type.
- Under `Authorized redirect URIs`, add the redirect URI for your application.
- Click `Create`. Your client ID and client secret will be displayed.

### 6. Add OAuth Client ID and Secret

Add the obtained OAuth client ID and secret to the `.env.local` file with the following format:

```bash
VITE_GOOGLE_OAUTH_CLIENT_ID=your-client-id
VITE_GOOGLE_OAUTH_CLIENT_SECRET=your-client-secret
```

### 7. Start the Development Server

Run the following command to start the Vite development server:

```bash
yarn dev
```

### 8. Set Up the Backend API

Ensure that the backend API is properly configured to handle requests from the Google OAuth API. This setup is crucial for processing the OAuth authorization and redirecting users to the authorized redirect URI.

### Additional Notes

> Make sure to check the main project README for any additional setup instructions or configuration details.
