import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useWeb3React } from "@web3-react/core";
import { Formik, Form } from "formik";
import * as yup from "yup";
import useToggleWalletPanel from "../hooks/contexts/useToggleWalletPanel";

import useCreateNft from "../hooks/mutations/useCreateNft";
import useIpfsUpload from "../hooks/mutations/useIpfsUpload";

import Input from "../components/shared/Input/Input";
import Textarea from "../components/shared/Textarea/Textarea";
import ImageUpload from "../components/shared/ImageUpload/ImageUpload";

import Button from "../components/shared/Button/Button";


import { INFURA_URL } from "../utils/constants";





const ipfsInfuraUrl = "http://ipfs.io/ipfs";


export default function CreateItem({ ipfsApiKey }) {
  const [uploadedImages, setUploadedImages] = useState([]);
  const [ipfsUrl, setIpfsUrl] = useState("");

  const { setIsWalletPanelOpen } = useToggleWalletPanel();
  const { active } = useWeb3React();
  const router = useRouter();

  const { createNftMutation, isLoading } = useCreateNft();
  const { ipfsUploadMutation, isLoading: isIpfsLoading } =
    useIpfsUpload(ipfsApiKey);


 
  useEffect(() => {
    const ipfsUploadData = async () => {
      const ipfsData = await ipfsUploadMutation(uploadedImages[0]);
       
      
      setIpfsUrl(`${`https://${INFURA_URL}`}/ipfs/${ipfsData.path}`);
       
    };
    if (uploadedImages.length) {
      ipfsUploadData();
    }
  }, [uploadedImages]);

 

  


  const handleRemoveAllImages = () => {
    setUploadedImages([]);
    setIpfsUrl("");
  };
  
  
  

  const handleSubmit = async (values) => {
    const { name, description } = values;
    if (!active) {
      return setIsWalletPanelOpen(true);
    }

    const data = JSON.stringify({
      name,
      description,
    
      image: ipfsUrl,
    });
    const uploadedData = await ipfsUploadMutation(data);
    const url = `${ipfsInfuraUrl}/${uploadedData.path}`;

    return createNftMutation(url).then(
      (createNftReceipt) =>
        createNftReceipt.status &&
        router.push(`/nft/${createNftReceipt.tokenId}`)
    );
  };

  const initialValues = {
    name: "",
    description: "",
  };

  const validationSchema = yup.object().shape({
    name: yup.string().required(),
    description: yup.string().required(),
  });

  return (
    <div className="flex justify-center md:pt-10">
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validateOnMount
        validationSchema={validationSchema}
      >
        {({ isValid }) => (
          <Form className="w-full p-2 md:w-5/6 md:p-10 xl:w-2/3 2xl:w-3/5 border-2 rounded-lg bg-white">
            <h1 className="py-5 text-2xl font-">Create New Product to Sell</h1>
            <div className="flex flex-col lg:flex-row pt-5">
              <ImageUpload
                onSetUploadedImages={setUploadedImages}
                imgPreviewUrl={uploadedImages[0]?.preview || ""}
                handleRemoveImage={handleRemoveAllImages}
                isDisabled={!!uploadedImages[0]?.preview}
                isLoading={isIpfsLoading}
                className="lg:mr-4"
              />
              <div className="flex-1 flex flex-col justify-between pt-2 lg:pt-0">
                <Input
                  name="name"
                  label="Product name"
                  placeholder="Example: Nike Men Shoe"
                  errorMessage="Item name is a required field"
                />
                <Textarea
                  name="description"
                  label="Product description"
                  placeholder="Example: Nike is the brand of..."
                  errorMessage="Item description is a required field"
                />
                <Button
                  label="Create Product"
                  isDisabled={!isValid || !ipfsUrl || isLoading}
                  isLoading={isIpfsLoading || isLoading}
                  className="mt-4 w-full"
                  isTypeSubmit
                  size="lg"
                />
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export async function getServerSideProps() {
  return {
    props: {
      ipfsApiKey: process.env.IPFS_API_KEY,
    },
  };
}
