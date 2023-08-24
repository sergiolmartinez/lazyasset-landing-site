import React from "react";
import "./Footer.css";
import { FaTwitter, FaDiscord } from "react-icons/fa";
import twitter_x from "../assets/twitter_x.png";

export const Footer = () => {
  return (
    <footer className="footer">
      <span className="footer_content">
        <a
          href="https://twitter.com/rndm_technology"
          className="links"
          target="_blank"
          rel="noreferrer noopener"
        >
          {/* <FaTwitter className="twitter_logo" size={35} color="#1DA1F2" /> */}
          <img
            src={twitter_x}
            alt="@rndm_technology"
            className="twitter_logo"
          />
        </a>
        <span className="rndm_footer">a rndm.tech project by slmlabs</span>
      </span>
    </footer>
  );
};
