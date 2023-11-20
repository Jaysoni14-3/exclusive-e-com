import Modal from "react-modal";
import { useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";

import Breadcrumb from "../components/Breadcrumb";

import { useEffect, useState } from "react";

import closeIcon from "../assets/close.png";
import CartProductCard from "../components/CartProductCard";
import CartTotal from "../components/CartTotal";
import CartAndPayment from "../components/checkout_components/CartPayment";
import CheckoutUserDetails from "../components/checkout_components/CheckoutUserDetails";

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
  const [modalIsOpen, setIsOpen] = useState(false);
  const [paymentOption, setPaymentOption] = useState("cashOnDelivery");

  // gettings the cart items from redux store
  const cartItems = useSelector((state) => state.cart);

  // To prevent the body scroll when the modal is open
  useEffect(() => {
    if (modalIsOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = "15px";
    }
    return () => {
      document.body.style.overflow = "unset";
      document.body.style.paddingRight = "0px";
    };
  }, [modalIsOpen]);

  // If cart has no items in it the dont allow the user to access the checkout page
  const navigate = useNavigate();
  useEffect(() => {
    if (cartItems.length === 0) {
      navigate("/");
    }
  }, [cartItems.length, navigate]);

  const onOptionChange = (e) => {
    setPaymentOption(e.target.value);
  };

  const date = new Date();
  const month = date.getUTCMonth();
  const todayDate = date.getUTCDate();
  const year = date.getFullYear();

  const orderDate = `${todayDate}/${month}/${year}`;

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  Modal.setAppElement("#root");

  // const cartItems = useSelector((state) => state.cart);

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
    // todo on submit validate if all the required fields are filled and open the modal
    if (
      userDetails.firstName &&
      userDetails.streetAddress &&
      userDetails.townCity &&
      userDetails.phoneNumber &&
      userDetails.emailAddress
    ) {
      openModal();
    } else {
      alert("Please fill the marked fields to place an order");
    }
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
          <CheckoutUserDetails
            userDetails={userDetails}
            isSelected={isSelected}
            handleChange={handleChange}
            handleCheckboxChange={handleCheckboxChange}
          />
        </div>

        {/* Cart details */}
        <CartAndPayment
          handlePlaceOrder={handlePlaceOrder}
          onOptionChange={onOptionChange}
          cartItems={cartItems}
        />
      </div>

      {/* Modal */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Checkout modal"
        style={{
          overlay: {
            backgroundColor: "rgba(0,0,0,0.85)",
          },
        }}
      >
        <div className="modal-header flex flex-row items-center justify-between my-2">
          <h2 className="text-20px">Hello {userDetails.firstName},</h2>
          <button
            onClick={closeModal}
            className="icon-container rounded-full bg-red"
          >
            <img className="w-8 p-2 " src={closeIcon} alt="Close icon" />
          </button>
        </div>
        <hr />
        <div className="modal-body">
          <div className="confirmation-message my-4">
            <p className="text-black opacity-80">
              Your order has been confirmed and will be shipped within the next
              two days.
            </p>
          </div>
          {/* <hr /> */}
          <div className="order-details flex flex-col gap-4 sm:flex-row justify-between my-4">
            <div className="order-date flex flex-col gap-1">
              <span className="text-black opacity-50 font-semiBold">
                Order Date
              </span>
              <p>{orderDate}</p>
            </div>
            <div className="order-payment flex flex-col gap-1">
              <span className="text-black opacity-50 font-semiBold">
                Payment
              </span>
              <p>
                {paymentOption === "cashOnDelivery"
                  ? "Cash on delivery"
                  : "Bank payment"}
              </p>
            </div>
            <div className="order-shipping-address flex flex-col gap-1">
              <span className="text-black opacity-50 font-semiBold">
                Shipping Address
              </span>
              <p>
                {userDetails.streetAddress}, {userDetails.townCity}
              </p>
            </div>
          </div>
          <hr />
          <div className="cart-items">
            <div className="row"></div>
            {cartItems.map((product) => (
              <CartProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="cart-total max-w-sm ms-auto my-4">
            <CartTotal />
          </div>
          <div className="order-placed-message mt-4">
            <p className="text-black opacity-80">
              We&apos;ll be sending a shipping confirmation email when the items
              shipped successfully
            </p>
            <p className="text-14px text-black font-semiBold mt-2">
              Thank you for shopping with us
            </p>
            <p className="text-14px text-black font-semiBold">
              Exclusive Team.
            </p>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Checkout;
