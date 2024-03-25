import { PropTypes } from "prop-types";
import LoadingSpinner from "./LoadingSpinner";

export default function Button({
  type = "button",
  disabled,
  children,
  onClick,
  isLoading,
}) {
  return (
    <button
      type={type}
      className="bg-gradient-to-r from-sky-600 to bg-sky-400 py-2 px-3 
      rounded-lg text-sky-100 font-semibold text-center 
      hover:bg-sky-500 hover:text-cyan-100 hover:font-normal 
       disabled:opacity-50 disabled:cursor-not-allowed"
      disabled={disabled}
      onClick={onClick}
    >
      <span className="flex gap-3 items-center justify-center">
        {isLoading && <LoadingSpinner className="h-4 w-4" />}
        {children}
      </span>
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  disabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};
