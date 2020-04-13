import React from "react"
import { useFavorites } from "./favorites"
import PokemonLink from "./PokemonLink"
import { Link } from "react-router-dom"

export default function FavoritePokemons() {
    const { favorites } = useFavorites()

    return (
        <>
        <div className="page grid-container">
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





        //     <div className="page">
        //     {favorites.map(pokemon => <p key={pokemon}>{pokemon}</p>)}
        // </div>