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
            Dayananda Sagar   
            </p>
            <p className="second-head-text-of-page"> College of Engineering</p>
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
              fontSize: "3rem",
            }}
          >
          DSCE -  OVERVIEW
          </h1>

          <div className="col-md-11 p-3">
            <p>
              {" "}
              Dayananda Sagar College of Engineering is known for its Engineering excellence since its incubation in 1979. DSCE has 04 decades of proven track records. It is one of the few technical colleges which offers the widest choice of Engineering courses with a strong emphasis on Research & Development programs. It offers 18 UG, 13 PG, Basic Science & Humanitarian Courses. DSCE has 20 research centers which are all approved by the Visvesvaraya Technological University (VTU) for scholars in various streams of Engineering.
            </p>
          </div>
        </div>
        <HeadText value={"DSCE Courses Offered"} />
        <div className="row">
          <div className="col-md-12 m-auto h-auto App">
            <div className="tabs">
              <div
                className={`tab ${
                  activeSection === "bachelor" ? "active" : ""
                } `}
                onClick={() => handleSectionClick("bachelor")}
              >
                BE / B.Tech
              </div>
              {/* <div
                className={`  tab ${
                  activeSection === "master" ? "active" : ""
                }`}
                onClick={() => handleSectionClick("master")}
              >
                M.Tech
              </div> */}
              
            </div>
            <div className="content">
              {activeSection === "bachelor" && (
                <div className="bachelor-and-section col-md-12">

                <p>Computer Sciences & Engineering</p>
                <p>Artificial Intelligence & Machine Learning</p>
                <p>Computer Sciences & Engineering (Data Sciences)</p>
                <p>Computer Sciences & Design</p>
                <p>Computer Sciences & Engineering (Cyber Security)</p>
                <p>Computer Sciences & Business System</p>
                <p>Computer Sciences & Engineering (IOT & Black Chain)</p>
                <p>Robotics & Artificial Intelligence </p>
                <p>Electronics & Communication Engineering</p>
                <p>Electronics & Instrumentation Engineering</p>
                <p>Electronics & Telecommunication Engineering</p>
                <p>Information Science & Engineering</p>
                <p>Aeronautical Engineering</p>
                <p>Automobile Engineering</p>
                <p>Bio-Technology</p>
                <p>Mechanical Engineering</p>
                <p>Civil Engineering</p>
                <p>Medical Electronics </p>
                <p className="chem-main">Chemical Engineering</p>

{/* 
                <CourseCard
                    CourseName={"Computer Science & Engineering"}
                    DegreeName={"Bachelor"}
                    Duration={"4 Years"}
                    imageUrl={require("../Assets/couese-image/Computer Science & Engineering.jpeg")}
                  />
                  <CourseCard
                    CourseName={"Electronics & Communication Engineering"}
                    DegreeName={"Bachelor"}
                    Duration={"4 Years"}
                    imageUrl={require("../Assets/couese-image/Electronics & Communication Engineering.jpeg")}
                  />

                     <CourseCard
                    CourseName={"Biotechnology"}
                    DegreeName={"Bachelor"}
                    Duration={"4 Years"}
                    imageUrl={require("../Assets/couese-image/Biotechnology.jpeg")}
                  />
                    
                    
                    <CourseCard
                    CourseName={"Civil Engineering"}
                    DegreeName={"Bachelor"}
                    Duration={"4 Years"}
                    imageUrl={require("../Assets/couese-image/Civil Engineering.jpeg")}
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
                    CourseName={"Aeronautical Engineering"}
                    DegreeName={"Bachelor"}
                    Duration={"4 Years"}
                    imageUrl={require("../Assets/couese-image/Aeronautical Engineering.jpeg")}
                  />

<CourseCard
                    CourseName={"Automobile Engineering"}
                    DegreeName={"Bachelor"}
                    Duration={"4 Years"}
                    imageUrl={require("../Assets/couese-image/Automobile Engineering.jpeg")}
                  />


<CourseCard
                    CourseName={"Artificial Intelligence & Machine Learning"}
                    DegreeName={"Bachelor"}
                    Duration={"4 Years"}
                    imageUrl={require("../Assets/couese-image/Artificial Intelligence and Machine Learning.jpeg")}
                  />


<CourseCard
                    CourseName={"Computer Science and Business Systems"}
                    DegreeName={"Bachelor"}
                    Duration={"4 Years"}
                    imageUrl={require("../Assets/couese-image/Computer Science and Business Systems.jpeg")}
                  />


<CourseCard
                    CourseName={"Computer systems & Engineering"}
                    DegreeName={"Bachelor"}
                    Duration={"4 Years"}
                    imageUrl={require("../Assets/couese-image/Computer systems & Engineering.jpeg")}
                  />


<CourseCard
                    CourseName={"Computer Science(Cyber Security)"}
                    DegreeName={"Bachelor"}
                    Duration={"4 Years"}
                    imageUrl={require("../Assets/couese-image/Computer Science(Cyber Security).jpeg")}
                  />




<CourseCard
                    CourseName={"Computer science (Data Science)"}
                    DegreeName={"Bachelor"}
                    Duration={"4 Years"}
                    imageUrl={require("../Assets/couese-image/Computer Science data science.jpeg")}
                  />

<CourseCard
                    CourseName={"Computer Science and Design)"}
                    DegreeName={"Bachelor"}
                    Duration={"4 Years"}
                    imageUrl={require("../Assets/couese-image/Computer Science and Design.jpeg")}
                  />


<CourseCard
                    CourseName={"Chemical Engineering"}
                    DegreeName={"Bachelor"}
                    Duration={"4 Years"}
                    imageUrl={require("../Assets/couese-image/Chemical Engineering.png")}
                  />


<CourseCard
                    CourseName={"Medical Electronics Engineering"}
                    DegreeName={"Bachelor"}
                    Duration={"4 Years"}
                    imageUrl={require("../Assets/couese-image/Medical Electronics Engineering.jpeg")}
                  /> */}


                  
                   
                 
                </div>
              )}
              {/* {activeSection === "master" && (
                <div className="bachelor-and-section">
                <CourseCard
                    CourseName={"Structural Engineering"}
                    DegreeName={"Master"}
                    Duration={"2 Years"}
                    imageUrl={require("../Assets/couese-image/Structural Engineering.jpeg")}
                  />
                    <CourseCard
                    CourseName={"Highway Technology"}
                    DegreeName={"Master"}
                    Duration={"2 Years"}
                    imageUrl={require("../Assets/couese-image/Highway Technology.jpeg")}
                  />
                     <CourseCard
                    CourseName={"Design Engineering"}
                    DegreeName={"Master"}
                    Duration={"2 Years"}
                    imageUrl={require("../Assets/couese-image/Design Engineering.jpeg")}
                  />
                    <CourseCard
                    CourseName={"Computer Integrated Manufacturing"}
                    DegreeName={"Master"}
                    Duration={"2 Years"}
                    imageUrl={require("../Assets/couese-image/Computer Integrated Manufacturing.jpeg")}
                  />
                  
                    <CourseCard
                    CourseName={" Digital Electronics and Communication"}
                    DegreeName={"Master"}
                    Duration={"2 Years"}
                    imageUrl={require("../Assets/couese-image/Electronics & Communication Engineering.jpeg")}
                  />
                  
                    <CourseCard
                    CourseName={" VLSI Design & Embedded Systems"}
                    DegreeName={"Master"}
                    Duration={"2 Years"}
                    imageUrl={require("../Assets/couese-image/VLSI Design & Embedded Systems.jpeg")}
                  />
                    <CourseCard
                    CourseName={" Power Electronics"}
                    DegreeName={"Master"}
                    Duration={"2 Years"}
                    imageUrl={require("../Assets/couese-image/Power Electronics.jpeg")}
                  />
                   <CourseCard
                    CourseName={"Microelectronics and Control Systems"}
                    DegreeName={"Master"}
                    Duration={"2 Years"}
                    imageUrl={require("../Assets/couese-image/Microelectronics and Control Systems.jpeg")}
                  />
                   <CourseCard
                    CourseName={"Computer Network Engineering"}
                    DegreeName={"Master"}
                    Duration={"2 Years"}
                    imageUrl={require("../Assets/couese-image/Computer Network Engineering.jpeg")}
                  />
                   <CourseCard
                    CourseName={"Digital Communication & Networking"}
                    DegreeName={"Master"}
                    Duration={"2 Years"}
                    imageUrl={require("../Assets/couese-image/Digital Communication & Networking.png")}
                  />
                   <CourseCard
                    CourseName={"Computer Science & Engineering"}
                    DegreeName={"Master"}
                    Duration={"2 Years"}
                    imageUrl={require("../Assets/couese-image/Computer Science & Engineering.jpeg")}
                  />

<CourseCard
                    CourseName={"MBA"}
                    DegreeName={"Master"}
                    Duration={"2 Years"}
                    imageUrl={require("../Assets/couese-image/MBA.jpg")}
                  />

<CourseCard
                    CourseName={"MCA"}
                    DegreeName={"Master"}
                    Duration={"2 Years"}
                    imageUrl={require("../Assets/couese-image/MCA.jpg")}
                  />


                  
                   
                </div>
              )} */}
             
            </div>
          </div>
        </div>
        <HeadText value={"Placement"} />  
         <div className="row ">
          <div class="col-md-12 ">
            <p
              style={{ textAlign: "justify", padding: "0% 5%" }}
              className="col-md-11 m-auto pb-4 "
            >
            More than 200 companies visit DSCE every year, with 100% placement for eligible students. <br />

