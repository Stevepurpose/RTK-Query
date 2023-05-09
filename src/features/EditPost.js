 import React, { useState } from 'react'
import{useEditPostMutation} from './api/apiSlice'

const EditPost = ({post,postid,onClose}) => {
 const[title,setTitle]=useState(post.title)
 const[snippet,setSnippet]=useState(post.snippet)
 const[author,setAuthor]=useState(post.author)

 const[editPost,{isLoading}]=useEditPostMutation()

 const handleSubmit=(e)=>{
e.preventDefault()

editPost({id:post.id,title,snippet,author}).then(()=>{
    onClose()
})


 }


 
    return (
    <section>
    <form onSubmit={handleSubmit}>
<input type='text'   onChange={(e)=>setTitle(e.target.value)} value={title} placeholder='title'/>
<textarea value={snippet} onChange={(e)=>setSnippet(e.target.value)} placeholder='snippet'/>

<input type='text'   onChange={(e)=>setAuthor(e.target.value)} value={author} placeholder='author'/>

<div className='butedit-container'>
<button type="submit"  className='but-edit' disabled={isLoading}>save</button>

<button className="but-edit" onClick={onClose}>back</button>
</div>
    </form>


    </section>
  )
}

export default EditPost
