const hre = require("hardhat");

async function main() 
{const MiniAMM = await hre.ethers.getContractFactory("MiniAMM");
const amm = await MiniAMM.deploy();
await amm.waitForDeployment();
const address = await amm.getAddress();
console.log("MiniAMM deployed to:", address);}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;});
