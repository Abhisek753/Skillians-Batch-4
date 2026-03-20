import React from 'react'
import Child from './Child'
import ProductData from './ProductData'
import SecondChild from './SecondChild'

const Parent = () => {
  let userinfo={
    "name":"Pritam",
    "friend":"Krish",
    "location":"Pune"
  }
  let product={
    "name":"Jeans",
    "category":"Men",
    "size":"large"
  }
  let sports=["Cricket","Badminton","Football","Hocky","Pickleball"]

  return (
    <div style={{border:"2px solid black",height:"400px",width:"600px"}}>
      <div >This is parent component</div>
      <h3>Parent Component Data :{userinfo.name}</h3>
      <Child data={userinfo} sports={sports}  />
      <ProductData data={product}/>
      <SecondChild product={product} sports={sports} userdata={userinfo}/>
      
    </div>
  )
}

export default Parent