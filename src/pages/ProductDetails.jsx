import Breadcrumb from "../components/Breadcrumb";

import "react-image-gallery/styles/css/image-gallery.css";

import heartIcon from "../assets/heart-icon.png";
import iconDelivery from "../assets/icon-delivery-black.png";
import iconReturn from "../assets/icon-return.png";
import starIcon from "../assets/star.png";

import ReactImageGallery from "react-image-gallery";
import HorizontalDevider from "../components/HorizontalDevider";
import SectionHeader from "../components/SectionHeader";

// Product images
import HavicGameControllerImage from "../assets/Products/havic-game-controller.png";
import KeyboardImage from "../assets/Products/keyboard.png";
import MonitorImage from "../assets/Products/monitor.png";
import RgbCoolerImage from "../assets/Products/rgb-liquid-cooler.png";
import ProductCard from "../components/ProductCard";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCart, removeFromCart } from "../store/cartSlice";

const ProductDetails = () => {
  const [productInCart, setProductInCart] = useState(false);

  const productId = useParams();
  // Redux methods
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product);
  const cartItems = useSelector((state) => state.cart);

  const product = products.find((item) => item.id === parseInt(productId.id));

  const isProductInCart = cartItems.find(
    (item) => item.id === parseInt(productId.id)
  );

  useEffect(() => {
    if (isProductInCart) {
      setProductInCart(true);
    } else {
      setProductInCart(false);
    }
  }, [isProductInCart]);

  const relatedProducts = [
    {
      id: 1,
      name: "Havic HV G-92 Gamepad",
      image: HavicGameControllerImage,
      imgAlt: "image of a game controller",
      offerPercentage: "-40%",
      currentPrice: 120,
      oldPrice: 160,
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
      currentPrice: 100,
      oldPrice: 130,
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
      currentPrice: 370,
      oldPrice: 400,
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
      currentPrice: 160,
      oldPrice: 170,
      ratings: {
        rate: 4,
        ratedBy: 65,
      },
    },
  ];

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const handleRemoveFromCart = (productID) => {
    const confirmMessage = "Do you want to remove this product from your cart?";
    if (confirm(confirmMessage)) {
      dispatch(removeFromCart(parseInt(productID.id)));
    } else {
      return;
    }
  };

  // console.log(cartItems);

  return (
    <>
      <Breadcrumb
        linkToPreviousPage={"/"}
        previousPage={"Home"}
        currentPage={product.name}
      />
      <div className="productdetailspage flex flex-col sm:flex-row gap-8 mt-20">
        <div className="left sm:w-1/2">
          {product?.images?.length !== 0 ? (
            <ReactImageGallery
              items={product.images}
              thumbnailPosition={"left"}
              showFullscreenButton={false}
              showNav={false}
              thumbnailWidth={"150px"}
              showPlayButton={false}
              lazyLoad={true}
            />
          ) : (
            <figure className="image-container flex items-center justify-center">
              <img src={product.image} />
            </figure>
          )}
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
            <h2 className="text-24px text-black">${product.currentPrice}</h2>
          </div>
          {/* Description */}
          <div className="product-description my-6">
            <p className="text-14px text-black">{product.description}</p>
          </div>
          <HorizontalDevider />
          {/* Quantity and buttons */}
          <div className="flex flex-wrap items-center">
            <div className="quantity flex flex-row items-center mt-6">
              {productInCart ? (
                <>
                  <button
                    onClick={() => handleRemoveFromCart(productId)}
                    className="bg-red text-textWhite font-medium whitespace-nowrap px-4 sm:px-12 py-[10px] rounded mx-4"
                  >
                    Remove from cart
                  </button>
                </>
              ) : (
                <button
                  onClick={() => handleAddToCart(product)}
                  className="bg-red text-textWhite font-medium whitespace-nowrap px-4 sm:px-12 py-[10px] rounded mx-4"
                >
                  Add to cart
                </button>
              )}

              <button className="border border-red text-black font-medium whitespace-nowrap px-4 sm:px-12 py-[10px] rounded mx-4">
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
