import React, { useState, useEffect } from 'react';
import Coin from "./Coin";
import Search from "./Search";
import Favorite from "./Favorite";


const DisplayAllCoin = () => {
  const [listOfCoin, setListOfCoin] = useState([]);
  const [searchCoin, setSearchCoin] = useState('');
  const [favorites, setFavorites] = useState([]);


  const getCoinRequest = async () => {
    const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false`
    const response = await fetch(url);
    const data = await response.json();
    setListOfCoin(data)
    // if (searchCoin) {
      // console.log(data)
    // }
  }

  useEffect(() => {
    getCoinRequest()
  }, [])
  // const url = fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false`)


  // const filteredCoin = listOfCoin.filter(coin =>{
  //   return (
  //     coin.name.toLowerCase().includes(searchCoin)
  //     || coin.symbol.toLowerCase().includes(searchCoin)
  //     || coin.id.toLowerCase().includes(searchCoin)
  //   )
  // })

  // const onSubmit = e => {
  //   if (e.key === 'Enter') {
  //     setSearchCoin('')
  //   }
  // }

  // const addToFavorite = (id, copy) => {
  //   console.log('***id:', id, '***copy:', copy)
  //   console.log('Added to favorite ...')
  //   setFavorites([...favorites, listOfCoin.find(item => item.id === id)]);

  //   if(!copy) setListOfCoin(listOfCoin.filter(item => item.id !== id));
  //   console.log(favorites)
  // }

  const addToFav = id => {
    console.log('Log ID', id)
    // const data = listOfCoin.find(item => item.id === id);
    // console.log('Show WHAT is data:', data, '****add to favorite...', setFavorites([...favorites, data]))
    setFavorites([...favorites, id])
  }

  const deleteFav = id => {
    const removedCoin = favorites.filter(item => item.id !== id);
    setFavorites(removedCoin)
  }

  return (
    <div>
      {/* <Search searchCoin={searchCoin} setSearchCoin={setSearchCoin} /> */}
      <h2>LIST OF ALL COIN ONLY </h2>
      <Favorite favorites={favorites} deleteFav={deleteFav}/>
      <Coin listOfCoin={listOfCoin} favorites={favorites} addToFav={addToFav} />
    </div>
  )
}

export default DisplayAllCoin
