import React from "react"
import { Link } from "react-router-dom"
import { useLoadingMore } from "./useLoadingMore";
import PokemonLink from "./PokemonLink";



export default function Pokemons() {
    const { subject: pokemons, loading, nextUrl, loadMore } = useLoadingMore('https://pokeapi.co/api/v2/pokemon/')
    return (
        <>
            <div className="grid-container page" >
                {pokemons.map(pokemon => (
                    <h3 key={pokemon.name}>
                        <Link to={`/pokemon/${getId(pokemon.url)}`}>
                            <PokemonLink id={pokemon.name}/>
                        </Link>
                    </h3>
                ))}
            </div>

            <div className="btn">
                {loading && "Loading..."}
                {!loading && nextUrl && <button onClick={loadMore}>Load More</button>}
            </div>

        </>
    )
}

export function getId(pokemonUrl) {
    const prefix = "https://pokeapi.co/api/v2/pokemon/";
    return pokemonUrl.substring(prefix.length, pokemonUrl.length - 1);
}