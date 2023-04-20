import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
// i can now use thse functions that i have imported.

 export const postsApi = createApi({
    reducerPath:"postApi",
    baseQuery:fetchBaseQuery({
        baseUrl: "https://jsonplaceholder.typicode.com/",
    }),
    endpoints:(bulider) => ({
        getAllPosts:bulider.query({
            query:() => "posts"
        }),
        getPostbyId:bulider.query({
            query:(id) => `posts/${id}`,
        })
        
    })
});
export const {useGetAllPostsQuery,useGetPostbyIdQuery} = postsApi//created byRTK QUERY
// taking baseUrl and fetching posts

// i have now created my api and i can use it in other components

// how do i use it in other components?

//  i need to export them add "export" to const postApi

// also need to export another thing