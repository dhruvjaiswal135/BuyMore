import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";

//from admin login page to setup redux toolkit
const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware({
      serializableCheck: false,
    });
  },
  devTools: true,
});
//console.log("Store State:", store.getState());
export default store;
