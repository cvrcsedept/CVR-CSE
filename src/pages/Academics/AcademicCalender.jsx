import React, { useEffect } from "react";
import "../../styles.css";
import BackToTopButton from "../../components/BackToTopButton";

const AcademicCalendar = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const academicPrograms = [
    {
      title: "B.Tech ",
      year: "I Year - 2023-24",
      url: "/Data/academic-calender/1-1.pdf",
    },
    {
      title: "B.Tech ",
      year: "II Year - 2023-24",
      url: "/Data/academic-calender/2-2.pdf",
    },
    {
      title: "B.Tech",
      year: "III Year - 2023-24",
      url: "/Data/academic-calender/3-3.pdf",
    },
    {
      title: "B.Tech ",
      year: "IV Year - 2023-24",
      url: "/Data/academic-calender/4-4.pdf",
    },
    {
      title: "M.Tech ",
      year: "I Year - 2023-24",
      url: "/Data/academic-calender/m-tech-1-1.pdf",
    },
    {
      title: "M.Tech ",
      year: "II Year - 2023-24",
      url: "/Data/academic-calender/mtech-2-2.pdf",
    },
  ];

  return (
    <div className="bg-light">
      <main>
        <section className="py-5">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h1 className="display-4 text-center mb-5 text-primary">
                  Academic Calendar
                </h1>
              </div>
            </div>

            <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4">
              {academicPrograms.map((program, index) => (
                <div key={index} className="col">
                  <div className="card h-100 shadow-sm border-0 text-center ">
                    <div className="card-body d-flex flex-column">
                      <div className="mb-4">
                        <img
                          src="/images/CVR Logo.png"
                          alt="CVR Logo"
                          className="img-fluid mb-3"
                          style={{ maxHeight: "100px", maxWidth: "150px" }}
                        />
                        <h5 className="card-title text-dark mb-2">
                          {program.title}
                        </h5>
                      </div>
                      <a
                        href={program.url}
                        className="btn btn-primary mt-auto stretched-link"
                      >
                        {program.year}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <BackToTopButton />
    </div>
  );
};

export default AcademicCalendar;
