import { useState, useEffect, useCallback } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import formatItem from "../../utils/formatItem";

import useEthers from "../contexts/useEthers";

/**
 * hook to get nfts for sale
 * @returns { nfts: [] | array of objects, isLoading: boolean }
 */
const useGetMarketNfts = () => {
  const [nfts, setNfts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { tokenContract, marketContract } = useEthers();

  const loadNFTs = useCallback(async () => {
    setIsLoading(true);

    const data = await marketContract.fetchMarketItems().catch((error) => {
      toast.error(`${error}`);
      return null;
    });

    if (data) {
      const formattedItems = await Promise.all(
        data.map(async (item) => {
          try {
            const tokenUri = await tokenContract.tokenURI(item.tokenId);

            // SKIP old NFTs that use ipfs.io (Infura IPFS)
            if (tokenUri.includes("ipfs.io")) {
              console.log(`Skipping old NFT with tokenId: ${item.tokenId}`);
              return null; // Skip this NFT
            }

            // Only process new NFTs with ipfs:// or other formats
            const meta = await axios.get(tokenUri);
            return formatItem(item, meta);
          } catch (error) {
            console.error(`Failed to process NFT ${item.tokenId}:`, error);
            return null; // Skip NFTs that fail to load
          }
        })
      );

      // Filter out null values (old NFTs)
      const validItems = formattedItems.filter((item) => item !== null);
      setNfts(validItems.reverse());
    }

    setIsLoading(false);
  }, [marketContract, tokenContract]);

  useEffect(() => {
    loadNFTs();
  }, [loadNFTs]);

  return {
    data: nfts,
    isLoading,
    refetch: loadNFTs,
  };
};

export default useGetMarketNfts;
