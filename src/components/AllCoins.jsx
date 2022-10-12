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

  console.log(favorites);

  // ---TEST
  const addToFav = (coin, copy) => {

    if(favorites.indexOf(coin) !== -1) {
      // --------- JUST ADD NOW .id to item and when already in fav, if I search for it I can't put it back again and it renders the all lis again
      const newFavs = favorites.filter(item => item.id !== coin)
      console.log('log IF newFavs:', newFavs)

      // ---------- Not logging because when favorite, coin removed from list so can't re-add
      // console.log(`${coin.name} is already in your favorites`)
      setFavorites(newFavs)
    } else {
      const newFavs = favorites.filter(item => item.id !== coin.id)
      setFavorites([...newFavs, coin])
      // setSearchCoin('')
      // console.log(`addToFav -> ${coin.id} in ElseIf`, favorites)
    }
    console.log('Favorite after addToFAAAV', favorites)


    // const alreadyInFav = favorites
          // .filter(fav => fav.id !== id)
          // .filter(item => item.id !== id)
          // console.log(alreadyInFav)

    // if (favorites.includes(id)) {
    //   const newFav = favorites.filter(fav => fav !== id)
    //   setFavorites(...favorites, newFav)
    //   console.log('---- favorite include id', favorites.includes(id))
    //   console.log('******log newFav:', newFav)
    // } else { setFavorites([...favorites, id])}
    // if (alreadyInFav) {
    //   console.log(`/! ${id.name} /! already in`)
    //   && setFavorites([...favorites])
    // } else {
    //   console.log(`adding ***${id.name}*** into the list`)
    //   && setFavorites([...favorites, id])
    // }
    // const data = listOfCoin.find(item => item.id === id);
    // setFavorites([...favorites, id])
    // setListOfCoin(listOfCoin)

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
            <FavoriteCoin favorites={coin} />
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
