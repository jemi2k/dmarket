import Link from "next/link";
import PropTypes from "prop-types";
import { CubeTransparentIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import Button from "../shared/Button/Button";
import useToggleWalletPanel from "../../hooks/contexts/useToggleWalletPanel";
import SearchBar from "./searchBar";

const propTypes = {
  navOptions: PropTypes.arrayOf(
    PropTypes.shape({
      route: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  currentRoute: PropTypes.string.isRequired,
  isNavOpen: PropTypes.bool.isRequired,
  onSetIsNavOpen: PropTypes.func.isRequired,
};

const Header = ({ navOptions, currentRoute, isNavOpen, onSetIsNavOpen }) => {
  const { setIsWalletPanelOpen } = useToggleWalletPanel();

  return (
    <nav className="fixed  inset-x-0 top-0 border-b shadow-md p-3 pb-4 z-40 bg-gray-200 h-16">
      <div className="flex items-center">
        <Link href="/">
          <h1 className="text-3xl font-bold text-blue-500 mr-4">DMarket </h1>
        </Link>
        <SearchBar />
        <div className="flex flex-1 items-center ">
          <div className="hidden lg:block">
            {navOptions.map((option) => {
              const { route, label } = option;
              const isSelected = route === currentRoute;
              return (
                <Link href={route} key={route} passHref>
                  <a
                    className={`p-5 font ${
                      isSelected ? "bg- rounded-md text-blue-500" : "text-"
                    }`}
                  >
                    {label}
                  </a>
                </Link>
              );
            })}
          </div>
          <div className="ml-auto flex items-center">
            <div className="lg:hidden flex">
              <button
                type="button"
                onClick={() => onSetIsNavOpen((prev) => !prev)}
              >
                <span className="sr-only">Open main menu</span>
                {isNavOpen ? (
                  <XIcon className="block h-7 w-7" aria-hidden="true" />
                ) : (
                  <MenuIcon className="block h-7 w-7" aria-hidden="true" />
                )}
              </button>
            </div>
            <Button
              icon={
                <CubeTransparentIcon className="h-6 w-6" aria-hidden="true" />
              }
              onHandleClick={() => setIsWalletPanelOpen((prev) => !prev)}
              className="hidden lg:block"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

Header.propTypes = propTypes;
export default Header;
