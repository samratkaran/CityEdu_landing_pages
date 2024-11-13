import "./Main.css";
import Form from "./From/Form";
import HeadText from "./HeadText/HeadText";
import { Bounce, Fade } from "react-awesome-reveal";
import { useState } from "react";
import Modal from "./Modal/Modal";
import CourseCard from "./cards/CourseCard";

const Main = () => {
  const [show, setShow] = useState(false);
  const [activeSection, setActiveSection] = useState("bachelor"); // Initial active section

  const handleSectionClick = (section) => {
    // setActiveSection(section);
  };
  return (
    <>
      <Fade cascade damping={0.5}>
        <div className="row main-head-text-of-landing-page">
          <div className="col-md-8 text-white">
            <p className="head-text-of-page"> SAPTHAGIRI </p>
            <p className="second-head-text-of-page">NPS UNIVERSITY,BANGALORE</p>
            <p className="span-text-of-page">
            WELCOME TO THE WORLD OF UNMATCHED POTENTIAL AND UNLIMITED OPPORTUNITIES.
            </p>
            <p className="span-text-of-page-two ">Admission Open 2025-26</p>
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
          <div className="col-md-7 p-3">
            <p style={{fontSize:"1.1rem"}}>
              Sapthagiri NPS University, Bangalore, is committed to imparting
              quality engineering education to develop students into responsible
              citizens equipped with the skills and knowledge to excel in their
              fields. The university emphasizes a blend of theoretical and
              practical learning, ensuring that graduates are well-prepared to
              meet the challenges of the engineering industry. <br /> <br />
              <ul style={{listStyle:"none", paddingLeft:"0rem"}} className="overview-list">
               <li><b>Comprehensive Curriculum:</b> The courses are designed to cover fundamental and advanced topics, fostering a deep understanding of engineering principles.</li>
               <li><b>State-of-the-Art Facilities:</b> Equipped with modern labs and research facilities to support hands-on learning and innovation.</li>
               <li><b>Experienced Faculty:</b> A team of highly qualified and experienced faculty members dedicated to student success.</li>
               <li><b>Research and Innovation:</b> Encouragement of research activities and innovation through various initiatives and collaborations.</li>
               
              </ul>
            </p>
          </div>
        </div>
        <HeadText value={"B.Tech Courses Offered"} />
        <div className="row">
        <div className="col-md-12 m-auto h-auto App course-offerd" >
            <div className="tabs">
              
             
            </div>
            <div className="content">
              {activeSection === "bachelor" && (
                <div className="bachelor-and-section col-md-12">
                  <CourseCard
                    CourseName={"Computer Science & Engineering"}
                    DegreeName={"Bachelor"}
                    Duration={"4 Years"}
                    imageUrl={require("../Assets/couese-image/Computer Science & Engineering.jpeg")}
                  />
                  <CourseCard
                    CourseName={
                      "CSE (Artificial Intelligence & Machine Learning)"
                    }
                    DegreeName={"Bachelor"}
                    Duration={"4 Years"}
                    imageUrl={require("../Assets/couese-image/Artificial Intelligence and Machine Learning.jpeg")}
                  />
                  <CourseCard
                    CourseName={
                      "CSE (Artificial Intelligence and Data Science)"
                    }
                    DegreeName={"Bachelor"}
                    Duration={"4 Years"}
                    imageUrl={require("../Assets/couese-image/ai-and-data-science.jpg")}
                  />

                  <CourseCard
                    CourseName={"CSE (Data Science)"}
                    DegreeName={"Bachelor"}
                    Duration={"4 Years"}
                    imageUrl={require("../Assets/couese-image/Computer Science data science.jpeg")}
                  />
                  <CourseCard
                    CourseName={"CSE (Cyber Security)"}
                    DegreeName={"Bachelor"}
                    Duration={"4 Years"}
                    imageUrl={require("../Assets/couese-image/Computer Science(Cyber Security).jpeg")}
                  />
                  <CourseCard
                    CourseName={"Electronics & Communication Engineering"}
                    DegreeName={"Bachelor"}
                    Duration={"4 Years"}
                    imageUrl={require("../Assets/couese-image/Electronics & Communication Engineering.jpeg")}
                  />

                  <CourseCard
                    CourseName={"Electrical & Electronics Engineering"}
                    DegreeName={"Bachelor"}
                    Duration={"4 Years"}
                    imageUrl={require("../Assets/couese-image/LL.B..jpg")}
                  />
                </div>
              )}

            </div>
          </div>
        </div>
        <HeadText value={"Placement"} />
        <div className="row ">
          <div class="col-md-12 ">
            <h5
              style={{ textAlign: "center", padding: "0% 5%" }}
              className="col-md-11 m-auto pb-4 "
            >
              Here is the placement Statistics for Sapthagiri NPS University in
              Bangalore, specifically for engineering courses
            </h5>
            <div class="Students-component ">
              <ul className="boxes-of-palcement d-flex justify-content-center gap-5">
                <li class="c2" style={{ backgroundColor: "#a61a32" }}>
                  {" "}
                  <span style={{ fontSize: "2.5rem", fontWeight: 700 }}>
                    <i class="fa fa-inr" aria-hidden="true"></i> 35{" "}
                    <small style={{ fontSize: "1.1rem !important" }}>LPA</small>
                  </span>{" "}
                  Highest Package{" "}
                </li>
                <li class="c3" style={{ backgroundColor: "#034ea2" }}>
                  {" "}
                  <span style={{ fontSize: "2.5rem", fontWeight: 700 }}>
                    <i class="fa fa-inr" aria-hidden="true"></i> 100+
                  </span>
                  Total Recruiters
                </li>
                <li class="c4" style={{ backgroundColor: "#00abe6" }}>
                  {" "}
                  <span style={{ fontSize: "2.5rem", fontWeight: 700 }}>
                    <i class="fa fa-inr" aria-hidden="true"></i> 6{" "}
                    <small style={{ fontSize: "1.1rem !important" }}>LPA</small>
                  </span>{" "}
                  Average Package{" "}
                </li>
                <li class="c4" style={{ backgroundColor: "#0011e6" }}>
                  {" "}
                  <span style={{ fontSize: "2.5rem", fontWeight: 700 }}>
                    <i class="fa fa-inr" aria-hidden="true"></i> 80%{" "}
                  </span>{" "}
                  Placed Students
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
            <img src={require("../Assets/slide-image/01.png")} alt="" />
            <img src={require("../Assets/slide-image/06.png")} alt="" />
            <img
              src={require("../Assets/slide-image/Celebal Technologies.jpeg")}
              alt=""
            />
            <img
              src={require("../Assets/slide-image/Focus Edumatics.jpeg")}
              alt=""
            />
            <img
              src={require("../Assets/slide-image/HCL Technologies.png")}
              alt=""
            />
            <img
              src={require("../Assets/slide-image/L&T Technology Services.jpeg")}
              alt=""
            />
            <img src={require("../Assets/slide-image/MindTree.jpeg")} alt="" />
            <img src={require("../Assets/slide-image/Skolar.png")} alt="" />
            <img src={require("../Assets/slide-image/TCS.png")} alt="" />
            <img src={require("../Assets/slide-image/congnizent.jpg")} alt="" />
            <img src={require("../Assets/slide-image/01.png")} alt="" />
            <img src={require("../Assets/slide-image/06.png")} alt="" />
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

        <HeadText value="Why Choose Sapthagiri University?" />
        <div className="row d-flex justify-content-center align-items-center ">
          {/* <div className="col-md-4 d-none d-md-block m-auto">
            <img
              src={require("../Assets/f14d6c0a5773675a110f0fbb4988efa6-removebg-preview.png")}
              alt=""
              className="why-chose-us-image"
            />
          </div> */}
          <div className="col-md-12 ">
            <ul className="why-chose-reva">
              <Fade delay={200}>
                <li>Modern Infrastructure</li>
              </Fade>
              <Fade delay={400}>
                <li>Practical Skills Focus</li>
              </Fade>

              <Fade delay={600}>
                <li> Industry Readiness</li>
              </Fade>
              <Fade delay={800}>
                <li>Research Opportunities</li>
              </Fade>
              <Fade delay={1000}>
                <li>Strong Placement Record</li>
              </Fade>

              <Fade delay={1200}>
                <li>Supportive Facult</li>
              </Fade>
              <Fade delay={1400}>
                <li>Convenient Location</li>
              </Fade>
              <Fade delay={1600}>
                <li> Diverse Engineering Departments</li>
              </Fade>
              <Fade delay={1800}>
                <li> International Collaborations</li>
              </Fade>
              <Fade delay={2000}>
                <li>Holistic Development</li>
              </Fade>
            </ul>
          </div>
        </div>

        <HeadText value={"Campus Life"} />
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
              <img src={require("../Assets/naccA.jpg")} alt="" />
              <img src={require("../Assets/AICTE.png")} alt="" />
              <img src={require("../Assets/vtu.jpg")} alt="" />
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
