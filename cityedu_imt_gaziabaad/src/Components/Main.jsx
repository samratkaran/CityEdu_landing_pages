import "./Main.css";
import Form from "./From/Form";
import HeadText from "./HeadText/HeadText";
import { Bounce, Fade } from "react-awesome-reveal";
import { useState } from "react";
import Modal from "./Modal/Modal";
import CourseCard from "./cards/CourseCard";
import Accordion from "react-bootstrap/Accordion";

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
              IMT, <b className="second-text"> Ghaziabad </b>{" "}
            </p>
            <p className="second-head-text-of-page">
              Institue of Managment Technology{" "}
            </p>
            <p className="span-text-of-page">
              Are you looking to give wings to your career in Management
              Studies? If So, then IMT Ghaziabad is your answer.
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
              The Institute of Management Technology (IMT) Ghaziabad was
              established in the year 1980. Situated in Raj Nagar, Ghaziabad,
              Uttar Pradesh, the Institute of Management Technology Ghaziabad
              boasts a convenient location. With the Indira Gandhi International
              Airport just 45 km away, students can easily access the institute
              within an hour via cab or auto. The nearby Ghaziabad Railway
              Junction, merely 4.8 km distant, offers accessible transportation
              options.
              <br />
              <br />
              The institute offers a variety of courses, placement assistance,
              and scholarships. Its features, which support students' overall
              growth, include an auditorium, library, dormitories, labs, and
              sports facilities.
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
            <div class="Students-component ">
              <ul className="boxes-of-palcement d-flex justify-content-center gap-5">
                <li class="c1" style={{ backgroundColor: "#a61a32" }}>
                  {" "}
                  <span style={{ fontSize: "2.5rem", fontWeight: 700 }}>
                    150+
                  </span>{" "}
                  Total recruiters
                </li>
                <li class="c2" style={{ backgroundColor: "#da2032" }}>
                  {" "}
                  <span style={{ fontSize: "2.5rem", fontWeight: 700 }}>
                    <i class="fa fa-inr" aria-hidden="true"></i> 75+
                  </span>{" "}
                  New recruiters
                </li>
                <li class="c2" style={{ backgroundColor: "#034ea2" }}>
                  {" "}
                  <span style={{ fontSize: "2.5rem", fontWeight: 700 }}>
                    <i class="fa fa-inr" aria-hidden="true"></i> 65.60{" "}
                    <small style={{ fontSize: "1.1rem !important" }}>LPA</small>
                  </span>{" "}
                  Highest Package{" "}
                </li>
                <li class="c4" style={{ backgroundColor: "#00abe6" }}>
                  {" "}
                  <span style={{ fontSize: "2.5rem", fontWeight: 700 }}>
                    <i class="fa fa-inr" aria-hidden="true"></i> 17.35{" "}
                    <small style={{ fontSize: "1.1rem !important" }}>LPA</small>
                  </span>
                  Average Package
                </li>
                <li class="c4" style={{ backgroundColor: "#0011e6" }}>
                  {" "}
                  <span style={{ fontSize: "2.5rem", fontWeight: 700 }}>
                    <i class="fa fa-inr" aria-hidden="true"></i> 16
                    <small style={{ fontSize: "1.1rem !important" }}>
                      {" "}
                      LPA
                    </small>
                  </span>
                  Median package
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
              src={require("../Assets/slide-image/Asian Paints.png")}
              alt=""
            />
            <img
              src={require("../Assets/slide-image/Bajaj Consumer Care.png")}
              alt=""
            />
            <img
              src={require("../Assets/slide-image/Bank of America.png")}
              alt=""
            />
            <img src={require("../Assets/slide-image/Dell.png")} alt="" />
            <img src={require("../Assets/slide-image/Deloitte.png")} alt="" />
            <img src={require("../Assets/slide-image/HDFC Bank.png")} alt="" />
            <img src={require("../Assets/slide-image/Hexaware.png")} alt="" />
            <img src={require("../Assets/slide-image/IBM.png")} alt="" />
            <img
              src={require("../Assets/slide-image/Infosys Consulting.jpeg")}
              alt=""
            />
            <img
              src={require("../Assets/slide-image/JP Morgan Chase & Co.jpeg")}
              alt=""
            />
            <img src={require("../Assets/slide-image/KPMG.png")} alt="" />
            <img src={require("../Assets/slide-image/hsbc.png")} alt="" />
            <img src={require("../Assets/slide-image/Wipro CCL.jpeg")} alt="" />
            <img
              src={require("../Assets/slide-image/Bajaj Consumer Care.png")}
              alt=""
            />
            <img
              src={require("../Assets/slide-image/Bank of America.png")}
              alt=""
            />
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

        <HeadText value="Why Choose IMT?" />
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
                <li>Reputation: Established Excellence</li>
              </Fade>
              <Fade delay={600}>
                <li>Diversity: Co-ed Community</li>
              </Fade>
              <Fade delay={800}>
                <li>Global Presence: Four Campuses</li>
              </Fade>
              <Fade delay={1000}>
                <li>AICTE Approval: Quality Assurance</li>
              </Fade>

              <Fade delay={1200}>
                <li>Program Variety: Diverse Offerings</li>
              </Fade>
              <Fade delay={1400}>
                <li>Industry Recognition: High Rankings</li>
              </Fade>
            </ul>
          </div>
        </div>

        <HeadText value={"Campus Life"} />
        <p className="col-md-10 m-auto ps-3 pe-3 ">
          IMT's campus features 1000 Wi-Fi enabled nodes, backed by a 10 Gbps
          fibre network and 420 Mbps Metro Ethernet connectivity, upgradable to
          1 Gbps. With 13 enterprise-level servers, faculty receive
          state-of-the-art laptops and printers. Students enjoy 24x7
          connectivity and official email accounts.
          <br />
          <br />
          Classrooms are equipped with Wi-Fi projectors, accommodating 16
          devices and compatible with Android and iOS. The sound system,
          utilizing Green Extron class D amplifiers and high-end speakers,
          ensures clear communication. These tech-centric amenities reflect
          IMT's commitment to fostering an advanced learning environment.
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
                <img
                  src={require("../Assets/healthcare (1).png")}
                  alt=""
                />{" "}
                <h6>Medical/Hospita</h6>
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

        <HeadText value={"Ranks and Awards"} />
        <div
          className="row d-flex justify-content-center align-items-center gap-5"
          style={{ flexWrap: "wrap", padding: "2% 2%" }}
        >
          <div className="col-md-5 ranks ">
            <h2 className="pb-4"> Financial Times</h2>
            <p className="p-4">
              92nd in the world in the Financial Times Master in Management 2023
              Rankings.
            </p>
          </div>
          <div className="col-md-5 ranks">
            <h2 className="pb-4"> Business Today</h2>

            <p>
              Ranked 18th in the country and 4th in Karnataka for Law in 2023
            </p>
          </div>
        </div>

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
        <HeadText value={"FAQ's"} />
        <div className="row">
          <div className="col-md-11 m-auto">
            <Accordion defaultActiveKey="">
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  What are the eligibility criteria for admission to IMT
                  Ghaziabad's PGDM program?
                </Accordion.Header>
                <Accordion.Body>
                  Candidates need a bachelor's degree with at least 50% marks
                  from a recognized university and a valid CAT/XAT/GMAT score.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  What kind of placement opportunities does IMT Ghaziabad
                  provide?
                </Accordion.Header>
                <Accordion.Body>
                  IMT Ghaziabad offers diverse placements with an average
                  package of INR 17.35 LPA. Top recruiters include Accenture,
                  Deloitte, Amazon, and Cognizant.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  Does IMT Ghaziabad offer accommodation facilities for
                  students?
                </Accordion.Header>
                <Accordion.Body>
                  Yes, IMT Ghaziabad provides fully residential campus
                  accommodation with amenities like mess facilities, common
                  rooms, and security surveillance.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  What resources are available at the IMT Ghaziabad library?
                </Accordion.Header>
                <Accordion.Body>
                  The library offers access to books, e-journals, and databases
                  such as THOMSON REUTERS-EIKON and EBSCO Academic Collection.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>
                  What sports facilities are available at IMT Ghaziabad?
                </Accordion.Header>
                <Accordion.Body>
                  IMT Ghaziabad offers sports facilities including badminton
                  courts, football grounds, and basketball courts for students
                  to actively participate in sports activities.
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
