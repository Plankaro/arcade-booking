import { Booking } from "@/types/bookingTypes";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const applicantsApi = createApi({
  reducerPath: "applicants",
  baseQuery: fetchBaseQuery({ baseUrl: `https://arcade-server-17j1.onrender.com/api/v1/admin` }),
  // tagTypes: ["Booking"],
  endpoints: (builder) => ({
    getAllBooking: builder.query<Booking[], void>({
      query: () => ``,
      // providesTags: ["Booking"],
    }),
    getAllBookingHistory: builder.query<Booking[], void>({
      query: () => `/history`,
      // providesTags: ["Booking"],
    }),
    getAllProperty: builder.query<Booking[], string | null>({
      query: (type) => `/${type}`,
      // providesTags: ["Booking"],
    }),
    getDetails: builder.query<any, void>({
      query: () => `/details`,
      // providesTags: ["Booking"],
    }),
    confirmBooking: builder.mutation<any, any>({
      query: (data) => ({
        url: ``,
        method: "POST",
        body: data
      })
    }),
    lockBooking: builder.mutation<any, any>({
      query: (data) => ({
        url: `/lock`,
        method: "PUT",
        body: data
      })
    })

  }),
});


export const {
  useGetAllBookingQuery,
  useGetAllBookingHistoryQuery,
  useGetAllPropertyQuery,
  useGetDetailsQuery,
  useConfirmBookingMutation,
  useLockBookingMutation
} = applicantsApi;