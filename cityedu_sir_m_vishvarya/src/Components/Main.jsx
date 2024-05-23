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
            Sir M. Visvesvaraya 
            </p>
            <p className="second-head-text-of-page"> Institute of Technology</p>
            {/* <p className="span-text-of-page">
              If you are looking to shape your future and live your dreams
            </p> */}
            <p className="span-text-of-page-two ">Admission Open 2024-25</p>
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
              Sir M Visvesvaraya Institute of Technology is a reputed institute in Karnataka established by Sri Krishnadevaraya Educational Trust in 1986. The Institute is affiliated to VTU and approved by AICTE, New Delhi and is accredited by NBA, New Delhi. The training and placement cell of the college is very effectively engaged in developing the students in all needed skills and placing them in the top companies. Top Companies like Wipro, Infosys, TCS, IBM, Bosch, Continental, Accenture, etc., visit the campus to offer placements every year.
            </p>
          </div>
        </div>
        <HeadText value={"Courses Offered"} />
        <div className="row">
          <div className="col-md-12 m-auto h-auto App">
            <div className="tabs">
              <div
                className={`tab ${
                  activeSection === "bachelor" ? "active" : ""
                } `}
                onClick={() => handleSectionClick("bachelor")}
              >
                Bachelor's
              </div>
              <div
                className={`  tab ${
                  activeSection === "master" ? "active" : ""
                }`}
                onClick={() => handleSectionClick("master")}
              >
                Master's
              </div>
              <div
                className={`  tab ${
                  activeSection === "PHD" ? "active" : ""
                }`}
                onClick={() => handleSectionClick("PHD")}
              >
                Ph.D./M.Sc
              </div>
            </div>
            <div className="content">
              {activeSection === "bachelor" && (
                <div className="bachelor-and-section col-md-12">
                  <CourseCard
                    CourseName={"Electronics & Communication Engineering"}
                    DegreeName={"Bachelor"}
                    Duration={"4 Years"}
                    imageUrl={require("../Assets/couese-image/Electronics & Communication Engineering.jpeg")}
                  />
                    <CourseCard
                    CourseName={"Computer Science & Engineering"}
                    DegreeName={"Bachelor"}
                    Duration={"4 Years"}
                    imageUrl={require("../Assets/couese-image/Computer Science & Engineering.jpeg")}
                  />
                     <CourseCard
                    CourseName={"Biotechnology"}
                    DegreeName={"Bachelor"}
                    Duration={"4 Years"}
                    imageUrl={require("../Assets/couese-image/Biotechnology.jpeg")}
                  />
                    <CourseCard
                    CourseName={"Information Science & Engineering"}
                    DegreeName={"Bachelor"}
                    Duration={"4 Years"}
                    imageUrl={require("../Assets/couese-image/Information Science & Engineering.jpeg")}
                  />
                    <CourseCard
                    CourseName={"Artificial Intelligence and Machine Learning"}
                    DegreeName={"Bachelor"}
                    Duration={"4 Years"}
                    imageUrl={require("../Assets/couese-image/Artificial Intelligence and Machine Learning.jpeg")}
                  />
                    <CourseCard
                    CourseName={"Civil Engineering"}
                    DegreeName={"Bachelor"}
                    Duration={"4 Years"}
                    imageUrl={require("../Assets/couese-image/Civil Engineering.jpeg")}
                  />
                    <CourseCard
                    CourseName={"Telecommunication Engineering"}
                    DegreeName={"Bachelor"}
                    Duration={"4 Years"}
                    imageUrl={require("../Assets/couese-image/Telecommunication Engineering.jpeg")}
                  />
                    <CourseCard
                    CourseName={"Electrical & Electronics Engineering"}
                    DegreeName={"Bachelor"}
                    Duration={"4 Years"}
                    imageUrl={require("../Assets/couese-image/Electrical & Electronics Engineering.jpeg")}
                  />
                    <CourseCard
                    CourseName={"Mechanical Engineering"}
                    DegreeName={"Bachelor"}
                    Duration={"4 Years"}
                    imageUrl={require("../Assets/couese-image/Mechanical Engineering.jpeg")}
                  />
                    <CourseCard
                    CourseName={"CSE (IOT & Cybersecurity including Blockchain Technology)"}
                    DegreeName={"Bachelor"}
                    Duration={"4 Years"}
                    imageUrl={require("../Assets/couese-image/SE (IOT & Cybersecurity including Blockchain Technology).png")}
                  />
                    <CourseCard
                    CourseName={"B.Arch"}
                    DegreeName={"Bachelor"}
                    Duration={"4 Years"}
                    imageUrl={require("../Assets/couese-image/B.Arch.jpg")}
                  />
                   
                 
                </div>
              )}
              {activeSection === "master" && (
                <div className="bachelor-and-section">
                <CourseCard
                    CourseName={"Electronics & Communication Engineering"}
                    DegreeName={"Master"}
                    Duration={"2 Years"}
                    imageUrl={require("../Assets/couese-image/Electronics & Communication Engineering.jpeg")}
                  />
                    <CourseCard
                    CourseName={"Computer Science & Engineering"}
                    DegreeName={"Master"}
                    Duration={"2 Years"}
                    imageUrl={require("../Assets/couese-image/Computer Science & Engineering.jpeg")}
                  />
                     <CourseCard
                    CourseName={"Biotechnology"}
                    DegreeName={"Master"}
                    Duration={"2 Years"}
                    imageUrl={require("../Assets/couese-image/Biotechnology.jpeg")}
                  />
                    <CourseCard
                    CourseName={"Information Science & Engineering"}
                    DegreeName={"Master"}
                    Duration={"2 Years"}
                    imageUrl={require("../Assets/couese-image/Information Science & Engineering.jpeg")}
                  />
                  
                    <CourseCard
                    CourseName={"Civil Engineering"}
                    DegreeName={"Master"}
                    Duration={"2 Years"}
                    imageUrl={require("../Assets/couese-image/Civil Engineering.jpeg")}
                  />
                  
                    <CourseCard
                    CourseName={"Electrical & Electronics Engineering"}
                    DegreeName={"Master"}
                    Duration={"2 Years"}
                    imageUrl={require("../Assets/couese-image/Electrical & Electronics Engineering.jpeg")}
                  />
                    <CourseCard
                    CourseName={"Mechanical Engineering"}
                    DegreeName={"Master"}
                    Duration={"2 Years"}
                    imageUrl={require("../Assets/couese-image/Mechanical Engineering.jpeg")}
                  />
                   <CourseCard
                    CourseName={"Mathematics"}
                    DegreeName={"Master"}
                    Duration={"2 Years"}
                    imageUrl={require("../Assets/couese-image/Mathematics.jpeg")}
                  />
                   <CourseCard
                    CourseName={"Physics"}
                    DegreeName={"Master"}
                    Duration={"2 Years"}
                    imageUrl={require("../Assets/couese-image/Physics.png")}
                  />
                   <CourseCard
                    CourseName={"Chemistry"}
                    DegreeName={"Master"}
                    Duration={"2 Years"}
                    imageUrl={require("../Assets/couese-image/Chemistry.jpeg")}
                  />
                   <CourseCard
                    CourseName={"Electronics and Telecommunications"}
                    DegreeName={"Master"}
                    Duration={"2 Years"}
                    imageUrl={require("../Assets/couese-image/Electronics.jpeg")}
                  />
                  
                   
                </div>
              )}
              {activeSection === "PHD" && (
                <div className="bachelor-and-section">
                 
                 
                  <CourseCard
                    CourseName={"MCA"}
                    DegreeName={"Master"}
                    Duration={"2 Years"}
                    imageUrl={require("../Assets/couese-image/MCA.jpg")}
                  />
                  <CourseCard
                    CourseName={"MBA"}
                    DegreeName={"Master"}
                    Duration={"2 Years"}
                    imageUrl={require("../Assets/couese-image/MBA.jpg")}
                  />
                    <CourseCard
                    CourseName={"Electronics "}
                    DegreeName={"Master"}
                    Duration={"2 Years"}
                    imageUrl={require("../Assets/couese-image/Electronics.jpeg")}
                  />
                    <CourseCard
                    CourseName={"Computer Integrated Manufacturing"}
                    DegreeName={"Master"}
                    Duration={"2 Years"}
                    imageUrl={require("../Assets/couese-image/Computer Integrated Manufacturing.jpeg")}
                  />
                    <CourseCard
                    CourseName={"Biotech. & Biochemical Engineering"}
                    DegreeName={"Master"}
                    Duration={"2 Years"}
                    imageUrl={require("../Assets/couese-image/Biotech. & Biochemical Engineering.png")}
                  />
             
                  
                </div>
              )}
            </div>
          </div>
        </div>
        {/* <HeadText value={"Placement"} /> */}  
        {/* <div className="row ">
          <div class="col-md-12 ">
            <p
              style={{ textAlign: "justify", padding: "0% 5%" }}
              className="col-md-11 m-auto pb-4 "
            >
              Over 150,000 Amity alumni have successfully transitioned into top
              organizations worldwide, with over 500 leading corporates,
              including Fortune 500 employers, visiting the campus for
              recruitment. Noteworthy achievements include 36,000 campus
              placements in recent years, with 11,000 placements in 2021-22
              alone. Despite challenges, Amity secured 1500 campus placements
              even during the lockdown, with alumni drawing salaries of up to
              Rs. 2 crore p.a.
            </p>
            <div class="Students-component ">
              <ul className="boxes-of-palcement d-flex justify-content-center gap-">
              
                <li class="c2" style={{ backgroundColor: "#da2032" }}>
                  
                  <span style={{ fontSize: "2.5rem", fontWeight: 700 }}>
                    <i class="fa fa-inr" aria-hidden="true"></i> 128
                   
                  </span>{" "}
                  Ranked among engineering colleges in India in 2021.
                </li>

                <li class="c2" style={{ backgroundColor: "#a61a32" }}>
                  {" "}
                  <span style={{ fontSize: "2.5rem", fontWeight: 700 }}>
                    <i class="fa fa-inr" aria-hidden="true"></i> 61.75{" "}
                    <small style={{ fontSize: "1.1rem !important" }}>LPA</small>
                  </span>{" "}
                  Highest Package{" "}
                </li>
                <li class="c3" style={{ backgroundColor: "#034ea2" }}>
                  {" "}
                  <span style={{ fontSize: "2.5rem", fontWeight: 700 }}>
                    <i class="fa fa-inr" aria-hidden="true"></i> 1,050
                  </span>{" "}
                  Total Recruiters
                </li>
                <li class="c4" style={{ backgroundColor: "#00abe6" }}>
                  {" "}
                  <span style={{ fontSize: "2.5rem", fontWeight: 700 }}>
                    <i class="fa fa-inr" aria-hidden="true"></i> 5{" "}
                    <small style={{ fontSize: "1.1rem !important" }}>LPA</small>
                  </span>{" "}
                  Average Package{" "}
                </li>
              </ul>
            </div>
          </div>
        </div> */}
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

        <HeadText value="Reasons to Study at SMVIT" />
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
                <li>The college has a reputation for providing quality education with experienced faculty and excellent academic facilities and also provides students with opportunities for industry exposure through internships, guest lectures, and industrial visits.</li>
              </Fade>
              <Fade delay={400}>
                <li>A sprawling campus with well-equipped laboratories, sports facilities, and hostel facilities for students and a well-stocked library, providing students with a conducive learning environment.</li>
              </Fade>

              <Fade delay={600}>
                <li>The college has a dedicated placement cell that assists students in finding suitable job opportunities.</li>
              </Fade>
              <Fade delay={800}>
                <li>The college has experienced and well-qualified faculty members who have a wealth of knowledge and expertise in their respective fields.
