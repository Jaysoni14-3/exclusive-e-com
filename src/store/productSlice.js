import { createSlice } from "@reduxjs/toolkit";
import { productData } from "../productData";

const initialState = productData;

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
});

export default productSlice.reducer;
