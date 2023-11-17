import SectionHeader from "../SectionHeader";

import PhoneImage from "../../assets/Categories/cellphone.png";
import ComputerImage from "../../assets/Categories/computer.png";
import SmartWatchImage from "../../assets/Categories/smartWatch.png";
import CameraImage from "../../assets/Categories/camera.png";
import HeadPhoneImage from "../../assets/Categories/headphone.png";
import GamingImage from "../../assets/Categories/gamepad.png";

const Categories = () => {
  const categoryItems = [
    {
      id: 1,
      img: PhoneImage,
      alt: "phone icon",
      text: "Phone",
    },
    {
      id: 2,
      img: ComputerImage,
      alt: "computer icon",
      text: "Computer",
    },
    {
      id: 3,
      img: SmartWatchImage,
      alt: "smartwatch icon",
      text: "SmartWatch",
    },
    {
      id: 4,
      img: CameraImage,
      alt: "camera icon",
      text: "Camera",
    },
    {
      id: 5,
      img: HeadPhoneImage,
      alt: "headphone icon",
      text: "Headphone",
    },
    {
      id: 6,
      img: GamingImage,
      alt: "gaming icon",
      text: "Gamimg",
    },
  ];

  return (
    <div className="categories my-[70px] ">
      <SectionHeader
        smallHeader={"Categories"}
        mainHeader={"Browse By Category"}
      />
      <div className="section-body mt-[60px] grid place-items-center min-[320px]:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-8">
        {categoryItems.map((category) => (
          <div
            key={category.id}
            className="group/category category-item border border-neutral-400 cursor-pointer flex flex-col items-center justify-center w-full max-w-[170px] h-[145px] rounded hover:bg-red transition-colors"
          >
            <img className="w-14 h-14" src={category.img} alt={category.alt} />
            <p className="text-black text-16px font-regular mt-4 group-hover/category:text-white">
              {category.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
