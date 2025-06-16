import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const Mobilecontext = createContext();

const MobilecontextProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // ✅ Define `error` state

  useEffect(() => {
    // fetchProducts();
    handlegetalproducts();
  }, []);

  const handlegetalproducts = async () => {
    try {
      const responde = await axios.get(`http://localhost:8070/api/products/list`);
      setProducts(responde.data);
    }
    catch (error) {
      setError(error.message);
      console.log(error.message);
    }
    finally {
      setLoading(false);
    }
  }

  console.log("🙏🙏🙏🙏", products)

  const fetchProducts = async () => {
    try {
      const response = await axios.get(
        'https://63de1e7cf1af41051b0dc6a3.mockapi.io/Data/Api',
      );
      setData(response.data); // ✅ Use `response.data`
    } catch (error) {
      setError(error.message); // ✅ Save error message
      console.error('Fetch error:', error.message);
    } finally {
      setLoading(false);
    }
  };

  const contextValues = { data, loading, error, products, }; // ✅ Pass values to context

  return (
    <Mobilecontext.Provider value={contextValues}>
      {children}
    </Mobilecontext.Provider>
  );
};

export default MobilecontextProvider;
