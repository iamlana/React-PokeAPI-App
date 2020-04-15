import React from "react"
import { Link } from "react-router-dom";
import { useAbilityDetails } from "../hooks/useAbilityDetails"

export function AbilityLink({ id }) {
  const { ability, error, loading } = useAbilityDetails(id)
  if (loading) {
    return <p>Loading...</p>
  }
  if (error) {
    return <p>{JSON.stringify(error)}</p>
  }

  return (
    <Link to={`/ability/${id}`}>{ability.name}</Link>
  )
}
