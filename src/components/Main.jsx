import React, { useEffect, useState } from 'react';

import { ethers } from 'ethers';
import CryptoChihuahuaNFT from '../../public/artifacts/contracts/CryptoChihuahuaNFT.sol/CryptoChihuahuaNFT.json';
import Pagination from './Pagination'


const contractAddress = '0x9E0004aA6c117E8d7A593047890269D35915999e';


const provider = new ethers.providers.Web3Provider(window.ethereum);

// get the end user
const signer = provider.getSigner();

// get the smart contract
const contract = new ethers.Contract(contractAddress, CryptoChihuahuaNFT.abi, signer);


function Main() {

  const [totalMinted, setTotalMinted] = useState(0);
  useEffect(() => {
    getCount();
  }, []);

  const getCount = async () => {
    const count = await contract.count();
    console.log(parseInt(count));
    setTotalMinted(parseInt(count));
  };

  return (



    <section className="relative flex flex-wrap items-center justify-between px-2">
      <div className="bg-white max-w-5xl container mx-auto flex flex-col md:flex-row md:items-end justify-between py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 bg-white">
          {Array(totalMinted + 1)
            .fill(0)
            .map((_, i) => (
              <div key={i}>
                <NFTImage tokenId={i} getCount={getCount} />
              </div>
            ))}
        </div>
      </div>
    </section>




  );
}

function NFTImage({ tokenId, getCount }) {
  const contentId = 'QmUod1banXgejGzbshxiMeWncjHKMRALGg58HZiVmU66jg';
  const metadataURI = `QmakW9LY9Mn3fszhWNNPuZw2zhTuohHvyEALQJsudgjNNH/${tokenId}.json`;
  const imageURI = `https://gateway.pinata.cloud/ipfs/QmUod1banXgejGzbshxiMeWncjHKMRALGg58HZiVmU66jg/${tokenId}.png`;

  const [isMinted, setIsMinted] = useState(false);
  useEffect(() => {
    getMintedStatus();
  }, [isMinted]);

  const getMintedStatus = async () => {
    const result = await contract.isContentOwned(metadataURI);
    console.log(result)
    setIsMinted(result);
  };

  const mintToken = async () => {
    const connection = contract.connect(signer);
    const addr = connection.address;
    const result = await contract.payToMint(addr, metadataURI, {
      value: ethers.utils.parseEther('0.05'),
    });

    await result.wait();
    getMintedStatus();
    getCount();
  };

  async function getURI() {
    const uri = await contract.tokenURI(tokenId);
    alert(uri);
  }
  return (


    <div className="w-full md:max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 ">
      <a href="#">
        <img src={isMinted ? imageURI : './img/placeholder.svg'} className="rounded-t-xl w-full" />
      </a>
      <div className="p-1">
        <a href="#">
          <h5 className="mb-2 text-2xl sm:text-lg text-center text-gray-800 font-bold tracking-tight dark:text-white">Crypto Chihuahua #{tokenId}</h5>
        </a>
        {/* <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p> */}
        <div className="flex justify-end">
          {!isMinted ? (
            <button onClick={mintToken} className="w-full focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg sm:text-sm text-xl px-5 py-3 sm:py-2.5 mr-2 mx-1 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
              Mint
            </button>
          ) : (
            <button onClick={getURI} className="w-full focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg sm:text-sm text-xl px-5 py-3 sm:py-2. mx-1 mb-2 dark:focus:ring-yellow-900">
              Attributes
            </button>
          )}
        </div>
      </div>
    </div>


    // <div>
    //   <img src={isMinted ? imageURI : './img/placeholder.svg'} />
    //   <h5>ID #{tokenId}</h5>
    //   {!isMinted ? (
    //     <button onClick={mintToken} className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
    //       Mint
    //     </button>
    //   ) : (
    //     <button onClick={getURI} className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900">
    //       Taken! Show URI
    //     </button>
    //   )}
    // </div>
  );
}

export default Main;