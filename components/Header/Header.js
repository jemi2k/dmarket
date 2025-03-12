import Link from "next/link";
import PropTypes from "prop-types";
import { CubeTransparentIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import Button from "../shared/Button/Button";
import useToggleWalletPanel from "../../hooks/contexts/useToggleWalletPanel";
// import SearchBar from "./searchBar"; // Temporarily removed

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
    <nav className="fixed inset-x-0 top-0 border-b shadow-md p-4 z-40 bg-gray-200">
      <div className="flex items-center justify-between">
        <Link href="/" passHref>
          <h1 className="text-3xl font-bold text-blue-500 cursor-pointer">
            DMarket
          </h1>
        </Link>
        <div className="hidden lg:flex space-x-4">
          {navOptions.map((option) => {
            const { route, label } = option;
            const isSelected = route === currentRoute;
            return (
              <Link href={route} key={route} passHref>
                <a
                  className={`px-4 py-2 rounded-md font-medium ${
                    isSelected
                      ? "bg-blue-100 text-blue-500"
                      : "text-gray-700 hover:bg-gray-300"
                  }`}
                >
                  {label}
                </a>
              </Link>
            );
          })}
        </div>
        <div className="flex items-center">
          <div className="lg:hidden">
            <button
              type="button"
              onClick={() => onSetIsNavOpen((prev) => !prev)}
            >
              <span className="sr-only">Open main menu</span>
              {isNavOpen ? (
                <XIcon className="h-7 w-7 text-gray-700" aria-hidden="true" />
              ) : (
                <MenuIcon
                  className="h-7 w-7 text-gray-700"
                  aria-hidden="true"
                />
              )}
            </button>
          </div>
          <div className="ml-4">
            <Button
              icon={
                <CubeTransparentIcon
                  className="h-6 w-6 text-gray-700"
                  aria-hidden="true"
                />
              }
              onHandleClick={(e) => {
                e.stopPropagation();
                setIsWalletPanelOpen((prev) => !prev);
              }}
              className="hidden lg:inline-flex"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

Header.propTypes = propTypes;
export default Header;
