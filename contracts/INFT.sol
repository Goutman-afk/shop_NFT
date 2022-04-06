// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

interface IMoke {
    function awardItem(address player, string memory tokenURI)
        external
        returns (uint256);
}

interface IGLDToken {
    function Pay(address Seller, uint256 Payload) external;
}
