import React, { useState,useEffect } from 'react'

const StockList = () => {
const [stockList, setStockList] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=5&page=1&sparkline=false");
      const data = await response.json();
      console.log(data[0].name);
      console.log(data);
        setStockList(data);
    };
    fetchData();
    }, []);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Chg</th>
            <th>Chg%</th>
          </tr>
        </thead>
        <tbody>
        {stockList.map( stock => {
          return (
            <tr>
              <td>{stock.symbol}</td>
              <td>{stock.name}</td>
              <td>{stock.current_price}</td>
              <td>{stock.price_change_24h}</td>
              <td>{stock.price_change_percentage_24h}</td>
            </tr>
          )
        })}
        </tbody>
      </table>
    </>
  )
}

export default StockList
