import React from 'react';
import './CardsItem.css';
import { uylar1 } from '../../../../../assets';
import { Link } from 'react-router-dom';

const CardsItem = () => {
  return (
    <div className="main_cards_item">
      <Link to="/uy">
        <img src={uylar1} alt="" />
      </Link>
      <div className="texts">
        <p>Uy #167</p>
        <p>398 000 000 so’mdan</p>
      </div>
    </div>
  );
}

export default CardsItem