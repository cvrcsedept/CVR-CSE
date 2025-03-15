import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./EResources.css";
import BackToTopButton from "../../components/BackToTopButton";

const EResources = () => {
  const [activeYear, setActiveYear] = useState(null);
  const programOutcomes = [
    {
      year: "First Year I-Semester",
      subjects: [
        {
          name: "Problem Solving Through C",
          links: [{name:"gfg",url:"https://www.geeksforgeeks.org/c-programming-language/"},
            {name:"youtube",url:"https://www.youtube.com/watch?v=LfaMVlDaQ24&pp=ygUZYyBwcm9ncmFtbWluZyBmdWxsIGNvdXJzZQ%3D%3D"},
            {name:"nptel",url:"https://onlinecourses.nptel.ac.in/noc24_cs42/preview"}
          ],
        },
      ],
    },
    {
      year: "First Year II-Semester",
      subjects: [{ name: "Data Structures Through C", links: [{name:"gfg",url:"https://www.geeksforgeeks.org/learn-dsa-in-c/"},
        {name:"nptel",url:"https://archive.nptel.ac.in/noc/courses/noc18/SEM1/noc18-cs25/"},
        {name:"youtube",url:"https://www.youtube.com/watch?v=MtVZAXepMPM&pp=ygUZZHNhIHRocm91Z2ggYyBmdWxsIGNvdXJzZQ%3D%3D"}
      ] }],
    },
    {
      year: "Second Year I-Semester",
      subjects: [
        {
          name: "Object Oriented Programming Through Java",
          links: [
            { name: "GFG", url: "https://www.geeksforgeeks.org/object-oriented-programming-oops-concept-in-java/" },
            { name: "YouTube", url: "https://www.youtube.com/watch?v=eIrMbAQSU34" },
            { name: "NPTEL", url: "https://archive.nptel.ac.in/courses/106/105/106105224/" }
          ],
        },
        {
          name: "Discrete Mathematics",
          links: [
            { name: "GFG", url: "https://www.geeksforgeeks.org/discrete-mathematics-tutorial/" },
            { name: "YouTube", url: "https://www.youtube.com/watch?v=0NSWsD6cJFI" },
            { name: "NPTEL", url: "https://archive.nptel.ac.in/courses/111/106/111106086/" }
          ],
        },
        {
          name: "Computer Oriented Statistical Methods",
          links: [
            { name: "YouTube", url: "https://www.youtube.com/watch?v=5Ql_wyqQG_k" },
            { name: "NPTEL", url: "https://archive.nptel.ac.in/courses/111/105/111105077/" }
          ],
        },
        {
          name: "Digital Electronics",
          links: [
            { name: "GFG", url: "https://www.geeksforgeeks.org/digital-electronics-logic-design-tutorials/" },
            { name: "YouTube", url: "https://www.youtube.com/watch?v=upxugEuj4go" },
            { name: "NPTEL", url: "https://archive.nptel.ac.in/courses/108/105/108105132/" }
          ],
        },
        {
          name: "Basic Electrical And Electronics Engineering",
          links: [
            { name: "YouTube", url: "https://www.youtube.com/watch?v=WaJxkIXzS5A" },
            { name: "NPTEL", url: "https://archive.nptel.ac.in/courses/108/105/108105053/" }
          ],
        },
      ],
    },
    {
      year: "Second Year II-Semester",
      subjects: [
        {
          name: "Advanced Data Structures Through Java",
          links: [
            { name: "Nptel", url: "https://archive.nptel.ac.in/courses/106/105/106105225/" },
            { name: "YouTube", url: "https://www.youtube.com/watch?v=rZ41y93P2Qo" },
            { name: "GFG", url: "https://www.geeksforgeeks.org/advanced-data-structures/" }
          ],
        },
        {
          name: "Computer Organization And Architecture",
          links: [
            { name: "Nptel", url: "https://archive.nptel.ac.in/courses/106/105/106105163/" },
            { name: "YouTube", url: "https://www.youtube.com/watch?v=NgShP1B8jcc" },
            { name: "GFG", url: "https://www.geeksforgeeks.org/computer-organization-and-architecture-tutorials/" }
          ],
        },
        {
          name: "Database Management Systems",
          links: [
            { name: "Nptel", url: "https://archive.nptel.ac.in/courses/106/105/106105175/" },
            { name: "YouTube", url: "https://www.youtube.com/watch?v=Z5B2Mxn5lJY" },
            { name: "GFG", url: "https://www.geeksforgeeks.org/dbms/" }
          ],
        },
        {
          name: "Operating Systems",
          links: [
            { name: "Nptel", url: "https://archive.nptel.ac.in/courses/106/105/106105214/" },
            { name: "YouTube", url: "https://www.youtube.com/watch?v=26QPDBe-NB8" },
            { name: "GFG", url: "https://www.geeksforgeeks.org/operating-systems/" }
          ],
        },
        {
          name: "Software Engineering",
          links: [
            { name: "Nptel", url: "https://archive.nptel.ac.in/courses/106/105/106105182/" },
            { name: "YouTube", url: "https://www.youtube.com/watch?v=PdUKE8hElNA" },
            { name: "GFG", url: "https://www.geeksforgeeks.org/software-engineering/" }
          ],
        }
      ],
    },
    {
      year: "Third Year I-Semester",
      subjects: [
        {
          name: "Web Technologies",
          links: [
            { name: "GFG", url: "https://www.geeksforgeeks.org/web-technology/" },
            { name: "YouTube", url: "https://www.youtube.com/watch?v=SIy5ZjoGzDQ" },
            { name: "NPTEL", url: "https://onlinecourses.swayam2.ac.in/nou24_cs09/preview" }
          ],
        },
        {
          name: "Computer Networking",
          links: [
            { name: "GFG", url: "https://www.geeksforgeeks.org/computer-network-tutorials/" },
            { name: "YouTube", url: "https://www.youtube.com/watch?v=IPvYjXCs" },
            { name: "NPTEL", url: "https://archive.nptel.ac.in/courses/106/105/106105183/" }
          ],
        },
        {
          name: "Algorithm Design and Analysis",
          links: [{name:"Nptel", url:"https://archive.nptel.ac.in/courses/106/106/106106131/"},
            { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/fundamentals-of-algorithms/" },
            { name: "YouTube", url: "https://www.youtube.com/watch?v=rL8X2mlNHPM" }
          ],
        },
        {
          name: "Data Science",
          links: [{name:"Nptel", url:"https://onlinecourses.nptel.ac.in/noc21_cs69/preview"},
            { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/data-science-tutorial/" },
            { name: "YouTube", url: "https://www.youtube.com/watch?v=ua-CiDNNj30" }
          ],
        },
        {
          name: "Computer Graphics(PE-I)",
          links: [
            {name:"Nptel", url:"https://archive.nptel.ac.in/courses/106/103/106103224/"},
            {name:"GFG", url:"https://www.geeksforgeeks.org/computer-graphics-2/"},
            {name:"Youtube", url:"https://www.youtube.com/watch?v=uTBKa1PSyf8&list=PLYwpaL_SFmcAtxMe7ahYC4ZYjQHun_b-T"}           
          ],
        },
        {
          name: "Distributed Databases (PE-I)",
          links: [{name:"Nptel", url:"https://onlinecourses.nptel.ac.in/noc21_cs87/preview"},
            {name:"GFG", url:"https://www.geeksforgeeks.org/distributed-database-system/"},
            {name:"Youtube", url:"https://www.youtube.com/watch?v=W-h7yAxhcnU&list=PL4zbsJyFZHrkKMlK-Y-TIy4FxyPFId8-t"}
          ],
        },
        {
          name: "Principles of Programming Languages (PE-I)",
          links: [{name:"Nptel", url:"https://archive.nptel.ac.in/courses/106/102/106102067/"},
            {name:"GFG", url:"https://www.geeksforgeeks.org/principle-of-programming-languages-set-1/"},
            {name:"Youtube", url:"https://www.youtube.com/watch?v=Nhbin4i7gaY&pp=ygUucHJpbmNpcGxlIG9mIHByb2dyYW1taW5nIGxhbmd1YWdlcyBmdWxsIGNvdXJzZQ%3D%3D"}
          ],
        },
        {
          name: "Digital Image Processing and Computer Vision (PE- I)",
          links: [{name:"Nptel", url:"https://archive.nptel.ac.in/courses/117/105/117105135/"},
            {name:"GFG", url:"https://www.geeksforgeeks.org/digital-image-processing-tutorial/"},
            {name:"Youtube", url:"https://www.youtube.com/watch?v=rSGMXktIsYI&list=PL2mBI0yFsKk-p73KQ4iPdsi10hQC4Zd-0"}
          ],
        }
      ],
    },
    {
      year: "Third Year II-Semester",
      subjects: [
        {
          name: "Artificial Intelligence and Machine Learning",
          links: [{name:"Nptel", url:"https://onlinecourses.nptel.ac.in/noc22_cs56/preview"},
            {name:"GFG", url:"https://onlinecourses.nptel.ac.in/noc22_cs56/preview"},
            {name:"Youtube", url:"https://onlinecourses.nptel.ac.in/noc22_cs56/preview"}
          ],
        },
        { name: "Full Stack Development", 
          links: [{name:"Nptel",url:"https://nptel.ac.in/courses/128108025"},
            {name:"GFG",url:"https://nptel.ac.in/courses/128108025"},
            {name:"Youtube",url:"https://nptel.ac.in/courses/128108025"}
          ] 
        },
        { name: "Cloud Computing and Devops", 
          links: [{name:"Nptel",url:"https://onlinecourses.nptel.ac.in/noc19_cs64/preview"},
            {name:"GFG",url:"https://onlinecourses.nptel.ac.in/noc19_cs64/preview"},
            {name:"Youtube",url:"https://onlinecourses.nptel.ac.in/noc19_cs64/preview"}
          ] },
        {
          name: "Automata Theory and Compiler Design",
          links: [{name:"Nptel",url:"https://archive.nptel.ac.in/courses/106/106/106106049/"},
            {name:"GFG",url:"https://archive.nptel.ac.in/courses/106/106/106106049/"},
            {name:"Youtube",url:"https://archive.nptel.ac.in/courses/106/106/106106049/"}
          ],
        },
        { name: "Crytography and Essentials of Network Security(PE-II)", 
          links: [{name:"Nptel",url:"https://archive.nptel.ac.in/courses/106/105/106105162/"},
            {name:"GFG",url:"https://archive.nptel.ac.in/courses/106/106/106106049/"},
            {name:"Youtube",url:"https://archive.nptel.ac.in/courses/106/106/106106049/"}
          ] 
        },
        {
          name: "Internet of Things(PE-II)",
          links: [{name:"Nptel",url:"https://archive.nptel.ac.in/courses/106/105/106105166/"},
            {name:"GFG",url:"https://archive.nptel.ac.in/courses/106/106/106106049/"},
            {name:"Youtube",url:"https://archive.nptel.ac.in/courses/106/106/106106049/"}
          ],
        },
        {
          name: "Distributed Systems(PE-II)",
          links: [{name:"Nptel",url:"https://archive.nptel.ac.in/courses/106/106/106106168/"},
            {name:"GFG",url:"https://archive.nptel.ac.in/courses/106/106/106106049/"},
            {name:"Youtube",url:"https://archive.nptel.ac.in/courses/106/106/106106049/"}
          ],
        },
        { name: "Artificial Neural Networks and Graphical Models (PE-II)", 
          links: [{name:"Nptel",url:"https://nptel.ac.in/courses/117105084"},
            {name:"GFG",url:"https://archive.nptel.ac.in/courses/106/106/106106049/"},
            {name:"Youtube",url:"https://archive.nptel.ac.in/courses/106/106/106106049/"}
          ] },
      ],
    },
    {
      year: "Fourth Year I-Semester",
      subjects: [
        { name: "Linux Programming", links: [{name:"Nptel",url:"https://archive.nptel.ac.in/courses/117/106/117106113/"},
          {name:"GFG",url:"https://archive.nptel.ac.in/courses/106/106/106106049/"},
            {name:"Youtube",url:"https://archive.nptel.ac.in/courses/106/106/106106049/"}
        ] },
        {
          name: "Data Warehousing and Data Mining",
          links: [{name:"Nptel",url:"https://onlinecourses.nptel.ac.in/noc21_cs06/preview"},
            {name:"GFG",url:"https://archive.nptel.ac.in/courses/106/106/106106049/"},
            {name:"Youtube",url:"https://archive.nptel.ac.in/courses/106/106/106106049/"}
          ],
        },
        { name: "DEEP LEARNING (DL) (PROFESSIONAL ELECTIVE II)", links: [{name:"Nptel",url:"https://archive.nptel.ac.in/courses/106/106/106106184/"},
          {name:"GFG",url:"https://archive.nptel.ac.in/courses/106/106/106106049/"},
            {name:"Youtube",url:"https://archive.nptel.ac.in/courses/106/106/106106049/"}
        ] },
        { name: "VIRTUAL REALITY (VR) (PROFESSIONAL ELECTIVE II)", links: [{name:"Nptel",url:"https://archive.nptel.ac.in/courses/121/106/121106013/"},
          {name:"GFG",url:"https://archive.nptel.ac.in/courses/106/106/106106049/"},
            {name:"Youtube",url:"https://archive.nptel.ac.in/courses/106/106/106106049/"}
        ] },
        { name: "VISUAL PROGRAMMING (PROFESSIONAL ELECTIVE II)", links: [{name:"Youtube",url:"https://www.youtube.com/watch?v=Y8c1IHZs5qc&list=PLTd6ceoshpremSFQxYM4L0p4Q6hR-4e4J"},
          {name:"GFG",url:"https://archive.nptel.ac.in/courses/106/106/106106049/"},
            {name:"Youtube",url:"https://archive.nptel.ac.in/courses/106/106/106106049/"}
        ] },
        {
          name: "Web services and Cloud Computing",
          links: [{name:"Nptel",url:"https://archive.nptel.ac.in/courses/106/105/106105167/"},
            {name:"GFG",url:"https://archive.nptel.ac.in/courses/106/106/106106049/"},
            {name:"Youtube",url:"https://archive.nptel.ac.in/courses/106/106/106106049/"}
          ],
        },
      ],
    },
    {
      year: "Fourth Year II-Semester",
      subjects: [
        { name: "ETHICAL HACKING - EH (PROFESSIONAL ELECTIVE IV)", links: [{name:"Nptel",url:"https://archive.nptel.ac.in/courses/106/105/106105217/"},
          {name:"GFG",url:"https://archive.nptel.ac.in/courses/106/106/106106049/"},
            {name:"Youtube",url:"https://archive.nptel.ac.in/courses/106/106/106106049/"}
        ] },
        { name: "BLOCK CHAIN TECHNOLOGIES - BCT (PROFESSIONAL ELECTIVE V)", links: [{name:"Nptel",url:"https://archive.nptel.ac.in/courses/106/105/106105235/"},
          {name:"GFG",url:"https://archive.nptel.ac.in/courses/106/106/106106049/"},
            {name:"Youtube",url:"https://archive.nptel.ac.in/courses/106/106/106106049/"}
        ] },
        { name: "HUMAN COMPUTER INTERACTION - HCI", links: [{name:"Nptel",url:"https://archive.nptel.ac.in/courses/106/106/106106177/"},
          {name:"GFG",url:"https://archive.nptel.ac.in/courses/106/106/106106049/"},
            {name:"Youtube",url:"https://archive.nptel.ac.in/courses/106/106/106106049/"}
        ] },
      ],
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="e-resources-wrapper">
      {/* Hero Section with Animated Background */}
      <div className="e-resources-hero text-white text-center position-relative">
        <div className="hero-overlay"></div>
        <div className="container position-relative z-3">
          <h1 className="display-4 mb-4 hero-title">E-Resources Hub</h1>
          <p className="lead hero-subtitle">
            Comprehensive Learning Resources for Every Academic Journey
          </p>
        </div>
      </div>

      {/* Navigation with Enhanced Interactivity */}
      <div className="container my-5">
        <div className="year-navigation d-flex flex-wrap justify-content-center gap-3 mb-5">
          {[...new Set(programOutcomes.map((outcome) => outcome.year))].map(
            (year, index) => (
              <button
                key={index}
                className={`btn year-btn ${
                  activeYear === year ? "btn-primary" : "btn-outline-primary"
                }`}
                onClick={() => setActiveYear(activeYear === year ? null : year)}
              >
                {year}
              </button>
            )
          )}
        </div>
      </div>

      {/* Resources Grid with Enhanced Animations */}
      <div className="container">
        {programOutcomes.map((yearData, yearIndex) => (
          <div
            key={yearIndex}
            className={`year-section mb-5 ${
              activeYear && activeYear !== yearData.year ? "d-none" : ""
            }`}
          >
            <h2 className="text-center mb-4 section-title">{yearData.year}</h2>

            <div className="row g-4">
              {yearData.subjects.map((subject, subjectIndex) => (
                <div key={subjectIndex} className="col-12 col-md-4 col-lg-3">
                  <div className="resource-card">
                    <div className="resource-card-inner">
                      <div className="resource-card-front">
                        <h3 className="resource-title">{subject.name}</h3>
                        <div className="resource-overlay">
                          <span className="explore-text">
                            Explore Resources
                          </span>
                        </div>
                      </div>

                      <div className="resource-card-back">
                        <div className="resource-links">
                          <h4 className="mb-3">Available Resources</h4>
                          {subject.links.length > 0 ? (
                            <ul className="list-unstyled">
                              {subject.links.map((link, linkIndex) => (
                                <li key={linkIndex}>
                                  <a
                                    href={link.url}
                                    className="resource-link"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    {link.name}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          ) : (
                            <p className="text-muted">No resources available</p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <BackToTopButton />
    </div>
  );
};

export default EResources;