</li>
              </Fade>
              <Fade delay={1000}>
                <li>The college follows a student-centric approach to education, focusing on the overall development of students.</li>
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
                <img src={require("../Assets/cafe.png")} alt="" />{" "}
                <h6>CAFETERIA</h6>
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
              <img src={require("../Assets/Visvesvaraya Technological University.jpeg")} alt="" />
            </div>
          </div>
        </Fade>

        <HeadText value={"FAQs"} />
        <div className="row">
          <div className="col-md-11 m-auto">
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                What courses does Sir M.V.I.T offer?
                </Accordion.Header>
                <Accordion.Body>
                 
Sir M.V.I.T offers undergraduate and postgraduate programs in engineering, management, and computer applications.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                Does Sir M.V.I.T offer hostel facilities for students?
                </Accordion.Header>
                <Accordion.Body>
                Yes, the college offers hostel facilities for both boys and girls.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                What is the admission process for Sir M.V.I.T?
                </Accordion.Header>
                <Accordion.Body>
                The admission process varies depending on the course. Generally, admission is based on performance in qualifying exams, followed by entrance tests and interviews.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>
                What is the placement record of Sir M.V.I.T?
                </Accordion.Header>
                <Accordion.Body>
                Sir M.V.I.T has a dedicated placement cell that assists students in finding suitable job opportunities. The college has a good placement record, with many students getting placed in leading companies every year.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>
                What extracurricular activities are available at Sir M.V.I.T?
                </Accordion.Header>
                <Accordion.Body>
                Sir M.V.I.T has a range of student clubs and societies, offering opportunities for personal and professional growth outside the classroom.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="5">
                <Accordion.Header>
                Does Sir M.V.I.T provide scholarships?
                </Accordion.Header>
                <Accordion.Body>
                Yes, Sir M.V.I.T provides scholarships to eligible students based on their academic performance and financial need.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
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
