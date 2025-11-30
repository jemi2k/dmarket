import { useState } from "react";
import { toast } from "react-toastify";

//constants
import { PINATA_JWT } from "../../utils/constants";

/**
 * function to return hook, data and loading state
 * @param {ipfsApiKey} string secret ipfs key
 * @returns {ipfsUploadMutation: fn, isLoading: bool, data: ipfs data response} ipfs data
 */

const useIpfsUpload = (IPFS_API_KEY) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);

  /**
   * function to upload data to ipfs
   * @param {File | object} info or file data to be uploaded to ipfs
   * @returns {Promise < Object >} ipfs data
   */

  const ipfsUploadMutation = async (info) => {
    setIsLoading(true);

    const formData = new FormData();

    if (info instanceof File) {
      formData.append("file", info);
    } else if (typeof info === "string") {
      const blob = new Blob([info], { type: "application/json" });
      formData.append("file", blob, "metadata.json");
    }

    const pinataOptions = JSON.stringify({
      cidVersion: 0,
    });
    formData.append("pinataOptions", pinataOptions);

    try {
      const response = await fetch(
        "https://api.pinata.cloud/pinning/pinFileToIPFS",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${PINATA_JWT}`,
          },
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error(`IPFS upload failed: ${response.status}`);
      }

      const result = await response.json();

      setIsLoading(false);
      setData(result);

      // return in same format as before for compatibility
      return {
        path: result.IpfsHash,
        cid: result.IpfsHash,
      };
    } catch (error) {
      setIsLoading(false);
      toast.error(`Failed to upload file to IPFS at useIpfsUpload ${error}`);
    }
  };

  return { ipfsUploadMutation, data, isLoading };
};

export default useIpfsUpload;
