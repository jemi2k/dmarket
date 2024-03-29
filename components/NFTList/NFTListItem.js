/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
// TODO: Consider accessibility
import PropTypes from "prop-types";
import Image from "next/image";
import { useWeb3React } from "@web3-react/core";
import { useRouter } from "next/router";


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
    <li
      className="border  rounded-lg overflow-hidden flex flex-col justify-between h-96  cursor-pointer p-2 hover:opacity-90 bg-blue-100"
      onClick={handleClick}
    >
      <div className="h-4/5  relative">
        <Image
          src={image}
          alt="Product NFT image"
          layout="fill"
          objectFit="cover"
          objectPosition="align-items-center text-center "
          className="my-4 md:my-0 rounded-lg w-9 md:w-10rem shadow-2 mr-5"
        />
      </div>
      <div className="p-2">
        <p className="text-2xl font-semibold">{name}</p>
        <div>
          <p className="text-gray-400 truncate">{description}</p>
        </div>
      </div>
      {price && (
        <div className="p-4 bg-blue rounded-lg rounded-t-none">
          <div className="flex">
            {/* <Image src={maticIcon} alt="Metamask logo" height={20} width={20} /> D */}
            <p className="text-xl font-bold text-black ml-">D {price}</p>

            {hasAction && (
              <Button
                onHandleClick={handleAction}
                label={getAction().label}
                className="w-full ml-10"
                isLoading={isActionLoading && tokenId === selectedTokenId}
              />
            )}
          </div>
        </div>
      )}
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
