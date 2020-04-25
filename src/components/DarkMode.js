import React, { useState, createContext, useEffect, useContext } from 'react';

function setInitialMode(darkMode) {
  const value = JSON.stringify(darkMode)
  localStorage.setItem('dark', value)
}

function getInitialMode() {
  const savedMode = localStorage.getItem('dark')
  return JSON.parse(savedMode) || false
}

const ModeContext = createContext()

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
      <div style={{ position: "absolute", top: 0, right: 0 }}
        onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? <button>Light Mode ☼</button> : <button>Dark Mode ☾</button>}
      </div>
    </>
  )
}





