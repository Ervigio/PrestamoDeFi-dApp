import PropTypes from "prop-types";

export default function Title({ children }) {
  return (
    <h3 className="text-sm sm:text-xl text-sky-950 font-bold">{children}</h3>
  );
}

Title.propTypes = {
  children: PropTypes.string.isRequired,
};
