import React from 'react'
import GrandChild from './GrandChild';

const Child = (props) => {
let data=props.sports;
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

        <GrandChild data={data}/>
      </div>
    </div>
  )
}

export default Child