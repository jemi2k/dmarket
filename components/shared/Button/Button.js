import PropTypes from "prop-types";
import Spinner from "../Spinner/Spinner";

const buttonSize = {
  sm: "p-2",
  lg: "p-4",
};

const propTypes = {
  onHandleClick: PropTypes.func,
  label: PropTypes.string,
  isDisabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  className: PropTypes.string,
  isTypeSubmit: PropTypes.bool,
  size: PropTypes.oneOf(Object.keys(buttonSize)),
  icon: PropTypes.node,
};

const Button = ({
  onHandleClick,
  label,
  isDisabled,
  isLoading,
  className,
  isTypeSubmit,
  size,
  icon,
}) => (
  <button
    type={isTypeSubmit ? "submit" : "button"}
    className={` text-white font- rounded flex justify-center items-center ${
      buttonSize[size]
    } ${className} ${
      isDisabled
        ? "bg-gray-300 cursor-not-allowed"
        : "bg-blue-400 hover:bg-blue-500"
    }`}
    onClick={onHandleClick}
    disabled={isDisabled}
  >
    {icon}
    {label}
    {isLoading && (
      <div className="ml-4">
        <Spinner color={(isDisabled && "text-gray-400") || ""} />
      </div>
    )}
  </button>
);

Button.defaultProps = {
  label: "",
  isDisabled: false,
  isLoading: false,
  className: "",
  isTypeSubmit: false,
  onHandleClick: () => {},
  size: "sm",
  icon: null,
};

Button.propTypes = propTypes;
export default Button;
