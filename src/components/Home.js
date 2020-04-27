import React from "react"
import { useMousePosition } from "../hooks/useMousePosition"

export function Home() {

  const { x, y } = useMousePosition();
  const hasMovedCursor = typeof x === "number" && typeof y === "number";
  const colorX = "#" + `${x}`
  const colorY = "#" + `${y}`
  function backGroundGradient() {
    document.body.style.backgroundImage = "linear-gradient(" + colorX + "," + colorY + ")"
  }

  return (
    <div className="page">
      <button onClick={backGroundGradient()}></button>
      <h1>Home</h1>
      <p>Open the sidebar to view all the links!</p>
      <p>
        {hasMovedCursor
          ? backGroundGradient()
          : "Move your mouse around."}
      </p>
    </div>
  )
}
