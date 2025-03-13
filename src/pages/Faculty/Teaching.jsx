import React, { useEffect, useState } from "react";
import * as XLSX from "xlsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./TeachingFaculty.css";
import BackToTopButton from "../../components/BackToTopButton";

const Teaching = () => {
  const [faculty, setFaculty] = useState([]);
  const [filteredFaculty, setFilteredFaculty] = useState([]);
  const [activeDesignation, setActiveDesignation] = useState("All");

  const normalizeDesignation = (designation) => {
    return designation.toLowerCase().trim().replace(/\s+/g, ".");
  };

  useEffect(() => {
    window.scrollTo(0, 0);
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
          return normDesignation.includes("asst.prof.");
        default:
          return true;
      }
    });

    setFilteredFaculty(filtered);
  };

  const designationOptions = [
    "All",
    "Professor",
    "Associate Professor",
    "Senior Assistant Professor",
    "Assistant Professor",
  ];

  return (
    <div className="teaching-faculty-wrapper">
      {/* Hero Section */}
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

      {/* Faculty Filter and Grid */}
      <div className="faculty-content container py-5">
        {/* Dropdown Filter */}
        <div className="row mb-4">
          <div className="col-12 text-center">
            <div className="dropdown">
              <button
                className="btn btn-primary dropdown-toggle"
                type="button"
                id="facultyDesignationDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {activeDesignation}
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
          </div>
        </div>

        {/* Faculty Grid */}
        <div className="row g-4">
          {filteredFaculty.length > 0 ? (
            filteredFaculty.map((member, index) => (
              <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3">
                <div className="faculty-card">
                  <div className="faculty-card-inner">
                    <div className="faculty-image-wrapper">
                      <img
                        src={`/images/TeachingFacultyImages/${member.Image}.jpg`}
                        onError={(e) => {
                          e.target.onerror = null; // Prevent infinite loop
                          if (e.target.src.endsWith(".jpg")) {
                            e.target.src = `/images/TeachingFacultyImages/${member.Image}.jpeg`;
                          } else if (e.target.src.endsWith(".jpeg")) {
                            e.target.src = `/images/TeachingFacultyImages/${member.Image}.png`;
                          } else {
                            e.target.src =
                              "/images/TeachingFacultyImages/default-avatar.png";
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
                      <p className="faculty-join-date">Joined: {member.DOJ}</p>
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
      </div>

      <BackToTopButton />
    </div>
  );
};

export default Teaching;
