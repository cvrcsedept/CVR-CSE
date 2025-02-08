import React, { useEffect } from "react";
import "../../styles.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const NonTeaching = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <main>
        <section className="facStrength">
          <div className="container mt-4">
            <div className="row">
              <div className="col-sm-12">
                <h2 className="text-center">Department Techies</h2>
                {/* Virtuoso - Special knowledge in a field */}
                {/* <hr style={{ marginLeft: "550px", color: "rgb(225, 12, 12)" }} width="10%" /> */}
              </div>
            </div>
            <div className="container">
              <div className="facultyCardContainer">
                <div
                  className="facultyCard"
                  data-aos="fade-up"
                  data-aos-duration="3000"
                >
                  <img
                    src="/images/Afroz 1.jpeg"
                    alt="Afroz"
                    style={{ width: "150px", height: "150px" }}
                  />
                  <p className="h4">Mr. Suhail Afroz</p>
                  <p className="h6">Associate Professor</p>
                  <p style={{ fontWeight: 300 }}>
                    Joined in 2007, Expert in Fullstack Development.
                  </p>
                  <a className="btn" href="#">
                    Know More . . . .{" "}
                  </a>
                </div>
                <div
                  className="facultyCard"
                  data-aos="fade-up"
                  data-aos-duration="3000"
                >
                  <img
                    src="/images/Afroz 2.jpeg"
                    alt="Afroz"
                    style={{ width: "150px", height: "150px" }}
                  />
                  <p className="h4">Mr. Suhail Afroz</p>
                  <p className="h6">Associate Professor</p>
                  <p style={{ fontWeight: 300 }}>
                    Joined in 2007, Expert in Fullstack Development.
                  </p>
                  <a className="btn" href="#">
                    Know More . . . .{" "}
                  </a>
                </div>
                <div
                  className="facultyCard"
                  data-aos="fade-up"
                  data-aos-duration="3000"
                >
                  <img
                    src="/images/afroz.jpg"
                    alt="Afroz"
                    style={{ width: "150px", height: "150px" }}
                  />
                  <p className="h4">Mr. Suhail Afroz</p>
                  <p className="h6">Associate Professor</p>
                  <p style={{ fontWeight: 300 }}>
                    Joined in 2007, Expert in Fullstack Development.
                  </p>
                  <a className="btn" href="#">
                    Know More . . . .{" "}
                  </a>
                </div>
                <div
                  className="facultyCard"
                  data-aos="fade-up"
                  data-aos-duration="3000"
                >
                  <img
                    src="/images/Afroz 3.jpeg"
                    alt="Afroz"
                    style={{ width: "150px", height: "150px" }}
                  />
                  <p className="h4">Mr. Suhail Afroz</p>
                  <p className="h6">Associate Professor</p>
                  <p style={{ fontWeight: 300 }}>
                    Joined in 2007, Expert in Fullstack Development.
                  </p>
                  <a className="btn" href="#">
                    Know More . . . .{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default NonTeaching;
