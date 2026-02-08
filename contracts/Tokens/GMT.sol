pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract GMT is ERC20 {
    constructor() ERC20("GMT Token", "GMT") {
        _mint(msg.sender, 2000000 ether);
    }
}