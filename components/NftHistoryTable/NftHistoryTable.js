import { useMemo } from "react";
import PropTypes from "prop-types";

import { toast } from "react-toastify";
import Table from "../shared/Table/Table";
import shortenWalletAddress from "../../utils/shortenWalletAddress";



const handleClick = (address) => {
  navigator.clipboard.writeText(address);
  toast.success("Copied wallet address!");
};

const propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      itemId: PropTypes.number.isRequired,
      tokenId: PropTypes.number.isRequired,
      owner: PropTypes.string.isRequired,
      seller: PropTypes.string.isRequired,
      sold: PropTypes.bool.isRequired,
    })
  ).isRequired,
};

const NftHistoryTable = ({ data }) => {
  const columns = useMemo(
    () => [
      {
        header: "Event",
        accessorKey: "sold",
        cell: (info) => <div>{info.getValue() ? "Sold" : "Listed"}</div>,
      },
      {
        header: "Price",
        accessorKey: "price",
        cell: (info) => (
          <div className="flex">
            {/* <Image src={maticIcon} alt="Metamask logo" height={24} width={24} /> */}
            <p className="ml-2">D {info.getValue()}</p>
          </div>
        ),
      },
      {
        header: "From",
        accessorKey: "seller",
        cell: (info) => (
          <button type="button" onClick={() => handleClick(info.getValue())}>
            {shortenWalletAddress(info.getValue())}
          </button>
        ),
      },
      {
        header: "To",
        accessorKey: "owner",
        cell: (info) => {
          const value = info.getValue();
          const isListed =
            value === "0x0000000000000000000000000000000000000000";
          return (
            <button
              type="button"
              onClick={() => (isListed ? {} : handleClick({ value }))}
            >
              {isListed ? "--" : shortenWalletAddress(value)}
            </button>
          );
        },
      },
    ],
    []
  );
  return (
    <>
      <h1 className="py-5 text-xl font-bold">Item activity</h1>
      <Table
        columns={columns}
        data={data}
        emptyTableMessage="No item activity"
      />
    </>
  );
};

NftHistoryTable.propTypes = propTypes;
export default NftHistoryTable;
