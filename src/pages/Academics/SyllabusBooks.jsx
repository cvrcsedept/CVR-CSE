import React, { useEffect, useState } from "react";
import "../../styles.css";
import BackToTopButton from "../../components/BackToTopButton";

// Add custom CSS for animations and styling
const customStyles = `
  .page-header {
    background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%);
  padding: 6rem 0;
  color: white;
  position: relative;
  overflow: hidden;
  }
  
  .page-header::before {
   content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  }
  
  .header-title {
    color: #fff;
    position: relative;
    animation: fadeIn 1s ease-out;
  }
  
  .program-section {
    padding: 2rem;
    margin-bottom: 2rem;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
    transition: all 0.3s ease;
    background-color: #fff;
  }
  
  .program-section:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  }
  
  .section-title {
    position: relative;
    padding-bottom: 1rem;
    margin-bottom: 2rem;
  }
  
  .section-title::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 60px;
    height: 4px;
    background-color: #0d6efd;
    border-radius: 2px;
    transition: width 0.3s ease;
  }
  
  .program-section:hover .section-title::after {
    width: 120px;
  }
  
  .calendar-card {
    transition: all 0.3s ease;
    border-radius: 10px;
    overflow: hidden;
    border: none;
    height: 100%;
  }
  
  .calendar-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  }
  
  .calendar-card .card-body {
    padding: 1.5rem;
    background: #fff;
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  
  .card-logo {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
    transition: transform 0.3s ease;
  }
  
  .calendar-card:hover .card-logo {
    transform: scale(1.1);
  }
  
  .card-title {
    font-weight: 600;
    margin-top: 1rem;
    transition: color 0.3s ease;
  }
  
  .calendar-card:hover .card-title {
    color: #0d6efd;
  }
  
  .calendar-btn {
    margin-top: auto;
    border-radius: 30px;
    padding: 0.6rem 1.5rem;
    font-weight: 500;
    transition: all 0.3s ease;
    border: 2px solid #0d6efd;
  }
  
  .calendar-btn:hover {
    transform: scale(1.05);
    box-shadow: 0 5px 15px rgba(13, 110, 253, 0.3);
  }
  
  .modal-content {
    border: none;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
  }
  
  .modal-header {
    background-color: #0d6efd;
    color: white;
    border-bottom: none;
  }
  
  .modal-footer {
    border-top: none;
    padding: 1rem 1.5rem;
  }
  
  .modal-btn {
    border-radius: 30px;
    padding: 0.5rem 1.5rem;
    transition: all 0.3s ease;
  }
  
  .modal-btn:hover {
    transform: translateY(-2px);
  }
  
  /* Animation keyframes */
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .fade-in {
    opacity: 0;
    animation: fadeIn 0.6s ease-out forwards;
  }
  
  .delay-1 {
    animation-delay: 0.2s;
  }
  
  .delay-2 {
    animation-delay: 0.4s;
  }
  
  .delay-3 {
    animation-delay: 0.6s;
  }
  
  .delay-4 {
    animation-delay: 0.8s;
  }
`;

