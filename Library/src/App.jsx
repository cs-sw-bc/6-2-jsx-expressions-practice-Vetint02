import { useState } from 'react'
import './App.css'
import Patrons from './components/Patrons.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Patrons/>
    </div>
  )
}

export default App
