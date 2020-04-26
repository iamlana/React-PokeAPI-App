import React from "react"
import { useMousePosition } from "../hooks/useMousePosition"

export function Home() {

  const { x, y } = useMousePosition();
  const hasMovedCursor = typeof x === "number" && typeof y === "number";
  const colorX = "#" + `${x}`
  const colorY = "#" + `${y}`
function backGroundVGrad(){
  document.body.style.backgroundImage = "linear-gradient(" + colorX + "," + colorY + ")"
}//style={{ backgroundImage: "linear-gradient(" + colorX + "," + colorY + ")" }}


// {hasMovedCursor
//   ? `Your cursor is at ${x}, ${y}.`
//   : "Move your mouse around."}
  return (
    <div className="page">
      <h1>Home</h1>
      <p>Open the sidebar to view all the links!</p>
      <p>
        {hasMovedCursor
          ? backGroundVGrad()
          : "Move your mouse around."}
      </p>
    </div>
  )
}
