import React from 'react'

const ProductData = (props) => {
  
  let data=props.sports;
  return (
    <div style={{backgroundColor:"teal"}}>
      <div style={{border:"2px solid green"}}>
        <h3>This is my child component</h3>
        <h3 style={{color:"black"}}>Child Component Data :{props.data.name} {props.data.category} {props.data.size}</h3>
        </div>
    </div>
  )
}

export default ProductData