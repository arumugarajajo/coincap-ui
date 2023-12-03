import React from "react";
import "./Navbar.css";
import logoicon from "../../Assets/black.svg";
import icon from "../../Assets/topbarlogo.svg";
function Navbar() {
  return (
    <div className="navbar">
      <div className="topbar">
        <span>
          <img className="icon" src={icon} alt="icon" />
        </span>
        <span>
          Buy, sell, & Swap your favorite assets. No KYC. No added fees.
          Decentrailized.
        </span>
        <span class="material-symbols-outlined">arrow_forward</span>{" "}
      </div>
      <div className="bottombar">
        <div className="left-section">
          <ul>
            <li>
              <a href="#">Coins</a>
            </li>
            <li>
              <a href="#">Exchanges</a>
            </li>
            <li>
              <a href="#">Swap</a>
            </li>
          </ul>
        </div>
        <div class="center-section">
          <span>
            <img width={"80px"} height={"40px"} src={logoicon} alt="coincap" />
          </span>
        </div>
        <div className="right-section">
          <ul>
            <li>
              <select
                typeof="text"
                name="currency"
                id="currency"
                className="currency"
              >
                <option value="usd">USD</option>
                <option value="inr">INR</option>
                <option value="eur">EUR</option>
                <option value=" btc">BTC</option>
              </select>
            </li>
            <li>
              <select
                typeof="text"
                name="language"
                id="language"
                className="language"
              >
                <option value="english">English</option>
                <option value="italiano">Italiano</option>
                <option value="हिंदी">हिंदी</option>
                <option value="தமிழ்">தமிழ்</option>
              </select>
            </li>
            <li>
              <a href="#" className="material-symbols-outlined">
                search
              </a>
            </li>
            <li>
              <a href="#" className="material-symbols-outlined">
                settings
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
