import { useApi } from "./useApi";

export function useAbilityDetails(id) {

    const result = useApi(`https://pokeapi.co/api/v2/ability/${id}`);

    return { ability: result.data, error: result.error, loading: result.loading }

}