import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Building } from "./dto/properType";

export const bookingApi = createApi({
    reducerPath: "booking",
    baseQuery: fetchBaseQuery({ baseUrl: "/api/v1/booking" }),
    tagTypes: ["property"],
    endpoints: (builder) => ({
        //api endpoints
        getAllPropertyDetails: builder.query<Building[], any>({
            query: (data) => ({
                url: ``,
                method: "GET",
                params: data

            }),
            providesTags: ["property"],
        }),
        postBooking: builder.mutation<any, any>({
            query: (data) => ({
                url: ``,
                method: "POST",
                body: data
            }),
            invalidatesTags:["property"]
        })
    }),
});

export const { useGetAllPropertyDetailsQuery,usePostBookingMutation } = bookingApi;
