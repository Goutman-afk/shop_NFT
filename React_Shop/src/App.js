import React from "react";
import Hero from "./components/hero/Hero";
import Navbar from "./components/nav/Navbar";
import Nft from "./components/Nft/nft";
import WalletNFT from "./components/Wallet/NewNFT";
function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Nft />
      <WalletNFT />
    </div>
  );
}

export default App;
