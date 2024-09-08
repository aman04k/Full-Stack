import React from 'react';

const Blog = ({ image, title, body }) => {
  return (
    <div style={{ width: "200px", height: "300px", border: "2px solid black", margin: "0 auto", padding: "10px" }}>
      <img src={image} alt={title} style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
      <h3>{title}</h3>
      {body && <p>{body}</p>} {/* Only render body if it's provided */}
      <button>Show More</button>
    </div>
  );
};

export default Blog;
