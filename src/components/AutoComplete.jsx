import React from 'react';

import './AutoComplete.css';

const AutoComplete = ({value, OnKeyEnter}) => {
  const search = () => {
    console.log('You clicked!');
  }

  return (
    <div>
      <input value={value} onKey={OnKeyEnter} placeholder='Search a coin...'/>
      <button onClick={search}>Search</button>
    </div>
  )
}

export default AutoComplete
