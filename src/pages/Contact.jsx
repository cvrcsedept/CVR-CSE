import { motion } from "framer-motion";
import { useState, useEffect } from "react";

// Animation variants
const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6 },
  },
};

const slideUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
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

const pulseAnimation = {
  initial: { scale: 1 },
  pulse: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      repeatType: "loop",
    },
  },
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    department: "general",
  });

  const [formStatus, setFormStatus] = useState(null);
  const [validationErrors, setValidationErrors] = useState({});
  const [mapLoaded, setMapLoaded] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);

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

    // Simulate map loading
    const timer = setTimeout(() => {
      setMapLoaded(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear validation error when user types
    if (validationErrors[name]) {
      setValidationErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const validateForm = () => {
    const errors = {};

    if (!formData.name.trim()) errors.name = "Name is required";
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
    }
    if (!formData.subject.trim()) errors.subject = "Subject is required";
    if (!formData.message.trim()) errors.message = "Message is required";

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    // Simulate form submission
    setFormStatus("submitting");

    setTimeout(() => {
      setFormStatus("success");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        department: "general",
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setFormStatus(null);
      }, 5000);
    }, 1500);
  };

  // Contact information
  const contactInfo = [
    {
      icon: "bi-geo-alt",
      title: "Our Location",
      content:
        "CVR COLLEGE OF ENGINEERING, MANGAPALLE , VASTUNAGAR, IBRAHIMPATNAM",
      color: "#4361ee",
    },
    {
      icon: "bi-telephone",
      title: "Call Us",
      content: "+91 99598 34090",
      color: "#3a0ca3",
    },
    {
      icon: "bi-envelope",
      title: "Email Us",
      content: "csedept@gmail.com",
      color: "#7209b7",
    },
    {
      icon: "bi-clock",
      title: "Office Hours",
      content: "Monday - Friday: 9AM to 5PM",
      color: "#f72585",
    },
  ];

  // Department contacts
  const departmentContacts = [
    { id: "general", name: "General Inquiries" },
    { id: "admissions", name: "Admissions" },
    { id: "research", name: "Research Collaboration" },
    { id: "placements", name: "Placements & Internships" },
    { id: "alumni", name: "Alumni Relations" },
  ];

  // FAQ content
  const faqs = [
    {
      question: "How can I apply for CSE courses?",
      answer:
        "Applications for our Computer Science and Engineering courses can be submitted through the college admission portal. Visit the Admissions section of our website for detailed information about entry requirements, application deadlines, and the selection process.",
    },
    {
      question: "What research opportunities are available for students?",
      answer:
        "We offer numerous research opportunities through our specialized labs in AI, Machine Learning, Cybersecurity, and Data Science. Undergraduate students can participate in research projects under faculty mentorship, while postgraduate students can pursue focused research initiatives aligned with departmental priorities.",
    },
    {
      question: "How can industry partners collaborate with the department?",
      answer:
        "Industry partners can collaborate through sponsored research, consultancy projects, student internships, guest lectures, and our Industry Advisory Board. Contact our Industry Relations Coordinator via the Research Collaboration option in the form for partnership opportunities.",
    },
  ];

  const toggleAccordion = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="contact-page bg-light">
      {/* Hero Section with Animated Particles */}
      <section className="contact-hero-section position-relative overflow-hidden d-flex align-items-center">
        <div className="particles-container">
          <div className="particle p1"></div>
          <div className="particle p2"></div>
          <div className="particle p3"></div>
          <div className="particle p4"></div>
          <div className="particle p5"></div>
          <div className="particle p6"></div>
        </div>

        <div
          className="container position-relative"
          style={{
            height: "85vh",
            textAlign: "center",
            display: "flex",
            justifyItems: "center",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <motion.div
            className="row justify-content-center text-center"
            initial="hidden"
            animate="visible"
            variants={slideUp}
          >
            <div className="col-lg-10">
              <h1 className="display-3 fw-bold text-white mb-3">
                Get In Touch
              </h1>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="subtitle-container mb-4"
              >
                <p
                  className="lead text-white mx-auto"
                  style={{ maxWidth: "700px" }}
                >
                  Have questions about our programs, research, or admissions?
                  We're here to help you connect with the CSE department.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="hero-cta"
              >
                <a
                  href="#contact-form"
                  className="btn btn-light btn-lg px-4 py-2 rounded-pill shadow-sm me-3"
                >
                  Contact Us <i className="bi bi-arrow-right ms-2"></i>
                </a>
                <a
                  href="#faq-section"
                  className="btn btn-outline-light btn-lg px-4 py-2 rounded-pill"
                >
                  FAQs <i className="bi bi-question-circle ms-2"></i>
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Contact Info Cards */}
      <section className="contact-info-section py-5 mt-1 bg-dark">
        <div className="container">
          <motion.div
            className="row g-4"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {contactInfo.map((info, index) => (
              <div key={index} className="col-md-6 col-lg-3">
                <motion.div
                  variants={fadeIn}
                  className="contact-card h-100 p-4 rounded-lg shadow-hover text-center bg-white"
                >
                  <div
                    className="contact-icon-wrapper mx-auto mb-3"
                    style={{ backgroundColor: `${info.color}15` }}
                  >
                    <i
                      className={`bi ${info.icon}`}
                      style={{ color: info.color }}
                    ></i>
                  </div>
                  <h3 className="h5 mb-3 text-dark">{info.title}</h3>
                  <p className="mb-0 text-muted">{info.content}</p>
                </motion.div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
      {/* Main Contact Section */}
      <section
        className="main-contact-section py-5 bg-dark mt-1"
        id="contact-form"
      >
        <div className="container">
          <motion.div
            className="row align-items-stretch g-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            {/* Contact Form */}
            <div className="col-lg-6 mb-4 mb-lg-0">
              <div className="contact-form-container h-100 bg-white p-4 p-lg-5 rounded-lg shadow-sm">
                <motion.div variants={slideUp}>
                  <h2 className="h3 text-gradient mb-4">Send Us a Message</h2>

                  {formStatus === "success" && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className="alert alert-success"
                    >
                      <i className="bi bi-check-circle me-2"></i>
                      Your message has been sent successfully! We'll get back to
                      you soon.
                    </motion.div>
                  )}

                  <form onSubmit={handleSubmit}>
                    <div className="row g-4">
                      <div className="col-md-6">
                        <div className="form-floating mb-3">
                          <input
                            type="text"
                            className={`form-control ${
                              validationErrors.name ? "is-invalid" : ""
                            }`}
                            id="name"
                            name="name"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                          />
                          <label htmlFor="name">Your Name</label>
                          {validationErrors.name && (
                            <div className="invalid-feedback">
                              {validationErrors.name}
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="form-floating mb-3">
                          <input
                            type="email"
                            className={`form-control ${
                              validationErrors.email ? "is-invalid" : ""
                            }`}
                            id="email"
                            name="email"
                            placeholder="your@email.com"
                            value={formData.email}
                            onChange={handleChange}
                          />
                          <label htmlFor="email">Email Address</label>
                          {validationErrors.email && (
                            <div className="invalid-feedback">
                              {validationErrors.email}
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="col-12">
                        <div className="form-floating mb-3">
                          <select
                            className="form-select"
                            id="department"
                            name="department"
                            value={formData.department}
                            onChange={handleChange}
                          >
                            {departmentContacts.map((dept) => (
                              <option key={dept.id} value={dept.id}>
                                {dept.name}
                              </option>
                            ))}
                          </select>
                          <label htmlFor="department">Department</label>
                        </div>
                      </div>

                      <div className="col-12">
                        <div className="form-floating mb-3">
                          <input
                            type="text"
                            className={`form-control ${
                              validationErrors.subject ? "is-invalid" : ""
                            }`}
                            id="subject"
                            name="subject"
                            placeholder="Subject"
                            value={formData.subject}
                            onChange={handleChange}
                          />
                          <label htmlFor="subject">Subject</label>
                          {validationErrors.subject && (
                            <div className="invalid-feedback">
                              {validationErrors.subject}
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="col-12">
                        <div className="form-floating mb-3">
                          <textarea
                            className={`form-control ${
                              validationErrors.message ? "is-invalid" : ""
                            }`}
                            id="message"
                            name="message"
                            placeholder="Your message"
                            style={{ height: "150px" }}
                            value={formData.message}
                            onChange={handleChange}
                          ></textarea>
                          <label htmlFor="message">Your Message</label>
                          {validationErrors.message && (
                            <div className="invalid-feedback">
                              {validationErrors.message}
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="col-12">
                        <motion.button
                          type="submit"
                          className="btn btn-primary btn-lg rounded-pill px-4 py-2"
                          disabled={formStatus === "submitting"}
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          {formStatus === "submitting" ? (
                            <>
                              <span
                                className="spinner-border spinner-border-sm me-2"
                                role="status"
                                aria-hidden="true"
                              ></span>
                              Sending...
                            </>
                          ) : (
                            <>
                              Send Message <i className="bi bi-send ms-2"></i>
                            </>
                          )}
                        </motion.button>
                      </div>
                    </div>
                  </form>
                </motion.div>
              </div>
            </div>
            {/* Map */}
            <div className="col-lg-6">
              <div className="map-container h-100 rounded-lg overflow-hidden shadow-sm">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: mapLoaded ? 1 : 0 }}
                  transition={{ duration: 0.5 }}
                  className="h-100"
                >
                  {!mapLoaded && (
                    <div className="map-loading d-flex justify-content-center align-items-center h-100">
                      <div
                        className="spinner-border text-primary"
                        role="status"
                      >
                        <span className="visually-hidden">Loading map...</span>
                      </div>
                    </div>
                  )}

                  <div
                    className={`map-placeholder h-100 ${
                      mapLoaded ? "d-block" : "d-none"
                    }`}
                  >
                    <div className="map-overlay d-flex flex-column justify-content-center align-items-center text-white">
                      <motion.div
                        initial="initial"
                        animate="pulse"
                        variants={pulseAnimation}
                        className="map-pin mb-3"
                      >
                        <i className="bi bi-geo-alt"></i>
                      </motion.div>
                      <h3 className="h4 mb-2">CSE Department</h3>
                      <p className="mb-4 text-center px-4">
                        Visit us at our campus in Hyderabad
                      </p>
                      <a
                        href="https://maps.app.goo.gl/ETVS38Kj2cx2AyQ99"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-light btn-sm rounded-pill px-3"
                      >
                        Get Directions{" "}
                        <i className="bi bi-box-arrow-up-right ms-1"></i>
                      </a>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <section className="faq-section py-5 bg-dark mt-1" id="faq-section">
        <div className="container">
          <motion.div
            className="row justify-content-center mb-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideUp}
          >
            <div className="col-lg-8 text-center">
              <h2 className="h3 text-gradient mb-3">
                Frequently Asked Questions
              </h2>
              <p className="text-light">
                Find answers to common queries about our department
              </p>
            </div>
          </motion.div>

          <motion.div
            className="row justify-content-center"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="col-lg-8">
              <div className="accordion" id="faqAccordion">
                {faqs.map((faq, index) => (
                  <motion.div
                    variants={fadeIn}
                    key={index}
                    className="accordion-item border-0 mb-3 rounded-lg shadow-sm"
                  >
                    <h2 className="accordion-header" id={`heading${index}`}>
                      <button
                        className={`accordion-button ${
                          openIndex === index ? "" : "collapsed"
                        }`}
                        type="button"
                        onClick={() => toggleAccordion(index)}
                        aria-expanded={openIndex === index}
                        aria-controls={`collapse${index}`}
                      >
                        <i className="bi bi-question-circle me-2 text-primary"></i>
                        {faq.question}
                      </button>
                    </h2>
                    <div
                      id={`collapse${index}`}
                      className={`accordion-collapse collapse ${
                        openIndex === index ? "show" : ""
                      }`}
                      aria-labelledby={`heading${index}`}
                    >
                      <div className="accordion-body">
                        <p className="mb-0">{faq.answer}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                variants={fadeIn}
                className="more-questions text-center mt-5"
              >
                <p className="mb-3 text-light">Still have questions?</p>
                <animate
                  href="#contact-form"
                  className="btn btn-outline-primary rounded-pill px-4"
                >
                  Contact Us Directly <i className="bi bi-chat-dots ms-2"></i>
                </animate>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
      <section className="connect-section py-5 bg-dark mt-1">
        <div className="container">
          <motion.div
            className="row justify-content-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <div className="col-lg-10">
              <div className="connect-card rounded-lg p-4 p-lg-5 text-center bg-white shadow-sm">
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="h3 text-gradient mb-4">Connect With Us</h2>
                  <p className="text-muted mb-4">
                    Follow us on social media to stay updated with department
                    news and events
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <style jsx>{`
        .contact-page {
          --primary: #4361ee;
          --primary-dark: #3a0ca3;
          --accent: #f72585;
          --light: #f8f9fa;
          --dark: #212529;
          --transition: all 0.3s ease;
          overflow-x: hidden;
          background-color: var(--light);
        }

        /* Hero Section */
        .contact-hero-section {
          min-height: 70vh;
          background: linear-gradient(135deg, #4361ee, #3a0ca3);
          position: relative;
        }

        /* Particles Animation */
        .particles-container {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          overflow: hidden;
        }

        .particle {
          position: absolute;
          border-radius: 50%;
          opacity: 0.4;
          animation-name: float-particle;
          animation-timing-function: cubic-bezier(0.1, 0.67, 0.83, 0.67);
          animation-iteration-count: infinite;
          background: rgba(255, 255, 255, 0.8);
        }

        .p1 {
          width: 80px;
          height: 80px;
          left: 10%;
          top: 20%;
          animation-duration: 25s;
        }

        .p2 {
          width: 40px;
          height: 40px;
          left: 30%;
          top: 70%;
          animation-duration: 30s;
          animation-delay: 2s;
        }

        .p3 {
          width: 60px;
          height: 60px;
          left: 70%;
          top: 30%;
          animation-duration: 28s;
          animation-delay: 5s;
        }

        .p4 {
          width: 30px;
          height: 30px;
          left: 40%;
          top: 15%;
          animation-duration: 20s;
          animation-delay: 8s;
        }

        .p5 {
          width: 50px;
          height: 50px;
          left: 65%;
          top: 65%;
          animation-duration: 22s;
          animation-delay: 1s;
        }

        .p6 {
          width: 70px;
          height: 70px;
          left: 20%;
          top: 50%;
          animation-duration: 32s;
          animation-delay: 3s;
        }

        @keyframes float-particle {
          0% {
            transform: translate(0, 0) rotate(0deg);
          }
          25% {
            transform: translate(100px, 50px) rotate(90deg);
          }
          50% {
            transform: translate(50px, 100px) rotate(180deg);
          }
          75% {
            transform: translate(-50px, 50px) rotate(270deg);
          }
          100% {
            transform: translate(0, 0) rotate(360deg);
          }
        }

        /* Contact Info Cards */
        .contact-card {
          background-color: white;
          transition: var(--transition);
          border: 1px solid rgba(0, 0, 0, 0.05);
        }

        .contact-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }

        .contact-icon-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 70px;
          height: 70px;
          border-radius: 50%;
          font-size: 28px;
        }

        /* Form Styles */
        .contact-form-container {
          position: relative;
          z-index: 2;
        }

        .form-control:focus,
        .form-select:focus {
          border-color: var(--primary);
          box-shadow: 0 0 0 0.25rem rgba(67, 97, 238, 0.25);
        }

        .btn-primary {
          background-color: var(--primary);
          border-color: var(--primary);
          transition: var(--transition);
        }

        .btn-primary:hover {
          background-color: var(--primary-dark);
          border-color: var(--primary-dark);
        }

        /* Map Styles */
        .map-container {
          position: relative;
          min-height: 500px;
        }

        .map-placeholder {
          background-image: url("/api/placeholder/800/500");
          background-size: cover;
          background-position: center;
          height: 100%;
          position: relative;
        }

        .map-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            135deg,
            rgba(67, 97, 238, 0.85),
            rgba(58, 12, 163, 0.9)
          );
          text-align: center;
          padding: 20px;
        }

        .map-pin {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background-color: var(--accent);
          font-size: 24px;
          color: white;
        }

        /* FAQ Accordion */
        .accordion-item {
          overflow: hidden;
        }

        .accordion-button:not(.collapsed) {
          background-color: rgba(67, 97, 238, 0.1);
          color: var(--primary);
          box-shadow: none;
        }

        .accordion-button:focus {
          box-shadow: none;
          border-color: rgba(67, 97, 238, 0.1);
        }

        /* Connect Section */
        .connect-card {
          background-color: white;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
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
      `}</style>
    </div>
  );
};

export default Contact;
