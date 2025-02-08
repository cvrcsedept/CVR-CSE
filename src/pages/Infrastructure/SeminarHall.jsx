import React, { useEffect } from "react";
import "../../styles.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const SeminarHall = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <main>
        <section className="classSection">
          <div className="container mt-4">
            <div className="row">
              <div className="col-sm-12">
                <h2 className="text-center">Seminar Hall</h2>
                {/* Virtuoso - Special knowledge in a field */}
                {/* <hr style={{ marginLeft: "550px", color: "rgb(225, 12, 12)" }} width="10%" /> */}
              </div>
            </div>
          </div>
          <hr />
          <div className="container">
            <div className="classDiv">
              <div className="col-md-6 imgDiv">
                {/* <img src="images/classroom.jpeg" className="img-fluid" alt="Class Room" /> */}
                <img
                  src="/images/seminar.png"
                  className="img-fluid"
                  alt="Class Room"
                />
              </div>
              <div className="col-md-6 descDiv">
                <p>
                  The college has an air-conditioned seminar hall which is
                  frequently used by faculty and students. The seminar hall is
                  equipped with LCD Projectors and multimedia kits. The seating
                  capacity of the hall is 105. Many lectures, workshops, and
                  recruitment programs are held in this Seminar Hall.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default SeminarHall;
