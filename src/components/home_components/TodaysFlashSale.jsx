import SectionHeader from "../SectionHeader";


import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Autoplay } from "swiper/modules";

// Product images
import HavicGameControllerImage from "../../assets/Products/havic-game-controller.png";
import KeyboardImage from "../../assets/Products/keyboard.png";
import MonitorImage from "../../assets/Products/monitor.png";
import ChairImage from "../../assets/Products/chair.png";
import RgbCoolerImage from "../../assets/Products/rgb-liquid-cooler.png";
import ProductCard from "../ProductCard";

const TodaysFlashSale = () => {
  const flashSaleProducts = [
    {
      id: 1,
      name: "Havic HV G-92 Gamepad",
      image: HavicGameControllerImage,
      imgAlt: "image of a game controller",
      offerPercentage: "-40%",
      currentPrice: "$120",
      oldPrice: "$160",
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
      currentPrice: "$100",
      oldPrice: "$130",
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
      currentPrice: "$370",
      oldPrice: "$400",
      ratings: {
        rate: 4,
        ratedBy: 99,
      },
    },
    {
      id: 4,
      name: "S-Series Comfort Chair ",
      image: ChairImage,
      imgAlt: "image of a chair",
      offerPercentage: "-25%",
      currentPrice: "$375",
      oldPrice: "$400",
      ratings: {
        rate: 5,
        ratedBy: 99,
      },
    },
    {
      id: 5,
      name: "RGB liquid CPU Cooler",
      image: RgbCoolerImage,
      imgAlt: "image of a cpu cooler",
      offerPercentage: "-40%",
      currentPrice: "$160",
      oldPrice: "$170",
      ratings: {
        rate: 4,
        ratedBy: 65,
      },
    },
  ];

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
        <button className="text-textWhite px-12 py-4 bg-red rounded mx-auto">
          View All Products
        </button>
      </div>
    </div>
  );
};

export default TodaysFlashSale;
