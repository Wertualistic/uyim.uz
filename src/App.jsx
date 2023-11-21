import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Honadon from './Pages/Honadon/Honadon'
import Main from './Pages/Main/Main'
import Navbar from './layouts/Navbar/Navbar'
import Footer from './layouts/Footer/Footer'
import Uy from './Pages/Uy/Uy'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/honadon' element={<Honadon />} />
        <Route path='/uy' element={<Uy />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
