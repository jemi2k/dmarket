import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import { useWeb3React } from "@web3-react/core";
import { Formik, Form } from "formik";
import * as yup from "yup";
import Button from "../shared/Button/Button";
import Spinner from "../shared/Spinner/Spinner";


import useGetNft from "../../hooks/queries/useGetNft";
import useGetMarketNftHistory from "../../hooks/queries/useGetMarketNftHistory";

import useRemoveListedNft from "../../hooks/mutations/useRemoveListedNft";
import useBuyNft from "../../hooks/mutations/useBuyNft";
import useListNft from "../../hooks/mutations/useListNft";

import useToggleWalletPanel from "../../hooks/contexts/useToggleWalletPanel";

import Input from "../shared/Input/Input";

import maticIcon from "../../assets/images/polygon-matic.svg";


 
 
  
    

  

 

 
const Nftt = () => {
  
  return (
    <>
      <div className="flex flex-col  md:pt-10">
        <div className="w-full p-2  md:p-10   border- rounded-lg bg-blue-100">
          <div className="flex flex-col lg:flex-row">
            <div className="h-96 sm:w-96 relative rounded-lg lg:mr-8">
           <p className="font-bold text-3xl text-blue-500">Promotion Place </p>
            </div>
            <div className="flex-1 flex flex-col justify-between pt-5">
              <h1 className="text-2xl font-bold"></h1>
              
              
                </div>
             
           
            </div>
          </div>
        </div>
     
     
    </>
  );
                  };

export default Nftt;
