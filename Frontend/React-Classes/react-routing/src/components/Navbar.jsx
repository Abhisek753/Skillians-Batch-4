import React from 'react'
import { NavLink } from 'react-router'

const Navbar = () => {
  return (
    <div>
     <nav style={{display:"flex",gap:"5px",backgroundColor:"gray",padding:"10px 20px" }}>
      <NavLink to="/" end>
      <button style={{padding:"5px 10px",backgroundColor:"blue",color:"white",cursor:"pointer"}}>  Home</button>
      </NavLink>
      <NavLink to="/about" end>
        <button style={{padding:"5px 10px",backgroundColor:"blue",color:"white",cursor:"pointer"}}>About</button>
      </NavLink>
      <NavLink to="/contact">
      <button style={{padding:"5px 10px",backgroundColor:"blue",color:"white",cursor:"pointer"}}>Contact</button>
      </NavLink>
     </nav>
    </div>
  )
}

export default Navbar