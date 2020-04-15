import React from "react"
import { Link } from "react-router-dom";
import { useTypeDetails } from "../hooks/useTypeDetails"

export function TypeLink({ id }) {
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
