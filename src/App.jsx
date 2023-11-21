import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Honadon from './Pages/Honadon/Honadon'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Routes>
        <Route path='/honadon' element={<Honadon />} />
      </Routes>
    </div>
  )
}

export default App
