![DMarket Screenshot](https://github.com/user-attachments/assets/f4cc20da-e000-46d8-9661-9b88cc826814)

# DMarket – Decentralized Marketplace for Digital Items

**DMarket** is a **fully decentralized marketplace for digital items**, built as a personal project. It enables **peer-to-peer trading with no intermediaries**, powered by **self-executing smart contracts**. All payments, ownership transfers, and marketplace rules run automatically on-chain, ensuring **secure, transparent, and trustless transactions**.

---

## 🚀 Key Features

- **Digital-Only Marketplace:** Trade NFTs and other digital assets directly on the blockchain.  
- **Self-Executing Smart Contracts:** Transactions are automatically executed, eliminating the need for middlemen.  
- **Decentralized Storage via Pinata:** Item images and metadata are securely stored on **IPFS**.  
- **Full Stack Web Application:** Frontend built with **Next.js** and **Tailwind CSS**, deployed on **Vercel**.  
- **Polygon Sepolia Testnet Deployment:** Smart contracts deployed and fully functional on Polygon.  

---

## 🛠 Tech Stack

| Layer               | Technology                          |
|---------------------|-------------------------------------|
| Blockchain          | Polygon (Sepolia Testnet)           |
| Smart Contracts     | Solidity, Hardhat                   |
| Frontend            | Next.js                             |
| Styling             | Tailwind CSS                        |
| Storage             | IPFS via Pinata                     |
| Deployment          | Vercel                              |

## 🛠 

### Smart Contracts – Solidity (EVM)
Used to build the automated escrow logic that handles listing, purchasing, and settlement without intermediaries. All marketplace rules are executed on-chain.

### Development Framework – Hardhat
Used for compiling, testing, debugging, and deploying the smart contracts. Provides a reliable local blockchain environment and scripts for deterministic deployment.

### Next.js (React Framework)
Used to build the frontend application, server-side rendering, and API routes for interacting with the marketplace. Ensures fast performance and structured routing for the user interface.

### Ethers.js
Used on the frontend to connect wallets, read contract state, send transactions, and listen to blockchain events in real time.

### IPFS via Pinata
Used to store all digital items and metadata in a decentralized and persistent way. Pinata ensures reliable pinning so assets remain accessible independently of centralized gateways.

---

## 📦 Smart Contract Addresses

- **NFT Marketplace Contract:** `0xD51e19965C173fE4AD0f7FD90ee237A1092eeA01`  
- **NFT Contract:** `0x579F744a59448ca9c25D5aDC61a85aF15676103F`  
- **Live Demo:** [DMarket on Sepolia Testnet](https://dmarket.vercel.app/)  

---

## 💡 Why DMarket Stands Out

1. **Trustless & Decentralized:** All transactions are enforced automatically by smart contracts.  
2. **No Middleman:** Users trade digital items directly and securely.  
3. **Decentralized Asset Storage:** IPFS via Pinata ensures asset integrity and availability.  
