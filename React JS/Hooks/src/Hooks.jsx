// import React from 'react'

import { useEffect } from "react"

const Hooks = () => {
  useEffect(() => {
    async function apidata() {
      try {
        let data = await fetch("https://dummyjson.com/carts");
        let data1 = await data.json();
        console.log(data1);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    apidata();
  }, []);

  return (
    <div>
      <h1>welcome to Hooks</h1>
    </div>
  );
};

export default Hooks;
