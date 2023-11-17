import IconDelivery from "../../assets/icon-delivery.png";
import IconService from "../../assets/icon-service.png";
import IconSecure from "../../assets/icon-secure.png";

const WhyUs = () => {
  const whyUsData = [
    {
      icon: IconDelivery,
      alt: "icon indicating fast delivery",
      header: "FREE AND FAST DELIVERY",
      bodyText: "Free delivery for all orders over $140",
    },
    {
      icon: IconService,
      alt: "icon indicating good customer services",
      header: "24/7 CUSTOMER SERVICE",
      bodyText: "Friendly 24/7 customer support",
    },
    {
      icon: IconSecure,
      alt: "icon indicating assurity",
      header: "MONEY BACK GUARANTEE",
      bodyText: "We reurn money within 30 days",
    },
  ];

  return (
    <div className="why-us mb-[140px] grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
      {whyUsData.map((item, index) => (
        <div
          key={index}
          className="why-us-card flex flex-col justify-center items-center"
        >
          <div className="icon-container bg-[#2F2E30] rounded-full p-3 mb-6">
            <figure className="image-container bg-black rounded-full p-2">
              <img className="w-10 h-10" src={item.icon} alt={item.alt} />
            </figure>
          </div>
          <div className="text-container flex flex-col gap-2">
            <p className="text-20px font-semiBold text-black text-center">
              {item.header}
            </p>
            <p className="text-14px font-regular text-black text-center">
              {item.bodyText}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WhyUs;
