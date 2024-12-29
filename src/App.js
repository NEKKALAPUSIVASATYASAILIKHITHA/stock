import React, { useState, useEffect } from 'react';
import Dashboard from './components/Dashboard';
import StockForm from './components/StockForm';
import StockTable from './components/StockTable';
import { fetchStockPrice } from './services/api';
import './App.css'; 

function App() {
  const [portfolio, setPortfolio] = useState([]);
  const [stockToEdit, setStockToEdit] = useState(null);

  useEffect(() => {
    // Fetch current stock prices for the portfolio when it changes
    const updatePortfolioPrices = async () => {
      const updatedPortfolio = await Promise.all(
        portfolio.map(async (stock) => {
          const currentPrice = await fetchStockPrice(stock.ticker);
          return { ...stock, currentPrice: currentPrice || 0 };
        })
      );
      setPortfolio(updatedPortfolio);
    };
    
    updatePortfolioPrices();
  }, [portfolio]);

  const handleAddStock = async (newStock) => {
    const currentPrice = await fetchStockPrice(newStock.ticker);
    newStock.currentPrice = currentPrice || 0;
    setPortfolio((prevPortfolio) => [...prevPortfolio, newStock]);
  };

  const handleUpdateStock = async (updatedStock) => {
    const currentPrice = await fetchStockPrice(updatedStock.ticker);
    updatedStock.currentPrice = currentPrice || 0;

    setPortfolio((prevPortfolio) =>
      prevPortfolio.map((stock) =>
        stock.ticker === updatedStock.ticker ? updatedStock : stock
      )
    );
    setStockToEdit(null);  // Reset editing state after saving
  };

  const handleDeleteStock = (ticker) => {
    setPortfolio((prevPortfolio) =>
      prevPortfolio.filter((stock) => stock.ticker !== ticker)
    );
  };

  return (
    <div className="App">
      <Dashboard portfolio={portfolio} />
      <StockForm onSave={stockToEdit ? handleUpdateStock : handleAddStock} stockToEdit={stockToEdit} />
      <StockTable stocks={portfolio} onEdit={setStockToEdit} onDelete={handleDeleteStock} />
    </div>
  );
}

export default App;
