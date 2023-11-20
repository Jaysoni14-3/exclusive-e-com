import StarGold from "../assets/star.png";
import heartImage from "../assets/heart-icon.png";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <Link
      to={`/product-details/${product.id}`}
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
        <p className="text-16px font-medium text-black">{product.name}</p>
        <div className="price-container flex items-center gap-3">
          <p className="current-price text-16px font-medium text-red">
            ${product.currentPrice}
          </p>
          <p className="old-price text-16px line-through font-medium text-textDarkGray">
            ${product.oldPrice}
          </p>
        </div>
        <div className="ratings-container flex gap-2">
          <div className="star-container flex items-center gap-1">
            <p>{product.ratings?.rate}</p>
            <img className="w-5 h-5" src={StarGold} alt="star icon" />
          </div>
          <div className="ratedBy">
            <p className="text-textDarkGray text-14px font-semiBold">
              ({product.ratings?.ratedBy})
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
