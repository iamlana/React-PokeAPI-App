import React from "react"
import { usePokemonDetails } from "../hooks/usePokemonDetails"
import { Link } from "react-router-dom";
import { AbilityLink } from "./AbilityLink"
import { TypeLink } from "./TypeLink"
import { useFavorites } from "./favorites";

export function PokemonDetails({ match }) {
  const id = match.params.id
  const { pokemon, error, loading } = usePokemonDetails(id)
  const { favorites, toggleFavorite } = useFavorites()
  if (loading) {
    return <p>Loading...</p>
  }
  if (error) {
    return <p>{JSON.stringify(error)}</p>
  }
  return (
    <>
      <div className="page">
        <Link to={'/pokemon'}><button >&#8592;All Pokémons</button></Link>
        <button className="favorite" title="Add to favorite" onClick={() => toggleFavorite(id)}>
          {favorites.includes(id) ? '♥' : '♡'}
        </button>
        <h1 key={pokemon.name}>{pokemon.name}</h1>
        <div>
          <img src={pokemon.sprites.front_default} alt="" />
        </div>
        <p>Height: {pokemon.height}</p>
        <p>Weight: {pokemon.weight}</p>
      </div>
      <div className="page">
        <p>Abilities:</p>
        <p key={pokemon.name}>{pokemon.abilities.map(ability => (
          <>
            <AbilityLink key={ability.name} id={ability.ability.name} />
            <br />
          </>
        ))}
        </p>
        <p>Type:</p>
        <p key={pokemon.name}>{pokemon.types.map(type => (
          <>
            <TypeLink key={type.name} id={type.type.name} />
            <br />
          </>
        ))}
        </p>
      </div>
    </>
  )
}
