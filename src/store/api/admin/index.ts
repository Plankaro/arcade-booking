import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const applicantsApi = createApi({
  reducerPath: "applicants",
  baseQuery: fetchBaseQuery({ baseUrl: `/api/v1` }),
  tagTypes: ["Booking"],
  endpoints: (builder) => ({
    getAllBooking: builder.query<any,void>({
      query: () => `/admin`,
      providesTags: ["Booking"],
    }),
    // updateAppliedJob: builder.mutation<any, any>({
    //   query: ({id, ...rest}) => ({
    //     url: `/apply?id=${id}`,
    //     method: "PUT",
    //     body: {...rest},
    //   }),
    //   invalidatesTags: ["Applicants"],
    // }),
  }),
});


export const {
  useGetAllBookingQuery,
  // useUpdateAppliedJobMutation,
} = applicantsApi;