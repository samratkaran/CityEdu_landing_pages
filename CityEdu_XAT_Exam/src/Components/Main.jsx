import "./Main.css";
import Form from "./From/Form";
import HeadText from "./HeadText/HeadText";
import { Bounce, Fade } from "react-awesome-reveal";
import { useState } from "react";
import Modal from "./Modal/Modal";

// import CourseCard from "./cards/CourseCard";

const Main = () => {
  const [show, setShow] = useState(false);
  // const [activeSection, setActiveSection] = useState("bachelor"); // Initial active section

  // const handleSectionClick = (section) => {
  //   // setActiveSection(section);
  // };
  return (
    <>
      <Fade cascade damping={0.1}>
        <div className="row main-head-text-of-landing-page">
          <div className="col-md-8 text-white">
            <p className="head-text-of-page"> XAT 2025: Comprehensive Guide to Excel in Your MBA Journey </p>
            
            <p className="span-text-of-page">Why wait? Hurry up and Plan your MBA/PGDM Journey with PlanEdu - Sign Up Now for Personalized Guidance!</p>
            {/* <p className="span-text-of-page-two ">Admission Open 2025-26</p> */}
          </div>

          <div className="col-md-4">
            <Form />
          </div>
        </div>
      </Fade>
      <div className="main-container mb-5">
        {/* <HeadText value={"overview"}></HeadText> */}
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
            The XLRI Jamshedpur administers the XAT (Xavier Aptitude Test) a national-level entrance examination, conducted once a year to gain admission into MBA and PGDM programs at over 160 top B-schools across India. 
            <br /> <br />

The XAT 2025 exam, just 1.5 months away, is a key step in shaping your management career, opening doors to top MBA programs, especially at XLRI Jamshedpur and other institutions accepting XAT scores. Known for its challenging pattern, XAT tests analytical, decision-making, and verbal skills, making it essential for admission to the best management institutes in India. At PlanEdu, we specialize in MBA career advice, assisting students in selecting universities that best suit their interests, objectives, and financial situation. Our advice guarantees a smooth path to success, regardless of your goals i.e. IIMs or other prestigious B-schools.
            </p>
          </div>
        </div>
        <HeadText value={"Important Dates"} />
        <div className="row">
  <div className="col-md-11 m-auto">
    <div className="exam-dates-container">
      <table className="table table-borderless">
        <thead>
          <tr style={{ backgroundColor: "#1E4D92", color: "white" }}>
            <th className="exam-date">Procedure</th>
            <th className="exam-date">Dates</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>XAT 2025 Exam Registration</td>
            <td>July 15 to November 30, 2024 (Ongoing)</td>
          </tr>
          <tr>
            <td>XAT 2025 Admit Card Download Starts</td>
            <td>December 20, 2024</td>
          </tr>
          <tr>
            <td>XAT 2025 Exam</td>
            <td>January 5, 2025</td>
          </tr>
          <tr>
            <td>The XAT 2025 Response Sheet Release</td>
            <td>January 2025 (Tentative)</td>
          </tr>
          <tr>
            <td>XAT 2025 Result</td>
            <td>January 2025 (Tentative)</td>
          </tr>
          <tr>
            <td>XAT 2025 Cut-Offs Release</td>
            <td>January 2025 (Tentative)</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>

        <HeadText value={"XAT 2025: Syllabus and Exam Pattern"} />
        <div className="row ">
          <div class="col-md-11 m-auto">
          <div className="xat-syllabus-container">
      {/* Decision Making Section */}
      <div className="syllabus-section">
        <h4>Decision Making</h4>
        <p>
          Assumptions, Grouping, Conditioning, Complex Arrangement, Caselets,
          Premises, Data Arrangement, Conclusions, etc.
        </p>
      </div>

      {/* Verbal and Logical Ability Section */}
      <div className="syllabus-section">
        <h4>Verbal and Logical Ability</h4>
        <p>
          Grammar, Vocabulary, Reading Comprehension, Critical Reasoning,
          Parajumble, Analogy, Fill in the Blanks, etc.
        </p>
      </div>

      {/* Quantitative Ability & Data Interpretation Section */}
      <div className="syllabus-section">
        <h4>Quantitative Ability & Interpretation</h4>
        <p>
          Percentage, Geometry, Algebra, Arithmetic, Tables, Data Interpretation,
          Pie Charts, Bar Diagrams, Surds and Indices, Mensuration, etc.
        </p>
      </div>

      {/* General Knowledge Section */}
      <div className="syllabus-section">
        <h4>General Knowledge</h4>
        <p>
          Sports, Science, Static GK, Government, Economy, Business, Politics,
          Award, Prizes and the World, Constitution of India, etc.
        </p>
      </div>
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
