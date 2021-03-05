import React, { useEffect, useState } from 'react';
import { request } from 'graphql-request'
import {queryRefreshRates,queryLeftSides,queryStockModules,queryTextPages} from "./queryes";

function App() {
  const [refreshRates, setRefreshRates] = useState(null);
  const [LeftSides, setLeftSides] = useState(null);
  const [stockModules, setStockModules] = useState(null);
  const [TextPages, setTextPages] = useState(null);

  useEffect(() => {
    const fetchRefreshRates = async () => {
      const data = await request(
          'https://api-us-east-1.graphcms.com/v2/cklv8d47hep1201v194x43cei/master',
          queryRefreshRates
      );

      setRefreshRates(data);
    };

    fetchRefreshRates();
  }, []);

  useEffect(() => {
    const fetchQueryLeftSides = async () => {
      const data = await request(
          'https://api-us-east-1.graphcms.com/v2/cklv8d47hep1201v194x43cei/master',
          queryLeftSides
      );

      setLeftSides(data);
    };

    fetchQueryLeftSides();
  }, []);

  useEffect(() => {
    const fetchStockModules = async () => {
      const data = await request(
          'https://api-us-east-1.graphcms.com/v2/cklv8d47hep1201v194x43cei/master',
          queryStockModules
      );

      setStockModules(data);
    };

    fetchStockModules();
  }, []);

  useEffect(() => {
    const fetchTextPages = async () => {
      const data = await request(
          'https://api-us-east-1.graphcms.com/v2/cklv8d47hep1201v194x43cei/master',
          queryTextPages
      );

      setTextPages(data);
    };

    fetchTextPages();
  }, []);

  return <div className="App">test</div>;
}

export default App;
