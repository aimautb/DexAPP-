window.addEventListener("load", async () =>
  {const ok = await window.initWallet(true);
  if (!ok) 
    {location.href = "index.html";
    return;}
  updateReserves();});

async function updateReserves() {
  if (!window.isConnected()) return;

  const tokenB = document.getElementById("tokenB").value;
  const box = document.getElementById("reserves");

window.addEventListener("load", async () => 
  {const ok = await window.initWallet(true);
  if (!ok) {
    location.href = "index.html";
    return;}

  updateTokenBLabel();   
  updateReserves();});

function updateTokenBLabel() 
{const tokenB = document.getElementById("tokenB").value;
  const label = document.getElementById("tokenBSymbol");

  if (label && window.tokenSymbols[tokenB]) {
    label.innerText = window.tokenSymbols[tokenB];}}
async function updateReserves() 
{if (!window.isConnected()) return;

  const tokenB = document.getElementById("tokenB").value;
  const box = document.getElementById("reserves");

  try 
  {const amm = new ethers.Contract(
      window.MINIAMM,
      window.miniAmmAbi,
      window.signer());

    const [resA, resB] = await amm.getReserves(window.AIMAUT, tokenB);

    if (resA === 0n) 
      {box.innerHTML = "Reserves: 0 / 0<br>Rate: —";
      return;}

    const a = Number(ethers.formatEther(resA));
    const b = Number(ethers.formatEther(resB));
    const price = b / a;

    box.innerHTML = 
    `Reserves: ${a.toFixed(4)} aiMAUT / ${b.toFixed(4)} ${window.tokenSymbols[tokenB]}<br>
      1 aiMAUT ≈ ${price.toFixed(6)} ${window.tokenSymbols[tokenB]}`;} 

      catch (err) 
  {console.error("updateReserves error:", err);
    box.innerHTML = "Error loading reserves";}}

async function addLiquidity() {
const status = document.getElementById("status");

const tokenB = document.getElementById("tokenB").value;
const aVal = document.getElementById("amountA").value;
const bVal = document.getElementById("amountB").value;

  if (!aVal || !bVal || Number(aVal) <= 0 || Number(bVal) <= 0) 
    {alert("Enter valid amounts");
    return;}
  const amtA = ethers.parseEther(aVal);
  const amtB = ethers.parseEther(bVal);
  try 
  {const signer = window.signer();

    const amm = new ethers.Contract
    (window.MINIAMM,
      window.miniAmmAbi,
      signer);

    const tokenA = new ethers.Contract
    (window.AIMAUT,
      window.erc20Abi,
      signer);

    const tokenBContract = new ethers.Contract
    (tokenB,
      window.erc20Abi,
      signer);

status.innerText = "Approving aiMAUT on metamask";
await (await tokenA.approve(window.MINIAMM, amtA)).wait();
status.innerText = `Approving ${window.tokenSymbols[tokenB]} on metamask`;
await (await tokenBContract.approve(window.MINIAMM, amtB)).wait();
status.innerText = "Adding liquidity with metamask";
await (await amm.addLiquidity(window.AIMAUT, tokenB, amtA, amtB)).wait();
status.innerText = "Liquidity added and allowed to update reserves";
    updateReserves();} 

    catch (e) 
    {console.error("addLiquidity error:", e);
    status.innerText = " Error: " + (e.reason || e.message);}}

document.getElementById("addBtn")
  .addEventListener("click", addLiquidity);

document.getElementById("tokenB")
  .addEventListener("change", () => 
    {updateTokenBLabel(); 
    updateReserves();});


  const amm = new ethers.Contract
  (window.MINIAMM,
    window.miniAmmAbi,
    window.signer());
  const [resA, resB] = await amm.getReserves(window.AIMAUT, tokenB);
  if (resA === 0n) 
    {box.innerHTML = "Reserves: 0 / 0<br>Rate: —";
    return;}

const a = Number(ethers.formatEther(resA));
const b = Number(ethers.formatEther(resB));
const price = b / a;

box.innerHTML = `
  Reserves: ${a.toFixed(4)} aiMAUT / ${b.toFixed(4)} ${window.tokenSymbols[tokenB]}<br>
  1 aiMAUT ≈ ${price.toFixed(6)} ${window.tokenSymbols[tokenB]}`;}

async function addLiquidity() 
{const status = document.getElementById("status");
  const tokenB = document.getElementById("tokenB").value;
  const aVal = document.getElementById("amountA").value;
  const bVal = document.getElementById("amountB").value;
  if (!aVal || !bVal || Number(aVal) <= 0 || Number(bVal) <= 0) 
    {alert("Enter valid amounts");
    return;}
  const amtA = ethers.parseEther(aVal);
  const amtB = ethers.parseEther(bVal);
  const amm = new ethers.Contract
  (window.MINIAMM,
  window.miniAmmAbi,
  window.signer());

  const tokenA = new ethers.Contract
  (window.AIMAUT,
  window.erc20Abi,
  window.signer());

  const tokenBContract = new ethers.Contract
  (tokenB,
    window.erc20Abi,
    window.signer());

  try
  {status.innerText = "Approving aiMAUT...";
    await (await tokenA.approve(window.MINIAMM, amtA)).wait();
    status.innerText = `Approving ${window.tokenSymbols[tokenB]}...`;
    await (await tokenBContract.approve(window.MINIAMM, amtB)).wait();
    status.innerText = "Adding liquidity...";
    await (await amm.addLiquidity(window.AIMAUT, tokenB, amtA, amtB)).wait();

    status.innerText = "Liquidity added!";
    updateReserves();} 
    catch (e) 
  {console.error(e);
  status.innerText = "Error: " + (e.reason || e.message);}}
document.getElementById("addBtn").addEventListener("click", addLiquidity);
document.getElementById("tokenB").addEventListener("change", updateReserves);
