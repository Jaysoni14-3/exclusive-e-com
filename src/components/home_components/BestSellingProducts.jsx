import SectionHeader from "../SectionHeader";

import ProductCard from "../ProductCard";
import { useSelector } from "react-redux";

const BestSellingProducts = () => {
  const products = useSelector((state) => state.product);

  const bestProducts = products.filter(
    (product) => product.keyword === "best-selling"
  );

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
