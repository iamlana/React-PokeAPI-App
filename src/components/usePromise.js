

// import React, { useState } from 'react';
// import { usePromise } from './usePromise';

// const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
// const randInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;

// async function multiplyLater (a, b) {
//   await sleep(randInt(500, 2000));
//   return a * b;
// }

// function App() {
//   const [route, setRoute] = useState('home')
//   return (
//     <div className="App">
//       <button onClick={() => setRoute('home')}>Go home</button>
//       <button onClick={() => setRoute('items')}>Go items</button>
//       {route === 'home' && <Home />}
//       {route === 'items' && <Items />}
//     </div>
//   );
// }

// function Home () {
//   const [count, setCount] = useState(0);
//   const { data, loading } = usePromise(() => multiplyLater(count, 2), [count])

//   return (
//     <div>
//       <div>Count: {count}</div>
//       {!loading && <div>Multiple: {data}</div>}
//       {loading && <div>Loading...</div>}
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//     </div>
//   )
// }

// function Items () {
//   return <div>Items</div>
// }

// export default App;





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
