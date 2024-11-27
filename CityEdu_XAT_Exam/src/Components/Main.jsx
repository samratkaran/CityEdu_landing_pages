import "./Main.css";
import Form from "./From/Form";
import HeadText from "./HeadText/HeadText";
import { Bounce, Fade } from "react-awesome-reveal";
import { useState } from "react";
import Modal from "./Modal/Modal";
import CourseCard from "./cards/CourseCard";
import delhi from "../Assets/New Delhi Institute of Management..jpg"
import bits from "../Assets/BITS Pilani..jpg"
import woxsen from "../Assets/Woxsen University..jpg"
import xlri from "../Assets/XLRI Xavier School of Management..jpg"
import joseph from "../Assets/St. Joseph's Institute of Management..jpg"
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
      <div className="row">
      <div className="col-md-11 m-auto">
      <div className="exam-dates-container">
      
      <table className="table table-borderless">
        <thead>
          <tr  style={{ backgroundColor: "#1E4D92", color: "white" }}>
            <th className="exam-date">Section</th>
            <th className="exam-date">Syllabus</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Decision Making</td>
            <td>
              Assumptions, Grouping, Conditioning, Complex Arrangement,
              Caselets, Premises, Data Arrangement, Conclusions, etc.
            </td>
          </tr>
          <tr>
            <td>Verbal and Logical Ability</td>
            <td>
              Grammar, Vocabulary, Reading Comprehension, Critical Reasoning,
              Parajumble, Analogy, Fill in the Blanks, etc.
            </td>
          </tr>
          <tr>
            <td>Quantitative Ability & Data Interpretation</td>
            <td>
              Percentage, Geometry, Algebra, Arithmetic, Tables, Data
              Interpretation, Pie Charts, Bar Diagrams, Surds and Indices,
              Mensuration, etc.
            </td>
          </tr>
          <tr>
            <td>General Knowledge</td>
            <td>
              Sports, Science, Static GK, Government, Economy, Business,
              Politics, Award, Prizes and the World, Constitution of India, etc.
            </td>
          </tr>
        </tbody>
      </table>
    </div>
      </div>
      </div>
      <HeadText value={"XAT Exam Pattern 2025"} />
        <div className="row">
          <div className="col-md-11 m-auto">
          <div className="xat-sections-container">
          <p>The format of the XAT exam changed. There won't be an essay writing section this year, and there will only be 20 questions in the GK section. The exam will last for 180 minutes. The exam schedule was released concurrently with the announcement of the modifications. The sectional information according to the XAT exam pattern 2025 is as follows:</p>
      <h2>XAT 2025 Exam Pattern</h2>
      <table className="table table-bordered">
        <thead>
          <tr style={{ backgroundColor: "#1E4D92", color: "white" }}>
            <th className="exam-date">Section</th>
            <th className="exam-date">Number of Questions</th>
            <th className="exam-date">Total Marks</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Decision Making</td>
            <td>21</td>
            <td>21</td>
          </tr>
          <tr>
            <td>Verbal and Logical Ability</td>
            <td>26</td>
            <td>26</td>
          </tr>
          <tr>
            <td>Quantitative Ability & Data Interpretation</td>
            <td>28</td>
            <td>28</td>
          </tr>
          <tr>
            <td>General Knowledge</td>
            <td>20</td>
            <td>20</td>
          </tr>
          <tr>
            <td><strong>Total</strong></td>
            <td><strong>95</strong></td>
            <td><strong>95</strong></td>
          </tr>
        </tbody>
      </table>
    </div>

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

        <HeadText value="Top Colleges Accepting XAT Scores" />
        <div className="row">
        <p className="col-md-11 m-auto mb-3">One of the most widely recognized test results in India is the XAT. Members of the Xavier Association of Management Institutes (XAMI) and more than 1,000 other MBA schools in India accept XAT scores in addition to XLRI, Jamshedpur. These colleges also use GD/WAT and PI in their admissions procedure. Given below are a few popular B-schools accepting XAT scores for admission:</p>
          <div className="course-card">
            <CourseCard CourseName={"MBA PGDM"} imageUrl={xlri}/>
            <CourseCard/>
            <CourseCard/>
            <CourseCard/>
          </div>
        </div>

        <HeadText value={"Campus Life"} />
        <Fade delay={500} direction="left">
          <div className="row main-campus-life">
            
          </div>
        </Fade>
        <HeadText value="Approvals and Accreditations" />
        <Fade delay={250}>
          <div className="row main-approval-and-acredation">
            <div className="col-md-12 approval-and-acredation">

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
