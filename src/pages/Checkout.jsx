import { useSelector } from "react-redux";
import Breadcrumb from "../components/Breadcrumb";
import HorizontalDevider from "../components/HorizontalDevider";
import { getCartTotal } from "../store/cartSlice";

import { useState } from "react";
import bkashImage from "../assets/checkout-images/bkash.png";
import mastercardImage from "../assets/checkout-images/mastercard.png";
import visaImage from "../assets/checkout-images/visa.png";

const Checkout = () => {
  var initialValue;

  if (localStorage.getItem("USER_DETAILS") !== null) {
    initialValue = JSON.parse(localStorage.getItem("USER_DETAILS"));
  } else {
    initialValue = {
      firstName: "",
      companyName: "",
      streetAddress: "",
      apartment: "",
      townCity: "",
      phoneNumber: "",
      emailAddress: "",
    };
  }

  const [userDetails, setUserDetails] = useState(initialValue);

  const [isSelected, setIsSelected] = useState(false);

  const cartItems = useSelector((state) => state.cart);

  var totalAmount = getCartTotal(cartItems);

  const handleChange = (e) => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (e) => {
    if (e.target.checked) {
      localStorage.setItem("USER_DETAILS", JSON.stringify(userDetails));
    } else {
      localStorage.removeItem("USER_DETAILS");
    }
    setIsSelected((current) => !current);
  };

  const handlePlaceOrder = () => {
    // todo" on submit validate if all the required fields are filled and the change the
    // route to order placed with the total amount and cart details
    console.log(userDetails);
  };

  return (
    <div className="checkoutpage">
      <Breadcrumb
        linkToPreviousPage={"/"}
        previousPage={"Home"}
        currentPage={"Checkout"}
      />
      <div className="checkout-wrapper flex gap-8 md:gap-4 flex-col md:flex-row my-10">
        <div className="checkout-details w-full md:w-1/2">
          <h1 className="text-36px font-medium text-black">Billing Details</h1>

          <div className="billing-details-container mt-8 flex flex-col gap-8 w-full max-w-md">
            <div className="input-field flex flex-col">
              <label
                className="text-16px font-regular text-textDarkGray"
                htmlFor="firstName"
              >
                First Name <sup className="text-red">*</sup>
              </label>
              <input
                className="bg-secondary px-4 py-2 rounded"
                type="text"
                id="firstName"
                name="firstName"
                value={userDetails.firstName}
                onChange={handleChange}
              />
            </div>

            <div className="input-field flex flex-col">
              <label
                className="text-16px font-regular text-textDarkGray"
                htmlFor="companyName"
              >
                Company Name
              </label>
              <input
                className="bg-secondary px-4 py-2 rounded"
                type="text"
                id="companyName"
                name="companyName"
                value={userDetails.companyName}
                onChange={handleChange}
              />
            </div>

            <div className="input-field flex flex-col">
              <label
                className="text-16px font-regular text-textDarkGray"
                htmlFor="streetAddress"
              >
                Street Address <sup className="text-red">*</sup>
              </label>
              <input
                className="bg-secondary px-4 py-2 rounded"
                type="text"
                id="streetAddress"
                name="streetAddress"
                value={userDetails.streetAddress}
                onChange={handleChange}
              />
            </div>

            <div className="input-field flex flex-col">
              <label
                className="text-16px font-regular text-textDarkGray"
                htmlFor="apartment"
              >
                Apartment, floor, etc. (optional)
              </label>
              <input
                className="bg-secondary px-4 py-2 rounded"
                type="text"
                id="apartment"
                name="apartment"
                value={userDetails.apartment}
                onChange={handleChange}
              />
            </div>

            <div className="input-field flex flex-col">
              <label
                className="text-16px font-regular text-textDarkGray"
                htmlFor="townCity"
              >
                Town/City <sup className="text-red">*</sup>
              </label>
              <input
                className="bg-secondary px-4 py-2 rounded"
                type="text"
                id="townCity"
                name="townCity"
                value={userDetails.townCity}
                onChange={handleChange}
              />
            </div>

            <div className="input-field flex flex-col">
              <label
                className="text-16px font-regular text-textDarkGray"
                htmlFor="phoneNumber"
              >
                Phone Number <sup className="text-red">*</sup>
              </label>
              <input
                className="bg-secondary px-4 py-2 rounded"
                type="number"
                id="phoneNumber"
                name="phoneNumber"
                value={userDetails.phoneNumber}
                onChange={handleChange}
              />
            </div>

            <div className="input-field flex flex-col">
              <label
                className="text-16px font-regular text-textDarkGray"
                htmlFor="emailAddress"
              >
                Email Address <sup className="text-red">*</sup>
              </label>
              <input
                className="bg-secondary px-4 py-2 rounded"
                type="email"
                id="emailAddress"
                name="emailAddress"
                value={userDetails.emailAddress}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="save-billing-details-container flex items-center gap-4 mt-6">
            <input
              type="checkbox"
              name="save-billing-details"
              id="save-billing-details"
              value={isSelected}
              onChange={handleCheckboxChange}
            />
            <label className="select-none" htmlFor="save-billing-details">
              Save this information for faster check-out next time
            </label>
          </div>
        </div>
        <div className="cart-details w-full md:w-1/2 flex flex-col gap-8">
          <div className="cart-products">
            {cartItems.map((product) => (
              <div
                key={product.id}
                className="checkout-product-cart flex items-center gap-6 py-2"
              >
                <figure className="image-container w-14 h-14 flex justify-center items-center">
                  <img
                    className="w-full h-auto"
                    src={product.image}
                    alt={product.imgAlt}
                  />
                </figure>
                <div className="producrt-details flex items-center justify-between w-full">
                  <p className="text-16px text-black font-regular">
                    {product.name}
                  </p>
                  <p className="text-16px text-black font-regular">
                    ${product.subTotal}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-total">
            <div className="flex flex-col gap-4">
              <div className="subtotal-container flex flex-row items-center justify-between">
                <p className="text-18px font-regular text-black">Subtotal: </p>
                <p className="text-18px font-regular text-black">
                  ${totalAmount}
                </p>
              </div>
              <HorizontalDevider />
              <div className="shipping-container flex flex-row items-center justify-between">
                <p className="text-18px font-regular text-black">Shipping: </p>
                <p className="text-18px font-regular text-black">Free</p>
              </div>
              <HorizontalDevider />
              <div className="total-container flex flex-row items-center justify-between">
                <p className="text-18px font-regular text-black">Total: </p>
                <p className="text-18px font-regular text-black">
                  ${totalAmount}
                </p>
              </div>
            </div>
          </div>
          <div className="payment-options flex flex-col gap-8">
            <div className="bankp-option flex items-center gap-4">
              <input
                type="radio"
                id="bank"
                name="payment_option"
                value="bank"
              />
              <label htmlFor="bank">Bank</label>
              <figure className="icon ms-auto">
                <img className="w-11" src={bkashImage} alt="bkash" />
              </figure>
              <figure className="icon">
                <img className="w-11" src={mastercardImage} alt="mastercard" />
              </figure>
              <figure className="icon">
                <img className="w-11" src={visaImage} alt="visa" />
              </figure>
            </div>
            <div className="cod-option flex items-center gap-4">
              <input
                type="radio"
                id="cashOnDelivery"
                name="payment_option"
                value="cashOnDelivery"
                defaultChecked
              />
              <label htmlFor="cashOnDelivery">Cash on delivery</label>
            </div>
          </div>
          <div className="coupon-code flex flex-wrap flex-col items-start sm:items-center sm:flex-row gap-4">
            <input
              className="py-4 px-6 border border-black rounded"
              type="text"
              id="couponCode"
              name="couponCode"
              placeholder="Coupon Code"
            />
            <button className=" text-white px-12 py-4 rounded whitespace-nowrap bg-red border border-red">
              Apply Coupon
            </button>
          </div>
          <button
            onClick={handlePlaceOrder}
            className="red-button bg-red  w-max"
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
