/*import React, { useState, useEffect } from 'react';
import './StockForm.css';  

const StockForm = ({ onSave, stockToEdit }) => {
  const [stock, setStock] = useState({
    name: '',
    ticker: '',
    quantity: '',
    buyPrice: '',
  });

  useEffect(() => {
    if (stockToEdit) {
      setStock(stockToEdit);
    }
  }, [stockToEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStock((prevStock) => ({
      ...prevStock,
      [name]: value,
    }));
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(stock);  
    setStock({ name: '', ticker: '', quantity: '', buyPrice: '' }); 
  };

  return (
    <form onSubmit={handleSubmit} className="stock-form">
      <h3>{stockToEdit ? 'Edit Stock' : 'Add New Stock'}</h3>
      <div className="form-group">
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={stock.name}
          onChange={handleChange}
          required
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label>Ticker:</label>
        <input
          type="text"
          name="ticker"
          value={stock.ticker}
          onChange={handleChange}
          required
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label>Quantity:</label>
        <input
          type="number"
          name="quantity"
          value={stock.quantity}
          onChange={handleChange}
          required
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label>Buy Price:</label>
        <input
          type="number"
          step="0.01"
          name="buyPrice"
          value={stock.buyPrice}
          onChange={handleChange}
          required
          className="form-control"
        />
      </div>
      <button type="submit" className="submit-btn">
        {stockToEdit ? 'Update Stock' : 'Add Stock'}
      </button>
    </form>
  );
};

export default StockForm;
*/
import React, { useState } from "react";
import './StockForm.css';  


const StockForm = ({ onSubmit, initialData }) => {
  // Initialize form state
  const [formData, setFormData] = useState(
    initialData || { stockName: "", ticker: "", quantity: "", buyPrice: "" }
  );

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Call onSubmit callback with form data
    onSubmit(formData);
    // Reset form after submission
    setFormData({ stockName: "", ticker: "", quantity: "", buyPrice: "" });
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: "400px", margin: "0 auto" }}>
      <div style={{ marginBottom: "1rem" }}>
        <label htmlFor="stockName" style={{ display: "block", fontWeight: "bold" }}>Stock Name</label>
        <input
          type="text"
          id="stockName"
          name="stockName"
          value={formData.stockName}
          onChange={handleChange}
          required
          placeholder="e.g., Apple"
          style={{ width: "100%", padding: "0.5rem", borderRadius: "4px" }}
        />
      </div>
      <div style={{ marginBottom: "1rem" }}>
        <label htmlFor="ticker" style={{ display: "block", fontWeight: "bold" }}>Ticker</label>
        <input
          type="text"
          id="ticker"
          name="ticker"
          value={formData.ticker}
          onChange={handleChange}
          required
          placeholder="e.g., AAPL"
          style={{ width: "100%", padding: "0.5rem", borderRadius: "4px" }}
        />
      </div>
      <div style={{ marginBottom: "1rem" }}>
        <label htmlFor="quantity" style={{ display: "block", fontWeight: "bold" }}>Quantity</label>
        <input
          type="number"
          id="quantity"
          name="quantity"
          value={formData.quantity}
          onChange={handleChange}
          required
          placeholder="e.g., 10"
          style={{ width: "100%", padding: "0.5rem", borderRadius: "4px" }}
        />
      </div>
      <div style={{ marginBottom: "1rem" }}>
        <label htmlFor="buyPrice" style={{ display: "block", fontWeight: "bold" }}>Buy Price</label>
        <input
          type="number"
          id="buyPrice"
          name="buyPrice"
          value={formData.buyPrice}
          onChange={handleChange}
          required
          placeholder="e.g., 150.00"
          style={{ width: "100%", padding: "0.5rem", borderRadius: "4px" }}
        />
      </div>
      <button
        type="submit"
        style={{
          backgroundColor: "#007bff",
          color: "#fff",
          padding: "0.5rem 1rem",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Submit
      </button>
    </form>
  );
};

export default StockForm;
