import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api/api";

export const add_product = createAsyncThunk(
  "product/add_product",
  async (product, { rejectWithValue, fulfillWithValue }) => {
    
    try {
        
      const { data } = await api.post("/product-add", product, {
        withCredentials: true,
      });
      
      //console.log(data);
      return fulfillWithValue(data);
    } catch (error) {
      //console.log(error.response.data);
      return rejectWithValue(error.response.data);
    }
  }
);


export const get_product = createAsyncThunk(
    "product/get_product",
    // async ({perPage,page,searchValue}, { rejectWithValue, fulfillWithValue }) => {
    //     console.log("Fetching Categories:", { perPage, page, searchValue });

    async (
        args,
        { rejectWithValue, fulfillWithValue }
      ) => {
        // fallback if args is undefined
        const {
          perPage = 4,
          page = 1,
          searchValue = ""
        } = args || {};

      try {
        const { data } = await api.get(`/product-get?page=${page}&&searchValue=${searchValue}&&perPage=${perPage}`, 
            {withCredentials: true,});
        
        console.log(data);
        return fulfillWithValue(data);
      } catch (error) {
        //console.log(error.response.data);
        return rejectWithValue(error.response.data);
      }
    }
  );

export const productReducer = createSlice({
  name: 'product',
  initialState: {
      successMessage: '',
      loader: false,
      errorMessage: '',  // Ensure errorMessage is always present
      products: [ ],
      totalProduct: 0
  },
  reducers: {
    messageClear: (state, _) => {
      state.errorMessage = "";
      
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(add_product.pending, (state, { payload }) => {
        state.loader = true;
      })
      .addCase(add_product.rejected, (state, { payload }) => {
        state.loader = false;
        state.errorMessage = payload?.error ;
    })
    
      .addCase(add_product.fulfilled, (state, { payload }) => {
        state.loader = false;
        state.successMessage = payload.message;
        state.products = [...state.products, payload.product]
      })

      .addCase(get_product.fulfilled, (state, { payload }) => {
        state.totalProduct = payload.totalProduct;
        state.products = payload.categories;
      })
      
  },
});

export const { messageClear } = productReducer.actions;
export default productReducer.reducer;
//console.log(categoryReducer.getInitialState());
