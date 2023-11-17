import SectionHeader from "../SectionHeader";

import GucciCoatImage from "../../assets/Products/Gucci-coat.png";
import GucciBagImage from "../../assets/Products/Gucci-medium-bag.png";
import RgbCoolerImage from "../../assets/Products/rgb-liquid-cooler.png";
import BookShelfImage from "../../assets/Products/small-bookshelf.png";
import ProductCard from "../ProductCard";

const BestSellingProducts = () => {
  const bestProducts = [
    {
      id: 1,
      name: "The north coat",
      image: GucciCoatImage,
      imgAlt: "image of a game controller",
      currentPrice: "$260",
      oldPrice: "$360",
      ratings: {
        rate: 5,
        ratedBy: 65,
      },
    },
    {
      id: 2,
      name: "Gucci duffle bag",
      image: GucciBagImage,
      imgAlt: "image of a premium duffle bag",
      currentPrice: "$960",
      oldPrice: "$1160",
      ratings: {
        rate: 4,
        ratedBy: 70,
      },
    },
    {
      id: 3,
      name: "RGB liquid CPU Cooler",
      image: RgbCoolerImage,
      imgAlt: "image of a liquid cooler",
      currentPrice: "$160",
      oldPrice: "$170",
      ratings: {
        rate: 4,
        ratedBy: 65,
      },
    },
    {
      id: 4,
      name: "Small book shelf",
      image: BookShelfImage,
      imgAlt: "image of a Book shelf",
      currentPrice: "$360",
      ratings: {
        rate: 5,
        ratedBy: 67,
      },
    },
  ];

  return (
    <div className="mt-[70px] mb-[140px]">
      <SectionHeader
        smallHeader={"This Month"}
        mainHeader={"Best Selling Products"}
        buttonType={"red"}
        buttonText={"View All"}
      />
      <div className="section-body grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-[30px] mt-[60px]">
        {bestProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default BestSellingProducts;
