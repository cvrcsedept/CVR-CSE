import React, { useState, useEffect, useRef } from "react";
import * as XLSX from "xlsx";
import NumberLoader from "../components/NumberLoader";
import BackToTopButton from "../components/BackToTopButton";
import "../styles.css";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [shouldLoadNumbers, setShouldLoadNumbers] = useState(false);
  const deptStrengthRef = useRef(null);
  const [faculty, setFaculty] = useState([]);
  const [filteredFaculty, setFilteredFaculty] = useState([]);
  const [counts, setCounts] = useState({
    ProfCount: 0,
    AssistantProfCount: 0,
    SrAsstProfCount: 0,
    AssociateProfCount: 0,
  });

  const normalizeDesignation = (designation) => {
    return designation.toLowerCase().trim().replace(/\s+/g, ".");
  };

  useEffect(() => {
    const fetchAndProcessExcelData = async () => {
      try {
        const response = await fetch("/Data/faculty.xlsx");
        if (!response.ok) {
          throw new Error(`Failed to load Excel file: HTTP ${response.status}`);
        }

        const data = await response.arrayBuffer();
        const workbook = XLSX.read(data, { type: "array", cellDates: true });

        if (!workbook.SheetNames.length) {
          throw new Error("No sheets found in Excel file.");
        }

        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];

        const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 });
        if (!jsonData.length) throw new Error("Excel sheet is empty.");

        const formattedData = jsonData.slice(1).map((row) => ({
          empId: row[1] || "N/A",
          name: row[2]?.trim() || "Unknown",
          designation: row[3]?.trim() || "Unknown",
          email: row[4] || "N/A",
          doj:
            row[5] instanceof Date
              ? row[5].toLocaleDateString("en-GB")
              : row[5] || "N/A",
        }));

        const normalizeDesignationForCounting = (designation) => {
          return designation
            .replace(/[^a-zA-Z. ]/g, "") // Remove unwanted symbols (&, ,)
            .replace(/\s+/g, " ") // Normalize spaces
            .trim()
            .toLowerCase();
        };

        const countData = formattedData.reduce(
          (acc, faculty) => {
            let designation = normalizeDesignationForCounting(
              faculty.designation
            );
            if (
              designation.includes("professor") ||
              designation.includes("emeritus")
            ) {
              acc.ProfCount += 1;
            } else if (designation.includes("assoc.prof")) {
              acc.AssociateProfCount += 1;
            } else if (designation.includes("sr.asst.prof.")) {
              acc.SrAsstProfCount += 1;
            } else if (designation.includes("asst.prof.")) {
              acc.AssistantProfCount += 1;
            }

            return acc;
          },
          {
            ProfCount: 0,
            AssociateProfCount: 0,
            SrAsstProfCount: 0,
            AssistantProfCount: 0,
          }
        );

        setCounts(countData);
      } catch (error) {
        console.error("Error processing Excel data:", error.message);
        return null;
      }
    };
    fetchAndProcessExcelData();
  }, []);

  useEffect(() => {
    loadExcelData();
  }, []);

  const loadExcelData = async () => {
    try {
      const response = await fetch("/Data/faculty.xlsx");
      const arrayBuffer = await response.arrayBuffer();
      const workbook = XLSX.read(arrayBuffer, { type: "array" });
      const sheetName = workbook.SheetNames[0];
      const jsonData = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);

      const formattedData = jsonData.map((faculty) => ({
        ...faculty,
        normalizedDesignation: normalizeDesignation(faculty.Designation),
        image: faculty.Name?.split(" ").join("").toLowerCase() || "default",
      }));

      setFaculty(formattedData);
      setFilteredFaculty(formattedData.slice(0, 15));
    } catch (error) {
      console.error("Error loading faculty data:", error);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShouldLoadNumbers(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (deptStrengthRef.current) {
      observer.observe(deptStrengthRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const images = [
    {
      src: "/images/newgrouppic.jpg",
      alt: "Group Pic",
      title: "Department Strength",
      caption: "This is the Strength of the Department",
    },
    {
      src: "/images/newcsedept.jpg",
      alt: "CSE Building",
      title: "CSE Building",
      caption: "CSE Block with well-furnished Laboratories and Classrooms",
    },
    {
      src: "/images/civil/104-inside.jpg",
      alt: "Projects lab",
      title: "projects Laboratory",
      caption:
        "Projects Laboratory where students do their Mini & Major Projects",
    },
    {
      src: "/images/laboratories/ProjectsLab1.JPG",
      alt: "Full stack development  Lab",
      title: "Full stack development lab",
      caption:
        "Full stack development lab helps in providing hands-on experience in building web applications using frontend and backend technologies, databases, and deployment tools.",
    },
  ];

  return (
    <>
      <main>
        <div className="container-fluid p-0 ">
          <section
            className="carouselSection"
            style={{ height: "85vh", width: "100vw" }}
          >
            <div
              className="container-fluid"
              style={{ height: "85vh", width: "100vw", margin: "-12px" }}
            >
              <div
                id="carouselA"
                className="carousel slide shadow-lg rounded"
                data-bs-ride="carousel"
                style={{ height: "85vh", width: "100vw" }}
              >
                <div className="carousel-indicators">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      type="button"
                      data-bs-target="#carouselA"
                      data-bs-slide-to={index}
                      className={index === 0 ? "active" : ""}
                      aria-current={index === 0 ? "true" : "false"}
                      aria-label={`Slide ${index + 1}`}
                    ></button>
                  ))}
                </div>
                <div
                  className="carousel-inner"
                  style={{
                    height: "85vh",
                    width: "100vw",
                  }}
                >
                  {images.map((image, index) => (
                    <div
                      key={index}
                      className={`carousel-item ${index === 0 ? "active" : ""}`}
                      style={{ height: "85vh", width: "100vw" }}
                    >
                      <img
                        src={image.src}
                        className="d-block w-100"
                        alt={image.alt}
                        style={{
                          height: "85vh",
                          width: "100vw",
                          objectFit: "cover",
                          objectPosition: "center",
                        }}
                      />
                      <div className="carousel-caption">
                        <h5>{image.title}</h5>
                        <p>{image.caption}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselA"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselA"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </section>
        </div>
        <section className="headMessageSection">
          <div className="container mt-3">
            <div className="row">
              <div className="col-md-12 p-5">
                <h2 className="text-center text-uppercase">
                  Message by Head of the Department
                </h2>
              </div>
            </div>

            <div className="row">
              <div
                className="col-md-6"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                <img
                  src="/images/hod.jpg"
                  className="img-fluid rounded"
                  alt=""
                  style={{ border: "3px solid #203476" }}
                />
              </div>
              <div className="col-md-6 hodmsg">
                <div
                  className="msghoddiv"
                  data-aos="fade-left"
                  data-aos-duration="1000"
                >
                  <p className="h3">Dr. A Vani Vathsala (Professor and HOD)</p>
                  <p className="msghodp">
                    The Computer Science and Engineering department was started
                    in the year 2001 with an intake of 60 B.Tech. students and
                    current intake is 600. Our department offers B.Tech in
                    Computer Science and Engineering (CSE), B.Tech in Computer
                    Science and Business Systems (CSBS), and M.Tech in
                    Artificial Intelligence (AI), equipping students with
                    industry-relevant skills and advanced knowledge for the
                    evolving tech landscape. The department is serving as
                    research center under JNTUH and offering Ph.D. programme in
                    Image Processing. Department is constantly striving for
                    capacity building and quality improvement in
                    teaching-learning, research, and contributions through
                    industry collaborations. Department organizes the FDPs,
                    technical workshops and conferences at National and
                    International level periodically.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="recogSection">
          <div
            className="recogContainer"
            data-aos="zoom-in"
            data-aos-duration="3000"
          >
            <div className="recogItem">
              <img src="/images/UGC.png" className="img-fluid" alt="UGC" />
            </div>
            <div className="recogItem">
              <img src="/images/aicte.png" className="img-fluid" alt="AICTE" />
            </div>
            <div className="recogItem">
              <img src="/images/NBA.png" className="img-fluid" alt="NBA" />
            </div>
            <div className="recogItem">
              <img src="/images/Naac.png" className="img-fluid" alt="NAAC" />
            </div>
            <div className="recogItem">
              <img src="/images/JNTUH.png" className="img-fluid" alt="JNTUH" />
            </div>
          </div>
        </section>

        <section className="deptStrengthSection" ref={deptStrengthRef}>
          <div className="deptStrengthSectionDivs">
            <div className="sHeading">
              <p>Department Strength</p>
            </div>
            <div className="deptStrengthContainer">
              <div className="deptStrengthItem">
                <span>
                  <NumberLoader
                    number={counts.ProfCount}
                    shouldLoad={shouldLoadNumbers}
                  />
                  <p>Professors</p>
                </span>
              </div>
              <div className="deptStrengthItem">
                <span>
                  <NumberLoader
                    number={counts.AssociateProfCount}
                    shouldLoad={shouldLoadNumbers}
                  />
                  <p>Associate Professors</p>
                </span>
              </div>
              <div className="deptStrengthItem">
                <span>
                  <NumberLoader
                    number={counts.SrAsstProfCount}
                    shouldLoad={shouldLoadNumbers}
                  />
                  <p>Sr. Assistant Professors</p>
                </span>
              </div>
              <div className="deptStrengthItem">
                <span>
                  <NumberLoader
                    number={counts.AssistantProfCount}
                    shouldLoad={shouldLoadNumbers}
                  />
                  <p>Assistant Professors</p>
                </span>
              </div>
              <div className="deptStrengthItem">
                <span>
                  <NumberLoader number={23} shouldLoad={shouldLoadNumbers} />
                  <p>Programmers and Admins</p>
                </span>
              </div>
              <div className="deptStrengthItem">
                <span className="Dtps">
                  <NumberLoader number={5} shouldLoad={shouldLoadNumbers} />
                  <p>DTP's</p>
                </span>
              </div>
            </div>
          </div>
        </section>
        <section className="facStrength faculty-content py-5">
          <div className="container mt-5">
            <div className="row mb-4">
              <div className="col-sm-12">
                <h2 className="text-center text-uppercase">
                  Department Virtuoso
                </h2>
              </div>
            </div>

            <div
              id="facultyCarousel"
              style={{ height: "70vh" }}
              className="carousel slide"
              data-bs-ride="carousel"
              data-bs-interval="3000"
            >
              <div className="carousel-inner" style={{ height: "75vh" }}>
                {Array(Math.ceil(filteredFaculty.length / 3))
                  .fill()
                  .map((_, slideIndex) => (
                    <div
                      key={slideIndex}
                      className={`carousel-item ${
                        slideIndex === 0 ? "active" : ""
                      }`}
                    >
                      <div className="row g-4">
                        {filteredFaculty
                          .slice(slideIndex * 3, slideIndex * 3 + 3)
                          .map((member, index) => (
                            <div key={index} className="col-md-4">
                              <div
                                className="faculty-card"
                                style={{ height: "65vh" }}
                              >
                                <div
                                  className="faculty-card-inner"
                                  style={{ height: "60vh" }}
                                >
                                  <div
                                    className="faculty-image-wrapper center-block"
                                    style={{
                                      height: "45vh",
                                    }}
                                  >
                                    <img
                                      src={`/images/TeachingFacultyImages/${member.Image}.jpg`}
                                      onError={(e) => {
                                        e.target.onerror = null;
                                        if (e.target.src.endsWith(".jpg")) {
                                          e.target.src = `/images/TeachingFacultyImages/${member.Image}.jpeg`;
                                        } else if (
                                          e.target.src.endsWith(".jpeg")
                                        ) {
                                          e.target.src = `/images/TeachingFacultyImages/${member.Image}.png`;
                                        } else {
                                          e.target.src = "/images/CVR Logo.png";
                                        }
                                      }}
                                      alt={member["Name of the Staff Member "]}
                                      className="faculty-image"
                                      style={{ height: "60vh" }}
                                    />
                                  </div>
                                  <div className="faculty-details">
                                    <h4 className="faculty-name">
                                      {member["Name of the Staff Member "]}
                                    </h4>
                                    <p className="faculty-designation">
                                      {member.Designation}
                                    </p>
                                    <p className="faculty-join-date">
                                      Joined: {member.DOJ}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                      </div>
                    </div>
                  ))}
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#facultyCarousel"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#facultyCarousel"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </section>
      </main>
      <BackToTopButton />
    </>
  );
};

export default Home;
