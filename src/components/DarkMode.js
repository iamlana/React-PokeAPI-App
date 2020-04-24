import React, { useState, createContext, useEffect, useContext } from 'react';

function setInitialMode(darkMode) {
  const value = JSON.stringify(darkMode)
  localStorage.setItem('dark', value)
}

function getInitialMode() {
  const savedMode = JSON.parse(localStorage.getItem('dark'))
  return savedMode || false
}

const ModeContext = createContext()

export function ModeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(getInitialMode)
  useEffect(() => {
    setInitialMode(darkMode)
  }, [darkMode])

  return (
    <ModeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </ModeContext.Provider>
  )
}


export function DarkMode() {
  const { darkMode, setDarkMode } = useContext(ModeContext)

  function addDarkMode() {
    setDarkMode(true)
    document.body.classList.add('dark-mode')
  }

  function removeDarkMode() {
    setDarkMode(false)
    document.body.classList.remove('dark-mode')

  }
  function toggleMode() {
    if (!darkMode) {
      addDarkMode()
    } else {
      removeDarkMode()
    }
  }

  return (
    <>
      <button
        onClick={() => toggleMode()}>
        {darkMode ? "🌞" : "🌓"}
      </button>
    </>
  )
}





