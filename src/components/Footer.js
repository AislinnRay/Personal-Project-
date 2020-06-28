import React from "react";
import { Link } from "react-router-dom";
import "../style/styleFooter.css";
import Hamburger from "./Hamburger";

const Footer = (props) => {
  return (
    <div className="footer-container">
      <div className="footer-nav-container">
        <nav className="footer-links-container">
          <ul className="footer-ul">
            <li className="footer-li">
              <a className="footer-a" href="#">
                About
              </a>
            </li>
            <li className="footer-li">
              <a className="footer-a" href="#">
                FAQ
              </a>
            </li>
            <li className="footer-li">
              <a className="footer-a" href="#">
                Featured
              </a>
            </li>
            <li className="footer-li">
              <a className="footer-a" href="#">
                Advertise
              </a>
            </li>
          </ul>
        </nav>
        <div className="footer-subscribe-container">
          <form className="footer-form">
            <p className="subscribe-text">Stay in the Know</p>
            <input
              className="subscribe-input"
              type="text"
              placeholder="Enter your email here"
            />
            <input value="Subscribe" className="submit-input" type="submit" />
          </form>
          <span>
            <a href="http://www.facebook.com/">
              <img
                src="https://cdn3.iconfinder.com/data/icons/social-media-2174/512/Facebook-01-512.png"
                alt="Facebook"
                width="38"
                height="38"
                border="0"
              />
            </a>
            <a href="http://www.twitter.com/">
              <img
                src="https://cdn3.iconfinder.com/data/icons/social-media-2174/512/Twitter-512.png"
                alt="Twitter"
                width="38"
                height="38"
                border="0"
              />
            </a>
            <a href="http://www.pinterest.com/">
              <img
                src="https://cdn3.iconfinder.com/data/icons/social-media-2174/512/Pintrest-256.png"
                alt="Pinterest"
                width="38"
                height="38"
                border="0"
              />
            </a>
          </span>
        </div>
        <nav className="footer-links-container">
          <ul className="footer-ul">
            <li className="footer-li">
              <a className="footer-a" href="#">
                Careers
              </a>
            </li>
            <li className="footer-li">
              <a className="footer-a" href="#">
                Contact Us
              </a>
            </li>
            <li className="footer-li">
              <a className="footer-a" href="#">
                Accessibility
              </a>
            </li>
            <li className="footer-li">
              <a className="footer-a" href="#">
                Sitemap
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="copyright-container">
        <p className="cr-text">Copyright 2020 Plantsiful</p>
        <span className="cr-span">
          <p className="cr-text">Privacy Policy</p>
          <p className="cr-text">Terms of Use</p>
          <br />
          <p className="cr-text">Accessibility Agreement</p>
        </span>
      </div>
    </div>
  );
};
export default Footer;
