import { MdInfoOutline } from "react-icons/md";
import PropTypes from "prop-types";

export default function ErrorInfo({ message }) {
  return (
    <div className="flex items-center gap-2 py-2 px-3 font-semibold text-pink-700 bg-red-200 w-fit rounded-lg">
      <MdInfoOutline />
      <p>{message}</p>
    </div>
  );
}

ErrorInfo.propTypes = {
  message: PropTypes.string,
};
