import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <>
      <div class="row main-heder-of-city-guidde ">
        <div class="col-12 heder-of-city-guidde">
          <img src={require("../../Assets/ss.png")} alt="" />
          <span style={{ color: "white" }}>For Info : (+91) 8494855510</span>
        </div>
      </div>
    </>
  );
};

export default Header;