import React from 'react';
import './Coin.css';

const Coin = (props) => {
  return (
    <>
      {props.listOfCoin
      .filter(item => !props.favorites.includes(item))
      .map((coin, id) => {
        return (
          <div key={id} className='coin-infos'>
            <div className="coin-details">
            <button onClick={() => props.addToFav(coin)}>+</button>
              <span className='coin-sym'>{coin.symbol}</span>
              <span className='coin-name'>{coin.name}</span>
              <span className='coin-price'>{coin.current_price}</span>

            </div>
          </div>
        )

      })}
    </>
  )
}

export default Coin
