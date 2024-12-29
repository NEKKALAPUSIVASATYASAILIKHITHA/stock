import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './PortfolioDashboard.css'; // Make sure to import the new CSS file

const Dashboard = () => {
  const [portfolio, setPortfolio] = useState([]);
  const [totalPortfolioValue, setTotalPortfolioValue] = useState(0);
  const [totalGainLoss, setTotalGainLoss] = useState(0);

  // Fetch portfolio data from backend API
  useEffect(() => {
    axios
      .get('http://localhost:8083/stocks') // This is your backend URL
      .then((response) => {
        const portfolioData = response.data;
        setPortfolio(portfolioData);
        
        // Calculate the total portfolio value and gain/loss
        const totalValue = portfolioData.reduce((acc, stock) => acc + stock.quantity * stock.currentPrice, 0);
        const totalGainLoss = portfolioData.reduce(
          (acc, stock) => acc + (stock.quantity * stock.currentPrice) - (stock.quantity * stock.buyPrice),
          0
        );

        setTotalPortfolioValue(totalValue.toFixed(2));
        setTotalGainLoss(totalGainLoss.toFixed(2));
      })
      .catch((error) => {
        console.error("Error fetching portfolio data:", error);
      });
  }, []); // Runs once when the component mounts

  return (
    <div className="dashboard">
      <h2>Portfolio Dashboard</h2>
      <div className="metrics">
        <div className="metric">
          <div className="metric-title">Total Portfolio Value</div>
          <div className="metric-value">${totalPortfolioValue}</div>
        </div>
        <div className="metric">
          <div className="metric-title">Total Gain/Loss</div>
          <div className="metric-value">${totalGainLoss}</div>
        </div>
      </div>

      <h3>Stock Holdings</h3>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Ticker</th>
            <th>Quantity</th>
            <th>Buy Price</th>
            <th>Current Price</th>
            <th>Total Value</th>
          </tr>
        </thead>
        <tbody>
          {portfolio.map((stock) => (
            <tr key={stock.id}>
              <td>{stock.name}</td>
              <td>{stock.ticker}</td>
              <td>{stock.quantity}</td>
              <td>{stock.buyPrice}</td>
              <td>{stock.currentPrice}</td>
              <td>{(stock.quantity * stock.currentPrice).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;

/*import React, { useState, useEffect } from 'react';
import axios from 'axios';
import StockTable from './StockTable'; // Import the StockTable component
import './PortfolioDashboard.css'; // Include your CSS

const Dashboard = () => {
  const [portfolio, setPortfolio] = useState([]);
  const [totalPortfolioValue, setTotalPortfolioValue] = useState(0);
  const [totalGainLoss, setTotalGainLoss] = useState(0);

  // Fetch portfolio data from backend API
  useEffect(() => {
    axios
      .get('http://localhost:8083/stocks') // Backend URL
      .then((response) => {
        const portfolioData = response.data;
        setPortfolio(portfolioData);
        updateMetrics(portfolioData); // Update metrics based on portfolio data
      })
      .catch((error) => {
        console.error('Error fetching portfolio data:', error);
      });
  }, []);

  // Helper function to calculate Total Portfolio Value and Gain/Loss
  const updateMetrics = (portfolioData) => {
    const totalValue = portfolioData.reduce(
      (acc, stock) => acc + stock.quantity * stock.currentPrice,
      0
    );

    const totalGainLoss = portfolioData.reduce(
      (acc, stock) =>
        acc + stock.quantity * (stock.currentPrice - stock.buyPrice),
      0
    );

    setTotalPortfolioValue(totalValue.toFixed(2));
    setTotalGainLoss(totalGainLoss.toFixed(2));
  };

  // Event Handlers for Edit and Delete
  const handleEdit = (stock) => {
    console.log('Edit stock:', stock);
    // Implement edit functionality
  };

  const handleDelete = (ticker) => {
    const updatedPortfolio = portfolio.filter((stock) => stock.ticker !== ticker);
    setPortfolio(updatedPortfolio);
    updateMetrics(updatedPortfolio); // Recalculate metrics after deletion
  };

  return (
    <div className="dashboard">
      <h2>Portfolio Dashboard</h2>
      <div className="metrics">
        <div className="metric">
          <div className="metric-title">Total Portfolio Value</div>
          <div className="metric-value">${totalPortfolioValue}</div>
        </div>
        <div className="metric">
          <div className="metric-title">Total Gain/Loss</div>
          <div className="metric-value">${totalGainLoss}</div>
        </div>
      </div>

      <StockTable stocks={portfolio} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
};

export default Dashboard;
*/