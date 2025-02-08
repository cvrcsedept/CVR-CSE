import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="footer-col">
            <h4>Major Links</h4>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Academics</h4>
            <ul>
              <li>
                <Link to="/academics/objectives">Objectives</Link>
              </li>
              <li>
                <Link to="/academics/academic-calender">Academic Calendar</Link>
              </li>
              <li>
                <Link to="/academics/syllabus-books">Syllabus</Link>
              </li>
              <li>
                <Link to="/academics/time-tables">Time Tables</Link>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Infrastructure</h4>
            <ul>
              <li>
                <Link to="/infrastructure/laboratories">Laboratories</Link>
              </li>
              <li>
                <Link to="/infrastructure/classrooms">Class Rooms</Link>
              </li>
              <li>
                <Link to="/infrastructure/seminar-hall">Seminar Hall</Link>
              </li>
              <li>
                <Link to="/infrastructure/library">Library</Link>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Faculty</h4>
            <ul>
              <li>
                <Link to="/faculty/teaching">Teaching</Link>
              </li>
              <li>
                <Link to="/faculty/non-teaching">Non - Teaching</Link>
              </li>
              <li>
                <Link to="/faculty/technicalstaff">Technical Staff</Link>
              </li>
              <li>
                <Link to="/faculty/admin">Admin</Link>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Research</h4>
            <ul>
              <li>
                <Link to="/research/conferences">Conferences</Link>
              </li>
              <li>
                <Link to="/research/workshops">Workshops</Link>
              </li>
              <li>
                <Link to="/research/researchprojects">FDP's</Link>
              </li>
              <li>
                <Link to="/research/consultancy-projects">
                  Patents
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Student Corner</h4>
            <ul>
              <li>
                <Link to="/studentcorner/e-resources">E-Resources</Link>
              </li>
              <li>
                <Link to="/studentcorner/student-work">Student Work</Link>
              </li>
              <li>
                <Link to="/studentcorner/gallery">Gallery</Link>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Follow Us</h4>
            <div className="social-links">
              <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
          <div className="footer-col">
            <ul
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <li>
                <h2>
                  <a href="#" className="mt-5">
                    Copyright © 2023 CVRCE CSEDEPT
                  </a>
                </h2>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
