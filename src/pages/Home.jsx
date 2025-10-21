import React, { useState, useEffect, useRef } from "react";
import * as XLSX from "xlsx";
import NumberLoader from "../components/NumberLoader";
import BackToTopButton from "../components/BackToTopButton";
import "../styles.css";
import TopRightAlert from "../components/TopRightAlert";

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
    EmeritusprofCount: 0,
    AssistantProfCount: 0,
    SrAsstProfCount: 0,
    AssociateProfCount: 0,
    TechnicalStaff: 0,
  });

  const normalizeDesignation = (designation) => {
    if (!designation) return "";
    return designation.toLowerCase().trim().replace(/\s+/g, ".");
  };

  const normalizeDesignationForCounting = (designation) => {
    if (!designation) return "";
    return designation
      .replace(/[^a-zA-Z. ]/g, "")
      .replace(/\s+/g, " ")
      .trim()
      .toLowerCase();
  };

  useEffect(() => {
    const fetchAndProcessExcelData = async () => {
      try {
        const response = await fetch("/Data/Faculty-List-3 years.xlsx");
        if (!response.ok) {
          throw new Error(
            `Failed to load faculty Excel file: HTTP ${response.status}`
          );
        }

        const data = await response.arrayBuffer();
        const workbook = XLSX.read(data, { type: "array", cellDates: true });

        if (!workbook.SheetNames.length) {
          throw new Error("No sheets found in faculty Excel file.");
        }

        let sheetName = workbook.SheetNames.find(name => 
          name.includes("2025-2026") || name === "2025-2026"
        );

        if (!sheetName) {
          sheetName = workbook.SheetNames[0];
        }

        const sheet = workbook.Sheets[sheetName];

        const rawData = XLSX.utils.sheet_to_json(sheet, { header: 1, defval: "" });
        let headerRowIndex = -1;
        for (let i = 0; i < Math.min(15, rawData.length); i++) {
          const row = rawData[i];
          const rowStr = row.map(cell => String(cell).toLowerCase()).join(" ");
          if (rowStr.includes("s.no") || rowStr.includes("name of the") || rowStr.includes("designation")) {
            headerRowIndex = i;
            break;
          }
        }

        if (headerRowIndex === -1) {
          console.error("Could not find header row");
          return;
        }

        const jsonData = XLSX.utils.sheet_to_json(sheet, { 
          range: headerRowIndex,
          defval: "",
          raw: false
        });

        if (!jsonData.length) throw new Error("Faculty Excel sheet is empty.");

        const countData = jsonData.reduce(
          (acc, faculty) => {
            const designationKey = Object.keys(faculty).find(key => 
              key.toLowerCase().includes("designation")
            );
            
            if (!designationKey) return acc;

            let designation = normalizeDesignationForCounting(faculty[designationKey]);

            if (!designation || designation.length < 3) return acc;

            if (designation.includes("emeritus professor") || designation.includes("emeritus prof")) {
              acc.EmeritusprofCount += 1;
            } else if (designation.includes("professor") && !designation.includes("asst") && !designation.includes("assoc")) {
              acc.ProfCount += 1;
            } else if (designation.includes("assoc") || designation.includes("associate")) {
              acc.AssociateProfCount += 1;
            } else if (designation.includes("sr") && (designation.includes("asst") || designation.includes("assistant"))) {
              acc.SrAsstProfCount += 1;
            } else if (designation.includes("asst") || designation.includes("assistant")) {
              acc.AssistantProfCount += 1;
            }

            return acc;
          },
          {
            ProfCount: 0,
            EmeritusprofCount: 0,
            AssociateProfCount: 0,
            SrAsstProfCount: 0,
            AssistantProfCount: 0,
            TechnicalStaff: 0,
          }
        );

        try {
          const nonFacultyResponse = await fetch("/Data/non-faculty.xlsx");
          if (nonFacultyResponse.ok) {
            const nonFacultyData = await nonFacultyResponse.arrayBuffer();
            const nonFacultyWorkbook = XLSX.read(nonFacultyData, {
              type: "array",
              cellDates: true,
            });

            if (nonFacultyWorkbook.SheetNames.length) {
              const nonFacultySheetName = nonFacultyWorkbook.SheetNames[0];
              const nonFacultySheet = nonFacultyWorkbook.Sheets[nonFacultySheetName];
              const nonFacultyJsonData = XLSX.utils.sheet_to_json(nonFacultySheet);

              const technicalStaffCount = nonFacultyJsonData.reduce(
                (count, staff) => {
                  const designation = (staff.Designation || "")
                    .toString()
                    .toLowerCase();
                  if (!designation.includes("dtp operator")) {
                    return count + 1;
                  }
                  return count;
                },
                0
              );

              countData.TechnicalStaff = technicalStaffCount;
            }
          }
        } catch (error) {
          console.error(
            "Error processing non-faculty Excel data:",
            error.message
          );
        }

        setCounts(countData);
        console.log("Faculty counts:", countData);
      } catch (error) {
        console.error("Error processing Excel data:", error.message);
      }
    };
    fetchAndProcessExcelData();
  }, []);

  useEffect(() => {
    loadExcelData();
  }, []);

  const loadExcelData = async () => {
    try {
      const response = await fetch("/Data/Faculty-List-3 years.xlsx");
      const arrayBuffer = await response.arrayBuffer();
      const workbook = XLSX.read(arrayBuffer, { type: "array" });

      let sheetName = workbook.SheetNames.find(name => 
        name.includes("2025-2026") || name === "2025-2026"
      );
      
      if (!sheetName) {
        sheetName = workbook.SheetNames[0];
      }

      const sheet = workbook.Sheets[sheetName];

      const rawData = XLSX.utils.sheet_to_json(sheet, { header: 1, defval: "" });
      let headerRowIndex = -1;
      for (let i = 0; i < Math.min(15, rawData.length); i++) {
        const row = rawData[i];
        const rowStr = row.map(cell => String(cell).toLowerCase()).join(" ");
        if (rowStr.includes("s.no") || rowStr.includes("name of the") || rowStr.includes("designation")) {
          headerRowIndex = i;
          break;
        }
      }

      const jsonData = XLSX.utils.sheet_to_json(sheet, {
        range: headerRowIndex,
        defval: "",
        raw: false
      });

      const formattedData = jsonData
        .filter(faculty => {
          const values = Object.values(faculty);
          const nonEmptyValues = values.filter(val => val && String(val).trim() !== "");
          if (nonEmptyValues.length === 0) return false;
          const nameKey = Object.keys(faculty).find(key => 
            key.toLowerCase().includes("name")
          );
          return nameKey && faculty[nameKey] && String(faculty[nameKey]).trim().length > 0;
        })
        .map((faculty) => {
          const nameKey = Object.keys(faculty).find(key => 
            key.toLowerCase().includes("name")
          );
          const designationKey = Object.keys(faculty).find(key => 
            key.toLowerCase().includes("designation")
          );
          const imageKey = Object.keys(faculty).find(key => 
            key.toLowerCase().includes("image") || key.toLowerCase().includes("photo")
          );
          const dojKey = Object.keys(faculty).find(key => 
            key.toLowerCase().includes("doj") || key.toLowerCase().includes("date")
          );

          return {
            ...faculty,
            "Name of the Staff Member ": faculty[nameKey] || "Unknown",
            Designation: faculty[designationKey] || "Unknown",
            Image: faculty[imageKey] || faculty[nameKey]?.split(" ").join("").toLowerCase() || "default",
            DOJ: faculty[dojKey] || "N/A",
            normalizedDesignation: normalizeDesignation(faculty[designationKey])
          };
        });

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
      caption: "A glimpse of the department's unity and excellence.",
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
        "A dedicated space for students to bring their Mini & Major projects to life.",
    },
    {
      src: "/images/laboratories/ProjectsLab1.JPG",
      alt: "Full stack development  Lab",
      title: "Full stack development lab",
      caption:
        "Equipped for hands-on learning in web development, covering frontend, backend, databases, and deployment",
    },
  ];

  return (
    <>
      <main>
        <div className="container-fluid p-0">
          <section className="carouselSection">
            <div
              id="carouselA"
              className="carousel slide shadow-lg"
              data-bs-ride="carousel"
              style={{
                height: "85vh",
                width: "100%",
                maxWidth: "100vw",
              }}
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
                  height: "100%",
                  width: "100%",
                }}
              >
                {images.map((image, index) => (
                  <div
                    key={index}
                    className={`carousel-item ${index === 0 ? "active" : ""}`}
                    style={{ height: "100%" }}
                  >
                    <img
                      src={image.src}
                      className="d-block w-100"
                      alt={image.alt}
                      style={{
                        height: "85vh",
                        width: "100%",
                        objectFit: "cover",
                        objectPosition: "center",
                      }}
                    />
                    <div className="carousel-caption d-flex flex-column justify-content-end">
                      <h5 className="caption-title">{image.title}</h5>
                      <p className="caption-text">{image.caption}</p>
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
          </section>
        </div>

        <section className="headMessageSection">
          <div className="container mt-3">
            <div className="row">
              <div className="col-12 p-3 p-md-5">
                <h2 className="text-center text-uppercase">
                  Message by Head of the Department
                </h2>
              </div>
            </div>

            <div className="row">
              <div
                className="col-12 col-md-6 mb-4 mb-md-0"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                <img
                  src="/images/hod.jpg"
                  className="img-fluid rounded mx-auto d-block"
                  alt=""
                  style={{
                    border: "3px solid #203476",
                    maxWidth: "100%",
                    maxHeight: "400px",
                  }}
                />
              </div>
              <div className="col-12 col-md-6 hodmsg">
                <div
                  className="msghoddiv"
                  data-aos="fade-left"
                  data-aos-duration="1000"
                >
                  <p className="h3 text-center text-md-start">
                    Dr. A Vani Vathsala (Professor and HOD)
                  </p>
                  <p className="msghodp">
                    The Computer Science and Engineering department was started in the year 2001 with an intake of 60 B.Tech. students and current intake is 660. Our department offers B.Tech in Computer Science and Engineering (CSE), B.Tech in Computer Science and Business Systems (CSBS), and M.Tech in Artificial Intelligence (AI), equipping students with industry-relevant skills and advanced knowledge for the evolving tech landscape. The department is serving as research center under JNTUH and offering Ph.D. programme in Image Processing and Machine Learning . Department is constantly striving for capacity building and quality improvement in teaching-learning, research, and contributions through industry collaborations. Department organizes the FDPs, technical workshops and conferences at National and International level periodically.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="recogSection py-4">
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
                <span style={{ textAlign: "center" }}>
                  <NumberLoader
                    number={counts.EmeritusprofCount}
                    shouldLoad={shouldLoadNumbers}
                  />
                  <p> Emeritus Professors</p>
                </span>
              </div>
              <div className="deptStrengthItem">
                <span style={{ textAlign: "center" }}>
                  <NumberLoader
                    number={counts.ProfCount}
                    shouldLoad={shouldLoadNumbers}
                  />
                  <p>Professors</p>
                </span>
              </div>
              <div className="deptStrengthItem">
                <span style={{ textAlign: "center" }}>
                  <NumberLoader
                    number={counts.AssociateProfCount}
                    shouldLoad={shouldLoadNumbers}
                  />
                  <p>Associate Professors</p>
                </span>
              </div>
              <div className="deptStrengthItem">
                <span style={{ textAlign: "center" }}>
                  <NumberLoader
                    number={counts.SrAsstProfCount}
                    shouldLoad={shouldLoadNumbers}
                  />
                  <p>Sr. Assistant Professors</p>
                </span>
              </div>
              <div className="deptStrengthItem">
                <span style={{ textAlign: "center" }}>
                  <NumberLoader
                    number={counts.AssistantProfCount}
                    shouldLoad={shouldLoadNumbers}
                  />
                  <p>Assistant Professors</p>
                </span>
              </div>
              <div className="deptStrengthItem">
                <span style={{ textAlign: "center" }}>
                  <NumberLoader number={26} shouldLoad={shouldLoadNumbers} />
                  <p>Programmers and Admins</p>
                </span>
              </div>
              <div className="deptStrengthItem">
                <span className="Office Staff" style={{ textAlign: "center" }}>
                  <NumberLoader number={5} shouldLoad={shouldLoadNumbers} />
                  <p>Office Staff</p>
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* <section className="facStrength faculty-content py-5">
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
              className="carousel slide"
              data-bs-ride="carousel"
              data-bs-interval="3000"
            >
              <div className="carousel-inner" style={{ minHeight: "350px" }}>
                {Array(Math.ceil(filteredFaculty.length / 3))
                  .fill()
                  .map((_, slideIndex) => (
                    <div
                      key={slideIndex}
                      className={`carousel-item ${
                        slideIndex === 0 ? "active" : ""
                      }`}
                    >
                      <div className="row g-4 justify-content-center">
                        {filteredFaculty
                          .slice(slideIndex * 3, slideIndex * 3 + 3)
                          .map((member, index) => (
                            <div
                              key={index}
                              className="col-12 col-sm-6 col-md-4 mb-4"
                            >
                              <div className="faculty-card h-100">
                                <div className="faculty-card-inner d-flex flex-column h-100">
                                  <div
                                    className="faculty-image-wrapper center-block"
                                    style={{
                                      height: "auto",
                                      maxHeight: "350px",
                                      overflow: "hidden",
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
                                      className="faculty-image img-fluid w-100"
                                      style={{
                                        objectFit: "cover",
                                        aspectRatio: "3/4",
                                      }}
                                    />
                                  </div>
                                  <div className="faculty-details p-2 mt-auto">
                                    <h4 className="faculty-name text-center">
                                      {member["Name of the Staff Member "]}
                                    </h4>
                                    <p className="faculty-designation text-center mb-1">
                                      {member.Designation}
                                    </p>
                                    <p className="faculty-join-date text-center mb-0">
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
        </section> */}
      </main>
      <BackToTopButton />

      <style jsx>{`
        @media (max-width: 768px) {
          .carousel-caption {
            padding-bottom: 10px;
          }

          .caption-title {
            font-size: 18px;
            margin-bottom: 5px;
          }

          .caption-text {
            font-size: 14px;
            margin-bottom: 0;
          }

          .deptStrengthContainer {
            flex-wrap: wrap;
            justify-content: center;
          }

          .deptStrengthItem {
            flex: 0 0 45%;
            margin: 5px;
          }

          .recogContainer {
            flex-wrap: wrap;
            justify-content: center;
          }

          .recogItem {
            flex: 0 0 45%;
            margin: 10px;
            max-width: 120px;
          }

          .faculty-card {
            margin-bottom: 20px;
          }
        }
      `}</style>
    </>
  );
};

export default Home;