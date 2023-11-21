import React from 'react'
import { uylar } from '../../assets'
import './Main.css'
import Header from './components/Header/Header'
import Filter from './components/Filter/Filter'
import Cards from './components/Cards/Cards'

const Main = () => {
  return (
    <div className='main container'>
        <Header />
        <Filter />
        <Cards />
    </div>
  )
}

export default Main