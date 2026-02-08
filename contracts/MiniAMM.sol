// SPDX-License-Identifier: MIT

pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract MiniAMM {
struct Pair 
    {uint256 reserve0;
    uint256 reserve1;}
mapping(bytes32 => Pair) public pairs;
uint256 public constant FEE = 3; 
// крч деньги мутим целых  0.3% как в Uniswap прикинь
function getPairKey(address tokenA, address tokenB) internal pure returns (bytes32) 
    {return tokenA < tokenB ? keccak256(abi.encodePacked(tokenA, tokenB)): keccak256(abi.encodePacked(tokenB, tokenA));}

function addLiquidity(address tokenA,address tokenB, uint256 amountA,uint256 amountB) external {
require(tokenA != tokenB, "Same token");
address token0 = tokenA < tokenB ? tokenA : tokenB;
address token1 = tokenA < tokenB ? tokenB : tokenA;

uint256 amt0 = tokenA == token0 ? amountA : amountB;
uint256 amt1 = tokenA == token0 ? amountB : amountA;
bytes32 key = getPairKey(token0, token1);
Pair storage pair = pairs[key];
IERC20(token0).transferFrom(msg.sender, address(this), amt0);
IERC20(token1).transferFrom(msg.sender, address(this), amt1);

pair.reserve0 += amt0;
pair.reserve1 += amt1;}
function swap(address tokenIn,address tokenOut,uint256 amountIn) external returns (uint256 amountOut)
{require(tokenIn != tokenOut, "Same token");
require(amountIn > 0, "Zero amount");
address token0 = tokenIn < tokenOut ? tokenIn : tokenOut;
address token1 = tokenIn < tokenOut ? tokenOut : tokenIn;
bytes32 key = getPairKey(token0, token1);
Pair storage pair = pairs[key];

uint256 reserveIn  = tokenIn == token0 ? pair.reserve0 : pair.reserve1;
uint256 reserveOut = tokenIn == token0 ? pair.reserve1 : pair.reserve0;

require(reserveIn > 0 && reserveOut > 0, "No liquidity");
uint256 numerator   = amountIn * (1000 - FEE) * reserveOut;
uint256 denominator = reserveIn * 1000 + amountIn * (1000 - FEE);
amountOut = numerator / denominator;

require(amountOut > 0, "Insufficient output");

IERC20(tokenIn).transferFrom(msg.sender, address(this), amountIn);
IERC20(tokenOut).transfer(msg.sender, amountOut);
if (tokenIn == token0) 
    {pair.reserve0 += amountIn;
    pair.reserve1 -= amountOut;}
else 
    {pair.reserve0 -= amountOut;
    pair.reserve1 += amountIn;}}

function getReserves(address tokenA, address tokenB) external view returns (uint256 reserveA, uint256 reserveB) 
    {address token0 = tokenA < tokenB ? tokenA : tokenB;
    address token1 = tokenA < tokenB ? tokenB : tokenA;
    bytes32 key = getPairKey(token0, token1);
    Pair memory pair = pairs[key];

if (tokenA == token0) 
    {  return (pair.reserve0, pair.reserve1); } 
else 
    {return (pair.reserve1, pair.reserve0); } } }