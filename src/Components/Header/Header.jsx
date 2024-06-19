import React from "react";
import "./Header.css";
import {
  FaSearch,
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";
import {} from "react-icons/fa";

export const Header = () => {
  return (
    <div style={{ marginTop: "12px" }}>
      <div className="Header_Subcontainer">
        <div className="Header_logo_image">
          <img style={{ width: "100%" }} src="Images/bee fit logo.png" alt="" />
        </div>
        <div className="Header_Span_container">
          <span>HOME</span>
          <span>ABOUT US</span>
          <span>CLASSES</span>
          <span>SERVICES</span>
          <span>OUR TEAM</span>
          <span>PAGES</span>
          <span>CONTACT</span>
        </div>
        <div className="Header_logo-container">
          <span>
            <FaSearch />
          </span>
          <span>
            <FaFacebook />
          </span>
          <span>
            <FaTwitter />
          </span>
          <span>
            <FaYoutube />
          </span>
          <span>
            <FaInstagram />
          </span>
        </div>
      </div>
    </div>
  );
};
