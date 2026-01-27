## Fixed DEX App (BC1 Final Project)

📌 **Project Overview**  
This project is a Fixed Price Decentralized Exchange (DEX) developed as a final assignment for the Blockchain 1 (BC1) course.  
The application allows users to swap ERC20 tokens at a fixed exchange rate, without using AMM mechanisms like Uniswap or liquidity pools with dynamic pricing.

🧠 **What is a Fixed DEX?**  
A Fixed DEX is a decentralized exchange where token prices are predefined and do not change based on supply and demand.  
Example:
1 aiMAUT = 230 COFFEE
textUnlike AMM-based DEXs:  
* ❌ No constant product formula  
* ❌ No price slippage  
* ❌ No dynamic pools  
* ✅ Simple and predictable exchange rate  

🏗️ **Project Architecture**  
The project consists of the following main components:  

* **ERC20 Token (aiMAUT)**  
  * Custom token created using OpenZeppelin  
  * Used as the base token for exchange  

* **Fixed DEX Smart Contract**  
  * Handles token swaps at a fixed rate  
  * Uses transferFrom and allowance mechanism  
  * Stores liquidity inside the contract  

* **Hardhat Environment**  
  * Smart contract development and testing  
  * Local blockchain for development  

📁 **Project Structure**
DexApp-/
├── contracts/
│ ├── aiMAUT.sol // ERC20 token (to be implemented)
│ └── FixedDex.sol // Fixed DEX contract (to be implemented)
├── test/
├── ignition/
├── hardhat.config.js
├── package.json
└── README.md
text🔄 **Swap Logic (Planned)**  
1. User approves token allowance to the DEX contract  
2. User calls swap() function  
3. Smart contract calculates output using fixed rate  
4. Tokens are transferred between user and DEX  

💼 **Business Model**  
The project can generate revenue through:  
* Swap fees (e.g. 0.3%)  
* Fixed spread between token prices  
* Token issuance for partner projects  
* Centralized control of fixed-rate liquidity  

🚀 **Current Status**  
*  Hardhat project initialized  
*  GitHub repository connected  
*  ERC20 token implemented  
*  Fixed DEX contract implemented  
*  Token swap deployed and tested  

🧪 **Tools & Technologies**  
* Solidity  
* Hardhat  
* OpenZeppelin Contracts  
* Ethers.js  
* MetaMask
