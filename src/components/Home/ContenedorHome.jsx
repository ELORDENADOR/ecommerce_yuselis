import React from 'react'
import {Link,useNavigate,NavLink} from "react-router-dom"
import "../Home/Home.css"

const ContenedorHome = () => {


const navigate = useNavigate()


const funcion = () =>{
    console.log("ya")
    navigate("/shop")
}



  return (
    <div>
   
     
     <NavLink  to="/login"  className={(isActive) => isActive ? "activeNavbar" : "navbar"}>
        Login
     </NavLink>
     <br/>    <br/>
      <NavLink to="/cart" className={(isActive) => isActive ? "activeNavbar" : "navbar"}>
     Cart
      </NavLink>
    
    
<h2>   Bienvenidos...</h2>

      <button  onClick={funcion} >funcion</button>
  


    </div>
  )
}

export default ContenedorHome