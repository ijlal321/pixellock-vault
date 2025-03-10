# PixelLock Vault Documentation

## Introduction
PixelLock Vault is a decentralized photo storage application that ensures your photos remain permanently available and securely encrypted. Unlike IPFS, PixelLock Vault guarantees continuous accessibility while maintaining top-tier security. Additionally, the platform features a family sharing system, allowing families to share and view photos seamlessly.

## Video Demo 
[![Watch the video](https://img.youtube.com/vi/7glBgRkY270/maxresdefault.jpg)](https://youtu.be/7glBgRkY270)

## Improtant Note (Cors Unblocker): 
We want our project to have all api requests directly from client browser, thus no need to rely on a centralized server.
But sending request from browser to Autonomous network is blocked by CORS. 

### Temporary Solution: 
Using a CORS Un-Blocker.

### Permanent Solution (Next step):
We would **host a dedicated server** for our project1, thus request would go from client browser to our server to autonomous network (No CORS issues there). Or would try to fix issue with cors. For now, use CORS unblock.


## Installation and Setup
### Prerequisites
Ensure you have the following installed on your system:
- Node.js and npm
- Git
- **A Cors Un-Blocking Extension**

### Steps to Run the Project
1. Clone the repository:
   ```sh
   git clone https://github.com/ijlal321/pixellock-vault
   ```
2. Navigate into the project directory:
   ```sh
   cd pixellock-vault
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Create an `.env` file in the root directory and add your API key:
   ```sh
   VITE_AUTO_DRIVE_API_KEY=your_api_key_here
   ```
5. Start the development server:
   ```sh
   npm run dev
   ```

## Features
- **Permanent Photo Storage**: Unlike traditional storage solutions, your photos remain accessible forever.
- **Decentralized Security**: Photos are encrypted and stored securely, preventing unauthorized access.
- **Family Sharing**: A dedicated system for families to view and share their pictures effortlessly.
- **Reliable and Always Available**: Ensures continuous availability without relying on centralized servers.

## Contributing
If you want to contribute to PixelLock Vault, feel free to fork the repository, make changes, and submit a pull request.

## License
This project is licensed under the [MIT License](LICENSE).

For any issues or questions, please open an issue on the [GitHub repository](https://github.com/ijlal321/pixellock-vault/issues).

