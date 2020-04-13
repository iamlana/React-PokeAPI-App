import React from "react"
import { useTypeDetails } from "./useTypeDetails"
import PokemonLink from "./PokemonLink"
import { Link } from "react-router-dom";

export default function TypeDetails({ match }) {

    const id = match.params.id
    const { type, error, loading } = useTypeDetails(id)
    if (loading) {
        return <p>Loading...</p>
    }
    if (error) {
        return <p>{JSON.stringify(error)}</p>
    }

    return (
        <>
            <div className="page">
                <Link to={'/type'}><button >&#8592;All Types</button></Link>
                <h1 key={type.name}>{type.name}</h1>
                <h3>All Pokémons who can be {type.name}</h3>
                <p className="grid-container" key={type.name}>{type.pokemon.map(pokemon => (
                    <>
                        <PokemonLink key={pokemon.name} id={pokemon.pokemon.name} />
                        <br />
                    </>
                ))}
                </p>
            </div>
        </>
    )
}