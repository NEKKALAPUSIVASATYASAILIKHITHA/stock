/*import React from 'react';

const StockTable = ({ stocks, onEdit, onDelete }) => {
  return (
    <div className="stock-table-container">
      <h3>Your Stock Portfolio</h3>
      <table className="stock-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Ticker</th>
            <th>Quantity</th>
            <th>Buy Price</th>
            <th>Current Price</th>
            <th>Total Value</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {stocks.length > 0 ? (
            stocks.map((stock) => {
              // Ensure buyPrice and currentPrice are valid numbers
              const buyPrice = isNaN(stock.buyPrice) ? 0 : parseFloat(stock.buyPrice);
              const currentPrice = isNaN(stock.currentPrice) ? 0 : parseFloat(stock.currentPrice);
              const totalValue = (buyPrice * stock.quantity).toFixed(2);
              const currentValue = (currentPrice * stock.quantity).toFixed(2);

              return (
                <tr key={stock.ticker}>
                  <td>{stock.name}</td>
                  <td>{stock.ticker}</td>
                  <td>{stock.quantity}</td>
                  <td>${buyPrice.toFixed(2)}</td>
                  <td>${currentPrice.toFixed(2)}</td>
                  <td>${currentValue}</td>
                  <td>
                    <button
                      className="edit-btn"
                      onClick={() => onEdit(stock)}
                      style={{ marginRight: '10px' }}
                    >
                      Edit
                    </button>
                    <button
                      className="delete-btn"
                      onClick={() => onDelete(stock.ticker)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan="7" style={{ textAlign: 'center' }}>No stocks in portfolio</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default StockTable;
*/

/*import React from 'react';
 

const StockTable = ({ stocks, onEdit, onDelete }) => {
  return (
    <div className="stock-table-container">
      <h3>Your Stock Portfolio</h3>
      <table className="stock-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Ticker</th>
            <th>Quantity</th>
            <th>Buy Price</th>
            <th>Current Price</th>
            <th>Total Value</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {stocks.length > 0 ? (
            stocks.map((stock) => {
              const totalValue = (stock.quantity * stock.currentPrice).toFixed(2);

              return (
                <tr key={stock.ticker}>
                  <td>{stock.name}</td>
                  <td>{stock.ticker}</td>
                  <td>{stock.quantity}</td>
                  <td>${stock.buyPrice.toFixed(2)}</td>
                  <td>${stock.currentPrice.toFixed(2)}</td>
                  <td>${totalValue}</td>
                  <td>
                    <button
                      className="edit-btn"
                      onClick={() => onEdit(stock)}
                      style={{ marginRight: '10px' }}
                    >
                      Edit
                    </button>
                    <button
                      className="delete-btn"
                      onClick={() => onDelete(stock.ticker)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan="7" style={{ textAlign: 'center' }}>
                No stocks in portfolio
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default StockTable;*/
import React from 'react';
import './StockTable.css'; // Make sure to import the CSS for styling

const StockTable = ({ stocks, onEdit, onDelete }) => {
  return (
    <div className="stock-table-container">
      <h3>Your Stock Portfolio</h3>
      <table className="stock-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Ticker</th>
            <th>Quantity</th>
            <th>Buy Price</th>
            <th>Current Price</th>
            <th>Total Value</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {stocks.length > 0 ? (
            stocks.map((stock) => {
              const totalValue = (stock.quantity * stock.currentPrice).toFixed(2);

              return (
                <tr key={stock.ticker}>
                  <td>{stock.name}</td>
                  <td>{stock.ticker}</td>
                  <td>{stock.quantity}</td>
                  <td>${stock.buyPrice.toFixed(2)}</td>
                  <td>${stock.currentPrice.toFixed(2)}</td>
                  <td>${totalValue}</td>
                  <td>
                    <button
                      className="edit-btn"
                      onClick={() => onEdit(stock)}
                      style={{ marginRight: '10px' }}
                    >
                      Edit
                    </button>
                    <button
                      className="delete-btn"
                      onClick={() => onDelete(stock.ticker)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan="7" style={{ textAlign: 'center' }}>
                No stocks in portfolio
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default StockTable;

