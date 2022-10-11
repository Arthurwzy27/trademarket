import React from 'react'
// import { useQuery } from '';
import { fetchTrending } from '../api/dataService';

import './Home.scss';

const Home = () => {
  return (
    <div className='home-container'>
      <div id="trending-container">
        {/* Crypto card top7 */}
        <span>Trending</span>
        <div className="trending-table">
          <table>
            <ul className='trending-table-coin'>
              <li className='trending-coin-item'>Bitcoin</li>
              <li className='trending-coin-item'>20245 €</li>
            </ul>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Home
