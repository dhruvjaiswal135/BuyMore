import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api/api";

export const categoryAdd = createAsyncThunk(
  "category/categoryAdd",
  async ({name,image, description, price}, { rejectWithValue, fulfillWithValue }) => {
    
    try {
        const formData = new FormData()
        formData.append('name', name)
        formData.append('image', image)
        formData.append("description",description);
        formData.append("price", price);
      const { data } = await api.post("/category-add", formData, {
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


export const get_category = createAsyncThunk(
    "category/get_category",
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
        const { data } = await api.get(`/category-get?page=${page}&&searchValue=${searchValue}&&perPage=${perPage}`, 
            {withCredentials: true,});
        
        console.log(data);
        return fulfillWithValue(data);
      } catch (error) {
        //console.log(error.response.data);
        return rejectWithValue(error.response.data);
      }
    }
  );

export const categoryReducer = createSlice({
  name: 'category',
  initialState: {
    successMessage: '',
      loader: false,
      errorMessage: '',  // Ensure errorMessage is always present
      categories: [ ],
      totalCategory: 0
  },
  reducers: {
    messageClear: (state, _) => {
      state.errorMessage = "";
      
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(categoryAdd.pending, (state, { payload }) => {
        state.loader = true;
      })
      .addCase(categoryAdd.rejected, (state, { payload }) => {
        state.loader = false;
        state.errorMessage = payload?.error ;
    })
    
      .addCase(categoryAdd.fulfilled, (state, { payload }) => {
        state.loader = false;
        state.successMessage = payload.message;
        state.categories = [...state.categories, payload.category]
      })

      .addCase(get_category.fulfilled, (state, { payload }) => {
        state.totalCategory = payload.totalCategory;
        state.categories = payload.categories;
      })
      
  },
});

export const { messageClear } = categoryReducer.actions;
export default categoryReducer.reducer;
//console.log(categoryReducer.getInitialState());
