import React from 'react'
import { useState } from 'react'
import{useAddNewPostMutation} from './api/apiSlice'

const PostForm = () => {
    const[title,setTitle]=useState('')
    const[snippet,setSnippet]=useState('')
    const[author,setAuthor]=useState('')

  //  const[newpost,setNewpost]=useState("")

const[addNewPost,{isLoading}]=useAddNewPostMutation()

  async function handleSubmit(e){
    e.preventDefault()
    try{
   await addNewPost({title,snippet,author})
    setTitle("")
    setSnippet("")
    setAuthor("")

    }catch(error){
        console.log("error creating post",error)
    }

}




  return (
    <section className='form-control'>
      <h1>Add post</h1>
    <form>
<input type='text'   onChange={(e)=>setTitle(e.target.value)} value={title} placeholder='title'/>
<textarea value={snippet} onChange={(e)=>setSnippet(e.target.value)} placeholder='snippet'/>

<input type='text'   onChange={(e)=>setAuthor(e.target.value)} value={author} placeholder='author'/>

<button type="submit" disabled={isLoading} id="but-Form" onClick={handleSubmit}>save</button>


    </form>


    </section>
  )
}

export default PostForm