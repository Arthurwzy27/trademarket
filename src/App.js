import './App.css';
import React, { useEffect } from 'react';
import StockList from "./components/StockList";

function App() {

  useEffect(() => {

  }, [])

  return (
    <div className="App">
      Trademarket
      <StockList />
    </div>
  );
}

export default App;
