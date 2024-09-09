// import React from 'react'

import Post from "./Post"
import {posts} from "./postdata"

const Posts = () => {
  return (
    <div>
    
     {posts.map((post)=>{
      return <Post key={post.id} {...post} />
     })}
          
    </div>
  )
}

export default Posts