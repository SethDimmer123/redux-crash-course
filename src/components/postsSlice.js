import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
// i can now use thse functions that i have imported.

const postApi = createApi({
    reducerPath:"postApi",
    baseQuery:fetchBaseQuery({
        baseUrl: "https://jsonplaceholder.typicode.com/",
    }),
    endpoints:(bulider) => ({
        getAllPosts:bulider.query({
            query:() => "posts"
        })
    })
});

// taking baseUrl and fetching posts

// i have now created my api and i can use it in other components

