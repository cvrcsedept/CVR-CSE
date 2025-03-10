import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const SeminarHall = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-light min-vh-100 d-flex flex-column">
      <div className="container-fluid p-0">
        {/* Hero Section */}
        <div className="position-relative">
          <div className="overflow-hidden">
            <img
              src="/images/seminar.png"
              className="img-fluid w-100"
              style={{
                height: "60vh",
                objectFit: "cover",
                filter: "brightness(0.9)",
              }}
              alt="Seminar Hall"
            />
            <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center">
              <div className="text-center">
                <h1 className="display-4 text-white fw-bold mb-3 shadow-sm">
                  College Seminar Hall
                </h1>
                <p className="lead text-white shadow-sm px-3">
                  A Hub of Knowledge, Innovation, and Collaboration
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="container py-5">
          <div className="row g-4">
            {/* Features Column */}
            <div className="col-md-7">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <h2 className="h3 text-primary mb-4">
                    Facilities & Features
                  </h2>
                  <p className="text-muted mb-4">
                    The college has an air-conditioned seminar hall which is
                    frequently used by faculty and students. Designed to
                    facilitate learning and professional development.
                  </p>

                  <div className="row g-4">
                    {[
                      {
                        icon: "bi-display",
                        color: "primary",
                        title: "LCD Projectors",
                        desc: "Advanced multimedia equipment",
                      },
                      {
                        icon: "bi-people",
                        color: "success",
                        title: "Capacity",
                        desc: "Seats 105 participants",
                      },
                      {
                        icon: "bi-snow2",
                        color: "warning",
                        title: "Air Conditioned",
                        desc: "Comfortable environment",
                      },
                      {
                        icon: "bi-grid-3x3-gap",
                        color: "danger",
                        title: "Multimedia Kits",
                        desc: "Complete presentation tools",
                      },
                    ].map((feature, index) => (
                      <div key={index} className="col-md-6">
                        <div className="d-flex align-items-center">
                          <div
                            className={`bg-${feature.color}-soft p-3 rounded-circle me-3`}
                          >
                            <i
                              className={`bi ${feature.icon} text-${feature.color} fs-4`}
                            ></i>
                          </div>
                          <div>
                            <h3 className="h6 mb-1">{feature.title}</h3>
                            <p className="small text-muted mb-0">
                              {feature.desc}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Event Versatility Column */}
            <div className="col-md-5">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body p-4">
                  <h3 className="h4 text-primary mb-3">Event Versatility</h3>
                  <div className="d-flex flex-wrap gap-2 mb-4">
                    {[
                      "Lectures",
                      "Workshops",
                      "Recruitment Programs",
                      "Academic Conferences",
                      "Guest Talks",
                    ].map((event, index) => (
                      <span
                        key={index}
                        className={`badge bg-${
                          ["primary", "success", "warning", "info", "danger"][
                            index % 5
                          ]
                        }-soft text-${
                          ["primary", "success", "warning", "info", "danger"][
                            index % 5
                          ]
                        }`}
                      >
                        {event}
                      </span>
                    ))}
                  </div>

                  <blockquote className="blockquote bg-light p-3 rounded">
                    <p className="mb-0 fst-italic text-muted">
                      "A space where ideas are shared, knowledge is expanded,
                      and futures are shaped."
                    </p>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeminarHall;
