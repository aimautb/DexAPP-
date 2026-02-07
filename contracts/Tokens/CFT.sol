pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract CFT is ERC20 {
    constructor() ERC20("CFT Token", "CFT") {
        _mint(msg.sender, 10000 ether);
    }
}