import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

import iconRight from "../../assets/icons-white-arrow-right.png";
import appleLogo from "../../assets/apple-logo.png";
import Iphone15Image from "../../assets/Products/iphone-15-1.png";
import MackbookImage from "../../assets/Products/Macbook-image.png";
import AirpodsImage from "../../assets/Products/airpods-image.webp";

const HeroSwiper = () => {
  const heroProducts = [
    {
      id: 1,
      name: "iPhone 15 series",
      brand: appleLogo,
      offer: "Up to 10% off voucher",
      img: Iphone15Image,
    },
    {
      id: 2,
      name: "Mackbook pro",
      brand: appleLogo,
      offer: "Flat 15% off voucher",
      img: MackbookImage,
    },
    {
      id: 3,
      name: "Apple Airpods Pro",
      brand: appleLogo,
      offer: "Up to 30% off voucher",
      img: AirpodsImage,
    },
  ];

  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mt-10 mb-[70px] select-none w-full h-full "
      >
        {heroProducts.map((product) => (
          <SwiperSlide key={product.id} className="bg-black h-full">
            <div className="hero-product-card flex flex-col-reverse sm:flex-row gap-4 justify-between px-4 py-4 md:py-14 md:px-16">
              <div className="text-container max-w-xs w-full">
                <div className="product-header flex items-center gap-4">
                  <img src={product.brand} className="w-8" alt="apple logo" />
                  <p className="text-textWhite">{product.name}</p>
                </div>
                <div className="product-offer mt-4 mb-6">
                  <h1 className="responsive-big-text">
                    {product.offer}
                  </h1>
                </div>
                <a href="#" className="shop-now-button flex items-center gap-2">
                  <span className="text-textWhite font-medium text-16px underline ">
                    Shop Now
                  </span>
                  <img src={iconRight} className="w-6 h-6" alt="icon right" />
                </a>
              </div>
              <figure className="image-container max-w-sm min-h-[260px] overflow-hidden max-h-64 w-full">
                <img
                  src={product.img}
                  className="w-full h-full object-contain object-center"
                  alt="iPhone 15 image"
                />
              </figure>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default HeroSwiper;
