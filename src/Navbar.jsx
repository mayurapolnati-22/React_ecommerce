import React,{useContext} from 'react'
import { Link } from 'react-router-dom';
import {HelloContext} from './App';
function Navbar() {
  const{cart,setCart}=useContext(HelloContext)
  return (
    <>
    <nav id="navbar">
    <Link to="/" id="one">Home</Link>
    <Link to="/Products" id="one">Products</Link>
    <Link to="/contact" id="one">Contact</Link>
    <Link>{cart.length}</Link>
    </nav>
    </>
    
  )
}

export default Navbar