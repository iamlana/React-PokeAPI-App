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
      <div className='pokemon_info' >
        <Link to={'/pokemon'}><button >&#8592;All Pokémons</button></Link>
        <button className="favorite" title="Add to favorite" onClick={() => toggleFavorite(id)}>
          {favorites.includes(id) ? <span>&#9733;</span> : <span>&#9734;</span>}
        </button>
        <h1 key={pokemon.name}>{pokemon.name}</h1>
        <div>
          <img src={pokemon.sprites.front_default} alt="" />
        </div>
        <p>Height: {pokemon.height}</p>
        <p>Weight: {pokemon.weight}</p>
      </div>
      <div className='pokemon_info' >
        <p>Abilities:</p>
        <div>
          {pokemon.abilities.map(ability => (
            <React.Fragment key={ability.ability.name}>
              <AbilityLink id={ability.ability.name} />
              <br />
            </React.Fragment>
          ))}
        </div>
        <p>Type:</p>
        <div>
          {pokemon.types.map(type => (
            <React.Fragment key={type.type.name}>
              <TypeLink id={type.type.name} />
              <br />
            </React.Fragment>
          ))}
        </div>
      </div>
    </>
  )
}
