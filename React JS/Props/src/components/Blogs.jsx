import React from 'react';
import Blog from './Blog';
import { postdata } from './Postdata'; // Importing the postdata array

const Blogs = () => {
  return (
    <div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap' }}>
      {/* Static Blog components */}
      <Blog image="https://picsum.photos/200" title="this is post" />
      <Blog image="https://picsum.photos/200" title="this is blog file" />
      <Blog image="https://picsum.photos/200" title="this is a blog post" />
      <Blog image="https://picsum.photos/200" title="this is a Car" />
      <Blog image="https://picsum.photos/200" title="this is Nature" />
      <Blog image="https://picsum.photos/200" title="this is a flower" />

      {/* Dynamic Blog components from postdata */}
      {postdata.map((post, index) => (
        <Blog
          key={index}
          image={`https://picsum.photos/200?random=${index}`} // Using random image
          title={post.title}
          body={post.body}
        />
      ))}
    </div>
  );
};

export default Blogs;
