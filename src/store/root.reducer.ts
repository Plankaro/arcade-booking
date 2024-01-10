import { combineReducers } from "@reduxjs/toolkit";
import { authApi } from "@/store/api/auth";
import { assessmentApi } from "./api/assessments";
import { userApi } from "./api/user";
import { applicantsApi } from "./api/admin"
import { bookingApi } from "./api/booking";

export const rootReducer = combineReducers({
  [authApi.reducerPath]: authApi.reducer,
  [assessmentApi.reducerPath]: assessmentApi.reducer,
  [userApi.reducerPath]: userApi.reducer,
  [applicantsApi.reducerPath]: applicantsApi.reducer,
  [bookingApi.reducerPath]: bookingApi.reducer,
});