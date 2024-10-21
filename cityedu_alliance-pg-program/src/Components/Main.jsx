import "./Main.css";
import Form from "./From/Form";
import HeadText from "./HeadText/HeadText";
import { Bounce, Fade } from "react-awesome-reveal";
import Accordion from "react-bootstrap/Accordion";
import { useState } from "react";
import Modal from "./Modal/Modal";
import CourseCard from "./cards/CourseCard";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";
// image section---------------------

import hpe from "../Assets/hpe.webp";
import icici from "../Assets/icici.webp";
import ht from "../Assets/ht.webp";
import idbi from "../Assets/idbi-bank.webp";
import idcf from "../Assets/idfc-first-bank.webp";
import kpit from "../Assets/kpit.webp";
import schneider from "../Assets/schneider.webp";
import gyproc from "../Assets/gyproc.webp";
import toyota from "../Assets/toyota.webp";
import money from "../Assets/money-control.webp";
import tas from "../Assets/tas.webp";
import tvs from "../Assets/tvs.webp";
import wildcraft from "../Assets/wildcraft.webp";
import aditya from "../Assets/aditya-birla-capital.webp";
import aa from "../Assets/aa.webp";
import bosch from "../Assets/bosch.webp";
import cafeCoffeeDay from "../Assets/cafe-coffee-day.webp";
import cbre from "../Assets/cbre.webp";
import exide from "../Assets/exide.webp";
import d from "../Assets/d.webp";
import g from "../Assets/g.webp";
import greenlam from "../Assets/greenlam.webp";
import hcl from "../Assets/hcl-tech.webp";
import hdfc from "../Assets/hdfc-ergo.webp";
import brillio from "../Assets/brillio.webp";

//

// import $ from 'jquery';

// import 'owl.carousel';

