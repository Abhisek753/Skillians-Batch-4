import React from 'react'

const Child = (props) => {
  console.log("Child props===>",props)
let data=props.sports;
console.log("my sports data coming from parent",data)
  return (
    <div style={{backgroundColor:"skyblue"}}>
      <div style={{border:"2px solid green"}}>
        <h3>This is my child component</h3>
        <h3 style={{color:"red"}}>Child Component Data :{props.data.name} My friend name is {props.data.friend}</h3>
        <ol>
          {data.map((el,index)=>(
            <li key={index} >{el}</li>
          ))}
        </ol>
      </div>
    </div>
  )
}

export default Child