const SyllabusBooks = () => {
  useEffect(() => {
    window.scrollTo(0, 0);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".calendar-card").forEach((card) => {
      observer.observe(card);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const [selectedPdf, setSelectedPdf] = useState("");
  const [selectedTitle, setSelectedTitle] = useState("");

  const btechPrograms = [
    {
      title: "B.Tech",
      year: "I Year - 2024-25 - R22",
      url: "/Data/Syllabus-Copy/I Btech.pdf",
      icon: "fa-solid fa-user-graduate",
      color: "#4e73df",
    },
    {
      title: "B.Tech",
      year: "II Year - 2024-25 - R22",
      url: "/Data/Syllabus-Copy/II Btech.pdf",
      icon: "fa-solid fa-laptop-code",
      color: "#1cc88a",
    },
    {
      title: "B.Tech",
      year: "III Year - 2024-25 - R22",
      url: "/Data/Syllabus-Copy/III Btech.pdf",
      icon: "fa-solid fa-flask",
      color: "#f6c23e",
    },
    {
      title: "B.Tech",
      year: "IV Year - 2024-25 - R18",
      url: "/Data/Syllabus-Copy/r18 4 Btech.pdf",
      icon: "fa-solid fa-graduation-cap",
      color: "#e74a3b",
    },
  ];

  const mtechPrograms = [
    {
      title: "M.Tech",
      year: "I Year - 2024-25 - R22",
      url: "/Data/Syllabus-Copy/m-tech-1-1.pdf",
      icon: "fa-solid fa-microchip",
      color: "#36b9cc",
    },
    {
      title: "M.Tech",
      year: "II Year - 2024-25 - R22",
      url: "/Data/Syllabus-Copy/mtech-2-2.pdf",
      icon: "fa-solid fa-microscope",
      color: "#6f42c1",
    },
  ];

  const handleOpenPdf = (pdfUrl, title, year) => {
    setSelectedPdf(pdfUrl);
    setSelectedTitle(`${title} - ${year}`);

    const pdfModal = new window.bootstrap.Modal(
      document.getElementById("pdfModal")
    );
    pdfModal.show();
  };

  useEffect(() => {
    const modalElement = document.getElementById("pdfModal");
    if (modalElement) {
      const modal = new window.bootstrap.Modal(modalElement);

      modalElement.addEventListener("hidden.bs.modal", () => {
        setSelectedPdf("");
        setSelectedTitle("");
      });
    }
  }, []);

  const renderProgramCards = (programs, delayOffset = 0) => {
    return programs.map((program, index) => (
      <div key={index} className="col">
        <div
          className={`calendar-card card shadow delay-${
            index + 1 + delayOffset
          }`}
        >
          <div className="card-body">
            <h5 className="card-title text-center">{program.title}</h5>
            <div className="text-center mt-2 mb-4">
              <i
                className={`${program.icon} fa-2x`}
                style={{ color: program.color }}
              ></i>
            </div>
            <button
              className="btn btn-primary calendar-btn w-100"
              onClick={() =>
                handleOpenPdf(program.url, program.title, program.year)
              }
            >
              {program.year}
            </button>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div className="bg-light">
      <style>{customStyles}</style>
      <div className="page-header">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 text-center">
              <h1 className="header-title display-4 fw-bold">Syllabus Books</h1>
              <p className="text-white mt-3">
                Course schedules, exam dates, and important academic events for
                2024-25
              </p>
            </div>
          </div>
        </div>
      </div>

      <main className="container py-4">
        <section className="program-section fade-in">
          <h2 className="section-title text-primary">B.Tech Programs</h2>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4">
            {renderProgramCards(btechPrograms)}
          </div>
        </section>

        <section className="program-section fade-in delay-2">
          <h2 className="section-title text-primary">M.Tech Programs</h2>
          <div className="row row-cols-1 row-cols-sm-2 g-4">
            {renderProgramCards(mtechPrograms, 4)}
          </div>
        </section>
      </main>

      {/* PDF Modal */}
      <div
        className="modal fade"
        id="pdfModal"
        tabIndex="-1"
        aria-labelledby="pdfModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="pdfModalLabel">
                {selectedTitle}
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body p-0">
              <div style={{ height: "75vh" }}>
                {selectedPdf && (
                  <iframe
                    src={selectedPdf}
                    title="Academic Calendar PDF"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    scrolling="auto"
                  ></iframe>
                )}
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary modal-btn"
                data-bs-dismiss="modal"
              >
                <i className="fas fa-times me-2"></i>Close
              </button>
              <a
                href={selectedPdf}
                className="btn btn-primary modal-btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-external-link-alt me-2"></i>Open in New Tab
              </a>
              <a
                href={selectedPdf}
                className="btn btn-success modal-btn"
                download
              >
                <i className="fas fa-download me-2"></i>Download
              </a>
            </div>
          </div>
        </div>
      </div>

      <BackToTopButton />
    </div>
  );
};

export default SyllabusBooks;
