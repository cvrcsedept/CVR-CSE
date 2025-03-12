import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const TimeTable = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const timeTableSections = [
    {
      title: "B.Tech CSE",
      semesters: [
        "I Year II Semester - 2023-24",
        "II Year II Semester - 2023-24",
        "III Year I Semester - 2023-24",
        "IV Year I Semester - 2023-24",
      ],
    },
    {
      title: "M.Tech AI",
      semesters: [
        "I Year I Semester - 2023-24",
        "II Year II Semester - 2023-24",
      ],
    },
  ];

  return (
    <div className="bg-light min-vh-100">
      <main className="container py-5">
        <div className="row">
          <div className="col-12">
            <h1 className="display-4 text-center text-primary mb-5">
              Time Tables
            </h1>
          </div>
        </div>

        {timeTableSections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="mb-5">
            <div className="row mb-4">
              <div className="col-12">
                <h2 className="text-center text-secondary">
                  {section.title} Time Tables
                </h2>
              </div>
            </div>

            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
              {section.semesters.map((semester, semesterIndex) => (
                <div key={semesterIndex} className="col">
                  <div className="card h-100 shadow-sm border-0 transform-on-hover">
                    <div className="card-body text-center">
                      <div className="mb-3">
                        <img
                          src="/images/CVR Logo.png"
                          alt="CVR Logo"
                          className="img-fluid mb-3"
                          style={{ maxHeight: "100px", maxWidth: "150px" }}
                        />
                        <h5 className="card-title text-dark mb-2">
                          {section.title}
                        </h5>
                      </div>

                      <div className="d-grid">
                        <a
                          href="#"
                          className="btn btn-primary"
                          data-bs-toggle="modal"
                          data-bs-target={`#modal-${sectionIndex}-${semesterIndex}`}
                        >
                          {semester}
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Modal for Time Table Details */}
                  <div
                    className="modal fade"
                    id={`modal-${sectionIndex}-${semesterIndex}`}
                    tabIndex="-1"
                  >
                    <div className="modal-dialog modal-dialog-centered modal-lg">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title">
                            {section.title} - {semester}
                          </h5>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                          ></button>
                        </div>
                        <div className="modal-body text-center">
                          <p>Time Table details will be uploaded soon.</p>
                          <div className="alert alert-info" role="alert">
                            Please check back later or contact the academic
                            office for the most up-to-date information.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};

export default TimeTable;
