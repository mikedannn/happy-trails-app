import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/user/authSlice";

import userReducer from "./features/user/userSlice";

const store = configureStore({
    reducer: {
      auth: authReducer,
      user: userReducer,
      
    },
  });

export default store;