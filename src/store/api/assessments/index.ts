import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const assessmentApi = createApi({
  reducerPath: "assessment",
  baseQuery: fetchBaseQuery({ baseUrl: `/api/v1jobpost` }),
  tagTypes: ["Assessment"],
  endpoints: (builder) => ({
    getAllAssessment: builder.query<any[], void>({
      query: () => "/admin/assessment",
    }),
    postAssessment: builder.mutation<any, any>({
      query: (data) => ({
        url: "admin/assessment",
        method: "POST",
        body: { ...data },
      }),
    }),
    editAssessment: builder.mutation<any, any>({
      query: ({ isTrash, userId, jobPostsId, createdAt, updatedAt, JobPosts, ...rest }) => ({
        url: `assessment`,
        method: "PUT",
        body: { ...rest },
      }),
    }),
    deleteAssessment: builder.mutation<any, any>({
      query: (id) => ({
        url: `assessment?id=${id}`,
        method: "DELETE",
      }),
    }),
  })
});

export const {
  useGetAllAssessmentQuery,
  usePostAssessmentMutation,
  useEditAssessmentMutation,
  useDeleteAssessmentMutation,
} = assessmentApi;