import React,  { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchAllCoin } from '../api/dataService';
// import { Link } from 'react-router-dom';
import CoinCard from './CoinCard';
import FavoriteCoin from './FavoriteCoin';

import './scss/AllCoins.scss';


const AllCoins = () => {
  const [favorites, setFavorites] = useState([]);
  const { data: allCoin } = useQuery(['all coins'], fetchAllCoin)

  const addToFav = (coin, copy) => {
    if(favorites.indexOf(coin) !== -1) {
      const newFavs = favorites.filter(item => item.id !== coin)
      setFavorites(newFavs)
    } else {
      const newFavs = favorites.filter(item => item.id !== coin.id)
      setFavorites([...newFavs, coin])
    }
  }

  const deleteFav = id => {
    const removedCoin = favorites.filter(item => item.id !== id);
    setFavorites(removedCoin)
  }

  return (
    <div>
      <FavoriteCoin favorites={favorites} deleteFav={deleteFav} />

      {allCoin?.map((coin, id) =>
        <div key={id} className='allcoin-container'>
          <CoinCard data={coin} handleFavorite={addToFav} />
        </div>
      )}
    </div>
  )
}

export default AllCoins
