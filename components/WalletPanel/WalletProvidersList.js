/* eslint-disable @next/next/no-html-link-for-pages */
import { useWeb3React } from "@web3-react/core";
import Image from "next/image";
import { toast } from "react-toastify";

// utils
import { changeNetwork } from "../../utils/wallet";
import { injected, fortmatic } from "../../utils/connectors";

// assets
import MetaMaskLogo from "../../assets/images/metamask-logo.webp";
import FortmaticLogo from "../../assets/images/fortmatic-logo.webp";

// constants
import { SEPOLIA_NETWORK } from "../../utils/constants";

const CONNECTORS = {
  Injected: {
    name: "Metamask",
    logo: <Image src={MetaMaskLogo} alt="Metamask logo" />,
    method: injected,
  },
  Fortmatic: {
    name: "Fortmatic",
    logo: <Image src={FortmaticLogo} alt="FortmaticLogo logo" />,
    method: fortmatic,
  },
};

const isMobileDevice = () =>
  "ontouchstart" in window || "onmsgesturechange" in window;

const dappUrl = "nft-marketplace-dusky.vercel.app/";

const metamaskAppDeepLink = `https://metamask.app.link/dapp/${dappUrl}`;

const WalletProvidersList = () => {
  const { active, activate, deactivate } = useWeb3React();

  //   TODO: Throw error/success modals
  const handleToggleConnect = async (connector, methodName) => {
    if (methodName === "Metamask" && !window.ethereum) {
      toast.warn("Please install Metamask");
      return;
    }

    if (active) {
      deactivate();
    } else {
      await activate(connector)
        .then(async () => {
          if (window.ethereum.chainId !== SEPOLIA_NETWORK.chainId) {
            await changeNetwork();
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div className="px-7">
      <p className="py-5">
        Connect with one wallet provider or create a new one.
      </p>
      <div className="w-full bg-white rounded shadow">
        <ul className="divide-y-2 divide-gray-100">
          {Object.values(CONNECTORS).map((connector) => {
            const { name, logo, method } = connector;

            if (isMobileDevice() && name === "Metamask" && !window.ethereum) {
              return (
                <li className="shadow-around cursor-pointer" key={name}>
                  <a href={metamaskAppDeepLink}>
                    <button
                      className="p-3 w-full flex items-center font-"
                      type="button"
                    >
                      <div className="h-full w-6 mr-4 relative flex">
                        {logo}
                      </div>
                      {name}
                    </button>
                  </a>
                </li>
              );
            }

            return (
              <li className="shadow-around cursor-pointer" key={name}>
                <button
                  className="p-3 w-full flex items-center font-bold"
                  type="button"
                  onClick={() => handleToggleConnect(method, name)}
                >
                  <div className="h-full w-6 mr-4 relative flex">{logo}</div>
                  {name}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default WalletProvidersList;
