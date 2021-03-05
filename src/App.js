import React, { useEffect, useState } from 'react';
import { request } from 'graphql-request'
import {queryRefreshRates} from "./queryes";

function App() {
  const [products, setProducts] = useState(null);
  useEffect(() => {
    const fetchProducts = async () => {
      const products = await request(
          'https://api-us-east-1.graphcms.com/v2/cklv8d47hep1201v194x43cei/master',
          queryRefreshRates
      );

      setProducts(products);
    };

    fetchProducts();
  }, []);
  console.log(products);
  return <div className="App">test</div>;
}

export default App;
