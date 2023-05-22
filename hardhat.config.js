//import { PROJECT_ID } from "./utils/constants";

require("@nomiclabs/hardhat-waffle");
const fs = require("fs");

const privateKey =
  fs.readFileSync(".secret").toString().trim() || " ";
const PROJECT_ID = "zErRQKT2IPg__bQGcm2TbNW86LFJHhym";
module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337,
    },
    mumbai: {
    //  url: `https://polygon-mumbai.infura.io/v3/${PROJECT_ID}`,
      url: `https://polygon-mumbai.g.alchemy.com/v2/${PROJECT_ID}`,
      accounts: [privateKey],
    },
    // mainnet: {
    //   url: `https://polygon-mainnet.infura.io/v3/${PROJECT_ID}`,
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
