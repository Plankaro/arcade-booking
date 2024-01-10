import { Booking } from "@/types/bookingTypes";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const applicantsApi = createApi({
  reducerPath: "applicants",
  baseQuery: fetchBaseQuery({ baseUrl: `/api/v1/admin` }),
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
    getAllProperty: builder.query<Booking[], void>({
      query: () => `/property`,
      // providesTags: ["Booking"],
    }),
    confirmBooking: builder.mutation<any, any>({
      query: (data) => ({
        url: ``,
        method: "POST",
        body: data
      })
    })

  }),
});


export const {
  useGetAllBookingQuery,
  useGetAllBookingHistoryQuery,
  useGetAllPropertyQuery,
  useConfirmBookingMutation
} = applicantsApi;