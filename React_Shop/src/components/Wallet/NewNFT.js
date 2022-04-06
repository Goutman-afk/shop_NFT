import React, { useEffect, useState, useLayoutEffect } from "react";
import {
  Multicall,
  ContractCallResults,
  ContractCallContext,
} from "ethereum-multicall";
import { ethers } from "ethers";
import "./Wallet.css";
import ABI_NFT from "./NewNFT_Abi.js";

function WalletNFT() {
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
      let contractAddress = "0x39545e4133fe21EB9E6658b72F2797d9C5Da0E87";

      var provider = new ethers.providers.Web3Provider(ethereum);
      const wallet = provider.getSigner();
      //console.log(wallet);
      const contract = new ethers.Contract(contractAddress, ABI_NFT, wallet);

      //   for (
      //     let i = 0;
      //     i <
      //     (await contract.balanceOf(
      //       "0x5a03b38b7d3c4777fda57f173afede4b4974b57e"
      //     ));
      //     i++
      //   ) {
      //     console.log(
      //       "" +
      //         (await contract.name()) +
      //         "           " +
      //         (await contract.tokenOfOwnerByIndex(
      //           "0x5a03b38b7d3c4777fda57f173afede4b4974b57e",
      //           i
      //         )) +
      //         "          " +
      //         (await contract.tokenURI(
      //           await contract.tokenOfOwnerByIndex(
      //             "0x5a03b38b7d3c4777fda57f173afede4b4974b57e",
      //             i
      //           )
      //         ))
      //     );
      //   }
      const temp = [...name];
      for (
        let i = 0;
        i <
        (await contract.balanceOf(
          "0x5a03b38b7d3c4777fda57f173afede4b4974b57e"
        ));
        i++
      ) {
        temp.push({
          Name: await contract.name(),
          token:
            "" +
            (await contract.tokenOfOwnerByIndex(
              "0x5a03b38b7d3c4777fda57f173afede4b4974b57e",
              i
            )),
          tokenURI: await contract.tokenURI(
            await contract.tokenOfOwnerByIndex(
              "0x5a03b38b7d3c4777fda57f173afede4b4974b57e",
              i
            )
          ),
        });
      }
      setName(temp);
      console.log(temp);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    Buy();

    console.log(name);
  }, []);

  const [name, setName] = useState([]);

  return (
    <div className="wallet">
      <div className="content">
        <table>
          <tr>
            <th>Name</th>
            <th>TokenID</th>
            <th>TokenURI</th>
          </tr>
          {name.map((val, key) => {
            return (
              <tr key={key}>
                <td>{val.Name}</td>
                <td>{val.token}</td>
                <td>{val.tokenURI}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
}

export default WalletNFT;
