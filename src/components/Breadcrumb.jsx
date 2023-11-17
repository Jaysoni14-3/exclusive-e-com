const Breadcrumb = ({ linkToPreviousPage, previousPage, currentPage }) => {
  return (
    <div className="breadcrumb flex items-center gap-3 mt-10">
      <a
        href={linkToPreviousPage}
        className="text-14px font-poppins text-neutral-600 cursor-pointer hover:text-black hover:underline"
      >
        {previousPage}
      </a>
      <span className="text-14px font-poppins text-black">/</span>
      <span className="text-14px font-poppins text-black">{currentPage}</span>
    </div>
  );
};

export default Breadcrumb;
