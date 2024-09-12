import { useState, useEffect } from 'react';

const UseEffect = () => {
  const [posts, setPosts] = useState([]);
  const [postId, setPostId] = useState(1);

  useEffect(() => {
    apidata(postId); // Pass postId when calling the API function
  }, [postId]); // Trigger useEffect when postId changes

  async function apidata(id) {
    let res = await fetch(`https://dummyjson.com/carts/${id}`); // Use backticks for template literals
    let data = await res.json();
    console.log(data);
    setPosts(data);
  }

  return (
    <div>
      <input 
        type="text" 
        value={postId} 
        onChange={(e) => setPostId(e.target.value)} 
      />
    </div>
  );
}

export default UseEffect;





// import React from 'react'


// const UseEffect = () => {
//   async function apidata() {
//     let res = await fetch('https://dummyjson.com/carts');
//     let data = await res.json();
//     console.log(data);
//   }

//   // Call the function directly inside the component
//   apidata();

//   return (
//     <div>
//       {/* Your component content */}
//     </div>
//   );
// };

// export default UseEffect;

