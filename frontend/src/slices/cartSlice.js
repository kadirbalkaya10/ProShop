import { createSlice } from "@reduxjs/toolkit";

const initialState = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : { cartItems: [] };

const addDecimals = (num) => {
  return (Math.round(num * 100) / 100).toFixed(2);
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      item.price = Number(item.price);
      item.qty = Number(item.quantity);

      const existItem = state.cartItems.find((x) => x._id === item._id);

      if (existItem) {
        state.cartItems = state.cartItems.map((x) =>
          x._id === existItem._id ? item : x
        );
      } else {
        state.cartItems = [...state.cartItems, item];
      }

      //Calculate items price
      const itemsPrice = state.cartItems.reduce(
        (acc, item) => acc + (item.price * 100 * item.qty) / 100,
        0
      );
      state.itemsPrice = addDecimals(itemsPrice);

      //Calculate shipping price(IF order is over 100$ then free,else 10$ shipping price)
      const shippingPrice = itemsPrice > 100 ? 0 : 10;
      state.shippingPrice = addDecimals(shippingPrice);
      //Calculate tax price(15%tax )
      const taxPrice = 0.15 * itemsPrice;
      state.taxPrice = addDecimals(taxPrice);
      //Calculate total price
      const totalPrice = itemsPrice + shippingPrice + taxPrice;
      state.totalPrice = addDecimals(totalPrice);
    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
