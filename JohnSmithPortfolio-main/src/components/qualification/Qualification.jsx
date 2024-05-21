import { useState } from "react";
import "./qualification.css";
useState;
const Qualification = () => {
  const [activeModal, setAciveModal] = useState(1);
  const toggleTap = (index) => {
    setAciveModal(index);
  };
  return (
    <section className="qualification section" id="qualification">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My Personal journey</span>

      <div className="qualification__container container">
        <div className="qualification__taps">
          <div
            onClick={() => {
              toggleTap(1);
            }}
            className={
              activeModal === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>{" "}
            Education
          </div>
          <div
            onClick={() => {
              toggleTap(2);
            }}
            className={
              activeModal === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>{" "}
            Experience
          </div>
        </div>

        <div className="qualification__section">
          <div
            className={
              activeModal === 1
                ? "qualification__content qualifcation__content-active"
                : "qualification__content "
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Bachelor's in Information Technology
                </h3>
                <span className="qualification__subtitle">
                  {" "}
                  <span style={{ fontWeight: "bold" }}>ANITS</span> College of
                  Engg
                  <br /> Aggregate of{" "}
                  <span style={{ fontWeight: "bold" }}>8.8 CGPA</span>
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i> 2021 - 2024
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Diploma</h3>
                <span className="qualification__subtitle">
                  {" "}
                  Government Polytechnic Vizag
                  <br />
                  Agrregate of{" "}
                  <span style={{ fontWeight: "bold" }}>88.28%</span>
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i> 2018 - 2021
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Class X</h3>
                <span className="qualification__subtitle">
                  {" "}
                  Vidhyadhari Public School Anakapalli <br /> Agrregate of{" "}
                  <span style={{ fontWeight: "bold" }}>9.7 GPA</span>
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i> 2018
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>

          <div
            className={
              activeModal === 2
                ? "qualification__content qualifcation__content-active"
                : "qualification__content "
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">SWE Intern</h3>
                <span className="qualification__subtitle">
                  Syren Cloud - India
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i> Feb 2024 - present{" "}
                  <br /> On-site
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">
                  Salesforce Virtual Internship
                </h3>
                <span className="qualification__subtitle"> Salesforce</span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i> March 2023- Oct 2023
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">UI/UX Trainee</h3>
                <span className="qualification__subtitle">
                  {" "}
                  Aspire Info Labs
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i> May 2023 - Aug 2023
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
