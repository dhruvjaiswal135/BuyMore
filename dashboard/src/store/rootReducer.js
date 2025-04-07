
import authReducer from "./reducers/authReducer";
import categoryReducer  from "./reducers/categoryReducer";

const rootReducer = {
  auth: authReducer,
  category: categoryReducer,
};

export default rootReducer;
