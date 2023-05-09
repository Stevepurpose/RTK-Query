import React from 'react'
import { useGetPostQuery } from './api/apiSlice'

const SinglePost = ({postId}) => {
    const{data:post,error,isLoading,isError}=useGetPostQuery(postId)
  return (
    isLoading?<p>loading...</p>:
    isError?<p>{error}</p>:
    <div>
<h1>{post.title}</h1>
<p>{post.snippet}</p>
<p>{post.author}</p>
        
    </div>
  )
}

export default SinglePost