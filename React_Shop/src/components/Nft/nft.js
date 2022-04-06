import React, { useEffect, useState } from "react";
import { ethers } from "ethers";

import "./NftStyle.css";
import abi from "./ABI/ether.js";
import AbiToken from "./ABI/token.js";

function Nft() {
  const Buy = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        alert("Please install MetaMask!");
        return;
      }

      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });

      //   console.log("Connected", accounts[0]);
      //   console.log(" " + ethereum.isConnected());
      let contractAddress = "0x3B5f8adB07d31F2919A3E005376CaFEcf46d6002";

      var provider = new ethers.providers.Web3Provider(ethereum);
      const wallet = provider.getSigner();
      //console.log(wallet);
      const contract = new ethers.Contract(contractAddress, abi, wallet);
      await contract.BuyNFT(name);
      console.log("" + name);
    } catch (error) {
      console.log(error);
    }
  };

  const Approve = async () => {
    const { ethereum } = window;

    if (!ethereum) {
      alert("Please install MetaMask!");
      return;
    }
    let contractAddress = "0x236a5ddfFF07Ce416Fa4B3042b17d9A22E082A12";

    var provider = new ethers.providers.Web3Provider(ethereum);
    const wallet = provider.getSigner();
    console.log(wallet);
    const contract = new ethers.Contract(contractAddress, AbiToken, wallet);
    await contract.approve(
      "0x3B5f8adB07d31F2919A3E005376CaFEcf46d6002",
      999999999999999
    );
  };
  const [name, setName] = useState("");
  return (
    <div className="Nft">
      <div className="content">
        <div className="inf">
          <h2> Name : ANH CON KHI</h2>
          <h2> Symbol : MONKEY </h2>
        </div>

        <form id="a-form" className="form" onSubmit={Buy}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </form>
        <div className="btn">
          <button onClick={Approve}> APPROVE</button>
          <button onClick={Buy}> BUY</button>
        </div>
      </div>
    </div>
  );
}

export default Nft;
