import HorizontalDevider from "../components/HorizontalDevider";
import BestSellingProducts from "../components/home_components/BestSellingProducts";
import Categories from "../components/home_components/Categories";
import FeaturedProduct from "../components/home_components/FeaturedProduct";
import HeroSwiper from "../components/home_components/HeroSwiper";
import NewArrivals from "../components/home_components/NewArrivals";
import OurProducts from "../components/home_components/OurProducts";
import TodaysFlashSale from "../components/home_components/TodaysFlashSale";
import WhyUs from "../components/home_components/WhyUs";

const Home = () => {
  return (
    <div className="homepage">
      <HeroSwiper />
      <TodaysFlashSale />
      <HorizontalDevider />
      <Categories />
      <HorizontalDevider />
      <BestSellingProducts />
      <FeaturedProduct />
      <OurProducts />
      <HorizontalDevider />
      <NewArrivals />
      <WhyUs />
    </div>
  );
};

export default Home;
