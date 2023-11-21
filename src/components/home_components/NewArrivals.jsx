import SectionHeader from "../SectionHeader";

import PlayStationImage from "../../assets/Products/playstation.png";
import WomensCollectionImage from "../../assets/Products/womens-collection.png";
import AmazonSpeaker from "../../assets/Products/amazon-echo.png";
import GucciPerfume from "../../assets/Products/gucci-perfume.png";

const NewArrivals = () => {
  return (
    <div className="new-arrival flex flex-col gap-[60px] mt-[70px] mb-[140px]">
      <SectionHeader smallHeader={"Featured"} mainHeader={"New Arrival"} />
      <div className="section-body flex flex-col lg:flex-row gap-[30px]">
        {/* Playstation */}
        <div className="left-container rounded relative bg-black w-full lg:w-1/2">
          <figure className="image-container h-full flex justify-center items-end ">
            <img
              className="w-4/5 object-bottom h-auto"
              src={PlayStationImage}
              alt="image of playstation"
            />
          </figure>
          <div className="product-description flex flex-col gap-4 absolute left-8 bottom-8">
            <div className="product-name">
              <h4 className="text-24px font-semiBold text-textWhite">
                PlayStation 5
              </h4>
            </div>
            <div className="product-description text-14px text-textWhite">
              Black and White version of the PS5 coming out on sale.
            </div>
            <a href="#">
              <span className="border-b border-neutral-400 text-white">
                Shop Now
              </span>
            </a>
          </div>
        </div>
        <div className="right-container flex flex-col gap-[30px] w-full lg:w-1/2">
          {/* Womens collection */}
          <div className="top-container rounded overflow-hidden flex relative bg-[#0D0D0D] w-full">
            <div className="product-description flex flex-col gap-4 absolute left-6 bottom-6">
              <div className="product-name">
                <h4 className="text-24px font-semiBold text-textWhite">
                  Women’s Collections
                </h4>
              </div>
              <div className="product-description text-14px text-textWhite">
                Featured woman collections that <br /> give you another vibe.
              </div>
              <a href="#">
                <span className="border-b border-neutral-400 text-white">
                  Shop Now
                </span>
              </a>
            </div>
            <figure className="ms-auto flex justify-end image-container">
              <img
                className="w-3/4"
                src={WomensCollectionImage}
                alt="image of a women wearing hat"
              />
            </figure>
          </div>
          <div className="bottom-container h-1/2 flex gap-[30px] items-top">
            {/* Speaker collection */}
            <div className="bottom-left-container rounded relative w-1/2 bg-black">
              <div className="h-full w-full rounded-full absolute inset-0 bg-[#D9D9D9] blur-3xl z-10 opacity-30"></div>
              <figure className="image-container flex items-center justify-center h-full">
                <img
                  className="relative z-20 w-1/2 object-center"
                  src={AmazonSpeaker}
                  alt="image of amazon echo speaker"
                />
              </figure>
              <div className="product-description flex flex-col gap-2 absolute z-30 left-6 bottom-6">
                <div className="product-name">
                  <h4 className="text-24px font-semiBold text-textWhite">
                    Speakers
                  </h4>
                </div>
                <div className="product-description text-14px text-textWhite">
                  Amazon wireless speakers
                </div>
                <a href="#">
                  <span className="border-b border-neutral-400 text-white">
                    Shop Now
                  </span>
                </a>
              </div>
            </div>
            {/* Perfume collection */}
            <div className="bottom-right-container rounded relative w-1/2 bg-black">
              <div className="h-full w-full rounded-full absolute inset-0 bg-[#D9D9D9] blur-3xl z-10 opacity-30"></div>
              <figure className="image-container flex items-center justify-center h-full">
                <img
                  className="relative z-10 w-1/2"
                  src={GucciPerfume}
                  alt="image of a branded perfume"
                />
              </figure>
              <div className="product-description flex flex-col gap-2 absolute z-30 left-6 bottom-6">
                <div className="product-name">
                  <h4 className="text-24px font-semiBold text-textWhite">
                    Perfume
                  </h4>
                </div>
                <div className="product-description text-14px text-textWhite">
                  GUCCI INTENSE OUD EDP
                </div>
                <a href="#">
                  <span className="border-b border-neutral-400 text-white">
                    Shop Now
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewArrivals;
