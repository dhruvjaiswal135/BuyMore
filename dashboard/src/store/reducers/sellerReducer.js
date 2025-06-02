import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api/api";




export const get_seller_request = createAsyncThunk(
    "seller/get_seller_request",
    async ({perPage,page,searchValue}, { rejectWithValue, fulfillWithValue }) => {
        console.log("Fetching Categories:", { perPage, page, searchValue });

      try {
        const { data } = await api.get(`/request-seller-get?page=${page}&&searchValue=${searchValue}&&perPage=${perPage}`, 
            {withCredentials: true,});
        
        console.log(data);
        return fulfillWithValue(data);
      } catch (error) {
        //console.log(error.response.data);
        return rejectWithValue(error.response.data);
      }
    }
  );

export const sellerReducer = createSlice({
  name: 'seller',
  initialState: {
    successMessage: '',
      loader: false,
      errorMessage: '',  // Ensure errorMessage is always present
      sellers: [ ],
      totalSeller: 0,
      seller : '',
  },
  reducers: {
    messageClear: (state, _) => {
      state.errorMessage = "";
      
    },
  },
  extraReducers: (builder) => {
    builder

      .addCase(get_seller_request.fulfilled, (state, { payload }) => {
        state.totalSeller = payload.totalSeller;
        state.sellers = payload.sellers;
      })
      
  },
});

export const { messageClear } = sellerReducer.actions;
export default sellerReducer.reducer;
//console.log(categoryReducer.getInitialState());
