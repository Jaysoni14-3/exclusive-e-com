import Breadcrumb from "../components/Breadcrumb";

import aboutUsImage from "../assets/about-us.png";
import WhyUs from "../components/home_components/WhyUs";

const About = () => {
  return (
    <div className="aboutpage">
      <Breadcrumb
        linkToPreviousPage={"/"}
        previousPage={"Home"}
        currentPage={"About "}
      />
      <div className="about-wrapper flex flex-row items-center gap-8 my-10">
        <div className="text-container max-w-lg w-full flex flex-col gap-10 ">
          <h1 className="text-48px text-black font-semiBold">Our Story</h1>
          <div className="content flex flex-col gap-6">
            <p className="text-16px leading-7 text-black font-regular">
              Step into a world where sophistication meets simplicity. Exclusive
              is more than just a marketplace; it’s a celebration of style and
              refined taste. We meticulously curate our collections, handpicking
              each item to ensure that it reflects the essence of exclusivity.
              From fashion to home decor, every product tells a story of
              craftsmanship and timeless elegance.
            </p>
            <p className="text-16px text-black font-regular">
              Exclusive is more than just a shopping platform; it’s a
              destination where your preferences are understood, your choices
              are valued, and your experience is unparalleled. We invite you to
              explore a world where luxury meets convenience, where each
              purchase is a statement of your unique style.
            </p>
          </div>
        </div>
        <figure className="image-container">
          <img
            className="w-full rounded"
            src={aboutUsImage}
            alt="image consists company laptops"
          />
        </figure>
      </div>
      <div className="why-us mt-[140px]">
        <WhyUs />
      </div>
    </div>
  );
};

export default About;
