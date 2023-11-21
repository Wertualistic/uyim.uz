import React from 'react';
import './Cards.css';
import CardsItem from './CardsItem/CardsItem';

const Cards = () => {
  return (
    <div className='main_cards'>
        <CardsItem />
        <CardsItem />
        <CardsItem />
        <CardsItem />
        <CardsItem />
    </div>
  )
}

export default Cards