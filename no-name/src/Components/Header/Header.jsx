import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <>
      <div class="row main-heder-of-city-guidde ">
        <div class="col-12 heder-of-city-guidde">
          <img src={require("../../Assets/City-edu.png")} alt="" />
          <span style={{ color: "black" }}>For Info : (+91) 9071 015 558</span>
        </div>
      </div>
    </>
  );
};

export default Header;
