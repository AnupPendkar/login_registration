import { configureStore } from '@reduxjs/toolkit'
import userReducer from "./UserSplice";

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
})