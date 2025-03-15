import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import BackToTopButton from "../../components/BackToTopButton";

const TimeTable = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    document.querySelectorAll(".timeline-item").forEach((item) => {
      observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);

  const [activeSection, setActiveSection] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);

  const timeTableSections = [
    {
      title: "B.Tech CSE",
      icon: "💻",
      color: "primary",
      gradient: "linear-gradient(135deg, #0d6efd, #0099ff)",
      semesters: [
        "I Year I Semester - 2023-24",
        "I Year II Semester - 2023-24",
        "II Year I Semester - 2023-24",
        "II Year II Semester - 2023-24",
        "III Year I Semester - 2023-24",
        "III Year II Semester - 2023-24",
        "IV Year I Semester - 2023-24",
        "IV Year II Semester - 2023-24",
      ],
    },
    {
      title: "M.Tech AI",
      icon: "🤖",
      color: "success",
      gradient: "linear-gradient(135deg, #198754, #00cc88)",
      semesters: [
        "I Year I Semester - 2023-24",
        "I Year II Semester - 2023-24",
        "II Year I Semester - 2023-24",
        "II Year II Semester - 2023-24",
      ],
    },
  ];

  const handleCardHover = (index) => {
    setHoveredCard(index);
  };

  const handleCardLeave = () => {
    setHoveredCard(null);
  };

  return (
    <div className="timetable-page">
      <div className="background-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
        <div className="shape shape-4"></div>
      </div>

      <main className="container py-5 position-relative">
        <div className="row mb-5">
          <div className="col-12">
            <h1 className="display-4 text-center mb-3 title-animated">
              <span className="text-primary">Time</span>{" "}
              <span className="text-secondary">Tables</span>
            </h1>
            <p className="text-center text-muted lead fade-in-up">
              Select your program to view available timetables
            </p>
          </div>
        </div>

        <div className="row mb-5 justify-content-center">
          <div className="col-md-8">
            <div className="d-flex justify-content-around program-selector">
              {timeTableSections.map((section, index) => (
                <button
                  key={index}
                  className={`btn btn-lg ${
                    activeSection === index
                      ? "btn-active"
                      : "btn-outline-secondary"
                  } px-4 py-3 rounded-pill program-btn`}
                  onClick={() => setActiveSection(index)}
                  style={{
                    background: activeSection === index ? section.gradient : "",
                    boxShadow:
                      activeSection === index
                        ? "0 10px 20px rgba(0,0,0,0.15)"
                        : "",
                  }}
                >
                  <span className="me-2 fs-4">{section.icon}</span>
                  {section.title}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-md-10">
            <div className="position-relative timeline-container">
              <div className="timeline-line">
                <div
                  className="timeline-progress"
                  style={{
                    height: `${
                      25 * timeTableSections[activeSection].semesters.length
                    }%`,
                    backgroundColor:
                      activeSection === 0 ? "#0d6efd" : "#198754",
                  }}
                ></div>
              </div>

              {timeTableSections[activeSection].semesters.map(
                (semester, index) => (
                  <div
                    key={index}
                    className={`timeline-item ${
                      index % 2 === 0 ? "left" : "right"
                    }`}
                    onMouseEnter={() => handleCardHover(index)}
                    onMouseLeave={handleCardLeave}
                  >
                    <div
                      className="timeline-dot"
                      style={{
                        backgroundColor:
                          hoveredCard === index
                            ? activeSection === 0
                              ? "#0d6efd"
                              : "#198754"
                            : "#6c757d",
                      }}
                    ></div>

                    <div
                      className={`card shadow border-${timeTableSections[activeSection].color} mb-4 timeline-card`}
                      style={{
                        transform:
                          hoveredCard === index
                            ? "translateY(-8px) scale(1.02)"
                            : "",
                      }}
                    >
                      <div
                        className="card-header text-white"
                        style={{
                          background: timeTableSections[activeSection].gradient,
                        }}
                      >
                        <div className="d-flex align-items-center">
                          <h5 className="mb-0 ms-2">{semester}</h5>
                        </div>
                      </div>
                      <div className="card-body">
                        <div className="d-flex align-items-center justify-content-between">
                          <div className="logo-container">
                            <img
                              src="/images/CVR Logo.png"
                              alt="CVR Logo"
                              className="img-fluid logo-spin"
                              style={{ maxHeight: "60px" }}
                            />
                          </div>
                          <button
                            className="btn rounded-pill view-btn"
                            data-bs-toggle="modal"
                            data-bs-target={`#modal-${activeSection}-${index}`}
                            style={{
                              background:
                                timeTableSections[activeSection].gradient,
                              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                            }}
                          >
                            <span className="btn-text">View Timetable</span>
                            <span className="btn-icon">📅</span>
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Modal */}
                    <div
                      className="modal fade"
                      id={`modal-${activeSection}-${index}`}
                      tabIndex="-1"
                    >
                      <div className="modal-dialog modal-dialog-centered modal-lg">
                        <div className="modal-content modal-animated">
                          <div
                            className="modal-header text-white"
                            style={{
                              background:
                                timeTableSections[activeSection].gradient,
                            }}
                          >
                            <h5 className="modal-title">
                              {timeTableSections[activeSection].title} -{" "}
                              {semester}
                            </h5>
                            <button
                              type="button"
                              className="btn-close btn-close-white"
                              data-bs-dismiss="modal"
                            ></button>
                          </div>
                          <div className="modal-body text-center">
                            <div className="loading-animation">
                              <div className="spinner"></div>
                            </div>
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
                )
              )}
            </div>
          </div>
        </div>
      </main>

      <style jsx>{`
        .timetable-page {
          background: linear-gradient(135deg, #f8f9fa, #e9ecef);
          min-height: 100vh;
          overflow-x: hidden;
          position: relative;
        }
        
        .background-shapes {
          position: absolute;
          width: 100%;
          height: 100%;
          overflow: hidden;
          z-index: 0;
        }
        
        .shape {
          position: absolute;
          border-radius: 50%;
          opacity: 0.05;
        }
        
        .shape-1 {
          top: -100px;
          left: -100px;
          width: 400px;
          height: 400px;
          background: linear-gradient(#0d6efd, #198754);
          animation: float 20s infinite alternate;
        }
        
        .shape-2 {
          top: 50%;
          right: -200px;
          width: 500px;
          height: 500px;
          background: linear-gradient(#6f42c1, #0dcaf0);
          animation: float 25s infinite alternate-reverse;
        }
        
        .shape-3 {
          bottom: -150px;
          left: 20%;
          width: 300px;
          height: 300px;
          background: linear-gradient(#fd7e14, #dc3545);
          animation: float 18s infinite alternate;
        }
        
        .shape-4 {
          top: 20%;
          left: 60%;
          width: 200px;
          height: 200px;
          background: linear-gradient(#20c997, #0dcaf0);
          animation: float 15s infinite alternate-reverse;
        }
        
        @keyframes float {
          0% { transform: translate(0, 0) rotate(0deg); }
          100% { transform: translate(50px, 50px) rotate(45deg); }
        }
        
        .title-animated {
          position: relative;
          animation: fadeIn 1s ease-out;
        }
        
        .title-animated::after {
          content: '';
          position: absolute;
          width: 100px;
          height: 4px;
          background: linear-gradient(90deg, #0d6efd, #198754);
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
          border-radius: 2px;
        }
        
        .fade-in-up {
          animation: fadeInUp 1s ease-out;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes fadeInUp {
          from { 
            opacity: 0;
            transform: translateY(20px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .program-selector {
          position: relative;
          z-index: 1;
        }
        
        .program-btn {
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        
        .program-btn:hover {
          transform: translateY(-3px);
        }
        
        .btn-active {
          color: white;
        }
        
        .timeline-container {
          position: relative;
          padding: 20px 0;
          margin-top: 50px;
        }

        .timeline-line {
          position: absolute;
          width: 4px;
          background-color: #ddd;
          top: 0;
          bottom: 0;
          left: 50%;
          margin-left: -2px;
          border-radius: 2px;
          overflow: hidden;
        }
        
        .timeline-progress {
          position: absolute;
          width: 100%;
          top: 0;
          left: 0;
          transition: height 0.5s ease-in-out, background-color 0.5s ease;
        }

        .timeline-item {
          padding: 10px 40px;
          position: relative;
          width: 50%;
          opacity: 0;
          transform: translateX(-50px);
          transition: all 0.5s ease;
        }
        
        .timeline-item.animate-in {
          opacity: 1;
          transform: translateX(0);
        }

        .timeline-item.left {
          left: 0;
        }

        .timeline-item.right {
          left: 50%;
          transform: translateX(50px);
        }
        
        .timeline-item.right.animate-in {
          transform: translateX(0);
        }
        
        .timeline-dot {
          position: absolute;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          top: 30px;
          background-color: #6c757d;
          z-index: 2;
          transition: all 0.3s ease;
        }
        
        .timeline-item.left .timeline-dot {
          right: -10px;
        }
        
        .timeline-item.right .timeline-dot {
          left: -10px;
        }

        .timeline-card {
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
          border-width: 0;
          border-radius: 10px;
        }
        
        .card-header {
          border-top-left-radius: 10px !important;
          border-top-right-radius: 10px !important;
        }
        
        .logo-container {
          perspective: 800px;
        }
        
        .logo-spin {
          transition: transform 0.5s ease;
        }
        
        .timeline-card:hover .logo-spin {
          transform: rotateY(20deg);
        }
        
        .view-btn {
          color: white;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }
        
        .view-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 6px 15px rgba(0,0,0,0.2) !important;
        }
        
        .btn-icon {
          opacity: 0;
          transform: translateX(-10px);
          transition: all 0.3s ease;
        }
        
        .view-btn:hover .btn-icon {
          opacity: 1;
          transform: translateX(0);
        }
        
        .modal-animated {
          animation: modalFadeIn 0.3s ease-out;
        }
        
        @keyframes modalFadeIn {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .loading-animation {
          margin: 20px auto;
        }
        
        .spinner {
          width: 50px;
          height: 50px;
          border: 4px solid rgba(0, 0, 0, 0.1);
          border-radius:
          border-radius: 50%;
          border-top: 4px solid #0d6efd;
          margin: 0 auto 20px;
          animation: spin 1s linear infinite;
        }
        
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        .alert {
          transition: all 0.3s ease;
          animation: pulse 2s infinite;
        }
        
        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(13, 110, 253, 0.2); }
          70% { box-shadow: 0 0 0 10px rgba(13, 110, 253, 0); }
          100% { box-shadow: 0 0 0 0 rgba(13, 110, 253, 0); }
        }
      `}</style>

      <BackToTopButton />
    </div>
  );
};

export default TimeTable;
