import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Building } from "./dto/properType";

export const bookingApi = createApi({
    reducerPath: "booking",
    baseQuery: fetchBaseQuery({ baseUrl: "https://arcade-server-17j1.onrender.com/api/v1/booking" }),
    endpoints: (builder) => ({
        //api endpoints
        getAllPropertyDetails: builder.query<Building[], any>({
            query: (data) => ({
                url: ``,
                method: "GET",
                params: data

            }),
        }),
        postBooking: builder.mutation<any, any>({
            query: (data) => ({
                url: ``,
                method: "POST",
                body: data
            }),
        })
    }),
});

export const { useGetAllPropertyDetailsQuery,usePostBookingMutation } = bookingApi;
