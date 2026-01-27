// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;


import "@openzeppelin/contracts/token/ERC20/ERC20.sol";


contract aiMAUT is ERC20 {
constructor(uint256 initialSupply) ERC20("aiMAUT", "AIM") {
_mint(msg.sender, initialSupply);
}
}