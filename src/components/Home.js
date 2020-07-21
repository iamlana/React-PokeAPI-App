import React, { useEffect, useContext } from "react"
import { useMousePosition } from "../hooks/useMousePosition"
import { ModeContext } from './DarkMode'

export function Home() {
  const { x, y } = useMousePosition();
  const { darkMode } = useContext(ModeContext)

  useEffect(() => {
    const color = darkMode ? "rgb(57,57,74)" : "#B6A19E";
    document.body.style.backgroundColor = color;
  }, [x, y, darkMode])

  useEffect(() => {
    return () => {
      document.body.style.removeProperty('background-color')
    }
  }, [])

  return (
    <div className="page">
      <h1>Open the sidebar to view all the links!</h1>
    </div>
  )
}
