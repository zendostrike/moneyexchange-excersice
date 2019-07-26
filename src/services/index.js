import axios from 'axios'

const url = "http://www.apilayer.net/api/live?access_key=c079f1ce2fc8784fbc22342914d9ad43&format=1&currencies=EUR";

const getDollarCurrencyRate = async function getUser() {
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

export { getDollarCurrencyRate };
