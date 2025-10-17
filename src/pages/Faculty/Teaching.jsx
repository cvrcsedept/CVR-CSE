import React, { useEffect, useState } from "react";
import * as XLSX from "xlsx";
import "bootstrap/dist/css/bootstrap.min.css";

const Teaching = () => {
  const [sections, setSections] = useState([]);
  const [selectedYear, setSelectedYear] = useState("2025-2026");
  const [tableHeaders, setTableHeaders] = useState([]);
  const [loading, setLoading] = useState(false);

  const academicYears = ["2025-2026", "2024-2025", "2023-2024", "2022-2023"];

  const normalizeDesignation = (designation) => {
    return designation?.toLowerCase().trim().replace(/\s+/g, ".") || "";
  };

  const isHeadingRow = (row) => {
    const values = Object.values(row);
    const nonEmptyValues = values.filter(val => val && String(val).trim() !== "");
    
    if (nonEmptyValues.length === 0) return false;
    
    const allNumbers = nonEmptyValues.every(val => !isNaN(val) && String(val).trim() !== "");
    if (allNumbers && nonEmptyValues.length <= 2) return false;
    
    const rowStr = String(values.join(" ")).toLowerCase();
    if (rowStr.includes("cvr college") || rowStr.includes("teaching staff list")) return false;
    
    const firstCol = String(values[0] || "").toLowerCase();
    
    // Check if it's a numerical row (S.NO with single digit)
    const isNumericRow = !isNaN(firstCol) && firstCol.trim() !== "";
    if (isNumericRow) return false;
    
    // Check if it looks like a faculty name (has "Dr" or "Mr" or "Ms")
    if (firstCol.includes("dr ") || firstCol.includes("mr ") || firstCol.includes("ms ")) return false;
    
    // If only one non-empty value and it's not a number, it's likely a heading
    const isHeading = 
      (nonEmptyValues.length === 1 && !firstCol.match(/^[\d\s]*$/) && firstCol.length > 5) ||
      firstCol.includes("computer science") ||
      firstCol.includes("engineering") ||
      firstCol.includes("artificial intelligence") ||
      firstCol.includes("tech") ||
      firstCol.includes("m.tech");
    
    return isHeading;
  };

  const handleYearChange = async (year) => {
    setSelectedYear(year);
    setLoading(true);

    try {
      const response = await fetch("/Data/Faculty-List-3 years.xlsx");
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const arrayBuffer = await response.arrayBuffer();
      const workbook = XLSX.read(arrayBuffer, { type: "array" });
      
      let sheetName = workbook.SheetNames.find(name => 
        name.includes(year) || name === year || name.toLowerCase() === year.toLowerCase()
      );
      
      if (sheetName) {
        const worksheet = workbook.Sheets[sheetName];
        const rawData = XLSX.utils.sheet_to_json(worksheet, { header: 1, defval: "" });
        
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
          setSections([]);
          setTableHeaders([]);
          setLoading(false);
          return;
        }
        
        const sheetData = XLSX.utils.sheet_to_json(worksheet, { 
          range: headerRowIndex,
          defval: "",
          raw: false
        });
        
        if (sheetData.length > 0) {
          const allKeys = Object.keys(sheetData[0]);
          const headers = allKeys.filter(h => 
            h !== "normalizedDesignation" && 
            h.toLowerCase() !== "s.no" && 
            h.toLowerCase() !== "s.no." &&
            h.toLowerCase() !== "sno"
          );
          setTableHeaders(headers);
        }

        const groupedSections = [];
        let currentSection = null;
        let sectionData = [];

        sheetData.forEach((row) => {
          const values = Object.values(row);
          const nonEmptyValues = values.filter(val => val && String(val).trim() !== "");
          
          if (nonEmptyValues.length === 0) return;
          
          if (isHeadingRow(row)) {
            if (sectionData.length > 0) {
              groupedSections.push({
                title: currentSection,
                data: sectionData
              });
              sectionData = [];
            }
            const firstCol = Object.values(row)[0] || "";
            currentSection = String(firstCol).trim();
          } else {
            sectionData.push({
              ...row,
              normalizedDesignation: normalizeDesignation(row.Designation || row.designation),
            });
          }
        });

        if (sectionData.length > 0) {
          groupedSections.push({
            title: currentSection,
            data: sectionData
          });
        }

        setSections(groupedSections);
      }
      setLoading(false);
    } catch (error) {
      console.error(`Error loading data for year ${year}:`, error);
      setSections([]);
      setTableHeaders([]);
      setLoading(false);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    handleYearChange("2025-2026");
  }, []);

  const formatDate = (dateString) => {
    if (!dateString) return "N/A";

    try {
      let date;
      if (!isNaN(dateString) && dateString > 0) {
        date = new Date((dateString - 25569) * 86400 * 1000);
      } else {
        date = new Date(dateString);
      }

      if (isNaN(date.getTime())) return dateString;

      const day = date.getDate().toString().padStart(2, "0");
      const month = (date.getMonth() + 1).toString().padStart(2, "0");
      const year = date.getFullYear();

      return `${day}-${month}-${year}`;
    } catch (error) {
      return dateString;
    }
  };

  const renderCellValue = (header, value) => {
    if (header === "Photo" || header === "Image") {
      return (
        <div className="text-center">
          <span className="badge bg-primary">View</span>
        </div>
      );
    }

    if (header === "DOJ" || header.includes("Date")) {
      return formatDate(value);
    }


    const cleanValue = String(value || "").replace(/\s*\([^)]*\)/g, "");
    return cleanValue || "N/A";
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
        {/* Year Selector */}
        <div className="row mb-4">
          <div className="col-12 d-flex justify-content-center">
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
              <ul className="dropdown-menu" aria-labelledby="academicYearDropdown">
                {academicYears.map((year) => (
                  <li key={year}>
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
          </div>
        </div>

        {loading && (
          <div className="row">
            <div className="col-12 text-center py-5">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          </div>
        )}

        {!loading && sections.length > 0 && (
          <div>
            {sections.map((section, sectionIndex) => (
              <div key={sectionIndex} className="mb-5">
                {/* Section Heading - Only display if it has a title */}
                {/* {section.title && (
                  <div className="mb-3">
                    <h5 className="text-primary mb-0" style={{ fontWeight: "600" }}>
                      {section.title}
                    </h5>
                  </div>
                )} */}

                {/* Section Table */}
                <div className="card shadow-sm mb-4">
                  <div className="card-header bg-primary text-white">
                    <h5 className="text-center mb-0">
                      Faculty List  {section.title}
                    </h5>
                  </div>
                  <div className="card-body p-0">
                    <div className="table-responsive">
                      <table className="table table-hover mb-0">
                        <thead className="table-dark">
                          <tr>
                            <th className="text-center" style={{ minWidth: "50px" }}>S.NO</th>
                            {tableHeaders.map((header, idx) => (
                              <th 
                                key={idx}
                                className="text-center"
                                style={{ 
                                  minWidth: "120px",
                                  whiteSpace: "nowrap"
                                }}
                              >
                                {header}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {section.data.map((member, rowIndex) => (
                            <tr
                              key={rowIndex}
                              className={rowIndex % 2 === 0 ? "table-light" : ""}
                            >
                              <td className="text-start align-middle" style={{ minWidth: "50px" }}>
                                {rowIndex + 1}
                              </td>
                              {tableHeaders.map((header, colIndex) => (
                                <td
                                  key={colIndex}
                                  className="text-start align-middle"
                                  style={{ minWidth: "120px" }}
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
                      <small>Total Records: {section.data.length}</small>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {!loading && sections.length === 0 && (
          <div className="row">
            <div className="col-12 text-center">
              <p className="text-muted">No faculty members found for the selected year.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Teaching;