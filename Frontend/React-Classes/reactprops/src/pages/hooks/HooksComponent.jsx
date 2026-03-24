import React, { useEffect, useState } from 'react'

const HooksComponent = () => {
const [value,setValue]=useState(0);

const Increment=()=>{
   setValue(value+1);
}
const Decrement=()=>{
  setValue(value-1)
  //done
}

const Reset=()=>{
  setValue(0)
}

useEffect(()=>{
  console.log("This is use effect hook")
 
},[value])


  return (
    <div style={{width:"300px",height:"200px",backgroundColor:"tomato",display:"flex",flexDirection:"column",gap:"10px",padding:"5px",marginTop:"20px",margin:"auto",textAlign:"center"}}>
      <h2>Counter App</h2>
      <h1>{value}</h1>
      <div className="btn" style={{display:"flex",gap:"2px",margin:"auto"}}>
        <button style={{backgroundColor:"green",padding:"2px 4px",color:"black"}} onClick={Increment}>Increment</button>
       <button style={{backgroundColor:"yellow",padding:"2px 4px",color:"black"}} onClick={Decrement}>Decrement</button>
         <button style={{backgroundColor:"red",padding:"2px 4px",color:"black"}} onClick={Reset}>Reset</button>
      </div>
    </div>
  )
}

export default HooksComponent