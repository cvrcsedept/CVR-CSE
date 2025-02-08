import React, { useEffect } from "react";
import "../../styles.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
const Classrooms = () => {
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
                <h2 className="text-center">Class Rooms</h2>
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
                  src="/images/classroom.jpg"
                  className="img-fluid"
                  alt="Class Room"
                />
              </div>
              <div className="col-md-6 descDiv">
                <p>
                  The class rooms are spacious and create an atmosphere to
                  specialize the students to acquire education through
                  well-equipped class rooms. Our classrooms are equipped with
                  green chalk boards, slide projectors, and screens. Green chalk
                  boards are used for classroom teaching. Projectors and screens
                  are used to involve students in learning with technology.
                  Notes, flowcharts, drawings, and PPTs used in the course of
                  teaching are saved to be accessed as and when required. Each
                  classroom provides an occupancy of 60+ students.
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

export default Classrooms;
