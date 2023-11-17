import JblSpeaker from "../../assets/Products/jbl-speaker.png";

const FeaturedProduct = () => {
  return (
    <div className="featured-product relative flex gap-4 flex-col-reverse md:flex-row p-4 md:px-14 py-12 bg-black mb-[140px]">
      <div className="product-description md:w-1/2">
        <p className="text-16px font-semiBold text-greenColor">Speaker</p>
        <h2 className="responsive-big-text mt-8 mb-10">
          Enhance Your Music Experience
        </h2>
        <button className="px-12 py-4 text-textWhite font-medium bg-greenColor rouded">
          Buy Now!
        </button>
      </div>
      <figure className="relative product-image md:w-1/2">
        <div className="absolute inset-0 bg-[#d9d9d9] opacity-30 blur-2xl w-full h-full rounded-full"></div>
        <img
          className="relative z-10"
          src={JblSpeaker}
          alt="An image of speaker from jbl"
        />
      </figure>
    </div>
  );
};

export default FeaturedProduct;
