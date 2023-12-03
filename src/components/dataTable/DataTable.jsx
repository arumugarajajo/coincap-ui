import React, { useEffect, useState } from "react";
import "./DataTable.css";

function DataTable() {
  const [cryptoData, setCryptoData] = useState([]);
  const [visibleData, setVisibleData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loadedDataCount, setLoadedDataCount] = useState(0);
  const pageSize = 50;

  async function fetchData() {
    try {
      const response = await fetch(
        `https://api.coincap.io/v2/assets`
      );
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
              <th>Name</th>
              <th>Symbol</th>
              <th>Price (USD)</th>
              <th>Market Cap (USD)</th>
              <th>Change (24H)</th>
              <th>Explorer</th>
            </tr>
          </thead>
          <tbody>
            {visibleData.map((item, index) => (
              <tr className="table-data" key={index}>
                <td>{item.rank}</td>
                <td>{item.name}</td>
                <td>{item.symbol}</td>
                <td>{item.priceUsd}</td>
                <td>{item.marketCapUsd}</td>
                <td>{item.changePercent24Hr}%</td>
                <td>
                  <a
                    href={item.explorer}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Explorer
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="btn" onClick={loadMore}>Load More</button>
      </div>
    </div>
  );
}

export default DataTable;
