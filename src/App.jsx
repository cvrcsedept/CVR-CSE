import Home from "./pages/Home";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NothingFoundPage from "./pages/NothingFoundPage";
import Publications from "./pages/Research/publications";
import Placements from "./pages/StudentCorner/Placements";

import {
  AcademicCalender,
  Objectives,
  SyllabusBooks,
  TimeTable,
} from "./pages/Academics";
import { Teaching, TechnicalStaff } from "./pages/Faculty";
import {
  Classrooms,
  Laboratories,
  SeminarHall,
  Library,
} from "./pages/Infrastructure";
import { EResources, Gallery } from "./pages/StudentCorner";
import {
  Conferences,
  ConsultancyProjects,
  ResearchProjects,
  Workshops,
} from "./pages/Research";
import Technical from "./pages/Publications Hub/Technical";
import NonTechnical from "./pages/Publications Hub/NonTechnical";
import NewsLetter from "./pages/Publications Hub/NewsLetter";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/academics/objectives" element={<Objectives />} />
        <Route
          path="/academics/academic-calender"
          element={<AcademicCalender />}
        />
        <Route path="/academics/syllabus-books" element={<SyllabusBooks />} />
        <Route path="/academics/time-tables" element={<TimeTable />} />
        <Route path="/infrastructure/laboratories" element={<Laboratories />} />
        <Route path="/infrastructure/classrooms" element={<Classrooms />} />
        <Route path="/infrastructure/seminar-hall" element={<SeminarHall />} />
        <Route path="/infrastructure/library" element={<Library />} />
        <Route path="/studentcorner/e-resources" element={<EResources />} />
        <Route path="/studentcorner/gallery" element={<Gallery />} />
        <Route path="/studentcorner/Placements" element={<Placements />} />
        <Route path="/publicationsHub/Technical" element={<Technical />} />
        <Route
          path="/publicationsHub/NonTechnical"
          element={<NonTechnical />}
        />
        <Route path="/publicationsHub/NewsLetter" element={<NewsLetter />} />
        <Route path="/research/conferences" element={<Conferences />} />
        <Route path="/research/publications" element={<Publications />} />
        <Route
          path="/research/consultancy-projects"
          element={<ConsultancyProjects />}
        />
        <Route
          path="/research/researchprojects"
          element={<ResearchProjects />}
        />
        <Route path="/research/workshops" element={<Workshops />} />

        <Route path="/faculty/teaching" element={<Teaching />} />
        <Route path="/faculty/technicalstaff" element={<TechnicalStaff />} />

        {/* 404 Route */}
        <Route path="*" element={<NothingFoundPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
