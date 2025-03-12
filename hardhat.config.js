require("@nomiclabs/hardhat-waffle");
require("dotenv").config();
const fs = require("fs");

const privateKey =
  process.env.PRIVATE_KEY || fs.readFileSync(".secret").toString().trim();
const PROJECT_ID = process.env.PROJECT_ID;

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337,
    },
    sepolia: {
      
      url: `https://eth-sepolia.g.alchemy.com/v2/${PROJECT_ID}`, 
      accounts: [privateKey],
    },
    // mainnet: {
    //   url: `https://polygon-mainnet.g.alchemy.com/v2/${PROJECT_ID}`,
    //   accounts: [privateKey],
    // },
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
