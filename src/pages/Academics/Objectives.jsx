import React, { useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
const Objectives = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const psoData = [
    {
      id: 1,
      title: "Software Development Skills",
      description:
        "Analyze a problem, design an algorithm, define the computing requirements and implement it through logical and programming skills.",
    },
    {
      id: 2,
      title: "Professional Skills",
      description:
        "Architect, evolve and integrate a working model, leading to secure software product development to meet the evolving needs of the industry and open source environments.",
    },
    {
      id: 3,
      title: "Interdisciplinary Skills",
      description:
        "Understand software engineering practices and hardware integration for developing solutions to real world problems over multi-disciplinary domains.",
    },
    {
      id: 4,
      title: "Industry Readiness",
      description:
        "Use theoretical and practical concepts of various domains to realize new ideas and innovations for pursuing research, entrepreneurship, employment and higher studies.",
    },
  ];

  const peoData = [
    {
      id: 1,
      title: "Employability",
      description:
        "Computer Science & Engineering graduates will acquire capability to apply their knowledge and skills to solve various kinds of computational engineering problems.",
    },
    {
      id: 2,
      title: "Professionalism",
      description:
        "Graduates will inculcate in students professional attitude, inter-disciplinary approach, ethics and ability to relate computer engineering issues with social awareness.",
    },
    {
      id: 3,
      title: "Managerial Skills",
      description:
        "Graduates will possess managerial skills to face challenges in the profession by working harmoniously in a team with effective communication skills.",
    },
    {
      id: 4,
      title: "Continuous Learning",
      description:
        "Graduates will continue to learn and adapt in a world of constantly evolving technologies and pursue research towards academic excellence.",
    },
    {
      id: 5,
      title: "Adaptability",
      description:
        "Graduates of Computer Science & Engineering will have soft skills to adapt to the diverse global environment.",
    },
  ];

  const programOutcomes = [
    {
      id: 1,
      title: "Engineering Knowledge",
      description:
        "Apply the knowledge of mathematics, science, engineering fundamentals, and an engineering specialization to the solution of complex engineering problems.",
    },
    {
      id: 2,
      title: "Problem Analysis",
      description:
        "Identify, formulate, review research literature, and analyze complex engineering problems reaching substantiated conclusions using first principles of mathematics, natural sciences, and engineering sciences.",
    },
    {
      id: 3,
      title: "Design / Development of Solutions",
      description:
        "Design solutions for complex engineering problems and design system components or processes that meet the specified needs with appropriate consideration for public health and safety, and cultural, societal, and environmental considerations.",
    },
    {
      id: 4,
      title: "Conduct Investigations of Complex Problems",
      description:
        "Use research-based knowledge and research methods including design of experiments, analysis and interpretation of data, and synthesis of the information to provide valid conclusions.",
    },
    {
      id: 5,
      title: "Modern Tool Usage",
      description:
        "Create, select, and apply appropriate techniques, resources, and modern engineering and IT tools including prediction and modeling to complex engineering activities with an understanding of the limitations.",
    },
    {
      id: 6,
      title: "The Engineer and Society",
      description:
        "Apply reasoning informed by the contextual knowledge to assess societal, health, safety, legal and cultural issues and the consequent responsibilities relevant to the professional engineering practice.",
    },
    {
      id: 7,
      title: "Environment and Sustainability",
      description:
        "Understand the impact of the professional engineering solutions in societal and environmental contexts, and demonstrate the knowledge of, and need for sustainable development.",
    },
    {
      id: 8,
      title: "Ethics",
      description:
        "Apply ethical principles and commit to professional ethics and responsibilities and norms of the engineering practice.",
    },
    {
      id: 9,
      title: "Individual and Team Work",
      description:
        "Function effectively as an individual, and as a member or leader in diverse teams, and in multidisciplinary settings.",
    },
    {
      id: 10,
      title: "Communication",
      description:
        "Communicate effectively on complex engineering activities with the engineering community and with society at large, such as, being able to comprehend and write effective reports and design documentation, make effective presentations, and give and receive clear instructions.",
    },
    {
      id: 11,
      title: "Project Management and Finance",
      description:
        "Demonstrate knowledge and understanding of the engineering and management principles and apply these to one's own work, as a member and leader in a team, to manage projects and in multidisciplinary environments.",
    },
    {
      id: 12,
      title: "Life-long Learning",
      description:
        "Recognize the need for, and have the preparation and ability to engage in independent and life-long learning in the broadest context of technological change.",
    },
  ];

  return (
    <div>
      <Header />
      <main>
        <section className="objectivesSection">
          <div className="row mt-4">
            <div className="col-sm-12">
              <h2
                className="text-center"
                style={{ letterSpacing: "1px", textTransform: "uppercase" }}
              >
                Program Specific Outcomes
              </h2>
            </div>
          </div>
          <section className="card-area">
            <section
              className="card-section"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              {psoData.map((pso) => (
                <div className="card" key={pso.id} style={{ marginTop: "5px" }}>
                  <div className="flip-card">
                    <div className="flip-card__container">
                      <div className="card-front">
                        <div className="card-front__tp2 card-front__tp--city2">
                          <h2 className="card-front__heading2">PSO {pso.id}</h2>
                          <p className="card-front__text-price2">{pso.title}</p>
                        </div>
                        <div className="card-front__bt">
                          <p className="card-front__text-view2 card-front__text-view--city2">
                            View me
                          </p>
                        </div>
                      </div>
                      <div
                        className="card-back"
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <h3 className="inside-page__heading2 inside-page__heading--city2">
                          {pso.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div className="inside-page">
                    <div className="inside-page__container">
                      <p className="text-justify inside-page__text2">
                        {pso.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </section>
          </section>

          <div className="row mt-4">
            <div className="col-sm-12">
              <h2
                className="text-center"
                style={{ letterSpacing: "1px", textTransform: "uppercase" }}
              >
                Program Educational Objectives
              </h2>
            </div>
          </div>

          <section className="card-area">
            <section
              className="card-section"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              {peoData.map((peo) => (
                <div className="card" key={peo.id} style={{ marginTop: "5px" }}>
                  <div className="flip-card">
                    <div className="flip-card__container">
                      <div className="card-front">
                        <div className="card-front__tp card-front__tp--city">
                          <h2 className="card-front__heading">PEO {peo.id}</h2>
                          <p className="card-front__text-price">{peo.title}</p>
                        </div>
                        <div className="card-front__bt">
                          <p className="card-front__text-view card-front__text-view--city">
                            View me
                          </p>
                        </div>
                      </div>
                      <div
                        className="card-back"
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <h3 className="inside-page__heading--city">
                          {peo.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div className="inside-page">
                    <div className="inside-page__container">
                      <p className="text-justify inside-page__text">
                        {peo.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </section>
          </section>

          <div className="row mt-4">
            <div className="col-sm-12">
              <h2
                className="text-center"
                style={{ letterSpacing: "1px", textTransform: "uppercase" }}
              >
                Program Outcomes
              </h2>
            </div>
          </div>

          <section className="card-area">
            <section
              className="card-section"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              {programOutcomes.map((po) => (
                <div className="card" key={po.id} style={{ marginTop: "5px" }}>
                  <div className="flip-card">
                    <div className="flip-card__container">
                      <div className="card-front">
                        <div className="card-front__tp1 card-front__tp--city1">
                          <h2 className="card-front__heading1">PO {po.id}</h2>
                          <p className="card-front__text-price1">{po.title}</p>
                        </div>
                        <div className="card-front__bt">
                          <p className="card-front__text-view1 card-front__text-view--city1">
                            View me
                          </p>
                        </div>
                      </div>
                      <div
                        className="card-back"
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <h3 className="inside-page__heading1 inside-page__heading--city1">
                          {po.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div className="inside-page">
                    <div className="inside-page__container">
                      <p className="text-justify inside-page__text1">
                        {po.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </section>
          </section>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Objectives;
