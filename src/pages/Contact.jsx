import React, { useEffect } from "react";
import { Home, Mail, Phone } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
const ContactUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <div className="bg-light min-vh-100 d-flex flex-column align-items-center">
        <h1 className="text-center text-primary mt-4">Contact Us</h1>
        <div className="container d-flex flex-column flex-lg-row justify-content-center align-items-center mt-5">
          {/* Map Section */}
          <div className="shadow-lg p-3 mb-5 bg-white rounded">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3811.4661085104526!2d78.59465581078462!3d17.196163183590578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcba659868b4727%3A0xf39a771705e23170!2sCVR%20College%20Of%20Engineering!5e0!3m2!1sen!2sin!4v1738898607085!5m2!1sen!2sin"
              width="600"
              height="450"
              className="border-0"
              loading="lazy"
            ></iframe>
          </div>

          {/* Contact Details Section */}
          <div className="ms-lg-5 p-4 shadow-lg bg-white rounded">
            <div className="d-flex align-items-center mb-4">
              <Home color="#00b3ff" className="me-3" />
              <p className="mb-0">
                <strong>CVR College of Engineering</strong>
                <br />
                Vastunagar, Ibrahimpatnam
                <br />
                Hyderabad, Telangana, 501510.
              </p>
            </div>
            <hr className="border-bottom border-secondary" />

            <div className="d-flex align-items-center mt-4 mb-4">
              <Phone color="#00b3ff" className="me-3" />
              <div>
                <strong>Call us</strong>
                <br />
                <a
                  href="tel:+91 XXXXX XXXXX"
                  className="text-decoration-underline text-dark"
                >
                  +91 XXXXX XXXXX
                </a>
              </div>
            </div>
            <hr className="border-bottom border-secondary" />

            <div className="d-flex align-items-center mt-4">
              <Mail color="#00b3ff" className="me-3" />
              <div>
                <strong>For any further queries</strong>
                <br />
                Email us at
                <br />
                <a
                  href="mailto:cvrcollegeofengineering  @gmail.com"
                  className="text-decoration-underline text-dark"
                >
                  cvrcollegeofengineering @gmail.com
                </a>
              </div>
            </div>
            <hr className="border-bottom border-secondary" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
