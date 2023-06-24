import React from 'react'
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'
import './NavBar.css'

export default function NavBar() {
  return (
    <div className='navbar'>
      <Link to='/home'><label>HOME</label></Link>
      <SearchBar></SearchBar>
      <Link to='/formProducto'><label>Crear Producto</label></Link>
    </div>
  )
}
