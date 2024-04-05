import React from "react";
import "./HeadText.css";

const HeadText = ({ value }) => {
  return (
    <div className="row">
      <div className="col-md-12 main-text">
        <div class="heading-container">
          <h1>{value}</h1>
        </div>
      </div>
    </div>
  );
};

export default HeadText;
