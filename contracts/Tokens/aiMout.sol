pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract aiMAUT is ERC20 {
    constructor() ERC20("aiMAUT Token", "aiMAUT") {
        _mint(msg.sender, 1000 ether);
    }
}