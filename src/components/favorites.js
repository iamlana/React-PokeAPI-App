import React, { useEffect, useState, createContext, useContext } from "react"

function setSavedFavorites (favorites) {
  const value = JSON.stringify(favorites)
  localStorage.setItem('favorites', value)
}

function getSavedFavorites () {
  const value = localStorage.getItem('favorites') || "[]"
  return JSON.parse(value)
}

const FavoritesContext = createContext()

export function FavoritesProvider ({ children }) {
  const [favorites, setFavorites] = useState(getSavedFavorites)
  useEffect(() => {
    setSavedFavorites(favorites)
  }, [favorites])

  return (
    <FavoritesContext.Provider value={{ favorites, setFavorites }}>
      {children}
    </FavoritesContext.Provider>
  )
}

export function useFavorites () {
  const { favorites, setFavorites } = useContext(FavoritesContext)

  function addFavorite (id) {
    setFavorites([...favorites, id])
  }

  function removeFavorite (id) {
    setFavorites(favorites.filter(x => x !== id))
  }

  function toggleFavorite (id) {
    if (favorites.includes(id)) {
      removeFavorite(id)
    } else {
      addFavorite(id)
    }
  }

  return {
    favorites,
    addFavorite,
    removeFavorite,
    toggleFavorite,
  }
}