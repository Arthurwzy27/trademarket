import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { fetchTrending } from '../api/dataService';

import './Home.scss';

const Home = () => {
  const { data: trending } = useQuery(['trending'], fetchTrending)
  return (
    <div className='home-container'>
      <div id="trending-container">
        {/* Crypto card top7 */}
        <span>Trending</span>
        <div className="trending-table">
          <table>
            <tbody>
              {trending?.coins.map((coin, id) =>
                <ul key={id} className='trending-table-coin'>
                  <img className='trending-coin-img' src={`${coin.item.small}`} alt={`${coin.item.id}`} />
                  <div className="trending-coin-item">
                    <li>{coin.item.id}</li>
                    <li>{coin.item.symbol}</li>
                    <li>{coin.item.price_btc.toFixed(4)}</li>
                  </div>
                </ul>

              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Home
