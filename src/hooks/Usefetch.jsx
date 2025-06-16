import {useEffect, useState} from 'react';
import axios from 'axios';

const Usefetch = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleFetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        'http://localhost:8070/api/products/list',
      );
      console.log('Fetched Products:', response.data);
      setData(response.data.data);
    } catch (err) {
      console.error('Error fetching products:', err.message);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleFetchData();
  }, []);

  const refetch = () => {
    setLoading(true);
    handleFetchData();
  };

  return {data, loading, error, refetch};
};

export default Usefetch;
