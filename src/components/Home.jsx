<<<<<<< HEAD
import React from 'react'
import Navbar from './Navbar'
import Main from './Main'
import Footer from './Footer'
=======
import WalletBalance from './WalletBalance';
import { useEffect, useState } from 'react';

import { ethers } from 'ethers';
import FiredGuys from '../artifacts/contracts/MyNFT.sol/FiredGuys.json';

const contractAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3';

const provider = new ethers.providers.Web3Provider(window.ethereum);

// get the end user
const signer = provider.getSigner();

// get the smart contract
const contract = new ethers.Contract(contractAddress, FiredGuys.abi, signer);


function Home() {

  const [totalMinted, setTotalMinted] = useState(0);
  useEffect(() => {
    getCount();
  }, []);

  const getCount = async () => {
    const count = await contract.count();
    console.log(parseInt(count));
    setTotalMinted(parseInt(count));
  };
>>>>>>> 6e38e10bebddabf73c05c839b372b9936ba1130d

const Home = () => {
  return (
    <div className="min-h-screen bg-fit bg-[url('./components/images/background.png')]">
      <div className='min-h-screen'>
        <Navbar />

<<<<<<< HEAD
        <Main />
=======
      <h1>Fired Guys NFT Collection</h1>
      <div className="container">
        <div className="row">
          {Array(totalMinted + 1)
            .fill(0)
            .map((_, i) => (
              <div key={i} className="col-sm">
                <NFTImage tokenId={i} getCount={getCount} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

function NFTImage({ tokenId, getCount }) {
  const contentId = 'QmUod1banXgejGzbshxiMeWncjHKMRALGg58HZiVmU66jg';
  const metadataURI = `${contentId}/${tokenId}.json`;
  const imageURI = `https://gateway.pinata.cloud/ipfs/${contentId}/${tokenId}.png`;
  //   const imageURI = `img/${tokenId}.png`;

  const [isMinted, setIsMinted] = useState(false);
  useEffect(() => {
    getMintedStatus();
  }, [isMinted]);
>>>>>>> 6e38e10bebddabf73c05c839b372b9936ba1130d

        <Footer />
      </div>
    </div>)
}

export default Home