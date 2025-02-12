import { useEffect } from 'react';
import { useState } from 'react';

const FetchData = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDataForProduct = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok)
          throw new Error(`HTTP error: Status ${response.status}`);
        let productResponce = await response.json();
        setData(productResponce);
        setError(null);
      } catch (err) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchDataForProduct();
  }, [url]);
  if (!loading) return data;
  return null;
};

export default FetchData;
