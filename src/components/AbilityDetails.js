import React from "react"
import { useAbilityDetails } from "../hooks/useAbilityDetails"
import { Link } from "react-router-dom";
import { PokemonLink } from "./PokemonLink";

export function AbilityDetails({ match }) {
  const id = match.params.id
  const { ability, error, loading } = useAbilityDetails(id)
  if (loading) {
    return <p>Loading...</p>
  }
  if (error) {
    return <p>{JSON.stringify(error)}</p>
  }
  return (
    <>
      <div className='pokemon_info'>
        <Link  to={'/ability'}><button >&#8592;All Abilities</button></Link>
        <h1>{ability.name}</h1>
        <p>{ability.effect_entries.map((changes, i) => (
          <React.Fragment key={i}>{changes.effect}</React.Fragment>
        ))}
        </p>
      </div>

      <div className="grid-container pokemon_info">
      <p>Pokémons, who have this Ability:</p>
        {ability.pokemon.map(pokemon => (
          <PokemonLink key={pokemon.pokemon.name} id={pokemon.pokemon.name} />
        ))}
      </div>
    </>
  )
}
