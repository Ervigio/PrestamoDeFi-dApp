import PropTypes from "prop-types";

export default function TextInput({
  type = "text",
  onChange,
  value,
  placeholder,
  disabled,
}) {
  return (
    <input
      type={type}
      onChange={onChange}
      value={value}
      placeholder={placeholder}
      disabled={disabled}
      className="bg-cyan-100 border border-sky-700  text-sky-900 font-semibold
      rounded-lg w-72 sm:w-96 focus:ring-2 focus:ring-sky-600 focus:border-transparent
      transition duration-300 disabled:cursor-not-allowed disabled:opacity-50
      outline-none py-2 px-3 text-center text-xs sm:text-sm"
    />
  );
}

TextInput.propTypes = {
  type: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
};
