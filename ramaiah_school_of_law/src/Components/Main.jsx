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
    // commnet
    <>
      <Fade cascade damping={0.5}>
        <div className="row main-head-text-of-landing-page">
          <div className="col-md-8 text-white">
            <p className="head-text-of-page">
              MS Ramaiah  
            </p>
            {/* <p className="second-text">  </p> */}
            <p className="second-head-text-of-page">
            College Of Law
            </p>
            <p className="span-text-of-page">
              Visinory Ideas that transformed millions of lives!
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
        <Fade direction="down" delay={100}><div className="row main-overview-of-page">
          <div className="col-md-4">
            <img
              className="overview-image"
              src={require("../Assets/overview.png")}
              alt=""
            />
          </div>
          <div className="col-md-6 p-3">
            <p>
            MS Ramaiah College of Law is a prestigious educational institution established in 1995. The college is affiliated with the Karnataka State Law University (KSLU) and approved by the Bar Council of India (BCI). The college follows a well-structured curriculum that combines theoretical knowledge with practical application. To provide students with exposure to the legal profession beyond the classroom, MSRCL regularly organizes guest lectures and workshops. The college provides internships and employment opportunities to students in reputed law firms, companies, and government organizations.
            </p>
          </div>
        </div></Fade>
        <HeadText value={"Courses Offered"} />
        <div className="row">
          <div className="col-md-12 m-auto h-auto ">
            <div className="pos-grad-program row">
              {/* <h1 className="col-md-10 m-auto mb-5">
                Post Graduate Programmes
              </h1> */}

              <div className="bachelor-and-section col-md-12">
              <CourseCard
                  CourseName={"BA LLB"}
                  DegreeName={"Bachelor"}
                  Duration={"5 Years"}
                  imageUrl={require("../Assets/couese-image/BALLB.jpg")}
                />
                <CourseCard
                  CourseName={
                    "BBA LLB"
                  }
                  DegreeName={"Bachelor"}
                  Duration={"5 Years"}
                  imageUrl={require("../Assets/couese-image/BBALLB.jpg")}
                />
               

                <CourseCard
                  CourseName={
                    "B.COM LLB"
                  }
                  DegreeName={"Bachelor"}
                  Duration={"5 Years"}
                  imageUrl={require("../Assets/couese-image/B.COMLLB.webp")}
                />
                <CourseCard
                  CourseName={
                    "LLM | Business and Trade Laws "
                  }
                  DegreeName={"Master"}
                  Duration={"2 Years"}
                  imageUrl={require("../Assets/couese-image/LLMBusiness and Trade Laws.jpg")}
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

        <HeadText value="Why Choose MSRSL ?" />
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
              <img src={require("../Assets/Karnataka.jpeg")} alt="" />
              <img src={require("../Assets/BAR Council of India.png")} alt="" />
              <img src={require("../Assets/naccA.jpg")} alt="" />
              
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
