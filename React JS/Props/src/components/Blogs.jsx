// import React from 'react'

import Blog from "./Blog"

const Blogs = () => {
  return (
    <div style={{display:"flex", gap: "30px"}}>
        <Blog  image="https://picsum.photos/200" title = {"this is post"}/>
        <Blog  image="https://picsum.photos/200" title = {"this is blog file"}/>
        <Blog  image="https://picsum.photos/200" title = {"this is a blog post"}/>
        <Blog  image="https://picsum.photos/200" title = {"this is a Car "}/>
        <Blog  image="https://picsum.photos/200" title = {"this is Nature"}/>
        <Blog  image="https://picsum.photos/200" title = {"this is a flower"}/>
        

    </div>
  )
}

export default Blogs