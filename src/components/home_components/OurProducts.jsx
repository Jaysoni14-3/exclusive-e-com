import SectionHeader from "../SectionHeader";

import heartImage from "../../assets/heart-icon.png";
import StarGold from "../../assets/star.png";

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const OurProducts = () => {
  const products = useSelector((state) => state.product);

  const OurProducts = products.filter(
    (product) => product.keyword === "our-products"
  );

  return (
    <div className="our-products flex flex-col gap-[60px] mb-[70px]">
      <SectionHeader
        smallHeader={"Our Products"}
        mainHeader={"Explore Our Products"}
      />
      <div className="section-body flex flex-col">
        <div className="products-wrapper mb-[70px] grid place-items-center min-[320px]:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-[30px] ">
          {OurProducts.map((product) => (
            <Link
              to={`/product-details/${product.id}`}
              key={product.id}
              className="product-card relative flex flex-col gap-4 w-full max-w-[270px]"
            >
              {product.offerPercentage && (
                <div className="offer-percentage absolute top-3 left-3 px-3 py-1 bg-red rounded">
                  <p className="text-12px font-regular text-white">
                    {product.offerPercentage}
                  </p>
                </div>
              )}
              <div className="favourite-btn absolute top-3 right-3 rounded-full cursor-pointer bg-white p-1">
                <img src={heartImage} className="w-6 h-5" alt="" />
              </div>
              <figure className="image-container flex justify-center overflow-hidden items-center rounded bg-secondary w-full max-w-[270px] h-[250px]">
                <img
                  className="object-contain object-center w-3/4 h-3/4"
                  src={product.image}
                  alt={product.imgAlt}
                />
              </figure>
              <div className="product-details-wrapper flex flex-col gap-2">
                <p className="text-16px font-medium text-black">
                  {product.name}
                </p>
                <div className="price-rating-container flex items-center gap-2">
                  <div className="price-container">
                    <p className="current-price text-16px font-medium text-red">
                      ${product.currentPrice}
                    </p>
                  </div>
                  <div className="star-container flex items-center gap-1">
                    <p>{product.ratings.rate}</p>
                    <img className="w-5 h-5" src={StarGold} alt="star icon" />
                  </div>
                  <div className="ratedBy">
                    <p className="text-textDarkGray text-14px font-semiBold">
                      ({product.ratings.ratedBy})
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <button className="red-button bg-red mx-auto">View All Products</button>
      </div>
    </div>
  );
};

export default OurProducts;
