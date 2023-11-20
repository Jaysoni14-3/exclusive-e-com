import { useDispatch, useSelector } from "react-redux";

import iconMinus from "../assets/icon-minus.png";
import iconPlus from "../assets/icon-plus.png";

import { Link } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";

import HorizontalDevider from "../components/HorizontalDevider";

import {
  decreaseQuantity,
  getCartTotal,
  increaseQuantity,
  removeFromCart,
} from "../store/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);

  var totalAmount = getCartTotal(cartItems);

  const handleIncreaseQuantity = (productID) => {
    dispatch(increaseQuantity(parseInt(productID)));
  };

  const handleDecreaseQuantity = (productID) => {
    dispatch(decreaseQuantity(parseInt(productID)));
  };

  const handleRemove = (productID) => {
    const confirmMessage = "Do you want to remove this product from your cart?";
    if (confirm(confirmMessage)) {
      dispatch(removeFromCart(parseInt(productID)));
    } else {
      return;
    }
  };

  return (
    <>
      <Breadcrumb
        linkToPreviousPage={"/"}
        previousPage={"Home"}
        currentPage={"Cart"}
      />
      {cartItems.length === 0 ? (
        <div className="flex gap-6 flex-col my-10 ">
          <h1 className="text-48px font-semiBold text-center">
            Your cart is empty
          </h1>
          <Link to={"/"} className="red-button bg-red mx-auto">
            Shop Now
          </Link>
        </div>
      ) : (
        <div className="cartpage flex flex-col md:flex-row gap-4 my-10">
          <div className="cartitem-body flex flex-col gap-4 w-full md:w-3/4">
            {cartItems.map((product) => (
              <div
                key={product.id}
                className=" relative cartitem-card border flex gap-6 p-4"
              >
                <figure className=" w-36 flex justify-center items-center">
                  <img
                    className="w-4/5"
                    src={product.image}
                    alt={product.imgAlt}
                  />
                </figure>

                <div className="product-details flex w-full flex-col">
                  <div className="name mb-2">
                    <p className="text-16px text-black">{product.name}</p>
                  </div>
                  <div className="subtotal flex flex-col sm:flex-row sm:gap-4">
                    <p className="text-16px text-black">${product.subTotal}</p>
                    <span className="text-14px font-light">
                      (${product.currentPrice} * {product.quantity})
                    </span>
                  </div>
                  <div className="product-quantity text-center flex flex-row mt-4">
                    <button
                      onClick={() => handleDecreaseQuantity(product.id)}
                      className=" border border-black hover:bg-red overflow-hidden rounded-l-md transition-colors"
                    >
                      <img
                        className="w-8 p-1"
                        src={iconMinus}
                        alt="minus icon"
                      />
                    </button>
                    <span className="w-10 text-center border-t border-b border-black py-2">
                      {product.quantity}
                    </span>
                    <button
                      onClick={() => handleIncreaseQuantity(product.id)}
                      className=" border border-black hover:bg-red overflow-hidden rounded-r-md transition-colors"
                    >
                      <img className="w-8 p-1" src={iconPlus} alt="plus icon" />
                    </button>
                  </div>
                  <button
                    onClick={() => handleRemove(product.id)}
                    className="w-max mt-4 text-14px text-red hover:underline"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
          {/* Cart Total */}
          <div className="cart-total h-max ms-auto w-full md:w-3/12 flex gap-6 flex-col border border-black px-6 py-8">
            <h3 className="text-20px font-medium">Cart Total</h3>
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
            <Link
              to="/checkout"
              className="text-16px text-textWhite font-medium px-4 py-4 rounded w-full bg-red text-center"
            >
              Proceed to checkout
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
