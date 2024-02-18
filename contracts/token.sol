//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Token is ERC20 {
    mapping(address => uint256) public staked;
    mapping(address => uint256) private stakedFromTS;
    mapping(address => bool) private authorizedUploaders;

    address public owner;

    event DocumentUploaded(address uploader, string documentHash, uint256 reward);

    modifier onlyOwner() {
        require(msg.sender == owner, "Only the owner can call this function");
        _;
    }

    constructor() ERC20("Fixed Staking", "FIX") {
        owner = msg.sender;
        _mint(msg.sender, 1000000000000 * (10 ** uint256(decimals())));
    }

    function stake(uint256 amount) external {
        require(amount > 0, "amount is <= 0");
        require(balanceOf(msg.sender) >= amount, "balance is <= amount");
        _transfer(msg.sender, address(this), amount);
        if (staked[msg.sender] > 0) {
            claim();
        }
        stakedFromTS[msg.sender] = block.timestamp;
        staked[msg.sender] += amount;
    }

    function unstake(uint256 amount) external {
        require(amount > 0, "amount is <= 0");
        require(staked[msg.sender] >= amount, "amount is > staked");
        claim();
        staked[msg.sender] -= amount;
        _transfer(address(this), msg.sender, amount);
    }

    function claim() public {
        require(staked[msg.sender] > 0, "staked is <= 0");
        uint256 secondsStaked = block.timestamp - stakedFromTS[msg.sender];
        uint256 rewards = staked[msg.sender] * secondsStaked / 3.154e7;
        _mint(msg.sender, rewards);
        stakedFromTS[msg.sender] = block.timestamp;
    }

    function authorizeUploader(address uploader) external onlyOwner {
        authorizedUploaders[uploader] = true;
    }

    function uploadDocument(string memory documentHash) external {
        require(authorizedUploaders[msg.sender], "Uploader not authorized");
        uint256 reward = 100;
        _mint(msg.sender, reward);
        emit DocumentUploaded(msg.sender, documentHash, reward);
    }

    function revokeUploaderAuthorization(address uploader) external onlyOwner {
        authorizedUploaders[uploader] = false;
    }


}
