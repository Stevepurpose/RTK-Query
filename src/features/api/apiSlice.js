import{createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'


export const postsApi=createApi({
    reducerPath:'postsApi',
    baseQuery:fetchBaseQuery({baseUrl:'http://localhost:8000'}),
    tagTypes:['Posts'],
    endpoints:(builder)=>({
getAllPosts:builder.query({
    query:()=>'/posts',
    providesTags:["Posts"]
}),

getPost:builder.query({
query:(postId)=>`/posts/${postId}`,
//providesTags:["Posts"]
}),

addNewPost:builder.mutation({
query:(newpost)=>({
    url:'/posts',
    method:"POST",
    body:newpost,
}),
invalidatesTags:['Posts']

}),

editPost:builder.mutation({
    query:(post)=>({
        url:`/posts/${post.id}`,
        method:'PATCH',
        body:post
    }),
    invalidatesTags:['Posts']
}),


deletePost:builder.mutation({
    query:({id})=>({
        url:`/posts/${id}`,
        method:'DELETE',
       body:id
    }),
    invalidatesTags:['Posts']
})
    })
})
export const {useGetAllPostsQuery,useGetPostQuery,useAddNewPostMutation,useEditPostMutation,useDeletePostMutation}=postsApi