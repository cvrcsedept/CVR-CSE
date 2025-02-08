import React, { useEffect } from "react";
import "../../styles.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const TimeTable = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <main>
        <section className="academicSection">
          <section className="academicContainer mt-4">
            <div className="container">
              <div className="row">
                <div className="col-sm-12">
                  <h2 className="text-center">Time Tables</h2>
                  {/* Virtuoso - Special knowledge in a field */}
                  {/* <hr style={{ marginLeft: "550px", color: "rgb(225, 12, 12)" }} width="10%" /> */}
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
                        I Year II Semester - 2023-24
                      </a>
                    </h4>
                  </div>
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
                        II Year II Semester - 2023-24
                      </a>
                    </h4>
                  </div>
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
                        III Year I Semester - 2023-24
                      </a>
                    </h4>
                  </div>
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
                        IV Year I Semester - 2023-24
                      </a>
                    </h4>
                  </div>
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
                        I Year I Semester - 2023-24
                      </a>
                    </h4>
                  </div>
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
                        II Year II Semester - 2023-24
                      </a>
                    </h4>
                  </div>
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
      <Footer />
    </>
  );
};

export default TimeTable;
