import React from "react"
import { Link } from "react-router-dom"
import { useLoadingMore } from "../hooks/useLoadingMore";

export function Abilities() {
  const { subject: abilities, loading, nextUrl, loadMore } = useLoadingMore('https://pokeapi.co/api/v2/ability/')

  return (
    <>
      <div className="grid-container page" >
        {abilities.map(ability => (
          <h3 key={ability.name}>
            <Link to={`/ability/${getId(ability.url)}`}>
              <>{ability.name}</>
            </Link>
          </h3>
        ))}
      </div>
      <div className="btn">
        {loading && "Loading..."}
        {!loading && nextUrl && <button onClick={loadMore}>Load More</button>}
      </div>
    </>
  )
}

export function getId(abilityUrl) {
  const prefix = "https://pokeapi.co/api/v2/ability/";
  return abilityUrl.substring(prefix.length, abilityUrl.length - 1);
}
