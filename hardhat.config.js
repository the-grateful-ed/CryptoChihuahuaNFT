
require('dotenv').config();
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");

module.exports = {
  solidity: "0.8.4",
  paths: {
    artifacts: './public/artifacts',
  },
  defaultNetwork: "matic",
  networks: {
    hardhat: {
      chainId: 31337,
    },
    matic: {
<<<<<<< HEAD
      url: "https://rpc-mumbai.maticvigil.com/v1/13c4c7f2b6b05a179125d12a1e0a5fe6fe30edd3",
      accounts: [process.env.PRIVATE_KEY]
    }
  },
  etherscan: {
    apiKey: process.env.POLYGONSCAN_API_KEY
  },
  solidity: {
    version: "0.8.2",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
}


=======
      url: "https://polygon-mumbai.g.alchemy.com/v2/G7xyzn3O5x4J33VBbedvPa5oSgmFPjJ5",
      accounts: ["0x415b88f31c0d27aa6ba22928fd08c3ac83e8d58c8612fdbb25fe2d721f8bc1fd"]
    }
  },
};
>>>>>>> 6e38e10bebddabf73c05c839b372b9936ba1130d
