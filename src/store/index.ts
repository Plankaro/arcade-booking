import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { rootReducer } from "@/store/root.reducer";
import { authApi } from "@/store/api/auth";
import { assessmentApi } from "./api/assessments";
import { userApi } from "./api/user";
import { applicantsApi } from "./api/admin";

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(authApi.middleware)
      .concat(assessmentApi.middleware)
      .concat(userApi.middleware)
      .concat(applicantsApi.middleware)
})

export default store;

setupListeners(store.dispatch)

export type AppDispatch = typeof store.dispatch
export const appDispatch = store.dispatch
export type AppStore = ReturnType<typeof store.getState>