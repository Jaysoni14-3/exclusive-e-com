import SectionHeader from "../SectionHeader";

import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import ProductCard from "../ProductCard";

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const TodaysFlashSale = () => {
  const products = useSelector((state) => state.product);

  const flashSaleProducts = products.filter(
    (product) => product.keyword === "flash-sale"
  );

  return (
    <div>
      <SectionHeader smallHeader={"Today's"} mainHeader={"Flash Sales"} />
      <div className="section-body  flex flex-col mb-[70px]">
        <Swiper
          slidesPerView={2}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: true,
          }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
          navigation={false}
          modules={[Autoplay]}
          className="mt-10 mb-[60px] select-none w-full h-full "
        >
          {flashSaleProducts.map((product) => (
            <SwiperSlide key={product.id}>
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
        <Link
          to={"/shop"}
          className="text-textWhite px-12 py-4 bg-red rounded mx-auto"
        >
          View All Products
        </Link>
      </div>
    </div>
  );
};

export default TodaysFlashSale;
