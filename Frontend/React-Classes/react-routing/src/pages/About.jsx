import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router";
import GetData from '../service/GlobalService';
const About = () => {
 const [data,setData]=useState([]);
 const Navigate=useNavigate()

  async function GetUserData(){
    let userData=await GetData("users");
    setData(userData);
  }
useEffect(()=>{
   GetUserData()
},[])

  return (
    <div>
        <h1>About Page</h1>
        {data?.map((el)=>(
            <div>
                {el.name}
            </div>
        ))}
        <p style={{color:"yellow"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet quaerat neque sint labore possimus, totam vel autem, reiciendis animi a, error cum voluptates fugiat tempore.</p>
    </div>
  )
}

export default About