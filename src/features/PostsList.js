import EditPost from "./EditPost";
import { useGetAllPostsQuery,useDeletePostMutation } from "./api/apiSlice";


import React, { useState } from 'react'

const PostsList = () => {
const[editing,setEditing]=useState("")


const{data:posts,isLoading,isSuccess,isError,error}=useGetAllPostsQuery()

const[deletePost]=useDeletePostMutation()


const toEdit=(postId)=>{
  setEditing(prev=>({
    ...prev,[postId]:true
  }))
  
}


function handleClose(){
  setEditing(false)
}


  return (
        isLoading?<p>loading...</p>:
        isError?<p>{error}</p>:
<div>
 
<h1>posts</h1>
{ posts && posts.map(post=><div key={post.id}>
      <p>{post.title}</p>
      <p>{post.snippet}</p>
      <p>{post.author}</p>
      
    {!editing && <div className="edit-route">
      <button className="fix-update"  onClick={()=>deletePost({id:post.id})}>delete</button>
      <button  className="fix-update" onClick={()=>toEdit(post.id)}>edit</button>
      </div>}
  

{editing[post.id]&& <EditPost postid={post.id} post={post}  onClose={handleClose}/>}
      
      <hr/>
      </div>)}

</div>
)}
  

export default PostsList