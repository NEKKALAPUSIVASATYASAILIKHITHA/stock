/*const API_KEY = 'CDNPF23ZTGGV1H9Y'; // Replace with your actual Alpha Vantage API key
const BASE_URL = 'https://www.alphavantage.co'; // Alpha Vantage base URL

export const fetchStockPrice = async (ticker) => {
  try {
    const response = await fetch(`${BASE_URL}/query?function=GLOBAL_QUOTE&symbol=${ticker}&apikey=${API_KEY}`);
    const data = await response.json();

    if (data['Global Quote'] && data['Global Quote']['05. price']) {
      return parseFloat(data['Global Quote']['05. price']);
    } else {
      throw new Error(`Unable to fetch price for ticker: ${ticker}`);
    }
  } catch (error) {
    console.error('Error fetching stock price:', error);
    return null; // Return null in case of an error
  }
};
*/
const API_KEY = 'CDNPF23ZTGGV1H9Y';
const BASE_URL = 'https://www.alphavantage.co';


const priceCache = new Map();
const CACHE_DURATION = 60000;

export const fetchStockPrice = async (ticker) => {
  try {
    
    const cachedData = priceCache.get(ticker);
    if (cachedData && Date.now() - cachedData.timestamp < CACHE_DURATION) {
      return cachedData.price;
    }

    const response = await fetch(
      `${BASE_URL}/query?function=GLOBAL_QUOTE&symbol=${ticker}&apikey=${API_KEY}`,
      {
        headers: {
          'Accept': 'application/json',
          'Cache-Control': 'no-cache'
        }
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    if (data['Global Quote'] && data['Global Quote']['05. price']) {
      const price = parseFloat(data['Global Quote']['05. price']);
      
      priceCache.set(ticker, {
        price,
        timestamp: Date.now()
      });
      
      return price;
    } else {
      throw new Error(`No price data available for ${ticker}`);
    }
  } catch (error) {
    console.error(`Error fetching stock price for ${ticker}:`, error);
    
    const cachedData = priceCache.get(ticker);
    if (cachedData) {
      return cachedData.price;
    }
    return null;
  }
};