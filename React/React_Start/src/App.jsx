import { useState } from 'react'
import './App.css'
import './App.js'

function App() {
  const [counter, setCounter] = useState(0)

  let AddVlaue = () => {

    if (counter + 1 <= 15) {
      setCounter(counter + 1)
    }

  }

  let NegVlaue = () => {
    if (counter - 1 < 0) {
      setCounter(counter)
    }

    else {
      setCounter(counter - 1)
    }
  }

  return (
    <>

      <h1 className='display-6'>{counter}</h1>
      <button onClick={AddVlaue}
        type="button"
        class="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
      >
        +
      </button>
      <button onClick={NegVlaue}
        type="button"
        class="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
      >
        -
      </button>
    </>
  )
}

export default App