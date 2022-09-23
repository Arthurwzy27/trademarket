import React, { useState, useEffect } from 'react';

import './AutoComplete.css';


const AutoComplete = ({value, OnKeyEnter}) => {

  const [search, setSearch] = useState('');
  const [result, setResult] = useState([]);

  const onClickSearch = e => {
    setSearch(e.target.value);
    // console.log(`Searching for: ${e.target.value}`);
  }

  const handleSubmit = e => {
    if (e.key === 'Enter') {
      e.preventDefault();
      setSearch(e.target.value);
    }
  }

  // console.log(onClickSearch());

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://api.coingecko.com/api/v3/coins/${search}`);
      const data = await response.json();
      console.log(data.name);
      console.log(data.symbol);
      // console.log(data.market_data.current_price.usd);

      setSearch(data);
    };
    if (search.length > 0) {
      fetchData();
    } else {
      setResult([])
    }
  }, [search]);

  return (
    <div>
      <input value={result} onKeyDown={handleSubmit} onChange={e => setResult(e.target.value)} placeholder='Search a coin...'/>
      <button onClick={onClickSearch}>Search</button>
    </div>
  )
}

export default AutoComplete
