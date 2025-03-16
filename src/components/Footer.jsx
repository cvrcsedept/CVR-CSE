import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <footer className="bg-muted py-5 mt-1">
      <div className="container">
        <div className="row g-4">
          <div className="col-12 col-md-4 col-lg-2">
            <h4 className="mb-3 text-light">Major Links</h4>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/" className="text-decoration-none text-light">
                  Home
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/about" className="text-decoration-none text-light">
                  About
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/contact" className="text-decoration-none text-light">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-12 col-md-4 col-lg-2">
            <h4 className="mb-3 text-light">Academics</h4>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link
                  to="/academics/objectives"
                  className="text-decoration-none text-light"
                >
                  Objectives
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/academics/academic-calender"
                  className="text-decoration-none text-light"
                >
                  Academic Calendar
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/academics/syllabus-books"
                  className="text-decoration-none text-light"
                >
                  Syllabus
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/academics/time-tables"
                  className="text-decoration-none text-light"
                >
                  Time Tables
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-12 col-md-4 col-lg-2">
            <h4 className="mb-3 text-light">Infrastructure</h4>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link
                  to="/infrastructure/laboratories"
                  className="text-decoration-none text-light"
                >
                  Laboratories
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/infrastructure/classrooms"
                  className="text-decoration-none text-light"
                >
                  Class Rooms
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/infrastructure/seminar-hall"
                  className="text-decoration-none text-light"
                >
                  Seminar Hall
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/infrastructure/library"
                  className="text-decoration-none text-light"
                >
                  Library
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-12 col-md-4 col-lg-2">
            <h4 className="mb-3 text-light">Faculty</h4>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link
                  to="/faculty/teaching"
                  className="text-decoration-none text-light"
                >
                  Teaching
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/faculty/techincalstaff"
                  className="text-decoration-none text-light"
                >
                  Non - Teaching
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-12 col-md-4 col-lg-2">
            <h4 className="mb-3 text-light">Research</h4>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link
                  to="/research/conferences"
                  className="text-decoration-none text-light"
                >
                  Conferences
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/research/workshops"
                  className="text-decoration-none text-light"
                >
                  Workshops
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/research/researchprojects"
                  className="text-decoration-none text-light"
                >
                  FDP's
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/research/consultancy-projects"
                  className="text-decoration-none text-light"
                >
                  Patents
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-12 col-md-4 col-lg-2">
            <h4 className="mb-3 text-light">Student Corner</h4>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link
                  to="/studentcorner/e-resources"
                  className="text-decoration-none text-light"
                >
                  E-Resources
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/studentcorner/student-work"
                  className="text-decoration-none text-light"
                >
                  Student Work
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/studentcorner/gallery"
                  className="text-decoration-none text-light"
                >
                  Gallery
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-12 text-center">
            <h4 className="mb-3 text-light">Follow Us</h4>
            <div className="d-flex justify-content-center gap-3 mb-4">
              <a
                href="https://www.facebook.com/p/CVR-College-of-EngineeringJNT-University-100071184711492/"
                className="text-light"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://x.com/cvrcoenews" className="text-light">
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="https://www.linkedin.com/school/cvrcoe/posts/?feedView=all"
                className="text-light"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
            <p className="text-light">Copyright © 2023 CVRCE CSEDEPT</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
