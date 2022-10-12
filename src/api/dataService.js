const getFormattedCoinData = async (coin, units='metric') => {
  const URL = `https://api.coingecko.com/api/v3/coins/${coin}`
  const data = await fetch(URL)
    .then(res => res.json())

    const {
      symbol,
      name,
      market_data: { current_price, price_change_24h,  price_change_percentage_24h}
    } = data

    return { symbol, name, current_price, price_change_24h, price_change_percentage_24h  }
}

export { getFormattedCoinData };

const getFormattedAllCoin = async (coin, units='metric') => {
  const URL = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false`
  const data = await fetch(URL)
    .then(res => res.json())
    console.log(data)

    const {
      symbol,
      name,
      current_price,
      price_change_24h,
      price_change_percentage_24h
    } = data

    return {
      symbol,
      name,
      current_price,
      price_change_24h,
      price_change_percentage_24h
    }
}

export { getFormattedAllCoin };

export const fetchTrending = async() => {
  const API = 'https://api.coingecko.com/api/v3/search/trending'
  const res = await fetch(API)
  return res.json()
}

export const fetchAllCoin = async() =>{
  const API = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false`
  const res = await fetch(API)
  return res.json()
}

export const fetchSearchCoin = async(query) =>{
  const API = `https://api.coingecko.com/api/v3/search?query=${query}`
  const res = await fetch(API)
  return res.json()
}
