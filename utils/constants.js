const HEADER_ROUTES = {
  HOME: "/",
  CREATE_ITEM: "/create-item",
  MY_ASSETS: "/my-assets",
  CREATOR_DASHBOARD: "/creator-dashboard",
};

const INPUT_MAX_LENGTH = 64;

const TEXTAREA_MAX_LENGTH = 255;

const CRYPTO_CURRENCY = "ether";

// PINATA CONFIGURATION - REPLACE WITH YOUR ACTUAL JWT
const PINATA_JWT =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiJmNTNkYWFmNS02ODVlLTRhMWUtYTAzNC00YjQ5YjZmMTE4ZTEiLCJlbWFpbCI6Implcm1pandsbEBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwicGluX3BvbGljeSI6eyJyZWdpb25zIjpbeyJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MSwiaWQiOiJGUkExIn0seyJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MSwiaWQiOiJOWUMxIn1dLCJ2ZXJzaW9uIjoxfSwibWZhX2VuYWJsZWQiOmZhbHNlLCJzdGF0dXMiOiJBQ1RJVkUifSwiYXV0aGVudGljYXRpb25UeXBlIjoic2NvcGVkS2V5Iiwic2NvcGVkS2V5S2V5IjoiODEwNTI2NWYzMzJmNGQyYTAwMWIiLCJzY29wZWRLZXlTZWNyZXQiOiJhMzYyM2U5Yjc5OTBhNGUxNDdmYmQ3OGZjNTQ5NzBkMDEwYzVhZDhmNDFlMDEwODk3MDJmYTk0NGI1YTUyNzU4IiwiZXhwIjoxNzk1OTM0NDM5fQ.ASvVMnPVGNrmL0EBypUqtp-2SO0EEiyBzuKHtNxjPCs";

const PINATA_GATEWAY = "gateway.pinata.cloud";

const PROJECT_ID = "BeaKVAH6JkorKVR6U-hBbOx3eFKIBvZ9";

const ACTION_TYPES = {
  LIST_ITEM: "list_item",
  REMOVE_ITEM: "remove_item",
  BUY: "buy",
};

const SEPOLIA_NETWORK = {
  chainId: "0xaa36a7",
  rpcUrls: [`https://eth-sepolia.g.alchemy.com/v2/${PROJECT_ID}`],
  chainName: "Ethereum Sepolia Testnet",
  nativeCurrency: {
    name: "ETH",
    symbol: "ETH",
    decimals: 18,
  },
  blockExplorerUrls: ["https://sepolia.etherscan.io/"],
};

export {
  HEADER_ROUTES,
  INPUT_MAX_LENGTH,
  TEXTAREA_MAX_LENGTH,
  CRYPTO_CURRENCY,
  ACTION_TYPES,
  SEPOLIA_NETWORK,
  PROJECT_ID,
  PINATA_JWT,
  PINATA_GATEWAY,
};
