/* eslint-disable import/prefer-default-export */
import { SEPOLIA_NETWORK } from "./constants";

/**
 * @function changeNetwork
 * @return { Promise<void> }
 */
export const changeNetwork = async () => {
  if (!window.ethereum) return null;
  try {
    await window.ethereum.request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId: SEPOLIA_NETWORK.chainId }],
    });
  } catch (switchError) {
    // This error code indicates that the chain has not been added to MetaMask.
    if (switchError.code === 4902) {
      try {
        await window.ethereum.request({
          method: "wallet_addEthereumChain",
          params: [SEPOLIA_NETWORK],
        });
      } catch (addError) {
        console.error("Failed to add network:", addError);
      }
    } else {
      console.error("Failed to switch network:", switchError);
    }
  }
};
