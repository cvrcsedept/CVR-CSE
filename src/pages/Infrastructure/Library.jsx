import React, { useEffect } from "react";
import "../../styles.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const Library = () => {
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
                <h2 className="text-center">CSE Library</h2>
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
                  src="/images/library.jpeg"
                  className="img-fluid"
                  alt="Class Room"
                />
              </div>
              <div className="col-md-6 descDiv">
                <p>
                  The serene ambience inspires a love for reading. Information
                  at the click of a finger tip invites the students to delve
                  into the world of words and the wealth of research material
                  available. Interaction with eminent authors, book reviews and
                  reading sessions are conducted regularly exposing students to
                  good written and reading skills.The reference library, which
                  is fully computerized and houses over 20,000 books, is a
                  treasure trove of information that has been built assiduously
                  over a span of more than 5 decades and continues to grow each
                  year.
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

export default Library;
