const PageNotFound = () => {
  return (
    <>
      <div className="breadcrumb flex items-center gap-3 mt-20">
        <a
          href="/"
          className="text-14px font-poppins text-neutral-600 cursor-pointer hover:text-black hover:underline"
        >
          Home
        </a>
        <span className="text-14px font-poppins text-black">/</span>
        <span className="text-14px font-poppins text-black">404 Error</span>
      </div>
      <div className="pagenotfound flex flex-col justify-center items-center my-36">
        <h1 className="text-[110px] text-center leading-none">404 Not Found</h1>
        <p className="mt-10">Sorry, that page cannot be found.</p>
        <a href="/" className="mt-20 px-12 py-4 bg-red text-textWhite rounded">
          Back to home page
        </a>
      </div>
    </>
  );
};

export default PageNotFound;
