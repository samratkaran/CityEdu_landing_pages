import React from "react";
import "./Header.css";
import { FaPhoneAlt } from "react-icons/fa";

const Header = () => {
  return (
    <>
      <div class="row main-heder-of-city-guidde ">
        <div class="col-12 heder-of-city-guidde">
          <img src={require("../../Assets/City-edu.png")} alt="" />
          <span >
            <FaPhoneAlt /> (+91) 953 825 5512
          </span>
        </div>
      </div>
    </>
  );
};

export default Header;
