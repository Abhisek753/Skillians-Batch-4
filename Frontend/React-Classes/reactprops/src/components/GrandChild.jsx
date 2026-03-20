import React from 'react'

const GrandChild = ({data}) => {
    console.log("1111",data)
  return (
    <div>
      {data?.map((el)=>(
        <div>{el}</div>
      ))}
    </div>
  )
}

export default GrandChild