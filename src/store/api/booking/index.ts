import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Building } from "./dto/properType";

const api_uri = process.env.NEXT_PUBLIC_API_URL
console.log(api_uri)
export const bookingApi = createApi({
    reducerPath: "booking",
    baseQuery: fetchBaseQuery({ baseUrl: `${api_uri}/api/v1/booking` }),
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
