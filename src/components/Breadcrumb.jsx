import { Link } from "react-router-dom";

const Breadcrumb = ({ linkToPreviousPage, previousPage, currentPage }) => {
  return (
    <div className="breadcrumb flex items-center gap-3 mt-10">
      <Link
        to={linkToPreviousPage}
        className="text-14px font-poppins text-neutral-600 cursor-pointer hover:text-black hover:underline"
      >
        {previousPage}
      </Link>
      <span className="text-14px font-poppins text-black">/</span>
      <span className="text-14px font-poppins text-black">{currentPage}</span>
    </div>
  );
};

export default Breadcrumb;
