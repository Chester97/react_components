import { useEffect, useState } from 'react';

export default function useFetch(apiUrl) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();
    const getData = async (url) => {
      setLoading(true);
      try {
        const response = await fetch(url, { signal: abortController.signal });
        const data = await response.json();
        setData(data);

        return data;
      } catch(e) {
        setError(e);

        return e;
      } finally {
        setLoading(false);

        return;
      }
    }

    getData(apiUrl);

    return () => {
      abortController.abort();
    }
  }, [apiUrl]);


  return {data, loading, error};
};