import React from "react"
import { useAbilityDetails } from "./useAbilityDetails"
import { Link } from "react-router-dom";
import PokemonLink from "./PokemonLink";




export default function AbilityDetails({ match }) {

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
            <div className="page">
                <Link to={'/ability'}><button >&#8592;All Abilities</button></Link>
                <h1 key={ability.name}>{ability.name}</h1>
                <p>{ability.effect_entries.map(changes => (
                    <> {changes.effect}</>
                ))}
                </p>
            </div>
            <p>Pokémons, who have this Ability:</p>
            <p className="grid-container" key={ability.name}>{ability.pokemon.map(pokemon => (
                <>
                    <PokemonLink key={pokemon.name} id={pokemon.pokemon.name} />
                    <br />
                </>
            ))}
            </p>
        </>
    )
}