Centre for Innovation & Leadership - CIL team is dedicated to pre-placement training in soft skills They guide students to draft industry-standard resumes, and coach them to prepare for Aptitude tests, Presentations, Interviews, and Group discussions. <br />
DSCE achieved impressive placement statistics in the last 4 years despite the pandemic & slowdown. <br />
College has maintained an average of ~80% student placement in the last 3 years.<br />
            </p>
            <div class="Students-component ">
              <ul className="boxes-of-palcement d-flex justify-content-center gap-5">
              
                <li class="c2" style={{ backgroundColor: "#da2032" }}>
                  
                  <span style={{ fontSize: "2.5rem", fontWeight: 700 }}>
                    <i class="fa fa-inr" aria-hidden="true"></i> 200+
                   
                  </span>{" "}
                  Company visted
                </li>

                <li class="c2" style={{ backgroundColor: "#a61a32" }}>
                  {" "}
                  <span style={{ fontSize: "2.5rem", fontWeight: 700 }}>
                    <i class="fa fa-inr" aria-hidden="true"></i> 40{" "}
                    <small style={{ fontSize: "1.1rem !important" }}>LPA</small>
                  </span>{" "}
                  Highest Package{" "}
                </li>
                <li class="c3" style={{ backgroundColor: "#034ea2" }}>
                  {" "}
                  <span style={{ fontSize: "2.5rem", fontWeight: 700 }}>
                    <i class="fa fa-inr" aria-hidden="true"></i> 80%
                  </span>{" "}
                  Average Student Placed 
                </li>
                {/* <li class="c4" style={{ backgroundColor: "#00abe6" }}>
                  {" "}
                  <span style={{ fontSize: "2.5rem", fontWeight: 700 }}>
                    <i class="fa fa-inr" aria-hidden="true"></i> 5{" "}
                    <small style={{ fontSize: "1.1rem !important" }}>LPA</small>
                  </span>{" "}
                  Average Package{" "}
                </li> */}
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
            
            <img src={require("../Assets/slide-image/congnizent.jpg")} alt="" />
            <img src={require("../Assets/slide-image/infosys.png")} alt="" />
            <img src={require("../Assets/slide-image/WIT_BIG-0de2dc21.png")} alt="" />
            <img src={require("../Assets/slide-image/ibm-logo-ibm-logos-download-12.png")} alt="" />
            <img src={require("../Assets/slide-image/yahoo.png")} alt="" />
          
            <img src={require("../Assets/slide-image/14.png")} alt="" />
            <img src={require("../Assets/slide-image/05.png")} alt="" />
            <img src={require("../Assets/slide-image/13.png")} alt="" />
            <img src={require("../Assets/slide-image/13.png")} alt="" />
            <img src={require("../Assets/slide-image/10.png")} alt="" />
           
            
         
           
            
            
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

        <HeadText value="Reasons to Study at DSCE" />
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
                <li>Innovation and Entrepreneurship Development Center ( IEDC) plans & conducts activities like Ideathons, workshops, BI Proposals, E-Cell activities & E-Submits to empower young talent to fulfill their dreams</li>
              </Fade>
              <Fade delay={400}>
                <li>DSCE has a track record where few budding entrepreneurs from the college have got funding from MSME for their ideas from a technical summit.</li>
              </Fade>

              <Fade delay={600}>
                <li>DSCE has an impactful internship policy to create the future technical talent pool. They have 03 mandatory internships at three stages during Engineering, and they have a mix of intra and inter-institutional internships.</li>
              </Fade>
              <Fade delay={800}>
                <li>Centre for Innovation & Leadership (CIL) is dedicated to mentoring and coaching students on Soft skills and provides placement training, self-presentation, and Time management to become industry ready.
</li>
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

        {/* <HeadText value={"FAQs"} />
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
