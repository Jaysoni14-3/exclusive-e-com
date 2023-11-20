import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const isItemInCart = state.find(
        (cartItem) => cartItem.id === action.payload.id
      );
      if (isItemInCart) {
        console.log("Product already in cart");
      } else {
        // console.log(action.payload.quantity + 1);
        state.push({
          ...action.payload,
          quantity: action.payload.quantity + 1,
          subTotal: action.payload.currentPrice,
        });
      }
    },
    removeFromCart(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
    increaseQuantity(state, action) {
      const currentProduct = state.find((item) => item.id === action.payload);
      if (currentProduct) {
        currentProduct.quantity += 1;
        currentProduct.subTotal =
          currentProduct.currentPrice * currentProduct.quantity;
      }
    },
    decreaseQuantity(state, action) {
      const currentProduct = state.find((item) => item.id === action.payload);
      if (currentProduct) {
        if (currentProduct.quantity === 1) {
          const confirmMessage =
            "Do you want to remove this product from your cart?";
          if (confirm(confirmMessage)) {
            return state.filter((item) => item.id !== action.payload);
          } else {
            return;
          }
        } else {
          currentProduct.quantity = currentProduct.quantity - 1;
          currentProduct.subTotal =
            currentProduct.currentPrice * currentProduct.quantity;
        }
      }
    },
  },
});

// To get the total amount from the products in cart
export const getCartTotal = (cartItems) => {
  let totalAmount = 0;
  let ammount = 0;

  cartItems?.map((item) => {
    ammount = item.subTotal;
    totalAmount += ammount;
  });

  return Number(totalAmount).toFixed(2);
};

export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;
