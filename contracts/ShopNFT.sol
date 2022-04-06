// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "./INFT.sol";

contract Shop_NFT {
    address public owner;
    uint256 public price;
    address public admin;
    IMoke public NFT_provider;
    IERC20 public Token_provider;

    constructor(
        address _monke,
        address _gold,
        uint256 _price
    ) public {
        owner = msg.sender;

        NFT_provider = IMoke(_monke);
        Token_provider = IERC20(_gold);
        price = _price;
    }

    modifier onlyOwner() {
        require(msg.sender == owner);
        _;
    }

    function change_admin(address _new) public onlyOwner {
        admin = _new;
    }

    function change_price(uint256 _price) public onlyOwner {
        price = _price;
    }

    function BuyNFT(string memory tokenURI) public {
        NFT_provider.awardItem(msg.sender, tokenURI);
        Token_provider.transferFrom(msg.sender, admin, price);
    }
}
