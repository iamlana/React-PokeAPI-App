import React, { useEffect } from "react"
import { useMousePosition } from "../hooks/useMousePosition"

export function Home() {
  const { x, y } = useMousePosition();

  useEffect(() => {
    const hue = Math.round(x / window.innerWidth * 360)
    const saturation = Math.round(y / window.innerHeight * 100)
    const lightness = '50'
    const color = `hsl(${hue}, ${saturation}%, ${lightness}%)`
    document.body.style.backgroundColor = color;
  }, [x, y])

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
