import React from "react";
import "./CourseCard.css";
// import { FcGraduationCap } from "react-icons/fc";
// import { FcOvertime } from "react-icons/fc";
import { useState } from "react";
import Modal from "../Modal/Modal";
import { FaCircleArrowRight } from "react-icons/fa6";

const CourseCard = ({ imageUrl, CourseName, DegreeName, Duration }) => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="karan">
        <div className="course-card-main">
          <div>
            <img src={imageUrl} alt="" />
            <div className="ps-3 pt-2 d-flex flex-column gap-2">
              <h2 className="pt-3">{CourseName}</h2>
              {/* <p>
                <FcGraduationCap /> Degree: {DegreeName}
              </p>
              <p>
                <FcOvertime /> Duration: {Duration}
              </p> */}
            </div>
          </div>
          <div className="all-data-of-course pb-2">
            {show ? <Modal cancel={setShow} /> : null}
            <button
              className="contact-button"
              style={{ width: "14rem" }}
              onClick={() => setShow(true)}
            >
              {" "}
              KNOW MORE &nbsp; <FaCircleArrowRight size={25} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseCard;
