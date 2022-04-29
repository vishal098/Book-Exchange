import React from "react";
import "./index.css";

const Footer = () => {
  return (
    <div className="footer-clean">
      <div style={{ display: "flex", justifyContent: "space-evenly",flexWrap:'wrap' }}>
        <div className="col-sm-4 col-md-3 item">
          <h3 style={{color:'inherit'}}>Services</h3>
          <ul>
            <li>
              <a target="_blank" rel="noreferrer" href="https://www.webdesign.org/">Exchange old Book</a>
            </li>
            <li>
              <a target="_blank" rel="noreferrer" href="https://en.wikipedia.org/wiki/Web_development">Sell Your Book</a>
            </li>
            <li>
              <a target="_blank" rel="noreferrer" href="netify.com">Buy Old Book</a>
            </li>
          </ul>
        </div>
        <div className="col-sm-4 col-md-3 item">
          <h3 style={{color:'inherit'}}>About</h3>
          <ul>
            <li>
              <a target="_blank" rel="noreferrer" href="https://en.wikipedia.org/wiki/Company">Company</a>
            </li>
            <li>
              <a target="_blank" rel="noreferrer" href="https://en.wikipedia.org/wiki/Team">Team</a>
            </li>
            <li>
              <a target="_blank" rel="noreferrer" href="#">Legacy</a>
            </li>
          </ul>
        </div>
        <div className="col-sm-4 col-md-3 item">
          <h3 style={{color:'inherit'}}>Careers</h3>
          <ul>
            <li>
              <a target="_blank" rel="noreferrer" href="#">Job openings</a>
            </li>
            <li>
              <a target="_blank" rel="noreferrer" href="#">Employee success</a>
            </li>
            <li>
              <a target="_blank" rel="noreferrer" href="#">Benefits</a>
            </li>
          </ul>
        </div>
        <div className="col-lg-3 item social">
        <a target="_blank" rel="noreferrer" href="https://web.whatsapp.com/">
          <i className="fa fa-whatsapp" style={{ fontSize: "24px" }}></i>
          </a>
          <a target="_blank" rel="noreferrer" href="https://facebook.com/">
            <i className="fa fa-facebook" style={{ fontSize: "24px" }}></i>
          </a>
          <a target="_blank" rel="noreferrer" href="https://twitter.com/">
            <i className="fa fa-twitter" style={{ fontSize: "24px" }}></i>
          </a>
          <a target="_blank" rel="noreferrer" href="https://snapchat.com/">
            <i className="fa fa-snapchat" style={{ fontSize: "24px" }}></i>
          </a>
          <a target="_blank" rel="noreferrer" href="https://instagram.com/">
            <i className="fa fa-instagram" style={{ fontSize: "24px" }}></i>
          </a>
          <p className="copyright">Book Exchange © 2018</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
