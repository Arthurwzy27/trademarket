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

  const handleFavorite = (coin) => {
    setFavorites(coin)
  }

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
  // ---END TEST


  return (
    <div>
      {/* {favorites ?
        favorites.map((coin, id) =>
          <span className='favoriteCoin-container'>{favorites.id}</span>
        )
      : 'No Favorite'} */}

      {/* {favorites.length > 0 &&
          <div className='favoriteCoin-container'>
            <FavoriteCoin favorites={favorites} />
          </div>
      } */}

      {favorites.length > 0 &&
        favorites.map((coin, id) =>
          <div key={id} className='favoriteCoin-container'>
            <FavoriteCoin favorites={coin} deleteFav={deleteFav} />
          </div>
      )}

      {allCoin?.map((coin, id) =>
        <div key={id} className='allcoin-container'>
            <CoinCard data={coin} handleFavorite={addToFav} />
        </div>
      )}
    </div>
  )
}

export default AllCoins
