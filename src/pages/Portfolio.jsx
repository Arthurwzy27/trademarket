import React from 'react'
import CoinCard from '../components/CoinCard'


import '../components/scss/Portfolio.scss';


const Portfolio = () => {
  return (
    <>
    <div className='portfolio-container'>
      <div className="dashboard-sidebar">
        <span className=''>Portfolio 1</span>
        <span className=''> 12.42 $</span>
        <span className=''> +0.32%</span>
      </div>
      <div className="portfolio-coin-container">
        <div className="portfolio-coin-details">
          <div className="portfolio-coin-card-container">
            <div className="portfolio-coin-infos">
              <img className="portfolio-coin-img" src='' alt='coin-img' />
              <span>Bitcoin - BTC</span>

            </div>
            <span>18073.43 $ - 0.86%</span>
          </div>
        </div>
      </div>
    </div>

    <div className="portfolio-carrousel-container">
      <div className="portfolio-carrousel-infos">
        <img className="portfolio-coin-img" src='' alt='💵' />
        <div className="portfolio-carrousel-key">
        <span>18073.43 $ </span>
        <span>- 0.86%</span>
      </div>
      </div>
      <span>18073.43 $ - 0.86%</span>
    </div>
    <div className="portfolio-carrousel-container">
      <div className="portfolio-carrousel-infos">
        <img className="portfolio-coin-img" src='' alt='💵' />
        <div className="portfolio-carrousel-key">
        <span>18073.43 $ </span>
        <span>- 0.86%</span>
      </div>
      </div>
      <div className="portfolio-carrousel-key">
        <span>18073.43 $ </span>
        <span>- 0.86%</span>
      </div>
    </div>
    <div className="portfolio-carrousel-container">
      <div className="portfolio-carrousel-infos">
        <img className="portfolio-coin-img" src='' alt='💵' />
        <span>Bitcoin - BTC</span>
      </div>
      <div className="portfolio-carrousel-key">
        <span>18073.43 $ </span>
        <span>- 0.86%</span>
      </div>
    </div>
    </>
  )
}

export default Portfolio
