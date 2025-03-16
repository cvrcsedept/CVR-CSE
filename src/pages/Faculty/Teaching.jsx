import React, { useEffect, useState } from "react";
import * as XLSX from "xlsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./TeachingFaculty.css";
import BackToTopButton from "../../components/BackToTopButton";

const Teaching = () => {
  const [faculty, setFaculty] = useState([]);
  const [filteredFaculty, setFilteredFaculty] = useState([]);
  const [activeDesignation, setActiveDesignation] = useState("All");
  const [selectedYear, setSelectedYear] = useState("2024-25");
  const [yearlyData, setYearlyData] = useState([]);

  const academicYears = ["2022-23", "2023-24", "2024-25"];

  const normalizeDesignation = (designation) => {
    return designation?.toLowerCase().trim().replace(/\s+/g, ".") || "";
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    loadFacultyData();
    handleYearChange("2024-25");
  }, []);

  const loadFacultyData = async () => {
    try {
      const response = await fetch("/Data/faculty.xlsx");
      const arrayBuffer = await response.arrayBuffer();
      const workbook = XLSX.read(arrayBuffer, { type: "array" });
      const sheetName = workbook.SheetNames[0];
      const jsonData = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);

      const formattedData = jsonData.map((faculty) => ({
        ...faculty,
        normalizedDesignation: normalizeDesignation(faculty.Designation),
      }));

      setFaculty(formattedData);
      filterFaculty("All", formattedData);
    } catch (error) {
      console.error("Error loading faculty data:", error);
    }
  };

  const filterFaculty = (designation, data = faculty) => {
    setActiveDesignation(designation);

    if (designation === "All") {
      setFilteredFaculty(data);
      return;
    }

    const filtered = data.filter((faculty) => {
      const normDesignation = faculty.normalizedDesignation;
      switch (designation) {
        case "Professor":
          return (
            normDesignation.includes("professor") &&
            !normDesignation.includes("assoc")
          );
        case "Associate Professor":
          return normDesignation.includes("assoc.prof");
        case "Senior Assistant Professor":
          return normDesignation.includes("sr.asst.prof.");
        case "Assistant Professor":
          return (
            normDesignation.includes("asst.prof.") &&
            !normDesignation.includes("sr.asst.prof.")
          );

        default:
          return true;
      }
    });

    setFilteredFaculty(filtered);
  };

  const handleYearChange = async (year) => {
    setSelectedYear(year);

    try {
      const response = await fetch("/Data/Faculty-List-3 years.xlsx");
      const arrayBuffer = await response.arrayBuffer();
      const workbook = XLSX.read(arrayBuffer, { type: "array" });
      const sheetData = XLSX.utils.sheet_to_json(workbook.Sheets[year]);
      setYearlyData(sheetData);
    } catch (error) {
      console.error(`Error loading data for year ${year}:`, error);
    }
  };

  const designationOptions = [
    "All",
    "Professor",
    "Associate Professor",
    "Senior Assistant Professor",
    "Assistant Professor",
  ];

  const getTableHeaders = () => {
    if (yearlyData.length === 0) return [];
    return Object.keys(yearlyData[0]);
  };

  const isCurrentYear = selectedYear === "2024-25";

  return (
    <div className="teaching-faculty-wrapper">
      <div className="faculty-hero position-relative">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8 mx-auto text-center text-white">
              <h1 className="display-4 mb-3 faculty-title">
                Our Distinguished Faculty
              </h1>
              <p className="lead mb-4">
                Dedicated Educators Shaping Future Innovators
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="faculty-content container py-5">
        {/* Centered dropdowns in a single row */}
        <div className="row mb-4">
          <div className="col-12 d-flex justify-content-center gap-3">
            {/* Always display year dropdown */}
            <div className="dropdown">
              <button
                className="btn btn-primary dropdown-toggle"
                type="button"
                id="academicYearDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {selectedYear || "Select Academic Year"}
              </button>
              <ul
                className="dropdown-menu"
                aria-labelledby="academicYearDropdown"
              >
                {academicYears.map((year, index) => (
                  <li key={index}>
                    <button
                      className="dropdown-item"
                      onClick={() => handleYearChange(year)}
                    >
                      {year}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Only display designation dropdown for current year */}
            {isCurrentYear && (
              <div className="dropdown">
                <button
                  className="btn btn-primary dropdown-toggle"
                  type="button"
                  id="facultyDesignationDropdown"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {activeDesignation} Faculty
                </button>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="facultyDesignationDropdown"
                >
                  {designationOptions.map((designation, index) => (
                    <li key={index}>
                      <button
                        className="dropdown-item"
                        onClick={() => filterFaculty(designation)}
                      >
                        {designation} Faculty
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Faculty Cards Section - Only display for current year */}
        {isCurrentYear && (
          <div className="row g-4 mb-5">
            {filteredFaculty.length > 0 ? (
              filteredFaculty.map((member, index) => (
                <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3">
                  <div className="faculty-card">
                    <div className="faculty-card-inner">
                      <div className="faculty-image-wrapper">
                        <img
                          src={`/images/TeachingFacultyImages/${member.Image}.jpg`}
                          onError={(e) => {
                            e.target.onerror = null;
                            if (e.target.src.endsWith(".jpg")) {
                              e.target.src = `/images/TeachingFacultyImages/${member.Image}.jpeg`;
                            } else if (e.target.src.endsWith(".jpeg")) {
                              e.target.src = `/images/TeachingFacultyImages/${member.Image}.png`;
                            } else {
                              e.target.src =
                                "/images/TeachingFacultyImages/CVR Logo.png";
                            }
                          }}
                          alt={member["Name of the Staff Member "]}
                          className="faculty-image"
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
              ))
            ) : (
              <div className="col-12 text-center">
                <p className="text-muted">No faculty members found.</p>
              </div>
            )}
          </div>
        )}

        {/* Enhanced Academic Year Data Table - Only display for previous years */}
        {!isCurrentYear && yearlyData.length > 0 && (
          <div className="row mt-4">
            <div className="col-12">
              <div className="card shadow-sm">
                <div className="card-header bg-primary text-white">
                  <h4 className="text-center mb-0">
                    Faculty List for Academic Year {selectedYear}
                  </h4>
                </div>
                <div className="card-body p-0">
                  <div className="table-responsive">
                    <table className="table table-hover mb-0">
                      <thead className="table-dark">
                        <tr>
                          {getTableHeaders().map((header, index) => (
                            <th key={index} className="text-center">
                              {header}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {yearlyData.map((row, rowIndex) => (
                          <tr
                            key={rowIndex}
                            className={rowIndex % 2 === 0 ? "table-light" : ""}
                          >
                            {getTableHeaders().map((header, colIndex) => (
                              <td
                                key={colIndex}
                                className="text-center align-middle"
                              >
                                {row[header]}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="card-footer bg-light">
                  <p className="text-muted text-center mb-0">
                    <small>Total Records: {yearlyData.length}</small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <BackToTopButton />
    </div>
  );
};

export default Teaching;
