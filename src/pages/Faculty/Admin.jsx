import React, { useEffect, useState } from "react";
import * as XLSX from "xlsx";

import "./Admin.css";

const Admin = () => {
  const [staff, setStaff] = useState([]);
  const [filteredStaff, setFilteredStaff] = useState([]);
  const [activeDesignation, setActiveDesignation] = useState("All");

  const normalizeDesignation = (designation) => {
    return designation.toLowerCase().trim().replace(/\s+/g, " ");
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    loadExcelData();
  }, []);

  const loadExcelData = async () => {
    try {
      const response = await fetch("/Data/admin.xlsx");
      const arrayBuffer = await response.arrayBuffer();
      const workbook = XLSX.read(arrayBuffer, { type: "array" });
      const sheetName = workbook.SheetNames[0];
      const jsonData = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);

      // Log the data to see what we're working with
      console.log("Loaded data:", jsonData);

      const formattedData = jsonData.map((staffMember) => ({
        ...staffMember,
        normalizedDesignation: normalizeDesignation(staffMember.Designation || ""),
      }));

      setStaff(formattedData);
      setFilteredStaff(formattedData); // Initially show all staff
      
      // Log formatted data to verify
      console.log("Formatted data:", formattedData);
    } catch (error) {
      console.error("Error loading staff data:", error);
      setStaff([]);
      setFilteredStaff([]);
    }
  };

  const filterStaff = (designation, data = staff) => {
    setActiveDesignation(designation);
    console.log("Filtering by:", designation);

    if (designation === "All") {
      setFilteredStaff(data);
      return;
    }

    // Normalize the selected designation for comparison
    const normalizedSelectedDesignation = normalizeDesignation(designation);

    const filtered = data.filter((member) => {
      // Make sure Designation exists before normalizing
      const memberDesignation = member.Designation || "";
      const normalizedMemberDesignation = normalizeDesignation(memberDesignation);
      
      // Log for debugging
      console.log("Comparing:", {
        memberDesignation,
        normalizedMemberDesignation,
        normalizedSelectedDesignation,
        match: normalizedMemberDesignation.includes(normalizedSelectedDesignation)
      });
      
      // Simple string matching instead of switch case
      return normalizedMemberDesignation.includes(normalizedSelectedDesignation);
    });

    console.log("Filtered results:", filtered);
    setFilteredStaff(filtered);
  };

  const designationOptions = [
    "All",
    "Sr. System Admin.",
    "System Admin.",
    "Asst. System Admin."
  ];

  return (
    <div className="teaching-faculty-wrapper">
      {/* Hero Section */}
      <div className="faculty-hero position-relative">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8 mx-auto text-center text-white">
              <h1 className="display-4 mb-3 faculty-title">
                Our Admin Staff
              </h1>
              <p className="lead mb-4">
                Dedicated Admin staff Supporting Our Institution
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Staff Filter and Grid */}
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
                      onClick={() => filterStaff(designation)}
                    >
                      {designation} 
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Staff Grid */}
        <div className="row g-4">
          {filteredStaff.length > 0 ? (
            filteredStaff.map((member, index) => (
              <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3">
                <div className="faculty-card">
                  <div className="faculty-card-inner">
                    <div className="faculty-image-wrapper">
                      <img
                        src={`/images/CVR Logo.png`}
                        alt={member["Name of the Staff Member"] || "Staff Member"}
                        className="faculty-image"
                        onError={(e) => {
                          e.target.src = "/images/default-avatar.png";
                        }}
                      />
                    </div>
                    <div className="faculty-details">
                      <h4 className="faculty-name">
                        {member["Name of the Staff Member"] || "No Name"}
                      </h4>
                      <p className="faculty-designation">
                        {member["Designation"] || "No Designation"}
                      </p>
                      <p className="faculty-join-date">Joined: {member["DOJ"] || "N/A"}</p>
                      <p className="faculty-id">ID: {member["College ID No."] || "N/A"}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-12 text-center">
              <p className="text-muted">No staff members found.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Admin;