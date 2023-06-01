/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
// TODO: Consider accessibility
import PropTypes from "prop-types";
import Image from "next/image";
//import { Rating } from 'primereact/rating';
import { useWeb3React } from "@web3-react/core";
import { useRouter } from "next/router";
import maticIcon from "../../assets/images/polygon-matic.svg";


import { nftPropType } from "../../utils/propTypes";
import { ACTION_TYPES } from "../../utils/constants";

import Button from "../shared/Button/Button";

const { LIST_ITEM, REMOVE_ITEM, BUY } = ACTION_TYPES;

const actions = {
  [LIST_ITEM]: { label: "List item", action: LIST_ITEM },
  [REMOVE_ITEM]: { label: "Remove item", action: REMOVE_ITEM },
  [BUY]: { label: "Buy", action: BUY },
};

const propTypes = {
  nft: nftPropType.isRequired,
  onHandleAction: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
  isActionLoading: PropTypes.bool,
  selectedTokenId: PropTypes.number,
};

const NFTListItem = ({
  nft,
  onHandleAction,
  isActionLoading,
  selectedTokenId,
}) => {
  const { account } = useWeb3React();
  const router = useRouter();

  const { name, image, description, price, seller, tokenId } = nft;

  const hasAction = !!onHandleAction;

  const getAction = () => {
    if (!seller) {
      return actions[LIST_ITEM];
    }
    if (seller === account) {
      return actions[REMOVE_ITEM];
    }
    return actions[BUY];
  };

  const handleClick = () => {
    router.push({ pathname: "/nft/[nft]", query: { nft: tokenId } });
  };

  const handleAction = (event) => {
    event.stopPropagation();
    onHandleAction(nft, getAction().action);
  };

  return (
    // <li
    //   className="border shadow rounded-lg overflow-hidden flex flex-col justify-between h-128 cursor-pointer p-2 hover:opacity-90 bg-white"
    //   onClick={handleClick}
    // >
    //   <div className="h-4/5 relative">
    //     <Image
    //       src={image}
    //       alt="NFT image"
    //       layout="fill"
    //       objectFit="cover"
    //       objectPosition="top center"
    //       className="rounded-lg rounded-b-none"
    //     />
    //   </div>
    //   <div className="p-2">
    //     <p className="text-2xl font-semibold">{name}</p>
    //     <div>
    //       <p className="text-gray-400 truncate">{description}</p>
    //     </div>
    //   </div>
    //   {price && (
    //     <div className="p-4 bg-black rounded-lg rounded-t-none">
    //       <div className="flex">
    //         <Image src={maticIcon} alt="Metamask logo" height={28} width={28} />
    //         <p className="text-2xl font-bold text-white ml-2">{price}</p>
    //       </div>
    //       {hasAction && (
    //         <Button
    //           onHandleClick={handleAction}
    //           label={getAction().label}
    //           className="w-full mt-2"
    //           isLoading={isActionLoading && tokenId === selectedTokenId}
    //         />
    //       )}
    //     </div>
    //   )}
   //</li>

      <li className="border shadow rounded-lg overflow-hidden flex flex-col justify-between h-128 cursor-pointer p-2 hover:opacity-90 bg-white"
       onClick={handleClick}
      
      >
      
      <div className="col-12 lg:col-4 " >
                <div className="card m-3 border-1 surface-border">
                    <div className="flex flex-wrap gap-2 align-items-center justify-content-between mb-2">
                        <div className="flex align-items-center">
                            <i className="pi pi-tag mr-2" />
                            <span className="font-semibold">Category</span>
                        </div>
                        <span className=''>Status</span>
                    </div>
                    <div className="flex flex-column align-items-center text-center mb-3">
                        <Image src={image} 
                        alt="Product image"
                        layout="fill"
                        objectFit="cover" 
                        className="w-9 shadow-2 my-3 mx-0" />
                        <div className="text-2xl font-bold">{name}</div>
                        <div className="mb-3">{description}</div>
                        {/* <Rating value={null} readOnly cancel={false} /> */}
                    </div>
                    {price && (
                    <div className="flex align-items-center justify-content-between">
                        <span className="text-2xl font-semibold">
                        <Image src={maticIcon} alt="Metamask logo" height={28} width={28} />
                        {price}</span>
                        
                        {hasAction && (
                        <Button icon="pi pi-shopping-cart" 
                        onHandleClick={handleAction}
                        label={getAction().label}
                        className="w-full mt-2"
                        isLoading={isActionLoading && tokenId === selectedTokenId}
                        
                        />
                        )}
                    </div>
                    )}
                </div>
            </div>
            </li>
            













    
  );
};

NFTListItem.defaultProps = {
  onHandleAction: null,
  isActionLoading: false,
  selectedTokenId: null,
};

NFTListItem.propTypes = propTypes;
export default NFTListItem;
