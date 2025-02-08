import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useEffect } from "react";
const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <div className="container min-vh-100 d-flex flex-column align-items-center text-dark bg-light py-5">
        <motion.h1
          className="display-4 fw-bold text-center mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About CSE Department - CVR College of Engineering
        </motion.h1>

        <motion.p
          className="lead text-center w-75 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          The Department of Computer Science and Engineering at CVR College of
          Engineering is committed to excellence in teaching, research, and
          innovation. Our mission is to equip students with the skills and
          knowledge needed to excel in the ever-evolving field of technology.
        </motion.p>

        <motion.div
          className="row w-100 justify-content-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {["Innovation", "Research", "Excellence"].map((value, index) => (
            <motion.div
              key={index}
              className="col-md-4 mb-4"
              whileHover={{ scale: 0.8 }}
            >
              <div className="card shadow-lg border-0 h-100">
                <div className="card-body text-center">
                  <h3 className="card-title fw-semibold">{value}</h3>
                  <p className="card-text text-muted">
                    The CSE Department fosters {value.toLowerCase()} in
                    education and industry collaborations.
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <Footer />
    </>
  );
};

export default About;
