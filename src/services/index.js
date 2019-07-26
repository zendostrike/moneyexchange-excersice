import axios from 'axios'

const url = "http://data.fixer.io/api/latest?access_key=e6375b0ac6f7bb52859ed163c5d609bf";

const getDollarCurrencyRate = async function getUser() {
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

export { getDollarCurrencyRate };
