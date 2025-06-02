
import authReducer from "./reducers/authReducer";
import categoryReducer  from "./reducers/categoryReducer";
import productReducer  from "./reducers/productReducer";
import sellerReducer  from "./reducers/sellerReducer";

const rootReducer = {
  auth: authReducer,
  category: categoryReducer,
  product: productReducer,
  seller: sellerReducer,
};

export default rootReducer;
