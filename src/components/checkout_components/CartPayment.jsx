import CartProductCard from "../CartProductCard";
import CartTotal from "../CartTotal";

import PaymentOptions from "./PaymentOptions";

const CartAndPayment = ({ cartItems, handlePlaceOrder, onOptionChange }) => {
  return (
    <div className="cart-details w-full md:w-1/2 flex flex-col gap-8">
      {/* Cart products  */}
      <div className="cart-products">
        {cartItems.map((product) => (
          <CartProductCard key={product.id} product={product} />
        ))}
      </div>
      {/* Total amount from the cart products */}
      <div className="cart-total">
        <CartTotal />
      </div>
      {/* Payment options */}
      <div className="payment-options flex flex-col gap-8">
        <PaymentOptions onOptionChange={onOptionChange} />
      </div>
      {/* Coupon code */}
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
      {/* Place order  */}
      <button onClick={handlePlaceOrder} className="red-button bg-red w-max">
        Place Order
      </button>
    </div>
  );
};

export default CartAndPayment;
