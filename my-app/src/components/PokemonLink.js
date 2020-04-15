import React from "react"
import { Link } from "react-router-dom";
import { usePokemonDetails } from "./usePokemonDetails"

export default function PokemonLink({ id }) {
    const { pokemon, error, loading } = usePokemonDetails(id)
    if (loading) {
        return <>Loading...</>
    }
    if (error) {
        return <>{JSON.stringify(error)}</>
    }

    return (
        <div className="Card-info">
            <Link className="page" to={`/pokemon/${id}`}>
                <h3 >{pokemon.name}</h3>
                <div>
                    <img
                        src={pokemon.sprites.front_default}
                        alt={pokemon.name} />
                </div>
            </Link>
        </div>
    )
}