const Main = () => {
  const [show, setShow] = useState(false);

  const companies = [
    { img: bosch, alt: "Bosch" },
    { img: brillio, alt: "Brillio" },
    { img: cafeCoffeeDay, alt: "Cafe Coffee Day" },
    { img: cbre, alt: "CBRE" },
    { img: exide, alt: "Exide" },
    { img: hpe, alt: "Exide" },
    { img: icici, alt: "Exide" },
    { img: ht, alt: "Exide" },
    { img: idbi, alt: "Exide" },
    { img: idcf, alt: "Exide" },
    { img: kpit, alt: "Exide" },
    { img: schneider, alt: "Exide" },
    { img: gyproc, alt: "Exide" },
    { img: toyota, alt: "Exide" },
    { img: money, alt: "Exide" },
    { img: tas, alt: "Exide" },
    { img: tvs, alt: "Exide" },
    { img: wildcraft, alt: "Exide" },
    { img: aditya, alt: "Exide" },
    { img: aa, alt: "Exide" },
    { img: d, alt: "Exide" },
    { img: g, alt: "Exide" },
    { img: greenlam, alt: "Exide" },
    { img: hcl, alt: "Exide" },
    { img: hdfc, alt: "Exide" },
    { img: bosch, alt: "Bosch" },
    { img: brillio, alt: "Brillio" },
    { img: cafeCoffeeDay, alt: "Cafe Coffee Day" },

    // Add more companies as needed
  ];

  // Split the companies array into groups of 7
  const chunkArray = (array, chunkSize) => {
    let results = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      results.push(array.slice(i, i + chunkSize));
    }
    return results;
  };

  const companyGroups = chunkArray(companies, 7); // Group companies in sets of 7

  // const [activeSection, setActiveSection] = useState("bachelor"); // Initial active section

  // const handleSectionClick = (section) => {
  //   setActiveSection(section);
  // };
  return (
    <>
      <Fade cascade damping={0.5}>
        <div className="row main-head-text-of-landing-page">
          <div className="col-md-8 text-white">
            <p className="head-text-of-page">2 Year Full-time</p>
            <p className="second-head-text-of-page"> MBA Program</p>
            <p className="span-text-of-page">Empowering Careers, Transforming Lives
            </p>
            <p className="span-text-of-page-two ">Admission Open 2025</p>
          </div>

          <div className="col-md-3">
            <Form />
          </div>
        </div>
      </Fade>

      <div className="main-container mb-5">
      <section class="intake" id="intake" >
<div class="container">

<div class="d-none d-md-block">
<div class="row justify-content-center ">


{/* <div class="col-md-3 ">
<p><span>Location:</span><br/> Bengaluru</p>                                                                                         
</div> */}


<div class="col-md-3  ">
<p><span style={{fontSize:"2rem"}}>Intake:</span> January | July 2025</p> 
</div>

<div class="col-md-4">
<p style={{textAlign:"center"}}><span style={{fontSize:"2rem" }}>Deadlines:</span> Jan Batch: Oct 20, 2024 | July Batch: Nov 30, 2024</p> 
</div>


{/* <div class="col-md-3 ">
<p><span>Batch Commencement:</span><br/> September 05, 2024</p>  
</div> */}


<div class="col-md-4">
<p><span style={{fontSize:"2rem"}}>Duration:</span> Two-Year Full-Time</p>  
</div>
</div>
</div>


<div class="d-md-none">
<div class="row justify-content-center">
<div class="col-md-12 py-1">
<p class="text-center">Location: Bengaluru | Intake: January &amp; July 2024 | Duration: Two-Year Full-Time</p></div>
</div>
</div>

</div>
</section>
        <div className="row main-overview-of-page">
          <h1
            style={{
              textAlign: "center",
              fontWeight: "700",
              color: "black",
              fontSize: "3rem",
            }}
          >
            Alliance School of Business
          </h1>

          <div className="col-md-11 p-3">
            <p>
              {" "}
              Established in 2010, the Alliance School of Business (ASB) is an
              integral part of Alliance University, a distinguished institution
              accredited by the University Grants Commission (UGC) and the All
              India Council for Technical Education (AICTE). Alliance School of
              Business offers a comprehensive range of undergraduate and
              postgraduate programs in business administration, including
              Bachelor of Business Administration (BBA), Bachelor of Commerce
              (B.Com.), Master of Business Administration (MBA),  and Doctor of Philosophy (Ph.D.) in Business
              Administration.
            </p>
          </div>
        </div>

        <section class="eligibility" id="eligibility">
          <div class="container" style={{ padding: "2% 2%" }}>
            <div class="row gx-5 justify-content-center mt-2">
              <div class="col-md-6">
                <h1 class="py-4">Eligibility</h1>
                <p>Bachelor’s degree with a minimum of 50% marks aggregate.</p>
                <p>
                  A relaxation of 5% marks or its equivalent grade may be
                  allowed for those belonging to SC/ST.
                </p>
                <p>
                  For MBA, Alliance School of Business will accept any one of
                  the national-level management aptitude tests or Alliance
                  Management Aptitude Test (AMAT).
                </p>
              </div>

              <div class="col-md-6">
                <h1 class="py-4">Specializations</h1>

                <div class="d-none d-md-block">
                  <div class="row justify-content-center">
                    <div class="col-md-6">
                      <ul>
                        <li>Digital Transformation</li>
                        <li>Marketing</li>
                        <li>Finance</li>
                        <li>Human Resource Management</li>
                      </ul>
                    </div>

                    <div class="col-md-6">
                      <ul>
                        <li>Operations Management</li>
                        <li>Business Analytics</li>
                        <li>International Business</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div class="d-md-none">
                  <ul>
                    <li>Marketing</li>
                    <li>Finance</li>
                    <li>Human Resource Management</li>
                    <li>Operations Management</li>
                    <li>Business Analytics</li>
                    <li>International Business</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <HeadText value="Approvals and Accreditations" />
        <Fade delay={250}>
          <div className="row main-approval-and-acredation">
            <div className="col-md-12 approval-and-acredation">
              <img src={require("../Assets/001.webp")} alt="" />
              <img src={require("../Assets/002.webp")} alt="" />
              <img src={require("../Assets/003.webp")} alt="" />
              <img src={require("../Assets/004.webp")} alt="" />
            </div>
          </div>
        </Fade>
        <section class="disciplines eligibility" id="disciplines">
          <div class="container">
            <h1 class="my-3 pb-2">New-Age Curriculum</h1>

            <div class="row justify-content-center mx-2">
              <div class="col-md-4 border py-3">
                <p>
                  <strong>Vertical Disciplines</strong>
                </p>
                <ul>
                  <li>Finance</li>
                  <li>Operations Management</li>
                  <li>Marketing</li>
                  <li>Human Resource Management</li>
                  <li>Business Analytics</li>
                  <li>International Business</li>
                </ul>
              </div>

              <div class="col-md-8 border py-3 curri2">
                <p>
                  <strong>Horizontal Disciplines</strong>
                </p>

                <div class="row ">
                  <div class="col-md-6">
                    <ul>
                      <li>Decision Science</li>
                      <li>Technology Management</li>
                      <li>Business Eco System</li>
                    </ul>
                  </div>
                  <div class="col-md-6">
                    <ul>
                      <li>Leadership Acumen</li>
                      <li>Vertical Readiness</li>
                    </ul>
                  </div>
                </div>

                <div class="d-md-none">
                  <ul>
                    <li>Data Science</li>
                    <li>Technology Management</li>
                    <li>General Management</li>
                  </ul>
                </div>
              </div>

              <div class="col-md-4 border py-3">
                <p>
                  <strong>Choice-Based Electives</strong>
                </p>
                <ul>
                  <li>Entrepreneurship</li>
                  <li>Fintech</li>
                  <li>Retail Management and E-Commerce</li>
                  <li>Business Consulting</li>
                  <li>Media and Communication</li>
                  <li>Digital Business</li>
                  <li>Workplace Gamification</li>
                  <li>Digital Product Management</li>
                  <li>Wealthtech</li>
                </ul>
                <p class="small">
                  <em>
                    Three subjects will be offered under the chosen choice-based
                    elective
                  </em>
                </p>
              </div>

              <div class="col-md-8 border py-3">
                <p>
                  <strong>Open Electives</strong>
                </p>
                <ul>
                  <li>Design Thinking: A Primer</li>
                  <li>Demography: Theories and Trends</li>
                  <li>
                    Business Analytics &amp; Text Mining Modeling Using Python
                  </li>
                  <li>
                    Introduction to Human Factors and Ergonomics (By Vivek Kant,
                    PhD. | IIT Bombay)
                  </li>
                  <li>Design Technology and Innovation</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <Bounce duration={1000}>
          <div className="row main-contact-us mt-5" style={{marginBottom:"6rem"}}>
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
        {/* <HeadText value={"Specializations"} />
        <div className="row">
          <div className="col-md-12 m-auto h-auto App">
            <div className="tabs"></div>
            <div className="content">
              <div className="bachelor-and-section col-md-12">
                <CourseCard
                  CourseName={"Marketing"}
                  // DegreeName={"Bachelor"}
                  // Duration={"4 Years"}
                  imageUrl={require("../Assets/couese-image/marketing.png")}
                />
                <CourseCard
                  CourseName={"Finance"}
                  DegreeName={"Bachelor"}
                  Duration={"4 Years"}
                  imageUrl={require("../Assets/couese-image/finance.jpg")}
                />
                <CourseCard
                  CourseName={"Human Resource Management"}
                  DegreeName={"Bachelor"}
                  Duration={"4 Years"}
                  imageUrl={require("../Assets/couese-image/hrm.jpg")}
                />
                <CourseCard
                  CourseName={"Operations Management"}
                  DegreeName={"Bachelor"}
                  Duration={"4 Years"}
                  imageUrl={require("../Assets/couese-image/operation-managment.jpg")}
                />
                <CourseCard
                  CourseName={"Business Analytics"}
                  DegreeName={"Bachelor"}
                  Duration={"4 Years"}
                  imageUrl={require("../Assets/couese-image/Business-Analytics.jpg")}
                />
                <CourseCard
                  CourseName={"International Business"}
                  DegreeName={"Bachelor"}
                  Duration={"4 Years"}
                  imageUrl={require("../Assets/couese-image/International-Business.jpg")}
                />
              </div>
            </div>
          </div>
        </div> */}
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
        {/* <HeadText value={"top Recruiters"} /> */}
        {/* ----------------------------------------------------- */}

        <section className="recruiting-section py-5" id="partners">
          <div className="container">
            <div className="row justify-content-center mb-4">
              <div className="col-md-12 text-center">
                <h1 className="mb-4">Top Recruiting Partners</h1>
              </div>
            </div>

            <div className="row justify-content-center ">
              <Carousel
                className="col-md-12 "
                controls={false} // This removes the side arrows
                indicators={true}
              >
                {companyGroups.map((group, index) => (
                  <Carousel.Item key={index}>
                    <div className="row images-car">
                      {group.map((company, idx) => (
                        <div style={{ width: "10rem" }} key={idx}>
                          <img
                            className="d-block w-100 img-thumbnail"
                            src={company.img}
                            alt={company.alt}
                            style={{ maxHeight: "150px", objectFit: "contain" }}
                          />
                        </div>
                      ))}
                    </div>
                  </Carousel.Item>
                ))}
              </Carousel>
            </div>

            <div className="row text-center mt-5">
              <div className="col-lg-3 col-md-6 mb-3">
                <div className="border p-3">
                  <span className="display-4">6,000+</span>
                  <br />
                  <strong>Opportunities Created</strong>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 mb-3">
                <div className="border p-3">
                  <span className="display-4">800+</span>
                  <br />
                  <strong>Recruiters</strong>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 mb-3">
                <div className="border p-3">
                  <span className="display-4">52%</span>
                  <br />
                  <strong>New Recruiters</strong>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 mb-3">
                <div className="border p-3">
                  <span className="display-4">₹ 38.05</span>
                  <br />
                  <strong>LPA Highest Placement Package</strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------ */}
        

        <HeadText value={"Campus Life"} />
        
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
        
        


        

        <HeadText value={"FAQs"} />
        <div className="row">
          <div className="col-md-11 m-auto">
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  Are there any international exchange programs for students at
                  ASB?
                </Accordion.Header>
                <Accordion.Body>
                  Yes, ASB has established partnerships with leading business
                  schools globally, providing students with opportunities for
                  international exchange programs. This allows them to gain a
                  global perspective and experience studying abroad.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  How does ASB support the career development of its students?
                </Accordion.Header>
                <Accordion.Body>
                  ASB has a dedicated Career Advancement and Networking cell
                  that organizes workshops, seminars, and mentorship programs.
                  Additionally, the Center for Industry Interface facilitates
                  interactions with industry experts, enhancing students' career
                  prospects.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  Can students pursue dual specializations in their MBA program
                  at ASB?
                </Accordion.Header>
                <Accordion.Body>
                  Yes, ASB allows students to pursue dual specializations in
                  their MBA program. This provides them with a comprehensive
                  skill set and a competitive edge in the job market.
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
