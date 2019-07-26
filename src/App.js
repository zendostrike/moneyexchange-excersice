import React, { useState, useEffect } from 'react';
import { getDollarCurrencyRate } from "./services";
import { Header, Body, Footer } from "./components";

function App() {
  const [exchangeRateData, setExchangeRateData] = useState(null);
  
  async function fetchData() {
    const data = await getDollarCurrencyRate();
    setExchangeRateData(data)
  }

  useEffect(() => {
    /** Load data the first time component loads */
    fetchData();

    /** Load data each ten minuts */
    const interval = setInterval(() => {
      fetchData();
    }, 600000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <Header />
      <Body exchangeRateData={exchangeRateData} />
      <Footer />
    </div>
  );
}

export default App;
