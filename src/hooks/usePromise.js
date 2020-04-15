import { useState, useEffect } from "react"

const INITIAL_STATE = { data: undefined, error: undefined, loading: true }
export function usePromise (fn, deps) {
  const [state, setState] = useState(INITIAL_STATE)

  useEffect(() => {
    let cancelled = false
    setState(INITIAL_STATE)

    Promise.resolve(fn()).then(
      data => !cancelled && setState({ data, error: undefined, loading: false }),
      error => !cancelled && setState({ data: undefined, error, loading: false }),
    )

    return () => { cancelled = true }
  }, deps) // eslint-disable-line react-hooks/exhaustive-deps

  return state
}
