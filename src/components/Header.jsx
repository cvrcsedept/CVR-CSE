import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles.css";

const Navbar = () => {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const [openDropdowns, setOpenDropdowns] = useState({});
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Update window width
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);

      // Close side menu and reset dropdowns on larger screens
      if (window.innerWidth >= 768) {
        setIsSideMenuOpen(false);
        setOpenDropdowns({});
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Toggle side menu
  const toggleSideMenu = () => {
    setIsSideMenuOpen(!isSideMenuOpen);
    // Reset dropdowns when closing side menu
    if (isSideMenuOpen) {
      setOpenDropdowns({});
    }
  };

  // Toggle dropdown in mobile view
  const toggleDropdown = (label) => {
    setOpenDropdowns((prev) => ({
      ...Object.fromEntries(Object.entries(prev).map(([key]) => [key, false])),
      [label]: !prev[label],
    }));
  };

  const menuStructure = [
    { label: "Home", path: "/", type: "link" },
    {
      label: "Academics",
      type: "dropdown",
      items: [
        { label: "Objectives", path: "/academics/objectives" },
        { label: "Academic Calendar", path: "/academics/academic-calender" },
        { label: "Syllabus Books", path: "/academics/syllabus-books" },
        { label: "Time Tables", path: "/academics/time-tables" },
      ],
    },
    {
      label: "Infrastructure",
      type: "dropdown",
      items: [
        { label: "Laboratories", path: "/infrastructure/laboratories" },
        { label: "Classrooms", path: "/infrastructure/classrooms" },
        { label: "Seminar Hall", path: "/infrastructure/seminar-hall" },
        { label: "Library", path: "/infrastructure/library" },
      ],
    },
    {
      label: "Faculty",
      type: "dropdown",
      items: [
        { label: "Teaching", path: "/faculty/teaching" },
        { label: "Non-Teaching", path: "/faculty/technicalstaff" },
      ],
    },
    {
      label: "Student Corner",
      type: "dropdown",
      items: [
        { label: "E-Resources", path: "/studentcorner/e-resources" },
        { label: "Gallery", path: "/studentcorner/gallery" },
        { label: "Placements", path: "/studentcorner/Placements" },
      ],
    },
    {
      label: "Publications Hub",
      type: "dropdown",
      items: [
        { label: "Technical", path: "/publicationsHub/Technical" },
        { label: "Non Technical", path: "/publicationsHub/NonTechnical" },
        { label: "News Letter", path: "/publicationsHub/NewsLetter" },
      ],
    },
    {
      label: "Research",
      type: "dropdown",
      items: [
        { label: "Conferences", path: "/research/conferences" },
        { label: "Workshops", path: "/research/workshops" },
        { label: "FDP's", path: "/research/researchprojects" },
        { label: "Patents", path: "/research/consultancy-projects" },
        { label: "Publications", path: "/research/publications" },
      ],
    },
    { label: "About", path: "/about", type: "link" },
    { label: "Contact", path: "/contact", type: "link" },
  ];

  // Render desktop navbar
  const renderDesktopNavbar = () => (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-blue py-2"
      style={{ height: "120px", display: "flex", alignItems: "center" }}
    >
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <Link className="navbar-brand" to="/">
          <img
            src="../images/logo.png"
            className="img-fluid"
            alt="CVR LOGO"
            style={{ maxWidth: "100%", height: "70px" }}
          />
        </Link>

        <div className="d-flex flex-column align-items-end">
          <span
            className="navbar-text text-white mb-1 "
            style={{
              fontSize: "1.7rem",
              fontWeight: "bold",
              textAlign: "center",
              lineHeight: "1.0",
              marginRight: "15%",
              paddingTop: "1rem",
            }}
          >
            Department of Computer Science and Engineering
          </span>
          <div className="collapse navbar-collapse mx-2">
            <ul
              className="navbar-nav"
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "15px",
              }}
            >
              {menuStructure.map((menu, index) => (
                <li
                  key={index}
                  className={`nav-item ${
                    menu.type === "dropdown" ? "dropdown" : ""
                  } marlin`}
                  style={{
                    fontSize: "1.07rem",
                    marginBottom: ".5rem",
                    fontWeight: "500",
                  }}
                >
                  {menu.type === "link" ? (
                    <Link className="nav-link" to={menu.path}>
                      {menu.label}
                    </Link>
                  ) : (
                    <>
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        {menu.label}
                      </a>
                      <ul
                        className="dropdown-menu"
                        style={{ fontSize: "1rem" }}
                      >
                        {menu.items.map((item, itemIndex) => (
                          <li key={itemIndex}>
                            <Link className="dropdown-item" to={item.path}>
                              {item.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );

  // Render mobile navbar
  const renderMobileNavbar = () => (
    <>
      <nav className="navbar navbar-dark bg-blue">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img
              src="../images/logo.png"
              className="img-fluid"
              alt="CVR LOGO"
              style={{ maxWidth: "100%", height: "60px" }}
            />
            <span
              className="navbar-text text-white d-none d-md-block "
              style={{
                fontSize: "1.45rem",
                fontWeight: "bold",
                textAlign: "center",
                lineHeight: "1.0",
                marginRight: "3rem",
                paddingTop: "1rem",
              }}
            >
              Department of Computer Science and Engineering
            </span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleSideMenu}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>

      {/* Glassmorphic Side Menu */}
      <div
        className={`side-menu ${isSideMenuOpen ? "open" : ""}`}
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          width: "300px",
          height: "100%",
          backgroundColor: "rgba(255, 255, 255, 0.2)",
          backdropFilter: "blur(15px)",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
          transition: "transform 0.3s ease-in-out",
          transform: isSideMenuOpen ? "translateX(0)" : "translateX(100%)",
          zIndex: 1050,
          overflowY: "auto",
          fontSize: "0.9rem",
        }}
      >
        <div className="side-menu-content p-3">
          <button
            className="btn-close btn-close-white position-absolute top-0 end-0 m-3"
            onClick={toggleSideMenu}
          ></button>

          <div className="mt-5 px-2">
            {menuStructure.map((menu, index) => (
              <div key={index} className="mb-3">
                {menu.type === "link" ? (
                  <Link
                    className="text-white text-decoration-none d-block py-2"
                    to={menu.path}
                    onClick={toggleSideMenu}
                  >
                    {menu.label}
                  </Link>
                ) : (
                  <div>
                    <button
                      className={`btn text-white w-100 text-start ${
                        openDropdowns[menu.label] ? "active" : ""
                      }`}
                      onClick={() => toggleDropdown(menu.label)}
                      style={{
                        backgroundColor: openDropdowns[menu.label]
                          ? "rgba(255,255,255,0.2)"
                          : "transparent",
                        borderRadius: "5px",
                      }}
                    >
                      {menu.label}
                      <i
                        className={`float-end mt-1 ${
                          openDropdowns[menu.label]
                            ? "fa fa-chevron-up"
                            : "fa fa-chevron-down"
                        }`}
                      ></i>
                    </button>

                    {openDropdowns[menu.label] && (
                      <div className="pl-3 mt-2">
                        {menu.items.map((item, itemIndex) => (
                          <Link
                            key={itemIndex}
                            className="d-block text-white text-decoration-none mb-2"
                            to={item.path}
                            onClick={toggleSideMenu}
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Overlay when side menu is open */}
      {isSideMenuOpen && (
        <div
          className="side-menu-overlay"
          onClick={toggleSideMenu}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 1040,
          }}
        />
      )}
    </>
  );

  // Render appropriate navbar based on window width
  return (
    <>{windowWidth >= 992 ? renderDesktopNavbar() : renderMobileNavbar()}</>
  );
};

export default Navbar;
