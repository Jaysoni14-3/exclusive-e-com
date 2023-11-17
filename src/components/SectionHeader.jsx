const SectionHeader = ({ smallHeader, mainHeader, buttonText, buttonType }) => {
  return (
    <div className="section-header flex items-end justify-between gap-6">
      <div className="left-side">
        <div className="flex items-center gap-4">
          <div className="border w-5 h-10 bg-red rounded"></div>
          <p className="font-semiBold">{smallHeader}</p>
        </div>
        {mainHeader && (
          <h3 className="text-24px leading-tight sm:leading-normal sm:text-36px font-semiBold">
            {mainHeader}
          </h3>
        )}
      </div>
      {buttonText && (
        <div className="right-side">
          <button className={`bg-${buttonType} red-button`}>
            {buttonText}
          </button>
        </div>
      )}
    </div>
  );
};

export default SectionHeader;
