import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCtrl = new AbortController();

      setTimeout(() => {
        //simulating the normal lag in fetching data from server-side     
        fetch(url, { signal: abortCtrl.signal })
          .then(res => {
            //checking response object's "Ok" method to see if we got a response back from the database
            if (!res.ok) {   
              throw Error(`Couldn't fetch resource data`);
            }
            return res.json();
          })
          .then(data => {
            setData(data);
            setLoading(false);
            setError(null);
          })
          .catch(err => {
            if (err.name === 'AbortError') {
              console.log('fetch aborted');
            }else {
              setLoading(false);
              setError(err.message);
            }
          });
      }, 1000);

      return () => abortCtrl.abort(); //using the abort method on our controller
  }, [url]);

    return { data, loading, error };
}

export default useFetch;

