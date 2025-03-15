import React, { useEffect, useState } from "react";
import "../../styles.css";
import BackToTopButton from "../../components/BackToTopButton";

const AcademicCalendar = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [selectedPdf, setSelectedPdf] = useState("");

  const academicPrograms = [
    {
      title: "B.Tech ",
      year: "I Year - 2024-25",
      url: "/Data/academic-calender/1-1.pdf",
    },
    {
      title: "B.Tech ",
      year: "II Year - 2024-25",
      url: "/Data/academic-calender/2-2.pdf",
    },
    {
      title: "B.Tech",
      year: "III Year - 2024-25",
      url: "/Data/academic-calender/3-3.pdf",
    },
    {
      title: "B.Tech ",
      year: "IV Year - 2024-25",
      url: "/Data/academic-calender/4-4.pdf",
    },
    {
      title: "M.Tech ",
      year: "I Year - 2024-25",
      url: "/Data/academic-calender/m-tech-1-1.pdf",
    },
    {
      title: "M.Tech ",
      year: "II Year - 2024-25",
      url: "/Data/academic-calender/mtech-2-2.pdf",
    },
  ];

  const handleOpenPdf = (pdfUrl) => {
    setSelectedPdf(pdfUrl);

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
      });
    }
  }, []);

  return (
    <div className="bg-light">
      <main>
        <section className="py-5">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h1 className="display-4 text-center mb-5 text-primary">
                  Academic Calendar
                </h1>
              </div>
            </div>

            <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4">
              {academicPrograms.map((program, index) => (
                <div key={index} className="col">
                  <div className="card h-100 shadow-sm border-0 text-center ">
                    <div className="card-body d-flex flex-column">
                      <div className="mb-4">
                        <img
                          src="/images/CVR Logo.png"
                          alt="CVR Logo"
                          className="img-fluid mb-3"
                          style={{ maxHeight: "100px", maxWidth: "150px" }}
                        />
                        <h5 className="card-title text-dark mb-2">
                          {program.title}
                        </h5>
                      </div>
                      <button
                        className="btn btn-primary mt-auto stretched-link"
                        onClick={() => handleOpenPdf(program.url)}
                      >
                        {program.year}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <div
        className="modal fade"
        id="pdfModal"
        tabIndex="-1"
        aria-labelledby="pdfModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="pdfModalLabel"></h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body p-0">
              <div style={{ height: "70vh" }}>
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
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <a
                href={selectedPdf}
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Open in New Tab
              </a>
            </div>
          </div>
        </div>
      </div>

      <BackToTopButton />
    </div>
  );
};

export default AcademicCalendar;
