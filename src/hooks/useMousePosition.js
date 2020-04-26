import { useState, useEffect } from "react"


export function useMousePosition() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const changeMousePosition = event => {
    setMousePosition({ x: event.clientX, y: event.clientY })
  }
  console.log(mousePosition)
  useEffect(() => {
    window.document.addEventListener("mousemove", changeMousePosition);

    return () => window.document.removeEventListener("mousemove", changeMousePosition);
  }, []);

  return mousePosition;
}
