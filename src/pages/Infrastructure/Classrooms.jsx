import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Classrooms = () => {
  const [activeSection, setActiveSection] = useState(null);

  const classroomSections = [
    {
      title: "Architectural Precision",
      description:
        "Meticulously designed learning spaces that blend functionality with aesthetic sophistication.",
      details: [
        "Ergonomic Spatial Configuration",
        "Optimized Acoustic Engineering",
        "Natural Light Optimization",
        "Adaptive Learning Environments",
      ],
      icon: "fa-solid fa-building",
      background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
    },
    {
      title: "Technological Integration",
      description:
        "Advanced technological infrastructure supporting contemporary educational methodologies.",
      details: [
        "State-of-the-Art Projection Systems",
        "High-Bandwidth Network Connectivity",
        "Interactive Digital Interfaces",
        "Collaborative Learning Platforms",
      ],
      icon: "fa-solid fa-display",
      background: "linear-gradient(135deg, #e0f2f1 0%, #b2dfdb 100%)",
    },
    {
      title: "Collaborative Ecosystem",
      description:
        "Purposefully crafted spaces that foster intellectual discourse and collaborative learning.",
      details: [
        "Flexible Configuration Zones",
        "Multi-Modal Learning Spaces",
        "Group Discussion Areas",
        "Innovation Collaboration Hubs",
      ],
      icon: "fa-solid fa-people-group",
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
              Intelligent Learning Environments
            </h1>
            <p className="lead text-muted mb-4">
              Architecturally designed spaces that transcend traditional
              educational boundaries, creating an ecosystem of intellectual
              growth and technological innovation.
            </p>
            <div className="d-flex align-items-center">
              <div
                className="bg-dark text-white rounded-circle d-flex align-items-center justify-content-center me-3"
                style={{ width: "60px", height: "60px" }}
              >
                <i className="fa-solid fa-graduation-cap"></i>
              </div>
              <p className="mb-0 text-muted">
                Engineered to cultivate critical thinking, creativity, and
                professional excellence.
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="position-relative classroom-image-wrapper">
              <img
                src="/images/classroom.jpg"
                alt="Professional Classroom"
                className="img-fluid rounded-4 shadow-lg classroom-image"
              />
              <div className="image-overlay"></div>
            </div>
          </div>
        </div>

        {/* Classroom Features Grid */}
        <div className="row g-4">
          {classroomSections.map((section, index) => (
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

export default Classrooms;
