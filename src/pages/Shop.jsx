import { useSelector } from "react-redux";
import Breadcrumb from "../components/Breadcrumb";
import ProductCard from "../components/ProductCard";
const Shop = () => {
  const products = useSelector((state) => state.product);
    
  return (
    <>
      <Breadcrumb
        previousPage={"Home"}
        linkToPreviousPage={"/"}
        currentPage={"Shop"}
      />
      <div className="shop-page grid gap-y-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-10">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default Shop;
