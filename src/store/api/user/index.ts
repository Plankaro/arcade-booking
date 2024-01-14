import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";



export const userApi = createApi({
  reducerPath: "user",
  baseQuery: fetchBaseQuery({ baseUrl: `/api/v1` }),
  tagTypes: ["User"],
  endpoints: (builder) => ({
    getAllUser: builder.query<any[], void>({
      query: () => "/user/all/student",
    }),
    getUserByid: builder.query<any, string>({
      query: (id) => `/user/${id}`,
    }),
    getUserExperiences: builder.query<any[], string>({
      query: (id) => `/user/experience/?userId=${id}`,
    }),
    getUserSkills: builder.query<string[], string>({
      query: (id) => `/user/skills/?userId=${id}`,
    }),
    getUserProjects: builder.query<any[], string>({
      query: (id) => `/user/project/?userId=${id}`,
    }),
    addUser: builder.mutation<any, any & { role: "Admin" | "Student" }>({
      query: ({ role, ...rest }) => ({
        url: `/user/${role}`,
        method: "POST",
        body: rest,
      }),
      invalidatesTags: ["User"],
    }),
    updateUser: builder.mutation<any, any & { role: "Admin" | "Student" }>({
      query: ({ role, ...rest }) => ({
        url: `/user/${role}`,
        method: "PUT",
        body: rest,
      }),
      invalidatesTags: ["User"],
    }),
    deleteUser: builder.mutation<any, any>({
      query: (ids) => ({
        url: `/user`,
        method: "DELETE",
        body: ids
      }),
      invalidatesTags: ["User"],
    }),
  })
});

export const {
  useGetAllUserQuery,
  useGetUserByidQuery,
  useGetUserExperiencesQuery,
  useGetUserSkillsQuery,
  useGetUserProjectsQuery,
  useAddUserMutation,
  useDeleteUserMutation,
  useUpdateUserMutation,

} = userApi;