window.addEventListener("load", async () => 
    {const hasWallet = await window.initWallet(true);
        const goSwap = document.getElementById("goSwap");
        const goLiq  = document.getElementById("goLiq");
        const goMain = document.getElementById("goMain");

 
  if (hasWallet && window.isConnected()) 
    {if (goSwap) goSwap.disabled = false;
    if (goLiq)  goLiq.disabled  = false;
    if (goMain) goMain.disabled = false;}

  if (goSwap) 
    {goSwap.onclick = () => 
        {if (!window.isConnected()) 
        {alert("Connect MetaMask first");
        return;}
      location.href = "swap.html";}; }
  if (goLiq)
     {goLiq.onclick = () =>
         {if (!window.isConnected()) {
        alert("Connect MetaMask first");
        return;}
      location.href = "liquidity.html";};}
  if (goMain) 
{goMain.onclick = () => 
{if (!window.isConnected()) 
    {alert("Connect MetaMask first");
        return;}
        location.href = "index.html";};}});


const path = location.pathname;
if (path.includes("swap"))
     {document.getElementById("goSwap")?.classList.add("active");}

if (path.includes("liquidity")) 
    {document.getElementById("goLiq")?.classList.add("active");}

if (path.includes("index") || path.endsWith("/"))
    {document.getElementById("goMain")?.classList.add("active");}
