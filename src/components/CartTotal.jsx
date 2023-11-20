import { useSelector } from "react-redux";
import { getCartTotal } from "../store/cartSlice";
import HorizontalDevider from "./HorizontalDevider";

const CartTotal = () => {
  const cartItems = useSelector((state) => state.cart);

  var totalAmount = getCartTotal(cartItems);

  return (
    <div className="flex flex-col gap-4">
      <div className="subtotal-container flex flex-row items-center justify-between">
        <p className="text-14px font-semiBold text-black opacity-80">Subtotal: </p>
        <p className="text-14px font-semiBold text-black">${totalAmount}</p>
      </div>
      <HorizontalDevider />
      <div className="shipping-container flex flex-row items-center justify-between">
        <p className="text-14px font-semiBold text-black opacity-80">Shipping: </p>
        <p className="text-14px font-semiBold text-black">Free</p>
      </div>
      <HorizontalDevider />
      <div className="total-container flex flex-row items-center justify-between">
        <p className="text-16px font-semiBold text-black opacity-100">Total: </p>
        <p className="text-16px font-semiBold text-black">${totalAmount}</p>
      </div>
    </div>
  );
};

export default CartTotal;
