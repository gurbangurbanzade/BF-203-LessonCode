import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
export const getAllProducts = createAsyncThunk("getAllProducts", async () => {
  const response = await axios("https://northwind.vercel.app/api/products");
  return response.data;
});

export const getAllProductById = createAsyncThunk(
  "getAllProductById",
  async (id) => {
    const response = await axios(
      "https://northwind.vercel.app/api/products/" + id
    );
    return response.data;
  }
);
export const postProduct = createAsyncThunk("postProduct", async (obj) => {
  const response = await axios.post(
    "https://northwind.vercel.app/api/products/",
    obj
  );
  return response.data;
});

const initialState = {
  products: [],
  product: {},
  postProd: {},
  error: "",
  loading: false,
  name: "qurban",
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    updateProd: (state, action) => {
      state.products.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllProducts.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getAllProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;
    });
    builder.addCase(getAllProducts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    // get id
    builder.addCase(getAllProductById.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getAllProductById.fulfilled, (state, action) => {
      state.loading = false;
      state.product = action.payload;
    });
    builder.addCase(getAllProductById.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    // post prod
    builder.addCase(postProduct.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(postProduct.fulfilled, (state, action) => {
      state.loading = false;
      state.postProd = action.payload;
    });
    builder.addCase(postProduct.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

// Action creators are generated for each case reducer function
export const { updateProd } = productSlice.actions;

export default productSlice.reducer;
