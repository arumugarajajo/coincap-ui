import React from "react";
import "./Footer.css";
import playstore from "../../Assets/playstore.png"

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="column">
          <div className="header">COINCAP.IO</div>
          <ul>
            <li>Methodology</li>
            <li>Support</li>
            <li>Our API</li>
            <li>Rate Comparison</li>
            <li>Careers</li>
          </ul>
        </div>
        <div className="column">
          <div className="header">LEGALS</div>
          <ul>
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="column">
          <div className="header">DISCLAIMER</div>
          <p className="disclaimer">
            Neither ShapeShift AG nor CoinCap are in any way associated with
            CoinMarketCap, LLC or any of its goods and services.
          </p>
        </div>
        <div className="column">
          <div className="header">FOLLOW US</div>
          <div className="social-media">
            <a href="#" class="fa fa-facebook"></a>
            <a href="#" class="fa fa-twitter"></a>
            <a href="#" class="fa fa-google"></a>
            <a href="#" class="fa fa-skype"></a>
            <a href="#" class="fa fa-instagram"></a>
          </div>
        </div>
        <div className="column">
          <div className="header">COINCAP APP AVAILABLE ON</div>
          <div className="store">
            <img src={playstore} alt="instagram" />
            <div className="text-area">
              <span>GET IN ON</span>
              <span className="platform">Google Play</span>
            </div>
          </div>
          <div className="store">
          <i class="fa fa-apple" style={{color:"white", fontSize:"32px", paddingRight:"10px"}}></i>
            <div className="text-area">
            <span>Download on the</span>
              <span className="platform">App Store</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
