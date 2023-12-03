import React, { useEffect, useState } from "react";
import "./DataTable.css";

function DataTable() {
  const [cryptoData, setCryptoData] = useState([]);
  const [visibleData, setVisibleData] = useState([]);
  const [loadedDataCount, setLoadedDataCount] = useState(0);
  const pageSize = 50;

  async function fetchData() {
    try {
      const response = await fetch(`https://api.coincap.io/v2/assets`);
      const data = await response.json();
      setCryptoData(data.data || []);
      setLoadedDataCount(pageSize);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    setVisibleData(cryptoData.slice(0, loadedDataCount));
  }, [cryptoData, loadedDataCount]);

  const loadMore = async () => {
    try {
      setLoadedDataCount((prevCount) => prevCount + pageSize);
    } catch (error) {
      console.error("Error fetching more data:", error);
    }
  };
  const renderPercentage = (percentage) => {
    if (parseFloat(percentage) <= 0) {
      return (
        <span style={{ color: 'red' }}>
          {parseFloat(percentage).toFixed(2)}%
        </span>
      );
    } else {
      return (
        <span style={{color:"green"}}>
          {parseFloat(percentage).toFixed(2)}%
        </span>
      );
    }
  };
  
  return (
    <div className="datatable">
      <div className="datatable-top">
        <ul>
          <li>
            MARKET CAP <br />
            1.47T
          </li>
          <li>
            EXCHANGE VOL <br /> 18.57B
          </li>
          <li>
            ASSETS <br />
            2,296
          </li>
          <li>
            EXCHANGES <br />
            73
          </li>
          <li>
            MARKETS <br />
            9,298
          </li>
          <li>
            BTC DOM INDEX <br />
            51.8%
          </li>
        </ul>
      </div>
      <div className="datatable-bottom">
        <table id="cryptoTable">
          <thead>
            <tr className="table-heading">
              <th>Rank</th>
              <th id="name-th">Name</th>
              <th>Symbol</th>
              <th>Price</th>
              <th>Market Cap</th>
              <th>vwap24Hr</th>
              <th>Supply</th>
              <th>Change(24Hr)</th>
            </tr>
          </thead>
          <tbody>
            {visibleData.map((item, index) => (
              <tr className="table-data" key={index}>
              <td>{item.rank}</td>
             <td className="name-col">
             <div className="icon">
               <img
                 className="icon-img"
                 src={`https://assets.coincap.io/assets/icons/${item.symbol.toLowerCase()}@2x.png`}
                 alt={item.symbol}
               />
             </div>
             <div className="name-symbol">
               <span className="name">{item.name}</span>
               <span className="symbol">{item.symbol}</span>
             </div>
           </td>
                <td>{item.symbol}</td>
                <td>{Number(item.priceUsd).toFixed(2)}</td>
                <td>{Number(item.marketCapUsd/ 1e9).toFixed(2)+'b'}</td>
                <td>{Number(item.vwap24Hr).toFixed(2)}</td>
                <td>{Number(item.supply/ 1e6).toFixed(2) + 'm'}</td>
                <td>{renderPercentage(item.changePercent24Hr)}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="btn" onClick={loadMore}>
          Load More
        </button>
      </div>
    </div>
  );
}

export default DataTable;
