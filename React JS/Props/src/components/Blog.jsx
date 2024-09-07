// import React from 'react'

const Blog = (props) => {

    let { image , title } = props
    return (
    
      <div style={{ width: "200px", height: "300px", border: "2px solid black", margin: "0 auto"}}>
        <img src={image} alt="Blogs" />
        <h3>{title}</h3>
        <button>show more</button>
      </div>
    
  );
};

export default Blog;
