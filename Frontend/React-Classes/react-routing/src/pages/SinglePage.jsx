import React from 'react'
import { useParams } from 'react-router'

const SinglePage = () => {
const id=useParams();
console.log(id)
  return (
    <div>SinglePage</div>
  )
}

export default SinglePage