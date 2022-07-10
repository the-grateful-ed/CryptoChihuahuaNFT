import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';

import Logo from './images/logo.png';


export default function Navbar() {
    const [isConnected, setIsConnected] = useState(false);
    const [hasMetamask, setHasMetamask] = useState(false);
    const [signer, setSigner] = useState(undefined);

    async function connect() {
        if (typeof window.ethereum !== "undefined") {
            try {
                await ethereum.request({ method: "eth_requestAccounts" });
                setIsConnected(true);
                const provider = new ethers.providers.Web3Provider(window.ethereum);
                setSigner(provider.getSigner());
            } catch (e) {
                console.log(e);
            }
        } else {
            setIsConnected(false);
        }
    }

    return (
        <>
            <nav className="relative flex flex-wrap items-center justify-between px-2">
                <div className="bg-white max-w-5xl container mx-auto flex flex-col md:flex-row md:items-end justify-between py-8 rounded-t-xl mt-2">

                    <div className="flex items-end justify-center">
                        <img src={Logo} alt="logo" className="w-16 h-16 mx-4 " />
                        <span className=" text-2xl text-gray-900 font-bold py-2.5">Crypto Chihuahia NFT</span></div>
                    <div className="pt-2 justify-center flex">



                        <button onClick={() => connect()} type="button" className="text-gray-900 bg-gray-100 hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 mr-2 mt-4">
                            <svg className="w-4 h-4 mr-2 -ml-1 fill-[#8247E5]" id="Layer_1" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="ethereum" x="0px" y="0px" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38.4 33.5">
                                <g>
                                    <path className="st0" d="M29,10.2c-0.7-0.4-1.6-0.4-2.4,0L21,13.5l-3.8,2.1l-5.5,3.3c-0.7,0.4-1.6,0.4-2.4,0L5,16.3
		c-0.7-0.4-1.2-1.2-1.2-2.1v-5c0-0.8,0.4-1.6,1.2-2.1l4.3-2.5c0.7-0.4,1.6-0.4,2.4,0L16,7.2c0.7,0.4,1.2,1.2,1.2,2.1v3.3l3.8-2.2V7
		c0-0.8-0.4-1.6-1.2-2.1l-8-4.7c-0.7-0.4-1.6-0.4-2.4,0L1.2,5C0.4,5.4,0,6.2,0,7v9.4c0,0.8,0.4,1.6,1.2,2.1l8.1,4.7
		c0.7,0.4,1.6,0.4,2.4,0l5.5-3.2l3.8-2.2l5.5-3.2c0.7-0.4,1.6-0.4,2.4,0l4.3,2.5c0.7,0.4,1.2,1.2,1.2,2.1v5c0,0.8-0.4,1.6-1.2,2.1
		L29,28.8c-0.7,0.4-1.6,0.4-2.4,0l-4.3-2.5c-0.7-0.4-1.2-1.2-1.2-2.1V21l-3.8,2.2v3.3c0,0.8,0.4,1.6,1.2,2.1l8.1,4.7
		c0.7,0.4,1.6,0.4,2.4,0l8.1-4.7c0.7-0.4,1.2-1.2,1.2-2.1V17c0-0.8-0.4-1.6-1.2-2.1L29,10.2z"/>
                                </g>
                            </svg>

                            Connect Wallet
                        </button>

                    </div>


                </div>
            </nav>
        </>
    );
}
