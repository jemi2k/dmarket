import { InjectedConnector } from "@web3-react/injected-connector";
import { FortmaticConnector } from "@web3-react/fortmatic-connector";

// Updated supportedChainIds to include Sepolia (11155111) and remove Mumbai (80001)
const injected = new InjectedConnector({
  supportedChainIds: [1, 3, 4, 5, 42, 1337, 11155111], // Added Sepolia (11155111)
});

const fortmatic = new FortmaticConnector({
  apiKey: process.env.NEXT_PUBLIC_FORTMATIC_API_KEY,
  chainId: 1,
});

export { injected, fortmatic };
