window.addEventListener("load", async () => 
  
  {const ok = await window.initWallet(true);
  if (!ok) 
    {location.href = "index.html";
    return;}

  calcPrice();});

async function calcPrice() 
{const inAddr = document.getElementById("inToken").value;
  const outAddr = document.getElementById("outToken").value;
  const amtStr = document.getElementById("amountIn").value;
  const priceBox = document.getElementById("price");

  if (!amtStr || inAddr === outAddr) 
    {priceBox.innerText = "Price: —";
    return;}

  const amm = new ethers.Contract
  (window.MINIAMM,
  window.miniAmmAbi,
  window.signer());

  const [rIn, rOut] = await amm.getReserves(inAddr, outAddr);

  if (rIn === 0n) 
    {priceBox.innerText = "No liquidity";
    return;}

  const price =
    Number(ethers.formatEther(rOut)) /
    Number(ethers.formatEther(rIn));

  priceBox.innerText =
    `1 ${window.tokenSymbols[inAddr]} ≈ ${price.toFixed(6)} ${window.tokenSymbols[outAddr]}`;}

async function executeSwap() 
  {const inAddr = document.getElementById("inToken").value;
  const outAddr = document.getElementById("outToken").value;
  const amtStr = document.getElementById("amountIn").value;
  const status = document.getElementById("status");

  if (!amtStr || Number(amtStr) <= 0) 
    {alert("Enter amount");
    return;}
  const amt = ethers.parseEther(amtStr);
  const token = new ethers.Contract
  (inAddr,
    window.erc20Abi,
    window.signer());

  const amm = new ethers.Contract
  (window.MINIAMM,
    window.miniAmmAbi,
    window.signer());

  try 
    {status.innerText = "Approving...";
    await (await token.approve(window.MINIAMM, amt)).wait();
    status.innerText = "Swapping...";
    await (await amm.swap(inAddr, outAddr, amt)).wait();
    status.innerText = "Swap successful!";
    calcPrice();} catch (e) 
   {console.error(e);
    status.innerText = "Error: " + (e.reason || e.message);}}

document.getElementById("swapBtn").addEventListener("click", executeSwap);
document.getElementById("amountIn").addEventListener("input", calcPrice);
document.getElementById("inToken").addEventListener("change", calcPrice);
document.getElementById("outToken").addEventListener("change", calcPrice);
