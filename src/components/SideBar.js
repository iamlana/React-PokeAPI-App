import React, { useState } from "react"
import { Link } from "react-router-dom"

export function SideBar() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <SideBarNav open={open} onClick={() => setOpen(!open)} />
      <Menu onClick={() => setOpen(!open)} />
    </>
  )
}

function SideBarNav({ open, onClick }) {
  return (
    <nav className={open ? "open-nav" : "close-nav"}>
      <ul>
        <span className="menu-close" onClick={onClick}>&times;</span>
        <li>
          <Link to="/" className="nav-links logo"></Link>
        </li>
        <li>
          <Link to="/pokemon" className="nav-links">Pokemons</Link>
        </li>
        <li>
          <Link to="/ability" className="nav-links">Abilities</Link>
        </li>
        <li>
          <Link to="/type" className="nav-links">Types</Link>
        </li>
        <li>
          <Link to="/favorite_pokemons" className="nav-links">Favorite &#9733; </Link>
        </li>
      </ul>
    </nav>
  )
}

function Menu({ onClick }) {
  return (
    <span className="menu-open" onClick={onClick} >&#9776;</span>
  )
}
