<h1 align="center">Backend</h1>

## How to Run the Backend with a Node.js API

Follow these steps to set up and run the backend Node.js API for the React project:

### 1. Navigate to the Backend Directory

Change to the `Backend` directory:

```bash
cd Backend
```

### 2. Ensure Node.js and Yarn Are Installed

Make sure you have Node.js and Yarn installed on your system. If not, you can install them as follows:

- Node.js: `Download and Install Node.js`
- Yarn: If you don’t have `Yarn` installed
  > you can install it globally via npm:

```bash
npm install -g yarn
```

### 3. Install Dependencies

Run the following command to install all the required dependencies:

```bash
yarn install
```

### 4. Set Up Environment Variables

Duplicate the `example.env` file and rename the copied file to `.env`. This file will be used to store environment variables for your project.

### 5. Add OAuth Credentials

Add the Google OAuth2 client ID and secret to the `.env` file with the following format:

```bash
GOOGLE_OAUTH_CLIENT_ID=your-client-id
GOOGLE_OAUTH_CLIENT_SECRET=your-client-secret
```

### 6. Push Prisma Schema

Run the following command to push the Prisma schema to the SQLite database:

```bash
npx prisma db push
```

### 7. Start the Express Server

Start the Express server by running:

```bash
yarn start
```

### 8. Interact with the Node.js API

Once the server is running, you can interact with the Node.js API from the React app. Ensure that the API endpoints are properly configured and accessible from the frontend.

### Additional Notes

> Make sure to check the main project README for any additional setup instructions or configuration details.
