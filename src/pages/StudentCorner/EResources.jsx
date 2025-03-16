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
            {name:"nptel",url:"https://onlinecourses.nptel.ac.in/noc24_cs42/preview"},
            {name:"notes",url:"https://drive.google.com/drive/folders/1jHUN5ltBATEctFuI0D-yPbzJcAiYAQg0?usp=drive_link"}
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
            { name: "NPTEL", url: "https://archive.nptel.ac.in/courses/106/105/106105224/" },
            {name:"notes",url:"https://drive.google.com/drive/folders/12NukdAgTHH2HT9ajlwje4p3HBDM0m-H6?usp=drive_link"}
          ],
        },
        {
          name: "Discrete Mathematics",
          links: [
            { name: "GFG", url: "https://www.geeksforgeeks.org/discrete-mathematics-tutorial/" },
            { name: "YouTube", url: "https://www.youtube.com/watch?v=0NSWsD6cJFI" },
            { name: "NPTEL", url: "https://archive.nptel.ac.in/courses/111/106/111106086/" },
            {name:"notes",url:"https://drive.google.com/drive/folders/1cnFoMBfrqv4rW4JrSPYpgGSSDpyCW_MM?usp=drive_link"}
          ],
        },
        {
          name: "Computer Oriented Statistical Methods",
          links: [
            { name: "YouTube", url: "https://www.youtube.com/watch?v=NJimKoLfWro&list=PLJxcBJ9ifFLam67Tj9A-cCjLyAeNH2YbZ" },
            { name: "NPTEL", url: "https://archive.nptel.ac.in/courses/111/105/111105077/" }
          ],
        },
        {
          name: "Digital Electronics",
          links: [
            { name: "GFG", url: "https://www.geeksforgeeks.org/digital-electronics-logic-design-tutorials/" },
            { name: "YouTube", url: "https://www.youtube.com/watch?v=XLrNRKsfXt4&list=PLXj4XH7LcRfBQXAd8FPZXmMzxZY-rViLP" },
            { name: "NPTEL", url: "https://archive.nptel.ac.in/courses/108/105/108105132/" }
          ],
        },
        {
          name: "Basic Electrical And Electronics Engineering",
          links: [
            { name: "YouTube", url: "https://www.youtube.com/watch?v=hYv113KcelU&list=PLgwJf8NK-2e76qHT4VOu9uTw8wj0i4blS" },
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
            { name: "YouTube", url: "https://www.youtube.com/watch?v=6iCHf7OZn6c&list=PL6Zs6LgrJj3tDXv8a_elC6eT_4R5gfX4d" },
            { name: "GFG", url: "https://www.geeksforgeeks.org/advanced-data-structures/" },
            { name: "notes", url: "https://drive.google.com/drive/folders/1IuFBU8ALVltxn_jmd7vsJOLoNNmGlBnJ?usp=drive_link" }
          ],
        },
        {
          name: "Computer Organization And Architecture",
          links: [
            { name: "Nptel", url: "https://archive.nptel.ac.in/courses/106/105/106105163/" },
            { name: "YouTube", url: "https://www.youtube.com/watch?v=kTdvOlA2ko0&list=PLXj4XH7LcRfDXDRzSLv1FfZ-SSA38SiC0" },
            { name: "GFG", url: "https://www.geeksforgeeks.org/computer-organization-and-architecture-tutorials/" }
          ],
        },
        {
          name: "Database Management Systems",
          links: [
            { name: "Nptel", url: "https://archive.nptel.ac.in/courses/106/105/106105175/" },
            { name: "YouTube", url: "https://www.youtube.com/watch?v=kBdlM6hNDAE&list=PLxCzCOWd7aiFAN6I8CuViBuCdJgiOkT2Y" },
            { name: "GFG", url: "https://www.geeksforgeeks.org/dbms/" },
            {name:"notes",url:"https://drive.google.com/drive/folders/14vS-idnh0t3uRB4a0r_m3bSVGS20GkNL?usp=drive_link"}
          ],
        },
        {
          name: "Operating Systems",
          links: [
            { name: "Nptel", url: "https://archive.nptel.ac.in/courses/106/105/106105214/" },
            { name: "YouTube", url: "https://www.youtube.com/watch?v=bkSWJJZNgf8&list=PLxCzCOWd7aiGz9donHRrE9I3Mwn6XdP8p" },
            { name: "GFG", url: "https://www.geeksforgeeks.org/operating-systems/" }
          ],
        },
        {
          name: "Software Engineering",
          links: [
            { name: "Nptel", url: "https://archive.nptel.ac.in/courses/106/105/106105182/" },
            { name: "YouTube", url: "https://www.youtube.com/watch?v=Ln_LP7c23WM&list=PLbRMhDVUMngf8oZR3DpKMvYhZKga90JVt" },
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
            { name: "YouTube", url: "https://www.youtube.com/watch?v=Oh93xiKv-Jg&list=PLrjkTql3jnm8d1ddpVKifXO_fPjSKATCp" },
            { name: "NPTEL", url: "https://onlinecourses.swayam2.ac.in/nou24_cs09/preview" },
            {name:"notes",url:"https://drive.google.com/drive/folders/1_CuUevkVsTL24iB-u5vOhe6BCVwLbU_7?usp=drive_link"}
          ],
        },
        {
          name: "Computer Networking",
          links: [
            { name: "GFG", url: "https://www.geeksforgeeks.org/computer-network-tutorials/" },
            { name: "YouTube", url: "https://www.youtube.com/watch?v=JFF2vJaN0Cw&list=PLxCzCOWd7aiGFBD2-2joCpWOLUrDLvVV_" },
            { name: "NPTEL", url: "https://archive.nptel.ac.in/courses/106/105/106105183/" }
          ],
        },
        {
          name: "Algorithm Design and Analysis",
          links: [{name:"Nptel", url:"https://archive.nptel.ac.in/courses/106/106/106106131/"},
            { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/fundamentals-of-algorithms/" },
            { name: "YouTube", url: "https://www.youtube.com/watch?v=0IAPZzGSbME&list=PLDN4rrl48XKpZkf03iYFl-O29szjTrs_O" }
          ],
        },
        {
          name: "Data Science",
          links: [{name:"Nptel", url:"https://onlinecourses.nptel.ac.in/noc21_cs69/preview"},
            { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/data-science-tutorial/" },
            { name: "YouTube", url: "https://www.youtube.com/watch?v=gDZ6czwuQ18&pp=ygUYZGF0YSBzY2llbmNlIGZ1bGwgY291cnNl" },
            {name:"notes",url:"https://drive.google.com/drive/folders/1AbXTR_bvTA8ZOyr_nMtyhx21vnzYqS2K?usp=drive_link"}
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
            {name:"GFG", url:"hhttps://www.geeksforgeeks.org/aiml-introduction/"},
            {name:"Youtube", url:"https://www.youtube.com/watch?v=uB3i-qV6VdM&list=PLxCzCOWd7aiHGhOHV-nwb0HR5US5GFKFI"}
          ],
        },
        { name: "Full Stack Development", 
          links: [{name:"Nptel",url:"https://nptel.ac.in/courses/128108025"},
            {name:"GFG",url:"hhttps://www.geeksforgeeks.org/what-is-full-stack-development/"},
            {name:"Youtube",url:"https://www.youtube.com/watch?v=tVzUXW6siu0&list=PLu0W_9lII9agq5TrH9XLIKQvv0iaF2X3w"}
          ] 
        },
        { name: "Cloud Computing and Devops", 
          links: [{name:"Nptel",url:"https://onlinecourses.nptel.ac.in/noc19_cs64/preview"},
            {name:"GFG",url:"https://www.geeksforgeeks.org/cloud-computing/"},
            {name:"Youtube",url:"https://www.youtube.com/watch?v=dmGybCohHsw&list=PLxCzCOWd7aiHRHVUtR-O52MsrdUSrzuy4"}
          ] },
        {
          name: "Automata Theory and Compiler Design",
          links: [{name:"Nptel",url:"https://archive.nptel.ac.in/courses/106/106/106106049/"},
            {name:"GFG",url:"https://www.geeksforgeeks.org/compiler-design-tutorials/"},
            {name:"Youtube",url:"https://www.youtube.com/watch?v=XUsw5igq4DM&list=PLxCzCOWd7aiEKtKSIHYusizkESC42diyc"},
            {name:"notes",url:"https://drive.google.com/drive/folders/1RRY9HyKGz4ToSO3U0PTV6HpmTuHANz5L?usp=drive_link"}

          ],
        },
        { name: "Crytography and Essentials of Network Security(PE-II)", 
          links: [{name:"Nptel",url:"https://archive.nptel.ac.in/courses/106/105/106105162/"},
            {name:"GFG",url:"https://www.geeksforgeeks.org/cryptography-and-its-types/"},
            {name:"Youtube",url:"https://www.youtube.com/watch?v=JoeiLuFNBc4&list=PLBlnK6fEyqRgJU3EsOYDTW7m6SUmW6kII&pp=0gcJCXcEOCosWNin"}
          ] 
        },
        {
          name: "Internet of Things(PE-II)",
          links: [{name:"Nptel",url:"https://archive.nptel.ac.in/courses/106/105/106105166/"},
            {name:"GFG",url:"https://www.geeksforgeeks.org/introduction-to-internet-of-things-iot-set-1/"},
            {name:"Youtube",url:"https://www.youtube.com/watch?v=b-fCl-UDJuo&list=PLgwJf8NK-2e6FvFUItZbGYnKiqjrlLpCb"}
          ],
        },
        {
          name: "Distributed Systems(PE-II)",
          links: [{name:"Nptel",url:"https://archive.nptel.ac.in/courses/106/106/106106168/"},
            {name:"GFG",url:"https://www.geeksforgeeks.org/distributed-systems-tutorial/"},
            {name:"Youtube",url:"https://www.youtube.com/watch?v=cQP8WApzIQQ&list=PLrw6a1wE39_tb2fErI4-WkMbsvGQk9_UB"}
          ],
        },
        { name: "Artificial Neural Networks and Graphical Models (PE-II)", 
          links: [{name:"Nptel",url:"https://nptel.ac.in/courses/117105084"},
            {name:"GFG",url:"https://www.geeksforgeeks.org/artificial-neural-networks-and-its-applications/"},
            {name:"Youtube",url:"https://www.youtube.com/watch?v=OVwEeSsSCHE&list=PLLssT5z_DsK_gyrQ_biidwvPYCRNGI3iv"}
          ] },
      ],
    },
    {
      year: "Fourth Year I-Semester",
      subjects: [
        { name: "Linux Programming", links: [{name:"Nptel",url:"https://archive.nptel.ac.in/courses/117/106/117106113/"},
          {name:"GFG",url:"https://www.geeksforgeeks.org/linux-tutorial/"},
            {name:"Youtube",url:"https://www.youtube.com/watch?v=sWbUDq4S6Y8&pp=ygURbGludXggZnVsbCBjb3Vyc2U%3D"}
        ] },
        {
          name: "Data Warehousing and Data Mining",
          links: [{name:"Nptel",url:"https://onlinecourses.nptel.ac.in/noc21_cs06/preview"},
            {name:"GFG",url:"https://www.geeksforgeeks.org/data-warehousing/"},
            {name:"Youtube",url:"https://www.youtube.com/watch?v=xEmrFePGjEg&list=PLmAmHQ-_5ySxFoIGmY1MJao-XYvYGxxgj"},
            {name:"notes",url:"https://drive.google.com/drive/folders/1FKdSO5YttpFB94vyAtKdhcAc4nat_pVy?usp=drive_link"}
          ],
        },
        { name: "DEEP LEARNING (DL) (PROFESSIONAL ELECTIVE II)", links: [{name:"Nptel",url:"https://archive.nptel.ac.in/courses/106/106/106106184/"},
          {name:"GFG",url:"https://www.geeksforgeeks.org/deep-learning-tutorial/"},
            {name:"Youtube",url:"https://www.youtube.com/watch?v=6M5VXKLf4D4&list=PLEiEAq2VkUUIYQ-mMRAGilfOKyWKpHSip"}
        ] },
        { name: "VIRTUAL REALITY (VR) (PROFESSIONAL ELECTIVE II)", links: [{name:"Nptel",url:"https://archive.nptel.ac.in/courses/121/106/121106013/"},
          {name:"GFG",url:"https://www.geeksforgeeks.org/virtual-reality-augmented-reality-and-mixed-reality/"},
            {name:"Youtube",url:"https://www.youtube.com/watch?v=aNC5YMUTcQ4&list=PLbMVogVj5nJSyt80VRXYC-YrAvQuUb6dh"}
        ] },
        { name: "VISUAL PROGRAMMING (PROFESSIONAL ELECTIVE II)", links: [{name:"Youtube",url:"https://www.youtube.com/watch?v=Y8c1IHZs5qc&list=PLTd6ceoshpremSFQxYM4L0p4Q6hR-4e4J"},
          {name:"GFG",url:"https://www.geeksforgeeks.org/introduction-to-visual-programming-language/"},
            {name:"Youtube",url:"https://www.youtube.com/watch?v=DcON0hgiLrY&list=PLXuDFs_RQFwIi3WooZmGFIJMe9OIqQAT-"},
            {name:"notes",url:"https://drive.google.com/drive/folders/1wqRcLk2PT-bQEiin0SUieJlBzNzG2f_j?usp=drive_link"}
        ] },
      ],
    },
    {
      year: "Fourth Year II-Semester",
      subjects: [
        { name: "ETHICAL HACKING - EH (PROFESSIONAL ELECTIVE IV)", links: [{name:"Nptel",url:"https://archive.nptel.ac.in/courses/106/105/106105217/"},
          {name:"GFG",url:"https://www.geeksforgeeks.org/introduction-to-ethical-hacking/"},
            {name:"Youtube",url:"https://www.youtube.com/watch?v=cKEf8H9cQGM&list=PLwO5-rumi8A4J7h4Fm92TEC00gfZUk7ls&pp=0gcJCXcEOCosWNin"}
        ] },
        { name: "BLOCK CHAIN TECHNOLOGIES - BCT (PROFESSIONAL ELECTIVE V)", links: [{name:"Nptel",url:"https://archive.nptel.ac.in/courses/106/105/106105235/"},
          {name:"GFG",url:"https://www.geeksforgeeks.org/blockchain-technology-introduction/"},
            {name:"Youtube",url:"https://www.youtube.com/watch?v=2uYuWiICCM0&list=PLsyeobzWxl7oY6tZmnZ5S7yTDxyu4zDW-&pp=0gcJCXcEOCosWNin"}
        ] },
        { name: "HUMAN COMPUTER INTERACTION - HCI", links: [{name:"Nptel",url:"https://archive.nptel.ac.in/courses/106/106/106106177/"},
          {name:"GFG",url:"https://www.geeksforgeeks.org/introduction-to-human-computer-interface-hci//"},
            {name:"Youtube",url:"https://www.youtube.com/watch?v=WW1g3UT2zww&list=PLLssT5z_DsK_nusHL_Mjt87THSTlgrsyJ"}
        ] },
      ],
    },
  ];
  const getLinkIcon = (linkName) => {
    const name = linkName.toLowerCase();
    if (name.includes("youtube")) {
      return "fab fa-youtube";
    } else if (name.includes("gfg") || name.includes("geeks")) {
      return "fas fa-code";
    } else if (name.includes("nptel")) {
      return "fas fa-graduation-cap";
    } else {
      return "fas fa-link";
    }
  };

  const getLinkColor = (linkName) => {
    const name = linkName.toLowerCase();
    if (name.includes("youtube")) {
      return "#FF0000";
    } else if (name.includes("gfg") || name.includes("geeks")) {
      return "#2F8D46"; 
    } else if (name.includes("nptel")) {
      return "#007BFF"; 
    } else {
      return "#6c757d"; 
    }
  };

  

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
                            <div className="link-container">
                              {subject.links.map((link, linkIndex) => (
                                <a
                                  key={linkIndex}
                                  href={link.url}
                                  className="resource-link-btn"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  style={{
                                    backgroundColor: getLinkColor(link.name),
                                    boxShadow: `0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)`,
                                    transition: "all 0.3s ease"
                                  }}
                                >
                                  <i className={getLinkIcon(link.name)} aria-hidden="true"></i>
                                  <span>{link.name.toUpperCase()}</span>
                                </a>
                              ))}
                            </div>
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