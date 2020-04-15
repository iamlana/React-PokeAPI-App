import { useApi } from "./useApi";

export function usePokemonDetails(id) {
  const result = useApi(`https://pokeapi.co/api/v2/pokemon/${id}`);
  return { pokemon: result.data, error: result.error, loading: result.loading }
}
