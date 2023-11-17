import SectionHeader from "../SectionHeader";

import StarGold from "../../assets/star.png";
import heartImage from "../../assets/heart-icon.png";

import DogBiscuitsImage from "../../assets/Products/dog-biscuits.png";
import CanonCameraImage from "../../assets/Products/canon-camera.png";
import AsusLaptopImage from "../../assets/Products/asus-laptop.png";
import CurologyImage from "../../assets/Products/curology.png";
import KidsElectricCarImage from "../../assets/Products/kids-electric-car.png";
import FootballBootsImage from "../../assets/Products/football-boots.png";
import GameControllerImage from "../../assets/Products/fantech-game-controller.png";
import JacketImage from "../../assets/Products/Jacket.png";

const OurProducts = () => {
  const OurProducts = [
    {
      id: 1,
      name: "Breed Dry Dog Food",
      image: DogBiscuitsImage,
      imgAlt: "image of a doog food item",
      currentPrice: "$100",
      ratings: {
        rate: 3,
        ratedBy: 35,
      },
    },
    {
      id: 2,
      name: "CANON EOS DSLR Camera",
      image: CanonCameraImage,
      imgAlt: "image of a camera from canon",
      currentPrice: "$360",
      ratings: {
        rate: 4,
        ratedBy: 95,
      },
    },
    {
      id: 3,
      name: "ASUS FHD Gaming Laptop",
      image: AsusLaptopImage,
      imgAlt: "image of a laptop from asus",
      currentPrice: "$700",
      ratings: {
        rate: 5,
        ratedBy: 325,
      },
    },
    {
      id: 4,
      name: "Curology Product Set ",
      image: CurologyImage,
      imgAlt: "image of some cream",
      currentPrice: "$500",
      ratings: {
        rate: 4,
        ratedBy: 145,
      },
    },
    {
      id: 5,
      name: "Kids Electric Car",
      image: KidsElectricCarImage,
      imgAlt: "image of a kids electric car",
      currentPrice: "$960",
      ratings: {
        rate: 5,
        ratedBy: 65,
      },
    },
    {
      id: 6,
      name: "Jr. Zoom Soccer Cleats",
      image: FootballBootsImage,
      imgAlt: "image of a football shoes",
      currentPrice: "$1160",
      ratings: {
        rate: 5,
        ratedBy: 35,
      },
    },
    {
      id: 7,
      name: "GP11 Shooter USB Gamepad",
      image: GameControllerImage,
      imgAlt: "image of a game controller",
      currentPrice: "$660",
      ratings: {
        rate: 5,
        ratedBy: 55,
      },
    },
    {
      id: 8,
      name: "Quilted Satin Jacket",
      image: JacketImage,
      imgAlt: "image of a high quality Jacket ",
      currentPrice: "$660",
      ratings: {
        rate: 4,
        ratedBy: 55,
      },
    },
  ];

  return (
    <div className="our-products flex flex-col gap-[60px] mb-[70px]">
      <SectionHeader
        smallHeader={"Our Products"}
        mainHeader={"Explore Our Products"}
      />
      <div className="section-body flex flex-col">
        <div className="products-wrapper mb-[70px] grid place-items-center min-[320px]:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-[30px] ">
          {OurProducts.map((product) => (
            <div
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
                      {product.currentPrice}
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
            </div>
          ))}
        </div>
        <button className="red-button bg-red mx-auto">View All Products</button>
      </div>
    </div>
  );
};

export default OurProducts;
