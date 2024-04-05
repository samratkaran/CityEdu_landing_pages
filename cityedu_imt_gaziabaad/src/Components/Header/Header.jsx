import React from "react";
import "./Header.css";
import { FaPhoneAlt } from "react-icons/fa";

const Header = () => {
  return (
    <>
      <div class="row main-heder-of-city-guidde ">
        <div class="col-12 heder-of-city-guidde">
          <img src={require("../../Assets/logo-imt.png")} alt="" />
          <span>
            <FaPhoneAlt /> (+91) 9427 700 700
          </span>
        </div>
      </div>
    </>
  );
};

export default Header;
