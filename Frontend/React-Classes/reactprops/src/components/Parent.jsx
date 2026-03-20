import React from 'react'
import Child from './Child'

const Parent = () => {
  let userinfo={
    "name":"Pritam",
    "friend":"Krish",
    "location":"Pune"
  }
  let sports=["Cricket","Badminton","Football","Hocky","Pickleball"]

  return (
    <div style={{border:"2px solid black",height:"400px",width:"600px"}}>
      <div >This is parent component</div>
      <h3>Parent Component Data :{userinfo.name}</h3>
      <Child data={userinfo} sports={sports}  />
      
    </div>
  )
}

export default Parent