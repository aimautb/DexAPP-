const hre = require("hardhat");
async function main() {

const tokens = ["aiMAUT", "STM", "GMT", "MNT", "CFT"];
for (const name of tokens){
const Token = await hre.ethers.getContractFactory(name);
const token = await Token.deploy();
await token.waitForDeployment();
const address = await token.getAddress();
console.log(`${name} deployed to:`, address);
}}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
