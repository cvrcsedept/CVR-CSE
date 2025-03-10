import React, { useState, useEffect } from "react";
import * as XLSX from "xlsx";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
const ConsultancyProjects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [selectedYear, setSelectedYear] = useState("2023-2024");

  const formatDate = (dateValue) => {
    if (!dateValue) return "";

    if (!isNaN(dateValue) && dateValue > 40000) {
      const date = new Date((dateValue - 25569) * 86400000);
      return date.toLocaleDateString("en-GB");
    }

    const parsedDate = new Date(dateValue);
    if (!isNaN(parsedDate.getTime())) {
      return parsedDate.toLocaleDateString("en-GB");
    }

    const dateParts = dateValue.match(/(\d{1,2})[./-](\d{1,2})[./-](\d{2,4})/);
    if (dateParts) {
      let [_, day, month, year] = dateParts;
      if (year.length === 2) year = "20" + year;
      return `${day.padStart(2, "0")}/${month.padStart(2, "0")}/${year}`;
    }

    return dateValue;
  };

  const fetchExcelData = async (year) => {
    try {
      const response = await fetch(`/Data/Patents/${year}.xlsx`);
      const arrayBuffer = await response.arrayBuffer();
      const workbook = XLSX.read(arrayBuffer, { type: "array" });
      const sheet = workbook.Sheets[workbook.SheetNames[0]];
      const jsonData = XLSX.utils.sheet_to_json(sheet, { raw: false });

      const formattedData = jsonData.map((row) => ({
        ...row,
        "Patent filed Date (DD/MM/YYYY)": formatDate(
          row["Patent filed Date (DD/MM/YYYY)"]
        ),
        "Patent published/granted data (DD/MM/YYYY)": formatDate(
          row["Patent published/granted data (DD/MM/YYYY)"]
        ),
      }));

      setData(formattedData);
      setFilteredData(formattedData);
    } catch (error) {
      console.error("Error loading Excel file:", error);
    }
  };

  useEffect(() => {
    fetchExcelData(selectedYear);
  }, [selectedYear]);

  // Function to check if any column in a row contains multiple values
  const hasMultipleValues = (row) => {
    return Object.values(row).some(
      (value) =>
        typeof value === "string" &&
        (value.includes(",") || value.includes(";") || value.includes("\n"))
    );
  };

  return (
    <div>
      <h1 className="text-center mt-4">Patent List</h1>
      <div className="container min-vh-100 align-center justify-center">
        <label>Select Academic Year: </label>
        <select
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
        >
          <option value="2023-2024">2023-2024</option>
          <option value="2022-2023">2022-2023</option>
          <option value="2021-2022">2021-2022</option>
        </select>

        <div className="container">
          <table
            className="table  table-bordered table-striped-columns mt-5"
            border="1"
          >
            <thead>
              <tr>
                <th>S. No</th>
                <th>Patent Application No.</th>
                <th>Status of Patent (Published/Granted)</th>
                <th>Inventor(s) Name</th>
                <th>Title of the Patent</th>
                <th>Applicants Name</th>
                <th>Patent Filed Date (DD/MM/YYYY)</th>
                <th>Patent Published/Granted Date (DD/MM/YYYY)</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((patent, index) => (
                <tr
                  key={index}
                  style={{ borderBottom: "3px solidrgb(0, 0, 0)" }}
                >
                  <td>{patent["S. No"]}</td>
                  <td>{patent["Patent Application No."]}</td>
                  <td>{patent["Status of Patent (Published/Granted)"]}</td>
                  <td>{patent["Inventor(s) Name"]}</td>
                  <td>{patent["Title of the patent"]}</td>
                  <td>{patent["Applicants Name"]}</td>
                  <td>{patent["Patent filed Date (DD/MM/YYYY)"]}</td>
                  <td>
                    {patent["Patent published/granted data (DD/MM/YYYY)"]}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ConsultancyProjects;
