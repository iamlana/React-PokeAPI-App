import { useEffect, useState } from "react";

export function useApi(url) {
    useEffect(() => {
        fetchData(url);
    }, [url]);

    const [data, setData] = useState(undefined);
    const [error, setError] = useState(undefined)
    const [loading, setLoading] = useState(true)

    async function fetchData(url) {
        try {
            const result = await fetch(url);
            const data = await result.json();
            if (!result.ok) {
                setError(data)
            } else {
                setData(data)
            }
        } catch (error) {
            setError(error)
        }
        setLoading(false)
    }

    return {
        data,
        error,
        loading
    }
}