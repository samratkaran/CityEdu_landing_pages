import "./Main.css";
import Form from "./From/Form";
import HeadText from "./HeadText/HeadText";
import { Bounce, Fade } from "react-awesome-reveal";
import { useState } from "react";
import Modal from "./Modal/Modal";
import CourseCard from "./cards/CourseCard";
import Accordion from "react-bootstrap/Accordion";
import { TypeAnimation } from "react-type-animation";


const Main = () => {
  const [show, setShow] = useState(false);
  // const [activeSection, setActiveSection] = useState("bachelor"); // Initial active section

  // const handleSectionClick = (section) => {
  //   setActiveSection(section);
  // };


  return (
    // commnet
    <>
      <Fade cascade damping={0.5}>
        <div className="row main-head-text-of-landing-page">
          <div className="col-md-7 text-white">
            <p className="head-text-of-page">NEET MDS 2024</p>
            
            {/* <p className="second-head-text-of-page">
            College Of Law
            </p> */}
           
            <p className="span-text-of-page-two ">
            <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'MCC - All India Counselling',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'KEA - Karnataka Counselling',
        1000,
        'Other States Counselling',
        1000,
       
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}
    />
            </p>
            <p className="second-text"> Get NEET MDS Admission Guidance Today For </p>

             <p className="span-text-of-page">
             <button className="btn btn-primary">MERIT</button>
             <button className="btn btn-primary">MGMT.</button>
             <button className="btn btn-primary">NRI</button>
            </p>

          </div>

          <div className="col-md-3">
            <Form />
          </div>
        </div>
      </Fade>
      <div className="main-container mb-5">
        <HeadText value={"overview"}></HeadText>
        <Fade direction="down" delay={100}>
          <div className="row main-overview-of-page">
            <div className="col-md-11 p-3">
              <p>
                {" "}
                NEET MDS, the only annual exam conducted online by the National
                Board of Examinations (NBE), is your ticket to pursuing
                postgraduate dental courses in India. Accepted by most dental
                colleges nationwide, NEET MDS serves as the primary gateway for
                aspiring dental professionals.
              </p>{" "}
              <br />
              <p>
                With a total of 6,501 seats available, including 50% under the
                All India Quota (AIQ), 50% state quota seats, and 100% seats in
                deemed/central universities and private colleges, MDS offers
                ample opportunities for dental education.
              </p>{" "}
              <br />
              <p>
                Once the exam results are out, the Medical Counselling Committee
                (MCC) takes charge of the counselling process to ensure fair
                distribution of seats among qualified candidates. Don't miss
                this chance to shape your future in dentistry!
              </p>{" "}
              <br />
            </div>
          </div>
        </Fade>
        <HeadText value={"Courses Under NEET MDS"} />
        <div className="row">
          <div className="col-md-12 m-auto h-auto ">
            <div className="pos-grad-program row">
              {/* <h1 className="col-md-10 m-auto mb-5">
                Post Graduate Programmes
              </h1> */}

              <div className="bachelor-and-section col-md-12">
                <CourseCard
                  CourseName={"Prosthodontics"}
                  DegreeName={"Bachelor"}
                  Duration={"3 Years"}
                  imageUrl={require("../Assets/couese-image/BALLB.jpg")}
                />

                <CourseCard
                  CourseName={"Periodontics"}
                  DegreeName={"Bachelor"}
                  Duration={"3 Years"}
                  imageUrl={require("../Assets/couese-image/BALLB.jpg")}
                />

                <CourseCard
                  CourseName={"Oral and Maxillofacial Surgery"}
                  DegreeName={"Bachelor"}
                  Duration={"3 Years"}
                  imageUrl={require("../Assets/couese-image/BALLB.jpg")}
                />

                <CourseCard
                  CourseName={"Conservative Dentistry"}
                  DegreeName={"Bachelor"}
                  Duration={"3 Years"}
                  imageUrl={require("../Assets/couese-image/BALLB.jpg")}
                />

                <CourseCard
                  CourseName={"Orthodontics"}
                  DegreeName={"Bachelor"}
                  Duration={"3 Years"}
                  imageUrl={require("../Assets/couese-image/BALLB.jpg")}
                />

                <CourseCard
                  CourseName={"Oral Pathology"}
                  DegreeName={"Bachelor"}
                  Duration={"3 Years"}
                  imageUrl={require("../Assets/couese-image/BALLB.jpg")}
                />

                <CourseCard
                  CourseName={"Community Dentistry"}
                  DegreeName={"Bachelor"}
                  Duration={"3 Years"}
                  imageUrl={require("../Assets/couese-image/BALLB.jpg")}
                />

                <CourseCard
                  CourseName={"Paedodontics "}
                  DegreeName={"Bachelor"}
                  Duration={"3 Years"}
                  imageUrl={require("../Assets/couese-image/BALLB.jpg")}
                />

                <CourseCard
                  CourseName={"Oral Medicine and Radiology"}
                  DegreeName={"Bachelor"}
                  Duration={"3 Years"}
                  imageUrl={require("../Assets/couese-image/BALLB.jpg")}
                />

                <CourseCard
                  CourseName={"Endodontics"}
                  DegreeName={"Bachelor"}
                  Duration={"3 Years"}
                  imageUrl={require("../Assets/couese-image/BALLB.jpg")}
                />

                <CourseCard
                  CourseName={"Oral Implantology"}
                  DegreeName={"Bachelor"}
                  Duration={"3 Years"}
                  imageUrl={require("../Assets/couese-image/BALLB.jpg")}
                />

                <CourseCard
                  CourseName={"Forensic Odontology"}
                  DegreeName={"Bachelor"}
                  Duration={"3 Years"}
                  imageUrl={require("../Assets/couese-image/BALLB.jpg")}
                />
              </div>
            </div>
          </div>
        </div>

        {/* <HeadText value={"Placement"} />
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
               <Fade delay={200}> <li class="c1" style={{ backgroundColor: "#a61a32" }}>
                  {" "}
                  <span style={{ fontSize: "2.5rem", fontWeight: 700 }}>
                    100+
                  </span>{" "}
                  Total No. of Offers
                </li></Fade>
               <Fade delay={500}> <li class="c2" style={{ backgroundColor: "#034ea2" }}>
                  {" "}
                  <span style={{ fontSize: "2.5rem", fontWeight: 700 }}>
                    <i class="fa fa-inr" aria-hidden="true"></i> 60{" "}
                    <small style={{ fontSize: "1.1rem !important" }}>LPA</small>
                  </span>{" "}
                  Highest Package{" "}
                </li></Fade>
               <Fade  delay={800}>
               <li class="c4" style={{ backgroundColor: "#00abe6" }}>
                  {" "}
                  <span style={{ fontSize: "2.5rem", fontWeight: 700 }}>
                    <i class="fa fa-inr" aria-hidden="true"></i> 26.42{" "}
                    <small style={{ fontSize: "1.1rem !important" }}>LPA</small>
                  </span>
                  Average Package for PGDM & PGDM IB{" "}
                </li>
               </Fade>
                <Fade  delay={1000}>
                <li class="c4" style={{ backgroundColor: "#0011e6" }}>
                  {" "}
                  <span style={{ fontSize: "2.5rem", fontWeight: 700 }}>
                    <i class="fa fa-inr" aria-hidden="true"></i> 27.67{" "}
                    <small style={{ fontSize: "1.1rem !important" }}>LPA</small>
                  </span>
                  Average package for PGDM HRM
                </li>
                </Fade>
                <Fade  delay={1200}>
                <li class="c2" style={{ backgroundColor: "#da2032" }}>
                  {" "}
                  <span style={{ fontSize: "2.5rem", fontWeight: 700 }}>
                    <i class="fa fa-inr" aria-hidden="true"></i> 43.92{" "}
                    <small style={{ fontSize: "1.1rem !important" }}>LPA</small>
                  </span>{" "}
                  Highest package for PGDM BM
                </li>
                </Fade>
              </ul>
            </div>
          </div>
        </div> */}

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

        <HeadText value="NEET MDS Registration Process" />
        <div className="row d-flex justify-content-center align-items-center ">
          {/* <div className="col-md-4 d-none d-md-block m-auto">
            <img
              src={require("../Assets/f14d6c0a5773675a110f0fbb4988efa6-removebg-preview.png")}
              alt=""
              className="why-chose-us-image"
            />
          </div> */}
          <div className="col-md-11 ">
            <ul className="why-chose-reva">
              <Fade delay={200}>
                <li>Register on the official NBE website for NEET MDS 2024.</li>
              </Fade>
              <Fade delay={400}>
                <li>
                  Fill in personal and qualification details in the application
                  form.
                </li>
              </Fade>

              <Fade delay={600}>
                <li>Upload necessary documents as per guidelines.</li>
              </Fade>
              <Fade delay={800}>
                <li> Pay the application fee using the preferred method.</li>
              </Fade>

              <Fade delay={1000}>
                <li>
                  {" "}
                  Save and print a copy of the filled application form and
                  payment receipt.
                </li>
              </Fade>
            </ul>
          </div>
        </div>
        <HeadText value={"Top Dental Colleges in India"} />
        <div className="row">
          <div className="col-md-12">
            <div className="colleges-images">
              <div className="inner-college-of-page">
                <img
                  src={require("../Assets/college-images/A.B.Shetty Memorial Institute of Dental Sciences, Mangaluru, Karnataka.jpeg")}
                  alt=""
                />
                <h5>A.B.Shetty Memorial Institute of Dental Sciences, Mangaluru, Karnataka</h5>
              </div>
              <div className="inner-college-of-page">
                <img
                  src={require("../Assets/college-images/Amrita Vishwa Vidyapeetham, Coimbatore, Tamil Nadu.jpeg")}
                  alt=""
                />
                <h5>Amrita Vishwa Vidyapeetham, Coimbatore, Tamil Nadu</h5>
              </div>
              <div className="inner-college-of-page">
                <img
                  src={require("../Assets/college-images/Dr. D. Y. Patil Vidyapeeth, Pune, Maharashtra.jpeg")}
                  alt=""
                />
                <h5>Dr. D. Y. Patil Vidyapeeth, Pune, Maharashtra</h5>
              </div>
              <div className="inner-college-of-page">
                <img
                  src={require("../Assets/college-images/JSS Dental College and Hospital, Mysuru, Karnataka.jpeg")}
                  alt=""
                />
                <h5>JSS Dental College and Hospital, Mysuru, Karnataka</h5>
              </div>
              <div className="inner-college-of-page">
                <img
                  src={require("../Assets/college-images/Jamia Millia Islamia, New Delhi.jpeg")}
                  alt=""
                />
                <h5>Jamia Millia Islamia, New Delhi</h5>
              </div>
              <div className="inner-college-of-page">
                <img
                  src={require("../Assets/college-images/M.S. Ramaiah University of Applied Sciences, Bangalore, Karnataka.jpeg")}
                  alt=""
                />
                <h5>M.S. Ramaiah University of Applied Sciences, Bangalore, Karnataka</h5>
              </div>
              <div className="inner-college-of-page">
                <img
                  src={require("../Assets/college-images/Manipal College of Dental Sciences, Manipal, Karnataka.jpeg")}
                  alt=""
                />
                <h5>Manipal College of Dental Sciences, Manipal, Karnataka</h5>
              </div>
              <div className="inner-college-of-page">
                <img
                  src={require("../Assets/college-images/Maulana Azad Institute of Dental Sciences, Delhi.jpeg")}
                  alt=""
                />
                <h5>Maulana Azad Institute of Dental Sciences, Delhi</h5>
              </div>
              <div className="inner-college-of-page">
                <img
                  src={require("../Assets/college-images/Postgraduate Institute of Dental Sciences, Rohtak, Haryana.jpeg")}
                  alt=""
                />
                <h5>Postgraduate Institute of Dental Sciences, Rohtak, Haryana</h5>
              </div>
              <div className="inner-college-of-page">
                <img
                  src={require("../Assets/college-images/SRM Dental College, Chennai, Tamil Nadu.jpeg")}
                  alt=""
                />
                <h5>SRM Dental College, Chennai, Tamil Nadu</h5>
              </div>
              <div className="inner-college-of-page">
                <img
                  src={require("../Assets/college-images/Saveetha Institute of Medical and Technical Sciences, Chennai, Tamil Nadu.jpeg")}
                  alt=""
                />
                <h5>Saveetha Institute of Medical and Technical Sciences, Chennai, Tamil Nadu</h5>
              </div>
              <div className="inner-college-of-page">
                <img
                  src={require("../Assets/college-images/Siksha O Anusandhan, Bhubaneswar, Odisha.jpeg")}
                  alt=""
                />
                <h5>Siksha O Anusandhan, Bhubaneswar, Odisha</h5>
              </div>
              <div className="inner-college-of-page">
                <img
                  src={require("../Assets/college-images/Sri Ramachandra Institute of Higher Education and Research, Chennai, Tamil Nadu.jpeg")}
                  alt=""
                />
                <h5>Sri Ramachandra Institute of Higher Education and Research, Chennai, Tamil Nadu</h5>
              </div>

              <div className="inner-college-of-page">
                <img
                  src={require("../Assets/college-images/M.S. Ramaiah University of Applied Sciences, Bangalore, Karnataka.jpeg")}
                  alt=""
                />
                <h5>M.S. Ramaiah University of Applied Sciences, Bangalore, Karnataka</h5>
              </div>
            </div>
          </div>
        </div>

        <HeadText value={"NEET Cutoff 2024"} />
        <h4 className="col-md-11 m-auto">
          The NEET MDS cutoff for 2024, expected to be higher this year, will be
          disclosed alongside the result. The qualifying percentiles, as per
          NBEMS, are
        </h4>
        <Fade delay={500} direction="left">
          <div className="row main-campus-life">
            <div className="col-md-12 campus-life">
              <div class="card-of-campus-life">
                {" "}
                <h2>General/EWS</h2>
                <h6> 50th Percentile</h6>
              </div>

              <div class="card-of-campus-life">
                {" "}
                <h2>SC/ST/OBC</h2>
                <h6> 40th Percentile</h6>
              </div>

              <div class="card-of-campus-life">
                {" "}
                <h2>UR PWD</h2>
                <h6> 45th Percentile</h6>
              </div>
            </div>
          </div>
        </Fade>
        <HeadText value={"FAQ's"} />
        <div className="row">
          <div className="col-md-11 m-auto">
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  When will the NEET MDS 2024 result be declared?
                </Accordion.Header>
                <Accordion.Body>
                  The NEET MDS 2024 result is expected to be declared on or
                  before April 18, 2024, as per the official schedule.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  How can I check my NEET MDS result?
                </Accordion.Header>
                <Accordion.Body>
                  Candidates can check their NEET MDS result by visiting the
                  official website of the exam conducting authority and logging
                  in with their registration credentials. The result will be
                  available for download in PDF format.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  What is the validity of the NEET MDS result?
                </Accordion.Header>
                <Accordion.Body>
                  The NEET MDS result is valid for one year from the date of
                  declaration. Candidates can use the result to apply for
                  admission to postgraduate dental courses during the
                  corresponding academic year.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  When does the NEET MDS counselling process usually begin?
                </Accordion.Header>
                <Accordion.Body>
                  The NEET MDS counselling process typically begins after the
                  declaration of the result. Candidates included in the merit
                  list are eligible to participate in the counselling process
                  conducted by the designated authority.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="4">
                <Accordion.Header>
                  How can I secure admission to a dental college through NEET
                  MDS?
                </Accordion.Header>
                <Accordion.Body>
                  To secure admission to a dental college through NEET MDS,
                  candidates must participate in the counselling process and
                  choose their preferred colleges and courses based on their
                  rank and availability of seats. Upon seat allocation,
                  candidates need to report to the allotted college for document
                  verification and completion of the admission process.
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
