import React from 'react';
import { AiFillStar } from "react-icons/ai";
// import { IconContext } from "react-icons";
// import { BsSearch } from 'react-icons/bs';

import './scss/FavoriteCoin.scss';


const FavoriteCoin = ({favorites, deleteFav}) => {

  return (
    <div className='fav-coin-container'>
      <div className='fav-coin-noShow'>
        <AiFillStar className='fav-delete-coin' style={{ color: '#f1b909' }} onClick={() => deleteFav(favorites?.id)} />
        <img className='fav-coin-logo' src={favorites?.image} alt={favorites?.id} />
        <span className='fav-coin-price'><p>{favorites?.current_price?.toFixed(2)}€</p></span>
      </div>
    </div>
  )
}

export default FavoriteCoin
