import './App.css'

function Style() {
  let name = "aman"
  let age = 23
  return (
    <>
      <h1 style={{color:"blue", backgroundColor:"red" , width:"200px", height:"200px"}}>hello  {name}  world {age} </h1>
      <p style={{width:"200px", height:"200px", border:"1px solid black"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos necessitatibus fuga mollitia nesciunt sint adipisci sapiente quae eveniet temporibus libero? Hic, est. Fugit odit sunt laudantium quas commodi illum debitis.</p>
         

       <div className='App'>
         <h1>hello world</h1>
         <button>click</button>
        </div>  
    </>
  )
}

export default Style