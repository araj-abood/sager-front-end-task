Sager Task
A rushly made but made with love project! 💖
Overview
This application integrates with Mapbox for mapping functionality and uses WebSocket connections for real-time communication.
Prerequisites

Node.js and npm installed on your system
A valid Mapbox access token

Installation & Setup

1. Install Dependencies
   bashnpm install
2. Environment Configuration
   Create a .env file in the root directory of the project and add your Mapbox access token:
   envVITE_MAPBOX_ACCESS_TOKEN=<your_mapbox_access_token>
   Important: Make sure to replace <your_mapbox_access_token> with a valid Mapbox access token. You can get one by:

Creating an account at mapbox.com
Going to your account's access tokens page
Creating a new token or using your default public token

3. WebSocket Server
   Ensure the Sager WebSocket server is running on port 9013. The application depends on this connection for proper functionality.
   Running the Application
   After completing the setup steps above:

Make sure your WebSocket server is running on port 9013
Start the application with your preferred development command (typically npm run dev or npm start)

Notes

This project was made with love, even if it was done rushly!
Ensure all dependencies are properly installed before running
Double-check that your Mapbox token is valid and properly set in the .env file
The WebSocket connection on port 9013 is essential for the application to function correctly

Troubleshooting

If the map doesn't load, verify your Mapbox access token is correct
If real-time features aren't working, check that the WebSocket server is running on port 9013
Make sure the .env file is in the root directory and properly formatted
