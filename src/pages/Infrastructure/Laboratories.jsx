import React, { useEffect } from "react";
import "../../styles.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const Laboratories = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <main>
        <section className="labsSection">
          <div className="row mt-4">
            <div className="col-sm-12">
              <h2 className="text-center">Department Laboratories</h2>
            </div>
          </div>
          <hr />
          <section>
            <div className="labCardContainer">
              {[
                {
                  name: "Apple Laboratory",
                  image: "/images/applelab.jpg",
                  title: "CB 104",
                  info: "30 Apple Mac Pro system for the students and teachers to work on their research and do iOS implementation.",
                },
                {
                  name: "Java Programming Laboratory",
                  image: "/images/laboratories/309CM.JPG",
                  title: "CM 308 & 309",
                  info: "70 - i5 and i7 systems with 8-16GB RAM, where students will be exercising the Core and Advanced Java with Data Structures implementation.",
                },
                {
                  name: "Web Engineering Laboratory",
                  image: "/images/laboratories/Projects Lab 1.JPG",
                  title: "Library II Floor",
                  info: "68 - i5 systems with 8GB RAM, where students will be exercising the Web Technologies and Fullstack implementation Technologies like Angular, React and NodeJS. Projects Lab where IV year students are allotted the systems to do their Mini and Major Projects.",
                },
                {
                  name: "Data Visualization Laboratory",
                  image: "/images/laboratories/CBC2 AB.JPG",
                  title: "CB C2A and C2B Cellar",
                  info: "66 - Acer computers with 8GB RAM, where students will be exercising the Data Visualization Tools and Techniques. Python the language mostly preferred. Android Development will also be done here using Kotlin as the language.",
                },
                {
                  name: "Database Management Systems Laboratory",
                  image: "/images/laboratories/112 CB.JPG",
                  title: "CB 111 and 112",
                  info: "65 - Acer computers with 8GB RAM, where students will be exercising the backend implementations using Oracle, MySQL and mongoDB databases.",
                },
                {
                  name: "IoT Laboratory",
                  image: "/images/laboratories/204 CB.JPG",
                  title: "CB 203 and 204",
                  info: "65 - Acer computers with 8GB RAM, where students will be exercising and implementing the IoT Models. Various IoT sensors and Raspberry Pi kits are provided for practice. Linux Programming is also practiced in this lab.",
                },
                {
                  name: "Analytics Lab",
                  image: "/images/laboratories/CBC3 B.JPG",
                  title: "CB C3A and C3B Cellar",
                  info: "65 - Acer computers with 8GB RAM, where students will be exercising with Data Mining Techniques using WEKA Tool. Languages like Python, R-programming, etc.",
                },
                {
                  name: "Datastructures Labs",
                  image: "/images/laboratories/304 FB.JPG",
                  title: "FB 204,205,304,305, CM 209 and MB 305",
                  info: "Totally dedicated labs with 200 - Acer systems in total having 8 GB RAM for students to practice their C Programming and Data structures using C.",
                },
                {
                  name: "English Language Communication Skills Lab",
                  image: "/images/laboratories/ELCS Lab 1 113 FB.JPG",
                  title: "FB 207, 208 and FB 113",
                  info: "Totally dedicated labs with 100 - Acer systems in total having 8 GB RAM for students to learn and practice English Language Communication Skills. Licensed software are installed for better guidance of the students.",
                },
                {
                  name: "Engineering Drawing and Graphics Lab",
                  image: "/images/laboratories/318 FB.JPG",
                  title: "FB 315, 316, 318, 319 and CM 216, 217",
                  info: "Totally dedicated labs with 200 - Acer systems in total having 8 GB RAM for students to practice Engineering Drawing and Engineering Graphics using Autocad tool.",
                },
                {
                  name: "IT Workshop Laboratory",
                  image: "/images/laboratories/IT Workshop FB 116.JPG",
                  title: "FB 116, 117, 307, 308 and PG 402",
                  info: "Totally dedicated labs with 170 - Acer systems in total having 8 GB RAM for students to practice Essentials of System and Web Interfacing Lab Essentials of Computer and Information Systems Lab.",
                },
                {
                  name: "Computer Center",
                  image: "/images/laboratories/Computer Centre.JPG",
                  title: "MB 204",
                  info: "65 - Acer systems are kept separately for the students to sit and browse the research-oriented content. This lab will be kept open for the students till 6PM in the evening.",
                },
              ].map((lab, index) => (
                <div
                  className="labItem"
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                  key={index}
                >
                  <div className="labName">
                    <p>{lab.name}</p>
                  </div>
                  <div className="labCard">
                    <img
                      src={lab.image}
                      className="labCardImg"
                      alt={`${lab.name} Image`}
                    />
                    <div className="labCardBody">
                      <div className="labCardInfo">
                        <p className="h3 title">{lab.title}</p>
                        <p className="info text-white">{lab.info}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Laboratories;
