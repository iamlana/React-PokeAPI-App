import React from "react"
import { useFavorites } from "./favorites"
import PokemonLink from "./PokemonLink"

export default function FavoritePokemons() {
    const { favorites } = useFavorites()

    return (
        <>
        <div className="page">
            {favorites.map(pokemon =>
                <>
                    <PokemonLink key={pokemon} id={pokemon} />
                    <br />
                </>
            )}
        </div>
        </>
    )
}
