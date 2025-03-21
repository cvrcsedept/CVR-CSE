import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import BackToTopButton from "../../components/BackToTopButton";

const Placements = () => {
  const [selectedDocument, setSelectedDocument] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const extractFileId = (url) => {
    const regex = /\/d\/([^\/]+)/;
    const match = url.match(regex);
    return match ? match[1] : null;
  };

  const documents = [
    {
      id: 1,
      title: "Placements - 2024",
      url: "https://drive.google.com/file/d/16fGjog_JFxYbu5n43rjadhxwiryIxePE/view",
      img: "/images/placements 2024.png",
    },
    {
      id: 2,
      title: "Placements - 2023",
      url: "https://drive.google.com/file/d/1KRoPGYfE7PqcXbdTqCThsaBY1aO4JapZ/view",
      img: "/images/placements 2023.png",
    },
    {
      id: 3,
      title: "Placements - 2022",
      url: "https://drive.google.com/file/d/1kq8hcwzzTy3NeiLojdjzVLn6up62YW9r/view",
      img: "/images/placements 2022.png",
    },
  ].map((doc) => {
    const displayName = doc.name || doc.title.split(" - ")[0];
    const description = doc.description || `Detailed ${displayName.toLowerCase()} documentation.`;
    const icon = doc.icon || "bi-file-earmark-pdf";
    const color = doc.color || ["primary", "success", "danger"][doc.id % 3];
    const fileId = extractFileId(doc.url);
    
    return {
      ...doc,
      name: displayName,
      description,
      icon,
      color,
      previewImage: doc.img,
      fileId: fileId
    };
  });

  const handleDocumentClick = (document) => {
    setSelectedDocument(document);
  };

  const getDirectDownloadLink = (fileId) => {
    return `https://drive.google.com/uc?export=download&id=${fileId}`;
  };

  const getEmbedPreviewLink = (fileId) => {
    return `https://drive.google.com/file/d/${fileId}/preview`;
  };

  return (
    <div className="bg-light">
      <div className="page-header position-relative">
        <div className="container position-relative">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <h1 className="display-4 fw-bold mb-2 text-white">
                Placements
              </h1>
              <p className="mx-3 col-log-6">
              Empowering Careers – Unlock Opportunities & Success!
              </p>
            </div>
            <div className="col-lg-4 text-end d-none d-lg-block">
              <i
                className="bi bi-file-earmark-pdf"
                style={{ fontSize: "10rem", opacity: 0.1, color: "white" }}
              ></i>
            </div>
          </div>
        </div>
      </div>
      <div className="container py-4">
        <div className="row g-4">
          {documents.map((doc, index) => (
            <div key={index} className="col-md-6 col-lg-4">
              <div
                className="card border-0 shadow-lg hover-lift cursor-pointer position-relative overflow-hidden"
                onClick={() => handleDocumentClick(doc)}
                style={{
                  transition: "all 0.3s ease",
                  transform: "scale(1)",
                  perspective: "1000px",
                }}
              >
                <div className="position-relative">
                  <div className="pdf-preview" style={{ height: "300px" }}>
                    <img
                      src={doc.previewImage}
                      alt={doc.title}
                      className="w-100 h-100 object-fit-cover"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "/images/default-pdf.jpg";
                      }}
                    />
                  </div>
                </div>
                <div className="card-body">
                  <div className="d-flex align-items-center mb-3">
                    <div className={`icon-circle bg-${doc.color}-soft me-3`}>
                      <i
                        className={`bi ${doc.icon} text-${doc.color} fs-4`}
                      ></i>
                    </div>
                    <h3 className="h5 mb-0 text-muted">{doc.title}</h3>
                  </div>
                  <p className="text-muted">{doc.description}</p>
                  <div className="d-flex justify-content-end mt-3">
                    <a
                      href={doc.fileId ? getDirectDownloadLink(doc.fileId) : doc.url}
                      className="btn btn-sm btn-outline-primary"
                      onClick={(e) => e.stopPropagation()}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="bi bi-download me-2"></i>Download
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedDocument && (
        <div
          className="modal fade show d-block"
          tabIndex="-1"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content shadow-lg">
              <div className="modal-header border-0 pb-0">
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setSelectedDocument(null)}
                ></button>
              </div>
              <div className="modal-body">
                <div className="row">
                  <div className="col-md-12 mb-4">
                    <div className="pdf-embed-container">
                      {selectedDocument.fileId ? (
                        <iframe
                          src={getEmbedPreviewLink(selectedDocument.fileId)}
                          width="100%"
                          height="400"
                          className="border-0 rounded"
                          title={selectedDocument.title}
                          allow="autoplay"
                          allowFullScreen={true}
                        ></iframe>
                      ) : (
                        <div className="alert alert-warning">
                          Could not extract file ID from URL. Please try opening the file directly:
                          <a href={selectedDocument.url} target="_blank" rel="noopener noreferrer" className="d-block mt-2">
                            Open file directly
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <div>
                        <span className="badge bg-primary mb-2">
                          PDF Document
                        </span>
                        <h4 className="mb-0">{selectedDocument.title}</h4>
                      </div>
                      <a
                        href={selectedDocument.fileId ? getDirectDownloadLink(selectedDocument.fileId) : selectedDocument.url}
                        className="btn btn-primary"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="bi bi-download me-2"></i>Download PDF
                      </a>
                    </div>
                    <p className="text-muted">{selectedDocument.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <BackToTopButton />
      <style jsx>{`
        .page-header {
          background: linear-gradient(135deg, #2575fc 0%, #6a11cb 100%);
          padding: 1rem 0;
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

        .bg-danger-soft {
          background-color: rgba(220, 53, 69, 0.1);
        }

        .bg-primary-soft {
          background-color: rgba(13, 110, 253, 0.1);
        }

        .bg-success-soft {
          background-color: rgba(25, 135, 84, 0.1);
        }

        .hover-lift:hover {
          transform: translateY(-5px) !important;
          box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175) !important;
        }

        .cursor-pointer {
          cursor: pointer;
        }

        .pdf-preview {
          position: relative;
          overflow: hidden;
        }

        .pdf-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.3);
          opacity: 0.7;
          transition: opacity 0.3s ease;
        }

        .pdf-preview:hover .pdf-overlay {
          opacity: 0.9;
        }

        .pdf-embed-container {
          position: relative;
          padding-bottom: 56.25%;
          height: 0;
          overflow: hidden;
          max-width: 100%;
        }

        .pdf-embed-container iframe {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        .icon-circle {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .object-fit-cover {
          object-fit: cover;
        }
      `}</style>
    </div>
  );
};

export default Placements;