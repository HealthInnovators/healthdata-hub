//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MyToken is ERC20 {
    address public owner;
    uint256 constant stakingDuration = 14 days;
    uint256 constant stakingInterestRate = 100; // 0.1% daily

    struct Document {
        address uploader;
        bool accepted;
    }

    mapping(address => Document) public documents;

    mapping(address => uint256) public stakingStart;
    mapping(address => uint256) public stakedBalance;

    modifier onlyOwner() {
        require(msg.sender == owner, "Only contract owner can call this function");
        _;
    }

    constructor(string memory name, string memory symbol) ERC20(name, symbol) {
        owner = msg.sender;
    }

    function uploadDocument() external {
        require(balanceOf(msg.sender) > 0, "User must have tokens to upload a document");
        require(documents[msg.sender].uploader == address(0), "User already uploaded a document");
        
        // Code to upload document
        documents[msg.sender] = Document(msg.sender, false);
    }

    function acceptDocument(address user) external onlyOwner {
        require(documents[user].uploader != address(0), "No document uploaded by user");
        require(!documents[user].accepted, "Document already accepted");
        
        // Code to accept document
        documents[user].accepted = true;
        
        // Give ERC20 tokens to user
        _mint(user, 1000); // Adjust the amount of tokens as needed
    }

    function stakeTokens(uint256 amount) external {
        require(balanceOf(msg.sender) >= amount, "Insufficient balance");
        
        // Transfer tokens to contract
        transfer(address(this), amount);
        
        // Start staking
        stakedBalance[msg.sender] += amount;
        stakingStart[msg.sender] = block.timestamp;
    }

    function withdrawStakedTokens() external {
        require(stakedBalance[msg.sender] > 0, "No tokens staked");
        require(block.timestamp >= stakingStart[msg.sender] + stakingDuration, "Staking duration not over yet");
        
        uint256 interest = (stakedBalance[msg.sender] * stakingInterestRate * (block.timestamp - stakingStart[msg.sender])) / (10000 * 1 days);
        uint256 totalAmount = stakedBalance[msg.sender] + interest;
        
        // Transfer tokens back to user
        _transfer(address(this), msg.sender, totalAmount);
        
        // Reset staking data
        stakedBalance[msg.sender] = 0;
        stakingStart[msg.sender] = 0;
    }
}