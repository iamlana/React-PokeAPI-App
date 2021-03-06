import React from "react"
import { useLoadingMore } from "../hooks/useLoadingMore";
import { PokemonLink } from "./PokemonLink";

export function Pokemons() {
  const { subject: pokemons, loading, nextUrl, loadMore } = useLoadingMore('https://pokeapi.co/api/v2/pokemon/')
  return (
    <>
      <ul className="grid-container page" >
        {pokemons.map(pokemon => (
          <li key={pokemon.name}>
            <PokemonLink id={getId(pokemon.url)} />
          </li>
        ))}
      </ul>
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
