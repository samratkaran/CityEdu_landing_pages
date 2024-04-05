import "./Main.css";
import Form from "./From/Form";
import HeadText from "./HeadText/HeadText";
import { Bounce, Fade } from "react-awesome-reveal";
import { useState } from "react";
import Modal from "./Modal/Modal";
import CourseCard from "./cards/CourseCard";

const Main = () => {
  const [show, setShow] = useState(false);
  // const [activeSection, setActiveSection] = useState("bachelor"); // Initial active section

  // const handleSectionClick = (section) => {
  //   setActiveSection(section);
  // };
  return (
    <>
      <Fade cascade damping={0.5}>
        <div className="row main-head-text-of-landing-page">
          <div className="col-md-8 text-white">
            <p className="head-text-of-page">
              MDI, <b className="second-text"> Gurugram </b>{" "}
            </p>
            <p className="second-head-text-of-page">
              Managment Development Institue
            </p>
            <p className="span-text-of-page">
              Join the league of future leaders at MDI Gurgaon!
            </p>
            <p className="span-text-of-page-two ">Admission Open 2024-25</p>
          </div>

          <div className="col-md-3">
            <Form />
          </div>
        </div>
      </Fade>
      <div className="main-container mb-5">
        <HeadText value={"overview"}></HeadText>
        <div className="row main-overview-of-page">
          <div className="col-md-4">
            <img
              className="overview-image"
              src={require("../Assets/overview.png")}
              alt=""
            />
          </div>
          <div className="col-md-6 p-3">
            <p>
              Established in 1973, MDI Gurgaon stands tall as a prestigious
              institution in the corporate hub of Gurugram, NCR. Offering a wide
              array of undergraduate, postgraduate, and doctoral programs, MDI
              is synonymous with excellence in education and holistic
              development. With a stellar track record in placements, MDI
              Gurgaon attracts top recruiters such as Deloitte, KPMG, and
              Amazon. Don't miss your chance to shape your future – apply to MDI
              Gurgaon now!
            </p>
          </div>
        </div>
        <HeadText value={"Courses Offered"} />
        <div className="row">
          <div className="col-md-12 m-auto h-auto ">
            <div className="pos-grad-program row">
              <h1 className="col-md-10 m-auto mb-5">
                Post Graduate Programmes
              </h1>

              <div className="bachelor-and-section col-md-12">
                <CourseCard
                  CourseName={
                    "Post Graduate Diploma in Management - Business Analytics"
                  }
                  DegreeName={"Bachelor"}
                  Duration={"3 Years"}
                  imageUrl={require("../Assets/couese-image/Bachelor of Business Administration.jpg")}
                />
                <CourseCard
                  CourseName={"Post Graduate Diploma in Management (PGDM)"}
                  DegreeName={"Bachelor"}
                  Duration={"3 Years"}
                  imageUrl={require("../Assets/couese-image/Bachelor of Commerce.jpg")}
                />

                <CourseCard
                  CourseName={
                    "Post Graduate Diploma in Management - Human Resource Management (PGDM-HRM)"
                  }
                  DegreeName={"Bachelor"}
                  Duration={"3 Years"}
                  imageUrl={require("../Assets/couese-image/Bachelor of Science(Hons.).jpg")}
                />
                <CourseCard
                  CourseName={
                    "Post Graduate Diploma in Management - International Business (PGDM-IB)"
                  }
                  DegreeName={"Bachelor"}
                  Duration={"3 Years"}
                  imageUrl={require("../Assets/couese-image/B.Ed.jpg")}
                />
                <CourseCard
                  CourseName={"PGDM (Online) Programme"}
                  DegreeName={"Bachelor"}
                  Duration={"3 Years"}
                  imageUrl={require("../Assets/couese-image/Bachelor of Computer Applications.jpg")}
                />
              </div>
            </div>
            <div className="pos-grad-program row">
              <h1 className="col-md-10 m-auto mb-5 ">
                Executive Post Graduate Programmes & Fellowship Programmes
              </h1>

              <div className="bachelor-and-section col-md-12">
                <CourseCard
                  CourseName={
                    "Post Graduate Diploma in Management – Business Management (PGDM-BM)"
                  }
                  DegreeName={"Bachelor"}
                  Duration={"3 Years"}
                  imageUrl={require("../Assets/couese-image/Bachelor of Business Administration.jpg")}
                />
                <CourseCard
                  CourseName={
                    "Post Graduate Diploma in Management – Public Policy and Management (PGDM-PPM)"
                  }
                  DegreeName={"Bachelor"}
                  Duration={"3 Years"}
                  imageUrl={require("../Assets/couese-image/Bachelor of Commerce.jpg")}
                />
                <CourseCard
                  CourseName={"Fellow Programme in Management"}
                  DegreeName={"Bachelor"}
                  Duration={"4 Years"}
                  imageUrl={require("../Assets/couese-image/B.Tech.jpg")}
                />
              </div>
            </div>
          </div>
        </div>

        <HeadText value={"Placement"} />
        <div className="row ">
          <div class="col-md-12 text-center ">
            <p>
              164% increase in offers by Automobile, Conglomerate, Energy &
              Logistics companies for PGDM & PGDM IB placements
            </p>
            <p>
              190% increase in offers by Automobile, Energy & Logistics
              companies for PGDM HRM placements
            </p>
            <p>Nearly 12% rise in PGDM HRM average package</p>

            <div class="Students-component ">
              <ul className="boxes-of-palcement d-flex justify-content-center gap-5">
                <li class="c1" style={{ backgroundColor: "#a61a32" }}>
                  {" "}
                  <span style={{ fontSize: "2.5rem", fontWeight: 700 }}>
                    100+
                  </span>{" "}
                  Total No. of Offers
                </li>
                <li class="c2" style={{ backgroundColor: "#034ea2" }}>
                  {" "}
                  <span style={{ fontSize: "2.5rem", fontWeight: 700 }}>
                    <i class="fa fa-inr" aria-hidden="true"></i> 60{" "}
                    <small style={{ fontSize: "1.1rem !important" }}>LPA</small>
                  </span>{" "}
                  Highest Package{" "}
                </li>
                <li class="c4" style={{ backgroundColor: "#00abe6" }}>
                  {" "}
                  <span style={{ fontSize: "2.5rem", fontWeight: 700 }}>
                    <i class="fa fa-inr" aria-hidden="true"></i> 26.42{" "}
                    <small style={{ fontSize: "1.1rem !important" }}>LPA</small>
                  </span>
                  Average Package for PGDM & PGDM IB{" "}
                </li>
                <li class="c4" style={{ backgroundColor: "#0011e6" }}>
                  {" "}
                  <span style={{ fontSize: "2.5rem", fontWeight: 700 }}>
                    <i class="fa fa-inr" aria-hidden="true"></i> 27.67{" "}
                    <small style={{ fontSize: "1.1rem !important" }}>LPA</small>
                  </span>
                  Average package for PGDM HRM
                </li>
                <li class="c2" style={{ backgroundColor: "#da2032" }}>
                  {" "}
                  <span style={{ fontSize: "2.5rem", fontWeight: 700 }}>
                    <i class="fa fa-inr" aria-hidden="true"></i> 43.92{" "}
                    <small style={{ fontSize: "1.1rem !important" }}>LPA</small>
                  </span>{" "}
                  Highest package for PGDM BM
                </li>
              </ul>
            </div>
          </div>
        </div>
        <HeadText value={"top Recruiters"} />
        <div
          className="row main-Top-Recruiters"
          style={{ overflowX: "hidden" }}
        >
          <div className="col-md-12 Top-Recruiters">
            <img
              src={require("../Assets/slide-image/American Express.png")}
              alt=""
            />
            <img
              src={require("../Assets/slide-image/Asian Paints.png")}
              alt=""
            />
            <img src={require("../Assets/slide-image/Axis Bank.jpeg")} alt="" />
            <img src={require("../Assets/slide-image/Deloitte.png")} alt="" />
            <img src={require("../Assets/slide-image/Godrej.jpeg")} alt="" />
            <img src={require("../Assets/slide-image/ITC.png")} alt="" />
            <img
              src={require("../Assets/slide-image/JP Morgan Chase & Co.jpeg")}
              alt=""
            />
            <img src={require("../Assets/slide-image/KPMG.png")} alt="" />
            <img src={require("../Assets/slide-image/PwC.jpeg")} alt="" />
            <img src={require("../Assets/slide-image/amazone.png")} alt="" />
            <img
              src={require("../Assets/slide-image/American Express.png")}
              alt=""
            />
            <img
              src={require("../Assets/slide-image/Asian Paints.png")}
              alt=""
            />
            <img src={require("../Assets/slide-image/Axis Bank.jpeg")} alt="" />
          </div>
        </div>
        <Bounce duration={1000}>
          <div className="row main-contact-us mt-5 mb-5">
            {show ? <Modal cancel={setShow} /> : null}
            <div className="col-md-12 contact-us p-5">
              <h1 style={{ color: "white" }}>
                To Know About Eligibility Criteria and Admission Process
              </h1>

              <button
                className="contact-button"
                style={{ width: "14rem" }}
                onClick={() => setShow(true)}
              >
                {" "}
                Click Herer!
              </button>
            </div>
          </div>
        </Bounce>

        <HeadText value="Why Choose Galgotiyas University?" />
        <div className="row d-flex justify-content-center align-items-center ">
          <div className="col-md-4 d-none d-md-block m-auto">
            <img
              src={require("../Assets/f14d6c0a5773675a110f0fbb4988efa6-removebg-preview.png")}
              alt=""
              className="why-chose-us-image"
            />
          </div>
          <div className="col-md-8 ">
            <ul className="why-chose-reva">
              <Fade delay={200}>
                <li>100% Placements</li>
              </Fade>
              <Fade delay={400}>
                <li>Pioneer in International Accreditation</li>
              </Fade>

              <Fade delay={600}>
                <li>Prime Corporate Location</li>
              </Fade>
              <Fade delay={800}>
                <li>Global Exposure Opportunities</li>
              </Fade>
              <Fade delay={1000}>
                <li>Extensive International Exchange Program</li>
              </Fade>

              <Fade delay={1200}>
                <li>Experienced Faculty Pool</li>
              </Fade>
              <Fade delay={1400}>
                <li>Leading Continuing Education School</li>
              </Fade>
              <Fade delay={1600}>
                <li>Expansive 40-Acre Campus</li>
              </Fade>
            </ul>
          </div>
        </div>

        <HeadText value={"Campus Life"} />
        <p className="col-md-11 m-auto ">
          MDI's sprawling campus, spanning 35 acres in Gurgaon, is characterized
          by red brick buildings and lush greenery. Located approximately 12 km
          from the Indira Gandhi International Airport in New Delhi, MDI offers
          a conducive learning environment.
        </p>
        <Fade delay={500} direction="left">
          <div className="row main-campus-life">
            <div className="col-md-12 campus-life">
              <div class="card-of-campus-life">
                {" "}
                <img src={require("../Assets/hostel.png")} alt="" />{" "}
                <h6> HOSTEL ACCOMMODATION</h6>
              </div>
              <div class="card-of-campus-life">
                {" "}
                <img src={require("../Assets/library.png")} alt="" />{" "}
                <h6>LIBRARY</h6>
              </div>
              <div class="card-of-campus-life">
                {" "}
                <img src={require("../Assets/sports.png")} alt="" />{" "}
                <h6>SPORTS COMPLEX</h6>
              </div>
              <div class="card-of-campus-life">
                {" "}
                <img src={require("../Assets/movie-theater.png")} alt="" />{" "}
                <h6>AUDITORIUM's</h6>
              </div>
              <div class="card-of-campus-life">
                {" "}
                <img src={require("../Assets/cafe.png")} alt="" />{" "}
                <h6>CAFETERIA</h6>
              </div>
              <div class="card-of-campus-life">
                {" "}
                <img src={require("../Assets/gym.png")} alt="" /> <h6>GYM</h6>
              </div>

              <div class="card-of-campus-life">
                {" "}
                <img src={require("../Assets/wifi.png")} alt="" />{" "}
                <h6>WI-FI CAMPUS</h6>
              </div>
              <div class="card-of-campus-life">
                {" "}
                <img src={require("../Assets/home (1).png")} alt="" />{" "}
                <h6>Air-conditioned classrooms </h6>
              </div>
            </div>
          </div>
        </Fade>
        <HeadText value="Approvals and Accreditations" />
        <Fade delay={250}>
          <div className="row main-approval-and-acredation">
            <div className="col-md-12 approval-and-acredation">
              <img src={require("../Assets/AICTE.png")} alt="" />
              <img src={require("../Assets/NBA.jpg")} alt="" />
              <img src={require("../Assets/AACSB.jpg")} alt="" />
              <img src={require("../Assets/SAQS.jpeg")} alt="" />
            </div>
          </div>
        </Fade>

        {/* <HeadText value={"Ranks and Awards"} /> */}
        {/* <div
          className="row d-flex justify-content-center align-items-center gap-5"
          style={{ flexWrap: "wrap" }}
        >
          <div className="col-md-5 ranks">
            <h2 className="pb-4"> QS Asian University Rankings</h2>
            <p>
              Ranked 6th among all private universities in Karnataka in 2023
            </p>
            <p>
              Secured the 47th position among all private universities in India
            </p>
          </div>
          <div className="col-md-5 ranks">
            <h2 className="pb-4"> IIRF Rankings</h2>
            <p>
              Ranked 17th in the country and 5th in Karnataka for Architecture.
            </p>
            <p>
              Ranked 18th in the country and 4th in Karnataka for Law in 2023
            </p>
          </div>
          <div className="col-md-5 ranks">
            <h2 className="pb-4"> FORTUNE India's Best B-Schools Rankings</h2>
            <p>Ranked 7th in Bangalore City.</p>
            <p>Ranked 92nd pan India.</p>
          </div>
          <div className="col-md-5 ranks">
            <h2 className="pb-4"> QS I-Gauge Ratings</h2>
            <p>"Diamond" University Rating for Overall Excellence</p>
            <p style={{ letterSpacing: "1px" }}>
              "Diamond" University Ratings for Employability, Diversity &
              Accessibility, Facilities, and Social Responsibility.
            </p>
          </div>
        </div> */}

        {/* <div className="row main-contact-us mt-5 mb-5">
          {show ? <Modal cancel={setShow} /> : null}
          <div className="col-md-12 contact-us p-5">
            <h1 style={{ color: "white" }}>
              To learn more about the Admission and selection process, contact
              us now!
            </h1>

            <button
              className="contact-button"
              style={{ width: "14rem" }}
              onClick={() => setShow(true)}
            >
              {" "}
              Click Herer!
            </button>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Main;

// const [show, setShow] = useState(false);

// {show ? <Modal cancel = {setShow}/> : null}

// {
//   /* <button onClick={() => setShow(true)}>Fuck you</button> */
// }
