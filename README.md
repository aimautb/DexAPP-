# 🔄 Mini AMM DEX - Automated Market Maker

> A simplified decentralized exchange built for educational purposes as part of the Blockchain 1 (BC1) course

## 📌 Project Overview

This project is a **Mini Automated Market Maker (AMM) Decentralized Exchange** that demonstrates core DeFi concepts. The DEX allows users to:

- 🔁 Swap ERC20 tokens using an AMM pricing model
- 💧 Provide liquidity to a token pair
- 💰 Earn fees from swaps proportionally to their liquidity share

Unlike a Fixed DEX, this project demonstrates **dynamic pricing based on token reserves**.

---

## 🧠 What is a Mini AMM?

A Mini AMM is a simplified version of popular AMM-based DEXs (like Uniswap), designed for educational purposes.

### 🔁 Core Formula

The exchange rate is calculated using the **constant product formula**:

```
x * y = k
```

Where:
- **x** = reserve of Token A
- **y** = reserve of Token B
- **k** = constant value

### Key Characteristics

✅ Dynamic price based on supply & demand  
✅ Liquidity pool instead of fixed prices  
✅ Swap fees rewarded to liquidity providers  
❌ No order book  
❌ No centralized price control

---

## 🏗️ Project Architecture

### 🔹 ERC20 Tokens
- Two ERC20 tokens used for swapping (example: `aiMAUT` & `COFFEE`)
- Implemented using OpenZeppelin Contracts
- Standard ERC20 functionality

### 🔹 Mini AMM DEX Smart Contract
- Manages liquidity pools
- Executes swaps using `x * y = k`
- Collects swap fees
- Tracks liquidity providers

### 🔹 Development Environment
- Built and tested using **Hardhat**
- Local blockchain for fast testing

---

## 📁 Project Structure

```
DexApp/
├── contracts/
│   ├── TokenA.sol          // ERC20 Token A
│   ├── TokenB.sol          // ERC20 Token B
│   └── MiniAMM.sol         // AMM DEX contract
├── test/
│   └── MiniAMM.test.js     // Test suite
├── ignition/
├── hardhat.config.js
├── package.json
└── README.md
```

---

## 🔄 AMM Swap Logic

1️⃣ User provides liquidity (Token A + Token B)  
2️⃣ Liquidity is stored inside the AMM contract  
3️⃣ User calls `swap()`  
4️⃣ Smart contract:
   - Calculates output using AMM formula
   - Applies swap fee
   - Updates pool reserves  
5️⃣ Tokens are transferred automatically

---

## 💧 Liquidity Provider (LP) Logic

- Users deposit both tokens in a fixed ratio
- In return, they receive **LP shares**
- LPs earn:
  - Swap fees
  - Proportional ownership of the pool
- Liquidity can be withdrawn at any time

---

## 💼 Business Model

The Mini AMM DEX can generate value through:

- 💵 Swap fees (e.g. 0.3%)
- 🎁 Incentives for liquidity providers
- 🔗 Token pair onboarding
- 📚 Educational / testnet deployments

---

## 🚀 Current Status

✅ Hardhat project initialized  
✅ ERC20 tokens deployed  
✅ Mini AMM smart contract implemented  
✅ Liquidity pool working  
✅ Swap logic tested  
✅ Fee mechanism implemented

---

## 🧪 Tools & Technologies

| Technology | Purpose |
|-----------|---------|
| **Solidity** | Smart contract development |
| **Hardhat** | Development environment |
| **OpenZeppelin** | ERC20 token standards |
| **Ethers.js** | Blockchain interaction |
| **MetaMask** | Wallet integration |

---

## 📚 Educational Purpose

This project is built strictly for **learning purposes** as part of the BC1 course. It demonstrates core DeFi concepts:

- ⚙️ AMM mechanics
- 💧 Liquidity pools
- 🔁 Token swaps
- 🤝 Smart contract interactions

---

## 🛠️ Getting Started

### Prerequisites

```bash
node >= 14.0.0
npm >= 6.0.0
```

### Installation

```bash
# Clone the repository
git clone <your-repo-url>

# Navigate to project directory
cd DexApp

# Install dependencies
npm install
```

### Running Tests

```bash
npx hardhat test
```

### Deploy to Local Network

```bash
npx hardhat node
npx hardhat run scripts/deploy.js --network localhost
```

---

## 📄 License

This project is for educational purposes only.

---

## 👥 Contributors

Developed as part of the **Blockchain 1 (BC1)** course final assignment.

---

## 🙏 Acknowledgments

- OpenZeppelin for secure smart contract libraries
- Uniswap for AMM inspiration
- Hardhat team for excellent development tools
