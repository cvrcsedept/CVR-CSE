import React, { useEffect, useState } from "react";
import * as XLSX from "xlsx";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const Conferences = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [selectedYear, setSelectedYear] = useState("2023-2024"); // Default to 2023-2024

  // Function to load data based on selected year
  const fetchExcelData = async (year) => {
    try {
      const response = await fetch(`/Data/Conferences/conferences.xlsx`);
      const arrayBuffer = await response.arrayBuffer();
      const workbook = XLSX.read(arrayBuffer, { type: "array" });
      const sheet = workbook.Sheets[workbook.SheetNames[0]];
      const jsonData = XLSX.utils.sheet_to_json(sheet);

      setData(jsonData);
      setFilteredData(jsonData); // Load full dataset initially
    } catch (error) {
      console.error("Error loading Excel file:", error);
    }
  };

  // Load data when component mounts or when the year changes
  useEffect(() => {
    fetchExcelData(selectedYear);
  }, [selectedYear]);

  return (
    <>
      <h1 className="text-center mt-4  ">Conferences List</h1>
      <div className="container vh-100 align-center justify-center ">
        {/* Dropdown to select which academic year's dataset to load */}
        <label className="text">Select Academic Year: </label>
        <select
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
        >
          <option value="2023-2024">2023-2024</option>
        </select>
        <div className="container">
          {/* Workshop Data Table */}
          <table
            className=" table table-hover mt-5 table-striped-columns"
            border="1"
          >
            <thead>
              <tr>
                <th>S. No</th>
                <th>Year</th>
                <th>Name of Resource Person</th>
                <th>Date</th>
                <th>Title</th>
                <th>From</th>
                <th>Count</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((workshop, index) => (
                <tr key={index}>
                  <td>{workshop["S. No"]}</td>
                  <td>{workshop["Year"]}</td>
                  <td>{workshop["Name of Resource Person"]}</td>
                  <td>{workshop["Date"]}</td>
                  <td>{workshop["Title"]}</td>
                  <td>{workshop["From"]}</td>
                  <td>{workshop["Count"]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Conferences;
