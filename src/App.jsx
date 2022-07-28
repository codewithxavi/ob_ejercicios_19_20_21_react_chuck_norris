import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import ChuckAxios from './components/ChuckAxios'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <ChuckAxios />
    </div>
  )
}

export default App
