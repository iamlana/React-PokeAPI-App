import React from "react"
import { useFavorites } from "./favorites"
import { PokemonLink } from "./PokemonLink"

export function FavoritePokemons() {
  const { favorites } = useFavorites()

  return (
    <div className="pokemon_info grid-container">
      {favorites.map(pokemon =>
        <PokemonLink key={pokemon} id={pokemon} />
      )}
    </div>
  )
}
