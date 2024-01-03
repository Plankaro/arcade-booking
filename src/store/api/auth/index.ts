import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {SignInAPI, SignInDto, SessionUser, SignOutAPI} from "@/types/auth.types";

// const baseUrl = process.env.FRONTEND_URL ?? "http://localhost:3000"
// console.log("auth base url:", {baseUrl, envUrl:process.env.FRONTEND_URL});

export const authApi = createApi({
    reducerPath: "auth",
    baseQuery: fetchBaseQuery({baseUrl: `/api`}),
    tagTypes: ["Session"],
    endpoints: (builder) => ({
        signIn: builder.mutation<SignInAPI, SignInDto>({
            query: (data) => ({
                url: `/auth/sign-in?role=ADMIN`,
                method: "POST",
                body: {...data},
            }),
            invalidatesTags: ["Session"],
        }),
        getSession: builder.query<SessionUser, void>({
            query: () => '/auth/session?role=ADMIN',
            providesTags: ["Session"],
        }),
        signOut: builder.mutation<SignOutAPI, void>({
            query: () => ({
                url: `/auth/sign-out`,
                method: "POST",
            }),
            invalidatesTags: ["Session"],
        }),
    }),
})

export const {
    useSignInMutation,
    useGetSessionQuery,
    useSignOutMutation,
} = authApi

export const {getSession} = authApi.endpoints