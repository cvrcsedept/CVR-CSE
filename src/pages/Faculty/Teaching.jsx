import React, { useEffect, useState } from "react";
import * as XLSX from "xlsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./TeachingFaculty.css";
import BackToTopButton from "../../components/BackToTopButton";

const Teaching = () => {
  const [faculty, setFaculty] = useState([]);
  const [filteredFaculty, setFilteredFaculty] = useState([]);
  const [activeDesignation, setActiveDesignation] = useState("All");
  const [selectedYear, setSelectedYear] = useState("2025-2026");
  const [yearlyData, setYearlyData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [tableHeaders, setTableHeaders] = useState([]);

  const academicYears = ["2025-2026", "2024-2025", "2023-2024", "2022-2023"];

  const normalizeDesignation = (designation) => {
    return designation?.toLowerCase().trim().replace(/\s+/g, ".") || "";
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    handleYearChange("2025-2026");
  }, []);

  const filterFaculty = (designation, data = faculty, search = searchTerm) => {
    setActiveDesignation(designation);

    let filtered = data;

    // Filter by designation
    if (designation !== "All") {
      filtered = filtered.filter((faculty) => {
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
    }

    // Filter by search term
    if (search.trim() !== "") {
      filtered = filtered.filter((faculty) => {
        const facultyName =
          (faculty["Name of the Faculty"] || 
           faculty["Name of the Staff Member "] || "").toLowerCase();
        return facultyName.includes(search.toLowerCase());
      });
    }

    setFilteredFaculty(filtered);
  };

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    filterFaculty(activeDesignation, faculty, value);
  };

  const handleYearChange = async (year) => {
    setSelectedYear(year);
    setSearchTerm("");
    setActiveDesignation("All");

    try {
      console.log("Attempting to fetch: /Data/Faculty-List-3 years.xlsx");
      const response = await fetch("/Data/Faculty-List-3 years.xlsx");
      
      if (!response.ok) {
        console.error(`HTTP error! status: ${response.status}`);
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const arrayBuffer = await response.arrayBuffer();
      console.log("File fetched successfully, size:", arrayBuffer.byteLength);
      
      const workbook = XLSX.read(arrayBuffer, { type: "array" });
      console.log("Available sheets:", workbook.SheetNames);
      
      // Find the sheet matching the selected year
      let sheetName = workbook.SheetNames.find(name => 
        name.includes(year) || name === year || name.toLowerCase() === year.toLowerCase()
      );
      
      if (sheetName) {
        console.log("Loading sheet:", sheetName);
        const worksheet = workbook.Sheets[sheetName];
        
        // Convert to array of arrays to find the header row
        const rawData = XLSX.utils.sheet_to_json(worksheet, { header: 1, defval: "" });
        console.log("Raw data rows:", rawData.length);
        console.log("First 5 rows:", rawData.slice(0, 5));
        
        // Find the row that contains "S.NO" or "Name of the Faculty" - this is the header row
        let headerRowIndex = -1;
        for (let i = 0; i < Math.min(15, rawData.length); i++) {
          const row = rawData[i];
          const rowStr = row.map(cell => String(cell).toLowerCase()).join(" ");
          if (rowStr.includes("s.no") || rowStr.includes("name of the faculty") || rowStr.includes("name of the staff") || rowStr.includes("designation") || rowStr.includes("qualification")) {
            headerRowIndex = i;
            console.log("Found header row at index:", i, "Row content:", row);
            break;
          }
        }
        
        if (headerRowIndex === -1) {
          console.error("Could not find header row");
          console.log("All rows:", rawData);
          setYearlyData([]);
          setFaculty([]);
          setTableHeaders([]);
          return;
        }
        
        // Parse with the correct header row
        const sheetData = XLSX.utils.sheet_to_json(worksheet, { 
          range: headerRowIndex,
          defval: "",
          raw: false
        });
        
        console.log("Sheet data loaded, records:", sheetData.length);
        console.log("First 3 records:", sheetData.slice(0, 3));
        console.log("All keys from first record:", sheetData.length > 0 ? Object.keys(sheetData[0]) : []);
        const validData = sheetData.filter((row, index) => {
          const values = Object.values(row);
          const nonEmptyValues = values.filter(val => val && String(val).trim() !== "");
          
          if (nonEmptyValues.length === 0) return false;
          const allNumbers = nonEmptyValues.every(val => !isNaN(val) && String(val).trim() !== "");
          if (allNumbers && nonEmptyValues.length <= 2) return false;
          const rowStr = String(values.join(" ")).toLowerCase();
          if (rowStr.includes("cvr college") || 
              rowStr.includes("teaching staff list") || 
              rowStr.includes("computer science and engineering")) {
            return false;
          }
          
          console.log(`Row ${index} validation:`, { row, nonEmptyValues: nonEmptyValues.length, allNumbers });
          return true;
        });
        
        console.log("Valid data records after filtering:", validData.length);
        if (validData.length > 0) {
          console.log("First valid record:", validData[0]);
        }
        const formattedData = validData.map((faculty) => ({
          ...faculty,
          normalizedDesignation: normalizeDesignation(faculty.Designation || faculty.designation),
        }));

        if (formattedData.length > 0) {
          const allKeys = Object.keys(formattedData[0]);
          console.log("All keys before filtering:", allKeys);
          
          const headers = allKeys.filter(h => 
            h !== "normalizedDesignation" && 
            h.toLowerCase() !== "s.no" && 
            h.toLowerCase() !== "s.no." &&
            h.toLowerCase() !== "sno"
          );
          
          setTableHeaders(headers);
          console.log("Final table headers:", headers);
        }
        
        setYearlyData(formattedData);
        setFaculty(formattedData);
        filterFaculty("All", formattedData, "");
      } else {
        console.error(`Sheet for year ${year} not found. Available sheets:`, workbook.SheetNames);
        setYearlyData([]);
        setFaculty([]);
        setTableHeaders([]);
      }
    } catch (error) {
      console.error(`Error loading data for year ${year}:`, error);
      setYearlyData([]);
      setFaculty([]);
      setTableHeaders([]);
    }
  };

  const designationOptions = [
    "All",
    "Professor",
    "Associate Professor",
    "Senior Assistant Professor",
    "Assistant Professor",
  ];

  const formatDate = (dateString) => {
    if (!dateString) return "N/A";

    try {
      let date;

      if (!isNaN(dateString) && dateString > 0) {
        date = new Date((dateString - 25569) * 86400 * 1000);
      } else {
        date = new Date(dateString);
      }

      if (isNaN(date.getTime())) {
        return dateString;
      }

      const day = date.getDate().toString().padStart(2, "0");
      const month = (date.getMonth() + 1).toString().padStart(2, "0");
      const year = date.getFullYear();

      return `${day}-${month}-${year}`;
    } catch (error) {
      console.error("Error formatting date:", error);
      return dateString;
    }
  };

  const renderCellValue = (header, value) => {
  if (header === "Photo" || header === "Image") {
    return (
      <div className="text-center">
        <a
          href="#"
          className="btn btn-link p-0"
          style={{
            textDecoration: "none",
            color: "#0d6efd",
            fontWeight: "500"
          }}
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo(0, 0);
          }}
        >
          View Profile
        </a>
      </div>
    );
  }


    if (header === "DOJ" || header.includes("Date")) {
      return formatDate(value);
    }

    return value || "N/A";
  };

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
            {/* Year dropdown */}
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

            {/* Designation dropdown
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
                      {designation}
                    </button>
                  </li>
                ))}
              </ul>
            </div> */}
          </div>
        </div>

        {/* Search bar */}
        {/* <div className="row mb-4">
          <div className="col-md-6 mx-auto">
            <div className="input-group">
              <span className="input-group-text">
                <i className="bi bi-search"></i>
              </span>
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Search faculty by name..."
                value={searchTerm}
                onChange={handleSearchChange}
                aria-label="Search faculty"
              />
              {searchTerm && (
                <button
                  className="btn btn-outline-secondary"
                  type="button"
                  onClick={() => {
                    setSearchTerm("");
                    filterFaculty(activeDesignation, faculty, "");
                  }}
                >
                  Clear
                </button>
              )}
            </div>
            {searchTerm && (
              <div className="text-center mt-2">
                <small className="text-muted">
                  Found {filteredFaculty.length} faculty members
                </small>
              </div>
            )}
          </div>
        </div> */}

        {/* Faculty Table - Displays all columns dynamically */}
        {filteredFaculty.length > 0 && (
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
                          <th className="text-center" style={{ minWidth: "50px" }}>S.NO</th>
                          {tableHeaders.map((header, index) => (
                            <th 
                              key={index} 
                              className="text-center"
                              style={{ 
                                minWidth: header === "Photo" || header === "Image" ? "80px" : "150px",
                                whiteSpace: "nowrap"
                              }}
                            >
                              {header}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {filteredFaculty.map((member, rowIndex) => (
                          <tr
                            key={rowIndex}
                            className={rowIndex % 2 === 0 ? "table-light" : ""}
                          >
                            <td className="text-center align-middle" style={{ minWidth: "50px" }}>
                              {rowIndex + 1}
                            </td>
                            {tableHeaders.map((header, colIndex) => (
                              <td
                                key={colIndex}
                                className="text-center align-middle"
                                style={{ minWidth: "150px" }}
                              >
                                {renderCellValue(header, member[header])}
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
                    <small>Total Records: {filteredFaculty.length}</small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* No results message */}
        {filteredFaculty.length === 0 && yearlyData.length === 0 && (
          <div className="col-12 text-center">
            <p className="text-muted">No faculty members found for the selected year.</p>
          </div>
        )}

        {/* No filter results message */}
        {filteredFaculty.length === 0 && yearlyData.length > 0 && (
          <div className="col-12 text-center">
            <p className="text-muted">No faculty members match your search or filter criteria.</p>
          </div>
        )}
      </div>

      <BackToTopButton />
    </div>
  );
};

export default Teaching;