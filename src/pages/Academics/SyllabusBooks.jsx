import React, { useEffect } from "react";
import "../../styles.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const SyllabusBooks = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        id="myBtn"
        title="Go to top"
      >
        <i className="fa fa-angle-double-up" aria-hidden="true"></i>
      </button>
      {/* Main Content Begin */}
      <main>
        <section className="academicSection">
          <section className="academicContainer mt-4">
            <div className="container">
              <div className="row">
                <div className="col-sm-12">
                  <h2 className="text-center">Syllabus</h2>
                </div>
              </div>
            </div>
            <section
              className="calenderItems mt-3"
              data-aos="zoom-in"
              data-aos-duration="1000"
            >
              <div className="container">
                <div className="itemsContainer p-3">
                  <div className="item">
                    <div className="icon text-center">
                      <h3>
                        <img
                          src="/images/CVR Logo.png"
                          className="img-fluid"
                          alt="CVR Logo"
                        />{" "}
                        B.Tech CSE
                      </h3>
                    </div>
                    <h4>
                      <a className="btn form-control" href="#">
                        I Year - 2023-24
                      </a>
                    </h4>
                  </div>
                  {/* Repeat other items */}
                </div>
              </div>
            </section>
            <section
              className="calenderItems mt-3"
              data-aos="zoom-in"
              data-aos-duration="2000"
            >
              <div className="container">
                <div className="itemsContainer p-3">
                  <div className="item">
                    <div className="icon text-center">
                      <h3>
                        <img
                          src="/images/CVR Logo.png"
                          className="img-fluid"
                          alt="CVR Logo"
                        />{" "}
                        M.Tech AI
                      </h3>
                    </div>
                    <h4>
                      <a className="btn form-control" href="#">
                        I Year - 2023-24
                      </a>
                    </h4>
                  </div>
                  {/* Repeat other items */}
                </div>
              </div>
            </section>
          </section>
          <div className="container mt-5">
            <div className="col-lg-12">
              <div className="col-lg-4"></div>
            </div>
          </div>
        </section>
      </main>
      {/* Main Content End */}
      <Footer />
    </>
  );
};

export default SyllabusBooks;
