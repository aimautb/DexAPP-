const SEPOLIA_CHAIN_ID_DEC = 11155111;
const SEPOLIA_CHAIN_ID_HEX = "0xaa36a7";
const MINIAMM = "0x83fDA2340E809Acb0B68E52Aa09A5CDf75ABc3db";
const AIMAUT  = "0xe077631F0357c50c0c97A7C5016286e91A87aBE6";

const TOKENS = {aiMAUT: "0xe077631F0357c50c0c97A7C5016286e91A87aBE6",
STM:    "0x5dDc53639eB2132Bdd42D7369A28cd910DE3dd44",
GMT:    "0x101aCA02B96BcdC926f9eb917f56F08E322c7e44",
MNT:    "0xEa8C28d8879C7393DC9a9F798Bd93893fC4c1bbC",
CFT:    "0x2e40ac77A17cfBcEDdC1725f216A57b3C2B949af"};

const tokenSymbols = {[TOKENS.aiMAUT]: "aiMAUT",
[TOKENS.STM]: "STM",
[TOKENS.GMT]: "GMT",
[TOKENS.MNT]: "MNT",
[TOKENS.CFT]: "CFT"};

const miniAmmAbi = ["function addLiquidity(address tokenA, address tokenB, uint256 amountA, uint256 amountB)",
  "function swap(address tokenIn, address tokenOut, uint256 amountIn) returns (uint256)",
  "function getReserves(address tokenA, address tokenB) view returns (uint256,uint256)"];

const erc20Abi = ["function approve(address spender, uint256 amount) returns (bool)",
  "function balanceOf(address owner) view returns (uint256)",
  "function decimals() view returns (uint8)",
  "function symbol() view returns (string)"];

let provider = null;
let signer   = null;
let address  = null;

async function switchToSepolia() {
  try {
    await window.ethereum.request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId: SEPOLIA_CHAIN_ID_HEX }]
    });} catch (err) {

if (err.code === 4902) 
  {await window.ethereum.request({
    method: "wallet_addEthereumChain",
    params: [{chainId: SEPOLIA_CHAIN_ID_HEX,
          chainName: "Sepolia Test Network",
          rpcUrls: ["https://ethereum-sepolia-rpc.publicnode.com"],
          nativeCurrency: {
            name: "Sepolia ETH",
            symbol: "ETH",
            decimals: 18},
          blockExplorerUrls: ["https://sepolia.etherscan.io"]}]});} 
        else 
      {throw err;}}}


async function initWallet(silent = false) {
 if (!window.ethereum) 
  {if (!silent) alert("MetaMask not found");
  return false;}

  provider = new ethers.BrowserProvider(window.ethereum);

  try 
  {const network = await provider.getNetwork();
    if (Number(network.chainId) !== SEPOLIA_CHAIN_ID_DEC) {
      if (!silent) {
        const ok = confirm("You are not Sepolia network. Switch to Sepolia?");
        if (!ok) return false;}
      
      await switchToSepolia();}

    const accounts = await provider.send("eth_accounts", []);
    if (accounts.length === 0) {
      if (!silent) alert("MetaMask not connected");
      return false;
    }

  signer  = await provider.getSigner();
  address = await signer.getAddress();

  sessionStorage.setItem("wallet", address);
  return true;} 

  catch (e) 
  {console.error("initWallet error:", e);
  if (!silent) alert("Error of connection bratha " + e.message);
  return false;}}

async function connectWallet() {
  if (!window.ethereum) {
    alert("MetaMask not found");
    return;}

await window.ethereum.request({ method: "eth_requestAccounts" });
const ok = await initWallet(false);
  if (ok) updateUI();}

function updateUI()
  {const short = address
    ? address.slice(0, 6) + "…" + address.slice(-4): "";

document.querySelectorAll("#walletHeader, #walletInfo, #status")
  .forEach(el => 
    {if (el) el.innerText = short ? `👛 ${short}` : "";});

const connectBtn = document.getElementById("connectBtn");
if (connectBtn && address) {
    connectBtn.disabled = true;
    connectBtn.innerText = "Connected";}}
    
window.addEventListener("load", async () => 
  {await initWallet(true);
  updateUI();

if (window.ethereum) {
    window.ethereum.on("accountsChanged", () => location.reload());
    window.ethereum.on("chainChanged", () => location.reload());
  }});

window.initWallet     = initWallet;
window.connectWallet  = connectWallet;
window.updateUI       = updateUI;

window.isConnected    = () => !!signer;
window.provider       = () => provider;

window.signer         = () => signer;
window.userAddress    = () => address;

window.MINIAMM        = MINIAMM;
window.AIMAUT         = AIMAUT;
window.TOKENS         = TOKENS;
window.tokenSymbols   = tokenSymbols;
window.miniAmmAbi     = miniAmmAbi;
window.erc20Abi       = erc20Abi;
