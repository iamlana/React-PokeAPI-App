import React from "react"
import { Link } from "react-router-dom";
import { useTypeDetails } from "./useTypeDetails"

export default function PokemonLink({ id }) {
    const { type, error, loading } = useTypeDetails(id)
    if (loading) {
        return <>Loading...</>
    }
    if (error) {
        return <>{JSON.stringify(error)}</>
    }

    return (
        <Link to={`/type/${id}`}>{type.name}</Link>
    )
}