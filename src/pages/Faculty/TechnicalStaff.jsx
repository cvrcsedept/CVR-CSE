import React, { useEffect, useState } from "react";
import * as XLSX from "xlsx";
import BackToTopButton from "../../components/BackToTopButton";

import "./TechnicalStaff.css";

const NonTeaching = () => {
  const [staff, setStaff] = useState([]);
  const [filteredStaff, setFilteredStaff] = useState([]);
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
      const response = await fetch("/Data/non-teaching.xlsx");
      const arrayBuffer = await response.arrayBuffer();
      const workbook = XLSX.read(arrayBuffer, { type: "array" });
      const sheetName = workbook.SheetNames[0];
      const jsonData = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);

      const formattedData = jsonData.map((staffMember) => ({
        ...staffMember,
        normalizedDesignation: normalizeDesignation(staffMember.Designation),
      }));

      setStaff(formattedData);
      filterStaff("All", formattedData);
    } catch (error) {
      console.error("Error loading staff data:", error);
      setStaff([]);
      setFilteredStaff([]);
    }
  };

  const filterStaff = (designation, data = staff) => {
    setActiveDesignation(designation);

    if (designation === "All") {
      setFilteredStaff(data);
      return;
    }

    const filtered = data.filter((member) => {
      const normDesignation = member.normalizedDesignation;
      switch (designation) {
        case "Sr. Programmer":
          return normDesignation.includes("sr.programmer");
        case "Programmer":
          return normDesignation === "programmer";
        default:
          return true;
      }
    });

    setFilteredStaff(filtered);
  };

  const designationOptions = ["All", "Sr. Programmer", "Programmer"];

  return (
    <div className="teaching-faculty-wrapper">
      {/* Hero Section */}
      <div className="faculty-hero position-relative">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8 mx-auto text-center text-white">
              <h1 className="display-4 mb-3 faculty-title">
                Our Technical Staff
              </h1>
              <p className="lead mb-4">
                Dedicated Technical Professionals Supporting Our Institution
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
                {activeDesignation} Staff
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
                      {designation} Staff
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
                        alt={member["Name of the Staff Member"]}
                        className="faculty-image"
                        onError={(e) => {
                          e.target.src = "/images/default-avatar.png";
                        }}
                      />
                    </div>
                    <div className="faculty-details">
                      <h4 className="faculty-name">
                        {member["Name of the Staff Member"]}
                      </h4>
                      <p className="faculty-designation">
                        {member["Designation"]}
                      </p>
                      <p className="faculty-join-date">
                        Joined: {member["DOJ"]}
                      </p>
                      <p className="faculty-id">
                        ID: {member["College ID No."]}
                      </p>
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

      <BackToTopButton />
    </div>
  );
};

export default NonTeaching;
