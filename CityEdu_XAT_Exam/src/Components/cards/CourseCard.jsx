import React from "react";
import "./CourseCard.css";

import { useState } from "react";
import Modal from "../Modal/Modal";
import { FaCircleArrowRight } from "react-icons/fa6";

const CourseCard = ({ imageUrl, CourseName  }) => {
  const [show, setShow] = useState(false);
  return (
    <>
      
        <div className=" course-card-main">
          <div>
            <img src={imageUrl} alt="" />
          </div>
          <div className="all-data-of-course">
            <h5 className="text-head" >{CourseName}</h5>
           
          

            {show ? <Modal cancel={setShow} /> : null}
            <button
              className="contact-button"
              
              onClick={() => setShow(true)}
            >
              {" "}
              KNOW MORE &nbsp; <FaCircleArrowRight size={25} />
            </button>
          </div>
        </div>
      
    </>
  );
};

export default CourseCard;
