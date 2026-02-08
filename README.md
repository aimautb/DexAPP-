# 🔄 Mini AMM DEX — aiMAUT Ecosystem

[![Ethereum](https://img.shields.io/badge/Ethereum-Sepolia-3C3C3D?logo=ethereum)](https://sepolia.etherscan.io/)
[![Solidity](https://img.shields.io/badge/Solidity-%5E0.8.0-363636?logo=solidity)](https://soliditylang.org/)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

> A simplified Automated Market Maker (AMM) decentralized exchange built for educational purposes as part of the **Blockchain 1 (BC1)** final project.

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Core Concept](#-core-concept)
- [Token Ecosystem](#-token-ecosystem)
- [Architecture](#-architecture)
- [Features](#-features)
- [Installation](#-installation)
- [Deployment](#-deployment)
- [Usage](#-usage)
- [Security](#-security)
- [Authors](#-authors)

---

## 🎯 Overview

This project demonstrates core **DeFi mechanics** through a functional AMM DEX deployed on Ethereum Sepolia testnet:

- ✅ ERC-20 token creation and deployment
- ✅ Liquidity pool management
- ✅ Automated price discovery using constant-product formula
- ✅ Token swaps without order books
- ✅ Frontend interaction via MetaMask

The system follows the **constant-product AMM model**, inspired by early versions of Uniswap.

---

## 🧠 Core Concept

### Automated Market Maker (AMM)

Unlike traditional exchanges with order books, this DEX uses an algorithmic pricing model:

```
x × y = k
```

**Where:**
- `x` = Reserve of Token A
- `y` = Reserve of Token B
- `k` = Constant value

When users swap tokens, reserves change and prices adjust automatically based on supply and demand.

### 🔁 Routing Through aiMAUT

All swaps are routed through **aiMAUT** (base liquidity token):

- **Direct swap:** `aiMAUT ↔ CFT`
- **Indirect swap:** `GMT → aiMAUT → STM`

**Benefits:**
- Reduces number of liquidity pools
- Concentrates liquidity
- Simplifies price discovery
- Mirrors real-world DEX routing (ETH/USDC as base assets)

---

## 🪙 Token Ecosystem

Five ERC-20 tokens simulate a realistic multi-asset environment:

| Token            | Symbol  | Description                    | Initial Supply |
|------------------|---------|--------------------------------|----------------|
| **aiMAUT Token** | aiMAUT  | Core base & routing token      | 1,000          |
| **Coffee Token** | CFT     | Low-value utility token        | 10,000         |
| **Music Token**  | MNT     | Music/streaming access         | 1,500          |
| **Game Token**   | GMT     | Early access to a game         | 200            |
| **Skin Token**   | STM     | In-game cosmetic items         | 300            |

### 🔒 Token Economics

- **Fixed supply** — Tokens minted only once during deployment
- **No additional minting** — Guarantees predictable economics
- **No burning mechanism** — Total supply remains constant

---

## 🏗️ Architecture

### Smart Contracts

```
contracts/
├── aiMAUT.sol          # Base routing token
├── CFT.sol             # Coffee Token
├── MNT.sol             # Music Token
├── GMT.sol             # Game Token
├── STM.sol             # Skin Token
└── MiniAMM.sol         # AMM core logic
```

### Frontend Structure

```
ui/
├── index.html          # Wallet connection page
├── swap.html           # Token swap interface
├── liquidity.html      # Add liquidity interface
├── js/
│   ├── wallet.js       # MetaMask integration
│   ├── swap.js         # Swap logic
│   ├── liquidity.js    # Liquidity management
│   └── navigation.js   # UI navigation
└── style/
    └── style.css       # Custom styling
```

### MiniAMM Contract Responsibilities

- 💧 Store liquidity reserves
- 🔄 Handle token swaps
- 💰 Apply 0.3% trading fee
- 📊 Provide reserve data for frontend

---

## ✨ Features

### Liquidity Management

- Users deposit `aiMAUT + another token`
- Tokens transferred to AMM contract
- Internal reserves updated
- Liquidity available for swaps

> ⚠️ **Note:** Liquidity removal not implemented (acceptable for educational purposes)

### Swap Mechanism

1. User sends `tokenIn` to AMM
2. Smart contract calculates output using reserves
3. 0.3% fee applied
4. Output tokens sent to user
5. Reserves updated

**Ensures:**
- No central control
- Automatic price adjustment
- Continuous liquidity

### Frontend Features

- 🔐 MetaMask authentication
- 🌐 Sepolia network validation
- 💳 Real-time token balance display
- 📈 Live reserve & price updates
- ✍️ Secure transaction signing

---

## 📦 Installation

### Prerequisites

- Node.js >= 16.x
- MetaMask browser extension
- Sepolia testnet ETH ([faucet](https://sepoliafaucet.com/))

### Setup

```bash
# Clone repository
git clone https://github.com/yourusername/mini-amm-dex.git
cd mini-amm-dex

# Install dependencies
npm install

# Configure environment
cp .env.example .env
# Add your private key and Infura/Alchemy API key
```

---

## 🚀 Deployment

### Compile Contracts

```bash
npx hardhat compile
```

### Deploy to Sepolia

```bash
npx hardhat run scripts/deploy.js --network sepolia
```

### Deployment Flow

1. Deploy 5 ERC-20 tokens
2. Deploy MiniAMM contract
3. Distribute tokens across wallets
4. Add initial liquidity
5. Test swaps via UI

---

## 💻 Usage

### 1. Connect Wallet

```javascript
// Open index.html
// Click "Connect MetaMask"
// Approve connection
```

### 2. Add Liquidity

```javascript
// Navigate to liquidity.html
// Select token pair (e.g., aiMAUT/CFT)
// Enter amounts
// Approve token spending
// Confirm transaction
```

### 3. Swap Tokens

```javascript
// Navigate to swap.html
// Select input/output tokens
// Enter amount
// Review price impact
// Confirm swap
```

---

## 🔐 Security

- ✅ Uses **OpenZeppelin** ERC-20 standard
- ✅ No Ether stored in contracts
- ✅ No admin backdoors
- ✅ No unlimited minting
- ✅ All state changes transparent on-chain

### Known Limitations

- No liquidity removal mechanism
- No slippage protection
- Simplified fee structure
- Educational use only

---

## 📊 Testing Strategy

### Token Distribution

- **Wallet 1:** Liquidity Provider (LP)
- **Wallet 2:** Regular User/Trader
- **Wallet 3:** Test account

Simulates real DeFi ecosystems with multiple participants.

---

## 🎓 Educational Value

This project demonstrates:

- ✅ How AMMs work internally
- ✅ Why liquidity pools are needed
- ✅ How prices form without order books
- ✅ How users interact with smart contracts via UI
- ✅ DeFi token economics

---

## ✅ BC1 Requirements Checklist

- [x] ERC-20 tokens implemented
- [x] Deployed to testnet (Sepolia)
- [x] Decentralized exchange logic
- [x] Dynamic pricing mechanism
- [x] Liquidity pool functionality
- [x] Frontend interaction (MetaMask)
- [x] Business logic documented

---

## 👥 Authors

**Nurtore Kaldybai** | **Bekdaulet Bolatov** | **Aimaut Bolatkhanuly**

Final Project for **Blockchain 1 (BC1)** course

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- OpenZeppelin for secure contract libraries
- Uniswap for AMM design inspiration
- Hardhat development environment
- Ethereum community

---

## 📞 Support

For questions or issues, please open an issue in the repository or contact the development team.

---

**Built with ❤️ for blockchain education**
