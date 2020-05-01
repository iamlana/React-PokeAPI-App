import React, { useEffect, useContext } from "react"
import { useMousePosition } from "../hooks/useMousePosition"
import { ModeContext } from './DarkMode'

export function Home() {
  const { x, y } = useMousePosition();
  const { darkMode } = useContext(ModeContext)

  useEffect(() => {
    const hue = Math.round(x / window.innerWidth * 360)
    const yr = y / window.innerHeight * 2 * Math.PI
    const saturation = Math.round((Math.sin(yr) + 1) * 50)
    const lightness = darkMode ? '10' : '70'
    const color = `hsl(${hue}, ${saturation}%, ${lightness}%)`
    document.body.style.backgroundColor = color;
  }, [x, y, darkMode])

  useEffect(() => {
    return () => {
      document.body.style.removeProperty('background-color')
    }
  }, [])

  return (
    <div className="page">
      <h1>Home</h1>
      <p>Open the sidebar to view all the links!</p>
      <p>Move your mouse around.</p>
    </div>
  )
}
