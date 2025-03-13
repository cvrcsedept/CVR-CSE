import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Library = () => {
  const [activeSection, setActiveSection] = useState(null);

  const librarySections = [
    {
      title: "Comprehensive Resources",
      description:
        "A meticulously curated collection of academic and research materials spanning diverse disciplines.",
      details: [
        "Over 20,000 Specialized Volumes",
        "Digital and Physical Resource Integration",
        "Comprehensive Research Archives",
        "Multidisciplinary Reference Collections",
      ],
      icon: "fa-solid fa-book-open",
      background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
    },
    {
      title: "Digital Learning Hub",
      description:
        "Advanced technological infrastructure supporting comprehensive academic research and exploration.",
      details: [
        "High-Speed Digital Databases",
        "Online Research Platforms",
        "E-Journal Subscriptions",
        "Remote Access Capabilities",
      ],
      icon: "fa-solid fa-laptop",
      background: "linear-gradient(135deg, #e0f2f1 0%, #b2dfdb 100%)",
    },
    {
      title: "Collaborative Study Environment",
      description:
        "Thoughtfully designed spaces that foster intellectual discourse and collaborative learning.",
      details: [
        "Group Study Zones",
        "Silent Research Areas",
        "Interactive Learning Spaces",
        "Academic Consultation Zones",
      ],
      icon: "fa-solid fa-people-roof",
      background: "linear-gradient(135deg, #f3e5f5 0%, #e1bee7 100%)",
    },
  ];

  return (
    <div className="bg-light min-vh-100">
      <div className="container py-5">
        {/* Header Section */}
        <div className="row mb-5 align-items-center">
          <div className="col-lg-6">
            <h1 className="display-4 text-dark mb-4 fw-bold">
              Scholarly Resource Center
            </h1>
            <p className="lead text-muted mb-4">
              A sophisticated knowledge ecosystem designed to inspire
              intellectual curiosity, support rigorous research, and provide
              cutting-edge academic resources.
            </p>
            <div className="d-flex align-items-center">
              <div
                className="bg-dark text-white rounded-circle d-flex align-items-center justify-content-center me-3"
                style={{ width: "60px", height: "60px" }}
              >
                <i className="fa-solid fa-landmark"></i>
              </div>
              <p className="mb-0 text-muted">
                Empowering academic excellence through comprehensive knowledge
                resources.
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="position-relative library-image-wrapper">
              <img
                src="/images/library.jpeg"
                alt="Academic Library"
                className="img-fluid rounded-4 shadow-lg library-image"
              />
              <div className="image-overlay"></div>
            </div>
          </div>
        </div>

        {/* Library Features Grid */}
        <div className="row g-4">
          {librarySections.map((section, index) => (
            <div
              key={index}
              className="col-md-4"
              onMouseEnter={() => setActiveSection(index)}
              onMouseLeave={() => setActiveSection(null)}
            >
              <div
                className={`card h-100 border-0 shadow-sm overflow-hidden professional-card ${
                  activeSection === index ? "card-active" : ""
                }`}
                style={{
                  background: section.background,
                  transition: "all 0.3s ease",
                }}
              >
                <div className="card-body">
                  <div className="d-flex align-items-center mb-3">
                    <div
                      className="bg-white rounded-circle d-flex align-items-center justify-content-center me-3"
                      style={{ width: "60px", height: "60px" }}
                    >
                      <i
                        className={`${section.icon} text-dark`}
                        style={{ fontSize: "24px" }}
                      ></i>
                    </div>
                    <h4 className="card-title mb-0 text-dark fw-bold">
                      {section.title}
                    </h4>
                  </div>
                  <p className="text-muted mb-3">{section.description}</p>
                  <ul className="list-unstyled">
                    {section.details.map((detail, detailIndex) => (
                      <li
                        key={detailIndex}
                        className="mb-2 d-flex align-items-center text-dark"
                      >
                        <i className="fa-solid fa-check me-2 text-success"></i>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Library;
