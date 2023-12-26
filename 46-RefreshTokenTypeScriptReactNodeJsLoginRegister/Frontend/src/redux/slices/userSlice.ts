import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import Products from "../../components/products/index";
import axios from "axios";

export interface ProductT {
  name: string;
}

export interface UserStateTy {
  products: ProductT[];
  isLogin: boolean;
}

export const getAllProducts = createAsyncThunk<ProductT[], void>(
  "/getProducts",
  async () => {
    const token = JSON.parse(localStorage.getItem("token") || "{}");
    const products = await axios("http://localhost:5000/products", {
      headers: {
        Authorization: `barear ${token.token}`,
        RefreshToken: `barear ${token.refToken}`,
        // RefreshToken: `barear asdfghjkhjgfd`,
      },
    });

    return products.data;
  }
);

const initialState: UserStateTy = {
  products: [],
  isLogin: true,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isLogin = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllProducts.fulfilled, (state, action) => {
      state.products = action.payload;
    });
  },
});

// Action creators are generated for each case reducer function
export const { login } = userSlice.actions;

export default userSlice.reducer;
