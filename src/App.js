import './App.css';
import React, { useEffect } from 'react';
import AutoComplete from "./components/AutoComplete";
import StockList from "./components/StockList";

function App() {

  useEffect(() => {

  }, [])

  return (
    <div className="App">
      Trademarket
      <AutoComplete />
      <StockList />
    </div>
  );
}

export default App;
