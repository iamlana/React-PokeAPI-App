import React, { useState, createContext, useEffect, useContext } from 'react';

function setInitialMode(darkMode) {
  const value = JSON.stringify(darkMode)
  localStorage.setItem('dark', value)
}

function getInitialMode() {
  const savedMode = localStorage.getItem('dark')
  return JSON.parse(savedMode) || false
}

export const ModeContext = createContext()

export function ModeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(getInitialMode)
  useEffect(() => {
    setInitialMode(darkMode)
    if (darkMode) {
      document.body.classList.add('dark-mode')
    } else {
      document.body.classList.remove('dark-mode')
    }
  }, [darkMode])

  return (
    <ModeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </ModeContext.Provider>
  )
}

export function setUpDarkMode() {
  if (getInitialMode()) {
    document.body.classList.add('dark-mode')
  }
}


export function DarkMode() {
  const { darkMode, setDarkMode } = useContext(ModeContext)

  return (
    <>
      <button className="mode-button"
        onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "Light Mode ☼" : "Dark Mode ☾"}
      </button>
    </>
  )
}





