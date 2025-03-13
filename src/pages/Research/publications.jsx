import React, { useEffect, useState } from "react";
import * as XLSX from "xlsx";
import BackToTopButton from "../../components/BackToTopButton";

const Publications = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [selectedYear, setSelectedYear] = useState("2023-2024"); // Default to 2023-2024
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Standard column definitions - expected in all datasets
  const expectedColumns = {
    "S.No": "S.No",
    "Name of the faculty": "Name of the faculty",
    "Title of the publication": "Title of the publication",
    // "Position of the author": "Position of the author",
    "Indexed by Scopus/SCI/any": "Indexed by Scopus/SCI/any",
    // "Number of citations": "Number of citations",
    "Name of the Journal/Publisher": "Name of the Journal/Publisher",
    // "ISSN/ISBN": "ISSN/ISBN",
    // "Vol. No./ISS. No./Page Nos": "Vol. No./ISS. No./Page Nos",
    "link to the paper": "link to the paper",
  };

  // Function to normalize data - ensure all rows have all expected columns
  const normalizeData = (jsonData) => {
    return jsonData.map((row) => {
      const normalizedRow = { ...row };
      // Ensure all expected columns exist
      Object.keys(expectedColumns).forEach((col) => {
        if (!normalizedRow.hasOwnProperty(col)) {
          normalizedRow[col] = ""; // Set empty string for missing columns
        }
      });
      return normalizedRow;
    });
  };

  // Function to load data based on selected year
  const fetchExcelData = async (year) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`/Data/publications/${year}.xlsx`);
      if (!response.ok) {
        throw new Error(`Failed to fetch data for ${year}`);
      }

      const arrayBuffer = await response.arrayBuffer();
      const workbook = XLSX.read(arrayBuffer, { type: "array" });
      const sheet = workbook.Sheets[workbook.SheetNames[0]];
      const jsonData = XLSX.utils.sheet_to_json(sheet);

      // Log column headers for debugging
      if (jsonData.length > 0) {
        console.log(`Columns in ${year} data:`, Object.keys(jsonData[0]));
      } else {
        console.warn(`No data found for ${year}`);
      }

      // Normalize the data to ensure all expected columns exist
      const normalizedData = normalizeData(jsonData);

      setData(normalizedData);
      setFilteredData(normalizedData);
    } catch (error) {
      console.error(`Error loading Excel file for ${year}:`, error);
      setError(`Failed to load data for ${year}. ${error.message}`);
      setData([]);
      setFilteredData([]);
    } finally {
      setLoading(false);
    }
  };

  // Load data when component mounts or when the year changes
  useEffect(() => {
    fetchExcelData(selectedYear);
  }, [selectedYear]);

  // Function to safely display cell values, ensuring 0 is shown as "0"
  const displayCellValue = (value, columnName) => {
    // Special handling for citations to ensure 0 is displayed
    if (columnName === "Number of citations") {
      return value === 0 || value === "0" ? "0" : value || "";
    }

    // For link column, display as button
    if (columnName === "link to the paper" && value) {
      return (
        <a
          href={value}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-sm btn-outline-primary"
        >
          View Paper
        </a>
      );
    }

    // Default handling for other columns
    return value || "";
  };

  return (
    <div>
      <h1 className="text-center mt-4">List of Publications</h1>
      <div className="container-fluid">
        <div className="row mb-3">
          <div className="col-12">
            <label className="me-2">Select Academic Year: </label>
            <select
              className="form-select d-inline-block w-auto"
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
            >
              <option value="2023-2024">2023-2024</option>
              <option value="2022-2023">2022-2023</option>
              <option value="2021-2022">2021-2022</option>
            </select>
          </div>
        </div>

        {loading && (
          <div className="text-center my-4">Loading publications data...</div>
        )}

        {error && <div className="alert alert-danger">{error}</div>}

        {!loading && !error && filteredData.length === 0 && (
          <div className="alert alert-info">
            No publications found for the selected year.
          </div>
        )}

        {!loading && filteredData.length > 0 && (
          <div
            className="table-responsive px-3"
            style={{ overflowX: "auto", width: "100%" }}
          >
            <table
              className="table table-hover mt-3 table-striped-columns"
              style={{ minWidth: "1200px" }}
            >
              <thead>
                <tr>
                  {Object.values(expectedColumns).map((col, index) => (
                    <th
                      key={index}
                      style={getColumnStyle(
                        Object.keys(expectedColumns)[index]
                      )}
                    >
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filteredData.map((publication, index) => (
                  <tr key={index}>
                    {Object.keys(expectedColumns).map((col, colIndex) => (
                      <td key={colIndex} style={getColumnStyle(col)}>
                        {displayCellValue(publication[col], col)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
      <BackToTopButton />
    </div>
  );
};

// Function to set column-specific styles
const getColumnStyle = (columnName) => {
  switch (columnName) {
    case "S.No":
      return { width: "5%" };
    case "Name of the faculty":
      return { width: "12%" };
    case "Title of the publication":
      return { width: "20%" };
    case "Position of the author":
      return { width: "7%" };
    case "Indexed by Scopus/SCI/any":
      return { width: "10%" };
    case "Number of citations":
      return { width: "7%" };
    case "Name of the Journal/Publisher":
      return { width: "15%" };
    case "ISSN/ISBN":
      return { width: "8%" };
    case "Vol. No./ISS. No./Page Nos":
      return { width: "8%" };
    case "link to the paper":
      return { width: "8%" };
    default:
      return {};
  }
};

export default Publications;
