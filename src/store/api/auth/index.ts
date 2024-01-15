import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// const baseUrl = process.env.FRONTEND_URL ?? "http://localhost:3000"
// console.log("auth base url:", {baseUrl, envUrl:process.env.FRONTEND_URL});

export const authApi = createApi({
  reducerPath: "auth",
  baseQuery: fetchBaseQuery({ baseUrl: `/api/v1` }),
  tagTypes: ["Session"],
  endpoints: (builder) => ({
    signIn: builder.mutation<any, any>({
      query: (data) => ({
        url: `/auth/sign-in?role=ADMIN`,
        method: "POST",
        body: { ...data },
      }),
      invalidatesTags: ["Session"],
    }),
    getSession: builder.query<any, void>({
      query: () => '/auth/session?role=ADMIN',
      providesTags: ["Session"],
    }),
    signOut: builder.mutation<any, void>({
      query: () => ({
        url: `/auth/sign-out`,
        method: "POST",
      }),
      invalidatesTags: ["Session"],
    }),
    changePassword: builder.mutation<any, { oldPassword: string, newPassword: string, confirmNewPassword: string }>({
      query: ({ confirmNewPassword, ...rest }) => ({
        url: `/user/change-password`,
        method: "PATCH",
        body: { ...rest },
      }),
      // invalidatesTags: ["Session"],
    }),
    sendOtp: builder.mutation<any, { email: string }>({
      query: (data) => ({
        url: `/user/sendotp`,
        method: "POST",
        body: { ...data },
      }),
      // invalidatesTags: ["Session"],
    }),
    verifyOtp: builder.mutation<any, { email: string, otp: number }>({
      query: (data) => ({
        url: `/user/verifyotp`,
        method: "POST",
        body: { ...data },
      }),
      // invalidatesTags: ["Session"],
    }),
    forgetPassword: builder.mutation<any, { email: string, newPassword: string }>({
      query: (data) => ({
        url: `/user/forgotpassword`,
        method: "PATCH",
        body: { email: data.email, newPassword: data.newPassword },
      }),
      // invalidatesTags: ["Session"],
    }),
  }),
})

export const {
  useSignInMutation,
  useGetSessionQuery,
  useSignOutMutation,
  useChangePasswordMutation,
  useSendOtpMutation,
  useVerifyOtpMutation,
  useForgetPasswordMutation,
} = authApi

export const { getSession } = authApi.endpoints