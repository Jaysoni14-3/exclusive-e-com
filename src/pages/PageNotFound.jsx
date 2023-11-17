import Breadcrumb from "../components/Breadcrumb";

const PageNotFound = () => {
  return (
    <>
      <Breadcrumb linkToPreviousPage={"/"} previousPage={"Home"} currentPage={"404 Error"} />
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
