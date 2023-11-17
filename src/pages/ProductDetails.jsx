import Breadcrumb from "../components/Breadcrumb";

import "react-image-gallery/styles/css/image-gallery.css";

import starIcon from "../assets/star.png";
import heartIcon from "../assets/heart-icon.png";
import iconMinus from "../assets/icon-minus.svg";
import iconPlus from "../assets/icon-plus.svg";
import iconDelivery from "../assets/icon-delivery-black.png";
import iconReturn from "../assets/icon-return.svg";

import HavicGameControllerImage2 from "../assets/Products/havic-game-controller-2.png";
import HavicGameControllerImage3 from "../assets/Products/havic-game-controller-3.png";
import HavicGameControllerImage4 from "../assets/Products/havic-game-controller-4.png";
import HavicGameControllerImage5 from "../assets/Products/havic-game-controller-5.png";
import HavicGameControllerImage6 from "../assets/Products/havic-game-controller-6.png";
import ReactImageGallery from "react-image-gallery";
import HorizontalDevider from "../components/HorizontalDevider";
import SectionHeader from "../components/SectionHeader";

// Product images
import HavicGameControllerImage from "../assets/Products/havic-game-controller.png";
import KeyboardImage from "../assets/Products/keyboard.png";
import MonitorImage from "../assets/Products/monitor.png";
import RgbCoolerImage from "../assets/Products/rgb-liquid-cooler.png";
import ProductCard from "../components/ProductCard";

const ProductDetails = () => {
  const product = {
    id: 1,
    name: "Havic HV G-92 Gamepad",
    image: HavicGameControllerImage2,
    description:
      "PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.",
    quantity: 0,
    images: [
      {
        original: HavicGameControllerImage2,
        thumbnail: HavicGameControllerImage2,
      },
      {
        original: HavicGameControllerImage3,
        thumbnail: HavicGameControllerImage3,
      },
      {
        original: HavicGameControllerImage4,
        thumbnail: HavicGameControllerImage4,
      },
      {
        original: HavicGameControllerImage5,
        thumbnail: HavicGameControllerImage5,
      },
      {
        original: HavicGameControllerImage6,
        thumbnail: HavicGameControllerImage6,
      },
    ],
    imgAlt: "image of a game controller",
    offerPercentage: "-40%",
    currentPrice: "$120",
    oldPrice: "$160",
    ratings: {
      rate: 5,
      ratedBy: 80,
    },
  };

  const relatedProducts = [
    {
      id: 1,
      name: "Havic HV G-92 Gamepad",
      image: HavicGameControllerImage,
      imgAlt: "image of a game controller",
      offerPercentage: "-40%",
      currentPrice: "$120",
      oldPrice: "$160",
      ratings: {
        rate: 5,
        ratedBy: 80,
      },
    },
    {
      id: 2,
      name: "AK-900 Wired Keyboard",
      image: KeyboardImage,
      imgAlt: "image of a keyboard",
      offerPercentage: "-35%",
      currentPrice: "$100",
      oldPrice: "$130",
      ratings: {
        rate: 4,
        ratedBy: 75,
      },
    },
    {
      id: 3,
      name: "IPS LCD Gaming Monitor",
      image: MonitorImage,
      imgAlt: "image of a game controller",
      offerPercentage: "-30%",
      currentPrice: "$370",
      oldPrice: "$400",
      ratings: {
        rate: 4,
        ratedBy: 99,
      },
    },
    {
      id: 5,
      name: "RGB liquid CPU Cooler",
      image: RgbCoolerImage,
      imgAlt: "image of a cpu cooler",
      offerPercentage: "",
      currentPrice: "$160",
      oldPrice: "$170",
      ratings: {
        rate: 4,
        ratedBy: 65,
      },
    },
  ];

  return (
    <>
      <Breadcrumb
        linkToPreviousPage={"/"}
        previousPage={"Home"}
        currentPage={"Product Detail"}
      />
      <div className="productdetailspage flex flex-col sm:flex-row gap-8 mt-20">
        <div className="left sm:w-1/2">
          <ReactImageGallery
            items={product.images}
            thumbnailPosition={"left"}
            showFullscreenButton={false}
            showNav={false}
            thumbnailWidth={"150px"}
            showPlayButton={false}
            lazyLoad={true}
          />
        </div>
        <div className="right ps-4 sm:w-1/2">
          {/* Product name */}
          <div className="product-name">
            <h1 className="text-24px font-semiBold text-black">
              {product.name}
            </h1>
          </div>
          {/* Ratings */}
          <div className="flex items-center gap-4 mt-4">
            <div className="ratings flex items-center gap-2">
              <span className="text-14px">{product.ratings.rate}</span>
              <img className="w-4" src={starIcon} alt="icon for star" />
              <span>({product.ratings.ratedBy} Reviews)</span>
            </div>
            <div className="seperator w-[2px] h-[20px] rounded-xl bg-neutral-600"></div>
            <div className="in-stock">
              <span className="text-14px text-greenColor">In Stock</span>
            </div>
          </div>
          {/* Price */}
          <div className="price mt-4">
            <h2 className="text-24px text-black">{product.currentPrice}</h2>
          </div>
          {/* Description */}
          <div className="product-description my-6">
            <p className="text-14px text-black">{product.description}</p>
          </div>
          <HorizontalDevider />
          {/* Quantity and buttons */}
          <div className="flex flex-wrap items-center">
            <div className="quantity flex flex-row items-center mt-6">
              <button className="h-[44px] border border-black hover:bg-red overflow-hidden rounded-l-md p-2 transition-colors">
                <img src={iconMinus} alt="minus icon" />
              </button>
              <span className="h-[44px] w-20 text-center border-t border-b border-black py-2">
                {product.quantity}
              </span>
              <button className="h-[44px] border border-black hover:bg-red overflow-hidden rounded-r-md p-2 transition-colors">
                <img src={iconPlus} alt="plus icon" />
              </button>
              <button className="bg-red text-textWhite font-medium whitespace-nowrap px-4 sm:px-12 py-[10px] rounded mx-4">
                Buy Now
              </button>
              <button className="border border-black hover:bg-red overflow-hidden rounded p-2 transition-colors">
                <img className="w-6" src={heartIcon} alt="heart icon" />
              </button>
            </div>
          </div>

          {/* Advantages to shop */}
          <div className="advantages border border-black rounded mt-10">
            <div className="free-delivery flex items-center gap-4 mb-4 mt-6 mx-4">
              <figure className="icon-container w-10 h-10">
                <img
                  src={iconDelivery}
                  className="w-full h-full"
                  alt="delivery icon"
                />
              </figure>
              <div className="text-container flex flex-col gap-2">
                <p className="text-16px font-medium">Free Delivery</p>
                <p className="underline text-12px font-medium">
                  Enter your postal code for Delivery Availability
                </p>
              </div>
            </div>
            <HorizontalDevider />
            <div className="return-delivery flex items-center gap-4 mt-4 mb-6 mx-4">
              <figure className="icon-container w-10 h-10">
                <img
                  src={iconReturn}
                  className="w-full h-full"
                  alt="return icon"
                />
              </figure>
              <div className="text-container flex flex-col gap-2">
                <p className="text-16px font-medium">Return Delivery</p>
                <p className="underline text-12px font-medium">
                  Free 30 Days Delivery Returns.{" "}
                  <span className="underline">Details</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="related-products my-[140px]">
        <SectionHeader smallHeader={"Related items"} />
        <div className="section-body mt-[60px] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-[30px]">
          {relatedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
