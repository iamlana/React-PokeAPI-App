import React from "react"
import { Link } from "react-router-dom"
import { useLoadingMore } from "../hooks/useLoadingMore";

export function Types() {
  const { subject: types } = useLoadingMore('https://pokeapi.co/api/v2/type/')

  return (
    <>
      <div className="grid-container page" >
        {types.map(type => (
          <h3 key={type.name}>
            <Link to={`/type/${getId(type.url)}`}>
              <>{type.name}</>
            </Link>
          </h3>
        ))}
      </div>
    </>
  )
}

export function getId(typeUrl) {
  const prefix = "https://pokeapi.co/api/v2/type/";
  return typeUrl.substring(prefix.length, typeUrl.length - 1);
}
