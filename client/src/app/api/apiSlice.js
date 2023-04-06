import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { setCredentials, logOut } from '../../features/auth/authSlice'

const baseQuery = fetchBaseQuery({
    baseUrl: 'http://localhost:4000',
    credentials: 'include',
    prepareHeaders: (headers, { getState }) => {
        const token = getState().auth.token
        if (token) {
            headers.set("authorization", `Bearer ${token}`)
        }
        return headers
    }
})

const baseQueryWithReauth = async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions)

    if (result?.error?.originalStatus === 403) {
        console.log("Sending refresh token")
        // send the refresh token to get new access toekn 
        const refreshResult = await baseQuery('/refresh', api, extraOptions)
        console.log(refreshResult)
        if (refreshResult?.data) {
            const user = api.getState().auth.user
            // store the new token
            api.dispactch(setCredentials({ ...refreshResult.data, user }))
            // retry the original query with access token
            result = await baseQuery(args, api, extraOptions)
        } else {
            api.dispactch(logOut())
        }
    }
    return result
}

export const apiSlice = createApi({
    baseQuery: baseQuery.WithReauth, 
    endpoints: builder => ({})
})