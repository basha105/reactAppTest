import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Hello, Brent!</h1>
      <p>Welcome to your first react app. This is about to be brazy</p>
      <div className="card">
        <button onClick={() => setCount((count) => count + 3)}>
          epicness count: {count}
        </button>
      </div>
    </>
  )
}

export default App
