import { useApi } from "./useApi";

export function useTypeDetails(id) {

    const result = useApi(`https://pokeapi.co/api/v2/type/${id}`);

    return { type: result.data, error: result.error, loading: result.loading }

}