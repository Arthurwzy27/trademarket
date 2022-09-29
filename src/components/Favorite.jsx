import React from 'react'
import './Coin.css';


const Favorite = (props) => {
  return (
    <>
      {props.favorites.length > 0 && (
        props.favorites.map((coin, id) => {
          return (
            <div key={id} className='fav-coin-infos'>
              <span className='fav-coin-sym'>{coin?.symbol ? <p>{coin.symbol}</p> : null}</span>
              <span className='fav-coin-name'>{coin?.name ? <p>{coin.name}</p> : null}</span>
              <span className='fav-coin-price'>{coin?.current_price ? <p>{coin.current_price.toFixed(2)}€</p> : null}</span>
              <button className='fav-delete-coin' onClick={() => props.deleteFav(coin.id)}>x</button>
            </div>
          )
        })
      )}
    </>
  )
}

export default Favorite
