import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// Enhanced animation variants
const slideUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const fadeInScale = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5 },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const drawing = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { duration: 1.5, ease: "easeInOut" },
      opacity: { duration: 0.5 },
    },
  },
};

const About = () => {
  const [activeTab, setActiveTab] = useState("overview");

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);

    // Load required external resources
    if (!document.getElementById("bootstrap-icons")) {
      const link = document.createElement("link");
      link.id = "bootstrap-icons";
      link.rel = "stylesheet";
      link.href =
        "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css";
      document.head.appendChild(link);
    }
  }, []);

  // Department data
  const stats = [
    {
      figure: "100+",
      label: "Faculty Members",
      icon: "bi-person-badge",
      color: "#4361ee",
    },
    {
      figure: "1000+",
      label: "Students",
      icon: "bi-mortarboard",
      color: "#3a0ca3",
    },
    {
      figure: "30+",
      label: "Research Papers",
      icon: "bi-journal-text",
      color: "#7209b7",
    },
    {
      figure: "15+",
      label: "Industry Partners",
      icon: "bi-building",
      color: "#f72585",
    },
  ];

  const values = [
    {
      title: "Innovative Thinking",
      description:
        "We foster creativity and innovative approaches to problem-solving.",
      icon: "bi-lightbulb",
      color: "#4361ee",
    },
    {
      title: "Research Excellence",
      description:
        "Our department leads in cutting-edge research that addresses real-world challenges.",
      icon: "bi-graph-up",
      color: "#3a0ca3",
    },
    {
      title: "Industry Collaboration",
      description:
        "We maintain strong partnerships with leading technology companies.",
      icon: "bi-handshake",
      color: "#7209b7",
    },
    {
      title: "Student Success",
      description:
        "Our primary focus is enabling students to achieve their full potential.",
      icon: "bi-award",
      color: "#f72585",
    },
  ];

  const facilities = [
    {
      title: "Advanced Computing Labs",
      description:
        "State-of-the-art computing infrastructure with the latest hardware and software.",
      icon: "bi-cpu",
      image: "/images/laboratories/IT Workshop.JPG",
    },
    {
      title: "Research Center",
      description:
        "Dedicated spaces for students and faculty to pursue innovative research projects.",
      icon: "bi-journal-richtext",
      image: "/images/applelab.jpg",
    },
    {
      title: "Innovation Hub",
      description:
        "Collaborative workspace for interdisciplinary projects and startup incubation.",
      icon: "bi-gear-wide-connected",
      image: "/images/laboratories/Computer Centre.JPG",
    },
    {
      title: "Digital Library",
      description:
        "Access to vast digital resources, research papers, and online learning platforms.",
      icon: "bi-book",
      image: "/images/laboratories/ProjectsLab1.JPG",
    },
  ];

  const milestones = [
    { year: "2001", event: "Department Established" },
    { year: "2005", event: "First Research Center Launched" },
    { year: "2010", event: "Achieved NAAC 'A' Grade Accreditation" },
    { year: "2015", event: "Expanded to include AI & ML Specializations" },
    {
      year: "2020",
      event: "Ranked Among Top 10 CSE Departments in the Region",
    },
  ];
  const developers = [
    {
      name: "Sai Charan",
      image: "/devs/dev1.jpg",
      quote: "Turning ideas into innovative solutions",
      socials: {
        linkedin: "https://www.linkedin.com/in/sai-charan-veerlapati/",
        github: "https://github.com/iamvsc04",
      },
    },
    {
      name: "Kaushik",
      image: "/devs/dev2.jpg",
      quote: "Crafting code that makes a difference",
      socials: {
        linkedin: "https://www.linkedin.com/in/kaushik-komaravolu/",
        github: "https://github.com/Kaushik-2802",
      },
    },
  ];

  return (
    <div className="about-page bg-dark">
      <section className="hero-section position-relative overflow-hidden d-flex align-items-center">
        <div className="animated-bg"></div>
        <div className="container position-relative">
          <motion.div
            className="row justify-content-center text-center"
            initial="hidden"
            animate="visible"
            variants={slideUp}
          >
            <div className="col-lg-10">
              <h1 className="display-3 fw-bold text-white mb-3">
                About CSE Department
              </h1>
              <motion.div
                className="badge-container mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                <span className="badge bg-light text-primary fs-6 px-3 py-2 me-2 mb-2">
                  Est. 2001
                </span>
                <span className="badge bg-light text-primary fs-6 px-3 py-2 me-2 mb-2">
                  NAAC 'A' Grade
                </span>
                <span className="badge bg-light text-primary fs-6 px-3 py-2 mb-2">
                  Top 10 Ranked
                </span>
              </motion.div>
              <p className="lead text-white mb-4 px-3">
                Shaping the future of technology through excellence in
                education, innovation, and research.
              </p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <a
                  href="#department-tabs"
                  className="btn btn-light btn-lg px-4 py-2 rounded-pill shadow-sm"
                >
                  Explore <i className="bi bi-arrow-down ms-1"></i>
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Animated SVG elements */}
        <svg
          className="hero-svg"
          width="100%"
          height="100%"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <motion.path
            variants={drawing}
            initial="hidden"
            animate="visible"
            className="path-1"
            d="M0,30 Q50,0 100,30 V100 H0 Z"
            fill="none"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="0.5"
          />
          <motion.path
            variants={drawing}
            initial="hidden"
            animate="visible"
            className="path-2"
            d="M0,50 Q50,20 100,50 V100 H0 Z"
            fill="none"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="0.5"
          />
        </svg>
      </section>

      {/* Scrolling Stats Banner */}
      <div className="stats-banner py-3">
        <div className="stats-container">
          <div className="stats-track">
            {[...stats, ...stats].map((stat, index) => (
              <div key={index} className="stats-item">
                <i
                  className={`bi ${stat.icon} me-2`}
                  style={{ color: stat.color }}
                ></i>
                <span className="fw-bold">{stat.figure}</span>
                <span className="stats-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content with Tabs */}
      <div className="container py-5" id="department-tabs">
        <motion.div
          className="row mb-5 justify-content-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInScale}
        >
          <div className="col-lg-10">
            <div className="tabs-container">
              <div className="nav-tabs-wrapper mb-4">
                <ul className="nav nav-tabs nav-fill border-0">
                  <li className="nav-item">
                    <button
                      className={`nav-link border-0 ${
                        activeTab === "overview" ? "active" : ""
                      }`}
                      onClick={() => setActiveTab("overview")}
                    >
                      <i className="bi bi-info-circle me-2"></i>Overview
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      className={`nav-link border-0 ${
                        activeTab === "values" ? "active" : ""
                      }`}
                      onClick={() => setActiveTab("values")}
                    >
                      <i className="bi bi-star me-2"></i>Values
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      className={`nav-link border-0 ${
                        activeTab === "facilities" ? "active" : ""
                      }`}
                      onClick={() => setActiveTab("facilities")}
                    >
                      <i className="bi bi-building me-2"></i>Facilities
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      className={`nav-link border-0 ${
                        activeTab === "history" ? "active" : ""
                      }`}
                      onClick={() => setActiveTab("history")}
                    >
                      <i className="bi bi-clock-history me-2"></i>History
                    </button>
                  </li>
                </ul>
              </div>

              <div className="tab-content p-4 bg-white rounded-lg shadow-sm">
                {/* Overview Tab */}
                <motion.div
                  className={`tab-pane ${
                    activeTab === "overview" ? "active" : "d-none"
                  }`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: activeTab === "overview" ? 1 : 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="row align-items-center">
                    <div className="col-lg-6 mb-4 mb-lg-0">
                      <h2 className="h3 text-gradient mb-4">
                        Department Overview
                      </h2>
                      <p className="mb-3">
                        The Department of Computer Science and Engineering at
                        CVR College of Engineering stands at the forefront of
                        technological education and research, dedicated to
                        nurturing the next generation of tech innovators and
                        leaders.
                      </p>
                      <p className="mb-3">
                        Since our establishment in 2001, we have continually
                        evolved our curriculum and research focus to address the
                        rapidly changing landscape of computer science and
                        information technology.
                      </p>
                      <div className="d-flex align-items-center mt-4">
                        <div className="border-end pe-4 me-4">
                          <span className="d-block text-primary h3 mb-0">
                            20+
                          </span>
                          <span className="small text-muted">
                            Years of Excellence
                          </span>
                        </div>
                        <div>
                          <span className="d-block text-primary h3 mb-0">
                            98%
                          </span>
                          <span className="small text-muted">
                            Placement Rate
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="position-relative rounded-lg overflow-hidden">
                        <img
                          src="/images/CseDeptGroupPic.jpg"
                          alt="Department Overview"
                          className="img-fluid rounded-lg"
                        />
                        <div className="img-overlay">
                          <motion.div
                            className="overlay-badge"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                          >
                            <span className="h5 m-0">CSE Dept.</span>
                          </motion.div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Values Tab */}
                <motion.div
                  className={`tab-pane ${
                    activeTab === "values" ? "active" : "d-none"
                  }`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: activeTab === "values" ? 1 : 0 }}
                  transition={{ duration: 0.5 }}
                  variants={staggerContainer}
                >
                  <h2 className="h3 text-gradient mb-4">Our Core Values</h2>
                  <div className="row g-4">
                    {values.map((value, index) => (
                      <div key={index} className="col-md-6">
                        <motion.div
                          variants={fadeInScale}
                          className="value-card h-100 p-4 rounded-lg shadow-hover"
                        >
                          <div
                            className="value-icon mb-3"
                            style={{ backgroundColor: `${value.color}20` }}
                          >
                            <i
                              className={`bi ${value.icon}`}
                              style={{ color: value.color }}
                            ></i>
                          </div>
                          <h3 className="h5 mb-3">{value.title}</h3>
                          <p className="mb-0 text-muted">{value.description}</p>
                        </motion.div>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Facilities Tab */}
                <motion.div
                  className={`tab-pane ${
                    activeTab === "facilities" ? "active" : "d-none"
                  }`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: activeTab === "facilities" ? 1 : 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="h3 text-gradient mb-4">
                    World-Class Facilities
                  </h2>
                  <div className="row g-4">
                    {facilities.map((facility, index) => (
                      <div key={index} className="col-md-6">
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="facility-card overflow-hidden rounded-lg shadow-sm h-100"
                        >
                          <div className="facility-img">
                            <img
                              src={facility.image}
                              alt={facility.title}
                              className="img-fluid w-100"
                            />
                            <div className="facility-icon">
                              <i className={`bi ${facility.icon}`}></i>
                            </div>
                          </div>
                          <div className="facility-content p-4">
                            <h3 className="h5 mb-3">{facility.title}</h3>
                            <p className="text-muted mb-0">
                              {facility.description}
                            </p>
                          </div>
                        </motion.div>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* History Tab */}
                <motion.div
                  className={`tab-pane ${
                    activeTab === "history" ? "active" : "d-none"
                  }`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: activeTab === "history" ? 1 : 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="h3 text-gradient mb-4">Our Journey</h2>
                  <div className="timeline">
                    {milestones.map((milestone, index) => (
                      <motion.div
                        key={index}
                        className="timeline-item"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <div className="timeline-badge">{milestone.year}</div>
                        <div className="timeline-content">
                          <h3 className="h5 mb-0">{milestone.event}</h3>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="row justify-content-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInScale}
        >
          <div className="col-lg-10">
            <div className="quote-section text-center p-5 my-5 rounded-lg">
              <i className="bi bi-quote fs-1 mb-3 d-block"></i>
              <blockquote className="blockquote">
                <p className="fs-4 mb-3">
                  "Our mission is to empower students with the knowledge,
                  skills, and values necessary to thrive in the rapidly evolving
                  world of technology."
                </p>
                <footer className="blockquote-footer">
                  <cite>Dr.A Vani Vatsala, Head of Department</cite>
                </footer>
              </blockquote>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="row justify-content-center mb-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInScale}
        >
          <div className="col-lg-10">
            <div className="cta-section rounded-lg p-5 text-white">
              <div className="row align-items-center">
                <div className="col-lg-8 mb-4 mb-lg-0">
                  <h2 className="h3 mb-3">Join Our Department</h2>
                  <p className="mb-0">
                    Discover opportunities for academic excellence and
                    innovative research.
                  </p>
                </div>
                <div className="col-lg-4 text-lg-end">
                  <a
                    href="#"
                    className="btn btn-light btn-lg px-4 rounded-pill shadow-sm"
                  >
                    Apply Now <i className="bi bi-arrow-right ms-2"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <section className="developers-showcase py-5">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 text-center mb-5">
                <motion.h2
                  className="display-5 fw-bold text-white mb-3"
                  initial={{ opacity: 0, y: -50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                >
                  Meet the Innovators
                </motion.h2>
                <motion.p
                  className="lead text-white-50"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                >
                  The creative minds driving technological excellence
                </motion.p>
              </div>

              <div className="col-12">
                <div className="row justify-content-center g-4">
                  {developers.map((developer, index) => (
                    <div key={index} className="col-md-5 col-lg-4">
                      <motion.div
                        className="developer-card"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        whileHover={{
                          scale: 1.05,
                          transition: { duration: 0.3 },
                        }}
                        transition={{
                          duration: 0.6,
                          delay: index * 0.2,
                          type: "spring",
                          stiffness: 100,
                        }}
                      >
                        <div className="developer-card-inner">
                          <div className="developer-image-wrapper">
                            <div className="developer-image-border">
                              <img
                                src={developer.image}
                                alt={developer.name}
                                className="developer-image"
                              />
                            </div>
                          </div>
                          <div className="developer-content">
                            <h3 className="developer-name">{developer.name}</h3>
                            <p className="developer-quote">
                              "{developer.quote}"
                            </p>
                            <div className="developer-socials">
                              {Object.entries(developer.socials).map(
                                ([platform, link]) => (
                                  <motion.a
                                    key={platform}
                                    href={link}
                                    className={`social-link ${platform}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.2 }}
                                    whileTap={{ scale: 0.9 }}
                                  >
                                    <i className={`bi bi-${platform}`}></i>
                                  </motion.a>
                                )
                              )}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <style jsx>{`
        .about-page {
          --primary: #4361ee;
          --primary-dark: #3a0ca3;
          --accent: #f72585;
          --light: #f8f9fa;
          --dark: #212529;
          --transition: all 0.3s ease;
          overflow-x: hidden;
        }

        /* Hero Section */
        .hero-section {
          min-height: 80vh;
          background-color: var(--primary);
          position: relative;
        }

        .animated-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            135deg,
            #4361ee,
            #3a0ca3,
            #7209b7,
            #f72585
          );
          background-size: 400% 400%;
          animation: gradient 15s ease infinite;
          z-index: 0;
        }

        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .hero-svg {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 50%;
          pointer-events: none;
        }

        /* Stats Banner */
        .stats-banner {
          background-color: white;
          border-bottom: 1px solid rgba(0, 0, 0, 0.1);
          overflow: hidden;
        }

        .stats-container {
          width: 100%;
          overflow: hidden;
        }

        .stats-track {
          display: flex;
          animation: scroll 30s linear infinite;
        }

        .stats-item {
          display: flex;
          align-items: center;
          padding: 0 2rem;
          white-space: nowrap;
        }

        .stats-label {
          margin-left: 0.5rem;
          color: var(--dark);
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        /* Tabs */
        .tabs-container {
          border-radius: 0.75rem;
          overflow: hidden;
        }

        .nav-tabs-wrapper {
          border-radius: 0.75rem 0.75rem 0 0;
          overflow: hidden;
          background-color: #f8f9fa;
        }

        .nav-tabs {
          border-radius: 0.75rem 0.75rem 0 0;
          overflow: hidden;
        }

        .nav-tabs .nav-link {
          color: var(--dark);
          padding: 1rem 1.5rem;
          transition: var(--transition);
          border-radius: 0;
        }

        .nav-tabs .nav-link.active {
          background-color: var(--primary);
          color: white;
        }

        .tab-content {
          border-radius: 0 0 0.75rem 0.75rem;
        }

        .tab-pane.active {
          display: block;
        }

        /* Value Cards */
        .value-card {
          background-color: white;
          transition: var(--transition);
          border: 1px solid rgba(0, 0, 0, 0.05);
        }

        .value-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }

        .value-icon {
          display: inline-flex;
          justify-content: center;
          align-items: center;
          width: 60px;
          height: 60px;
          border-radius: 20px;
          font-size: 24px;
        }

        /* Facility Cards */
        .facility-card {
          transition: var(--transition);
          background-color: white;
        }

        .facility-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }

        .facility-img {
          position: relative;
          height: 200px;
          overflow: hidden;
        }

        .facility-img img {
          transition: var(--transition);
          height: 100%;
          object-fit: cover;
        }

        .facility-card:hover .facility-img img {
          transform: scale(1.1);
        }

        .facility-icon {
          position: absolute;
          top: 10px;
          right: 10px;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: var(--primary);
          color: white;
          border-radius: 50%;
          z-index: 1;
        }

        /* Timeline */
        .timeline {
          position: relative;
          padding-left: 50px;
        }

        .timeline:before {
          content: "";
          position: absolute;
          top: 0;
          left: 15px;
          height: 100%;
          width: 2px;
          background-color: var(--primary);
        }

        .timeline-item {
          position: relative;
          margin-bottom: 2rem;
        }

        .timeline-badge {
          position: absolute;
          left: -50px;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          text-align: center;
          line-height: 32px;
          background-color: var(--primary);
          color: white;
          font-weight: bold;
          font-size: 0.8rem;
          z-index: 1;
        }

        .timeline-content {
          padding: 1rem;
          background-color: #f8f9fa;
          border-radius: 0.5rem;
        }

        /* Quote Section */
        .quote-section {
          background-color: #f8f9fa;
          position: relative;
        }

        .quote-section:before,
        .quote-section:after {
          content: "";
          position: absolute;
          width: 50px;
          height: 50px;
          opacity: 0.1;
        }

        /* CTA Section */
        .cta-section {
          background: linear-gradient(
            135deg,
            var(--primary),
            var(--primary-dark)
          );
        }

        /* Utility Classes */
        .rounded-lg {
          border-radius: 0.75rem !important;
        }

        .shadow-hover {
          transition: box-shadow 0.3s ease;
        }

        .shadow-hover:hover {
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }

        .text-gradient {
          background: linear-gradient(135deg, var(--primary), var(--accent));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .img-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0),
            rgba(0, 0, 0, 0.6)
          );
          display: flex;
          align-items: flex-end;
          justify-content: flex-end;
          padding: 1.5rem;
        }

        .overlay-badge {
          background-color: white;
          color: var(--primary);
          padding: 0.5rem 1rem;
          border-radius: 0.5rem;
        }
        .developers-showcase {
          background: linear-gradient(135deg, #4361ee, #3a0ca3, #7209b7);
          background-size: 400% 400%;
          animation: gradientBG 15s ease infinite;
          position: relative;
          overflow: hidden;
        }

        @keyframes gradientBG {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .developers-showcase::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(
              circle at top left,
              rgba(255, 255, 255, 0.1) 0%,
              transparent 50%
            ),
            radial-gradient(
              circle at bottom right,
              rgba(255, 255, 255, 0.1) 0%,
              transparent 50%
            );
          pointer-events: none;
        }

        .developer-card {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border-radius: 20px;
          border: 1px solid rgba(255, 255, 255, 0.125);
          overflow: hidden;
          transition: all 0.3s ease;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
        }

        .developer-card-inner {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 2rem;
          text-align: center;
        }

        .developer-image-wrapper {
          position: relative;
          margin-bottom: 1.5rem;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .developer-image-border {
          position: relative;
          width: 200px;
          height: 200px;
          border-radius: 50%;
          background: linear-gradient(
            45deg,
            #4361ee,
            #3a0ca3,
            #7209b7,
            #f72585
          );
          padding: 6px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        }

        .developer-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 50%;
          border: 4px solid white;
        }

        .developer-content {
          color: white;
          width: 100%;
        }

        .developer-name {
          font-size: 1.75rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
          background: linear-gradient(to right, #ffffff, #f0f0f0);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .developer-quote {
          color: rgba(255, 255, 255, 0.7);
          font-style: italic;
          margin-bottom: 1.5rem;
        }

        .developer-socials {
          display: flex;
          justify-content: center;
          gap: 1.5rem;
        }

        .social-link {
          color: white;
          font-size: 1.75rem;
          transition: color 0.3s ease;
          position: relative;
          display: inline-block;
        }

        .social-link.linkedin:hover {
          color: #0077b5;
        }

        .social-link.github:hover {
          color: #f0f0f0;
        }

        .social-link::after {
          content: "";
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 0;
          height: 2px;
          background: white;
          transition: width 0.3s ease;
        }

        .social-link:hover::after {
          width: 100%;
        }

        @media (max-width: 768px) {
          .developer-image-border {
            width: 150px;
            height: 150px;
          }

          .developer-name {
            font-size: 1.5rem;
          }

          .developer-quote {
            font-size: 0.9rem;
          }

          .developer-socials {
            gap: 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default About;
