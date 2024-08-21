import "./Main.css";
import Form from "./From/Form";
import HeadText from "./HeadText/HeadText";
import { Bounce, Fade } from "react-awesome-reveal";
import Accordion from "react-bootstrap/Accordion";
import { useState } from "react";
import Modal from "./Modal/Modal";
import CourseCard from "./cards/CourseCard";

const Main = () => {
  const [show, setShow] = useState(false);
  const [activeSection, setActiveSection] = useState("bachelor"); // Initial active section

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };
  return (
    <>
      <Fade cascade damping={0.5}>
        <div className="row main-head-text-of-landing-page">
          <div className="col-md-8 text-white">
            <p className="head-text-of-page">
            Study 
            </p>
            <p className="second-head-text-of-page"> B.Tech 2024</p>
            {/* <p className="span-text-of-page">
              If you are looking to shape your future and live your dreams
            </p> */}
            <div className="boxes-of-city">
            <p className="span-text-of-page-two ">Gurugram</p>
            <p className="span-text-of-page-two ">Noida</p>
            <p className="span-text-of-page-two ">Delhi(NCR)</p></div>
          </div>

          <div className="col-md-3">
            <Form />
          </div>
        </div>
      </Fade>
      <div className="main-container mb-5">
        <div className="row main-overview-of-page">
          <h1
            style={{
              textAlign: "center",
              fontWeight: "700",
              color: "white",
              fontSize: "4rem",
            }}
          >
            OVERVIEW
          </h1>

          <div className="col-md-11 p-3">
            <p>
              {" "}
              Nitte Meenakshi Institute of Technology (NMIT) is a private engineering college located in Bangalore, India. It was established in 2001. NMIT is known for its quality education and has been consistently ranked among the top engineering colleges in Karnataka.</p>
              <ul>
                <li>The college has collaborations with leading companies and institutions, which provide students with excellent opportunities for internships,training, and placements.</li>
                <li>Many reputed companies like Amazon, Infosys, IBM, and Wipro have recruited NMIT graduates. NMIT is an excellent choice for students who are looking for a top-quality engineering education in Bangalore.</li>
              </ul>
          </div>
        </div>
        <HeadText value={"top colleges in delhi ncr region "} />
        <div className="row">
          <div className="col-md-12 m-auto h-auto App">
            <div className="tabs">
              <div
                className={`tab ${
                  activeSection === "bachelor" ? "active" : ""
                } `}
                onClick={() => handleSectionClick("bachelor")}
              >
              
              </div>
              <div
                className={`  tab ${
                  activeSection === "master" ? "active" : ""
                }`}
                onClick={() => handleSectionClick("master")}
              >
               
              </div>
              <div
                className={`  tab ${
                  activeSection === "PHD" ? "active" : ""
                }`}
                onClick={() => handleSectionClick("PHD")}
              >
                
              </div>
            </div>
            <div className="content">
              {activeSection === "bachelor" && (
                <div className="bachelor-and-section col-md-12">
                  <CourseCard
                    CourseName={"Ajay Kumar Garg Engineering College"}
                    // DegreeName={"Bachelor"}
                    // Duration={"4 Years"}
                    imageUrl={require("../Assets/couese-image/Ajay.jpeg")}
                  />
                    <CourseCard
                    CourseName={"ITS Engineering College"}
                    DegreeName={"Bachelor"}
                    Duration={"4 Years"}
                    imageUrl={require("../Assets/couese-image/ITS.jpeg")}
                  />
                     <CourseCard
                    CourseName={"NIET Greater Noida"}
                    DegreeName={"Bachelor"}
                    Duration={"4 Years"}
                    imageUrl={require("../Assets/couese-image/NIET.jpeg")}
                  />
                    <CourseCard
                    CourseName={"GL Bajaj Institute of Management and Research"}
                    DegreeName={"Bachelor"}
                    Duration={"4 Years"}
                    imageUrl={require("../Assets/couese-image/GL Bajaj.jpeg")}
                  />
                    <CourseCard
                    CourseName={"ABES Engineering College"}
                    DegreeName={"Bachelor"}
                    Duration={"4 Years"}
                    imageUrl={require("../Assets/couese-image/ABES.jpeg")}
                  />
                    <CourseCard
                    CourseName={"IMS Engineering College"}
                    DegreeName={"Bachelor"}
                    Duration={"4 Years"}
                    imageUrl={require("../Assets/couese-image/IMS.jpeg")}
                  />
                    <CourseCard
                    CourseName={"Noida International University"}
                    DegreeName={"Bachelor"}
                    Duration={"4 Years"}
                    imageUrl={require("../Assets/couese-image/Noida.jpeg")}
                  />
                    <CourseCard
                    CourseName={"IILM University"}
                    DegreeName={"Bachelor"}
                    Duration={"4 Years"}
                    imageUrl={require("../Assets/couese-image/IILM.jpeg")}
                  />
                    <CourseCard
                    CourseName={"Bennett University"}
                    DegreeName={"Bachelor"}
                    Duration={"4 Years"}
                    imageUrl={require("../Assets/couese-image/Bennett University.jpeg")}
                  />
                    <CourseCard
                    CourseName={"Sushant University"}
                    DegreeName={"Bachelor"}
                    Duration={"4 Years"}
                    imageUrl={require("../Assets/couese-image/Sushant.jpeg")}
                  />
                    <CourseCard
                    CourseName={"K. R. Mangalam University"}
                    DegreeName={"Bachelor"}
                    Duration={"4 Years"}
                    imageUrl={require("../Assets/couese-image/K. R. Mangalam.jpeg")}
                  />

<CourseCard
                    CourseName={"GD Goenka University"}
                    DegreeName={"Bachelor"}
                    Duration={"4 Years"}
                    imageUrl={require("../Assets/couese-image/GD Goenka.jpeg")}
                  />


<CourseCard
                    CourseName={"The NorthCap University"}
                    DegreeName={"Bachelor"}
                    Duration={"4 Years"}
                    imageUrl={require("../Assets/couese-image/The NorthCap.jpeg")}
                  />


<CourseCard
                    CourseName={"Galgotias University"}
                    DegreeName={"Bachelor"}
                    Duration={"4 Years"}
                    imageUrl={require("../Assets/couese-image/Galgotias.jpeg")}
                  />


<CourseCard
                    CourseName={"Lloyd Institute of Engineering & Technology"}
                    DegreeName={"Bachelor"}
                    Duration={"4 Years"}
                    imageUrl={require("../Assets/couese-image/Lloyd Institute.jpeg")}
                  />

<CourseCard
                    CourseName={"JAYPEE INSTITUTE OF INFORMATION TECHNOLOGY"}
                    DegreeName={"Bachelor"}
                    Duration={"4 Years"}
                    imageUrl={require("../Assets/couese-image/JAYPEE INSTITUTE.jpeg")}
                  />

<CourseCard
                    CourseName={"Amity University Noida"}
                    DegreeName={"Bachelor"}
                    Duration={"4 Years"}
                    imageUrl={require("../Assets/couese-image/Amity University .jpeg")}
                  />
                   
                 
                </div>
              )}
             
             
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
            
            <img src={require("../Assets/slide-image/congnizent.jpg")} alt="" />
            <img src={require("../Assets/slide-image/infosys.png")} alt="" />
            <img src={require("../Assets/slide-image/WIT_BIG-0de2dc21.png")} alt="" />
            <img src={require("../Assets/slide-image/ibm-logo-ibm-logos-download-12.png")} alt="" />
            <img src={require("../Assets/slide-image/yahoo.png")} alt="" />
            <img src={require("../Assets/slide-image/01.png")} alt="" />
            
            <img src={require("../Assets/slide-image/congnizent.jpg")} alt="" />
            <img src={require("../Assets/slide-image/infosys.png")} alt="" />
            <img src={require("../Assets/slide-image/WIT_BIG-0de2dc21.png")} alt="" />
            <img src={require("../Assets/slide-image/ibm-logo-ibm-logos-download-12.png")} alt="" />
            <img src={require("../Assets/slide-image/yahoo.png")} alt="" />
           
            
            
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
                <img src={require("../Assets/cafe.png")} alt="" />{" "}
                <h6>CAFETERIA</h6>
              </div>

              <div class="card-of-campus-life">
                {" "}
                <img src={require("../Assets/convenience-store.png")} alt="" />{" "}
                <h6>CONVERNIENCE STORE</h6>
              </div>

              <div class="card-of-campus-life">
                {" "}
                <img src={require("../Assets/gym.png")} alt="" />{" "}
                <h6>GYM</h6>
              </div>

              <div class="card-of-campus-life">
                {" "}
                <img src={require("../Assets/healthcare (1).png")} alt="" />{" "}
                <h6>MEDICAL FACILITY</h6>
              </div>

              <div class="card-of-campus-life">
                {" "}
                <img src={require("../Assets/lab.png")} alt="" />{" "}
                <h6>LAB</h6>
              </div>

              <div class="card-of-campus-life">
                {" "}
                <img src={require("../Assets/shuttle.png")} alt="" />{" "}
                <h6>SHUTTLE</h6>
              </div>

              <div class="card-of-campus-life">
                {" "}
                <img src={require("../Assets/wifi.png")} alt="" />{" "}
                <h6>WIFI</h6>
              </div>
             
             
              
              
            </div>
          </div>
        </Fade>
        <HeadText value="Approvals and Accreditations" />
        <Fade delay={250}>
          <div className="row main-approval-and-acredation">
            <div className="col-md-12 approval-and-acredation">
              <img src={require("../Assets/NACC-A.webp")} alt="" />
              <img src={require("../Assets/AICTE.png")} alt="" />
              <img src={require("../Assets/ugc-removebg-preview.png")} alt="" />
              {/* <img src={require("../Assets/Visvesvaraya Technological University.jpeg")} alt="" /> */}
            </div>
          </div>
        </Fade>

        
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
