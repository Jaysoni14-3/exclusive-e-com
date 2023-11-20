import bkashImage from "../../assets/checkout-images/bkash.png";
import mastercardImage from "../../assets/checkout-images/mastercard.png";
import visaImage from "../../assets/checkout-images/visa.png";

const PaymentOptions = ({ onOptionChange }) => {
  return (
    <>
      <div className="bank-option flex items-center gap-4">
        <input
          type="radio"
          id="bank"
          name="paymentOption"
          onChange={onOptionChange}
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
          name="paymentOption"
          value="cashOnDelivery"
          onChange={onOptionChange}
          defaultChecked
        />
        <label htmlFor="cashOnDelivery">Cash on delivery</label>
      </div>
    </>
  );
};

export default PaymentOptions;
