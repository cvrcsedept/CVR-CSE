import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import BackToTopButton from "../../components/BackToTopButton";
const Objectives = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const psoData = [
    {
      id: 1,
      shortcut: "PSO",
      title: "Software Development Skills",
      description:
        "Successfully design and implement algorithmic paradigms by using efficient programming language constructs, formal tools and frameworks.",
    },
    {
      id: 2,
      shortcut: "PSO",

      title: "Professional Skills",
      description:
        "Develop scalable and reliable distributed applications and data analytics pipelines by employing industry agnostic technologies and secure software engineering models",
    },
    {
      id: 3,
      shortcut: "PSO",
      title: "Interdisciplinary Skills",
      description:
        "Understand software engineering practices and hardware integration for developing solutions to real world problems over multi-disciplinary domains.",
    },
  ];

  const peoData = [
    {
      id: 1,
      shortcut: "PEO",

      title: "Employability",
      description:
        "Computer Science & Engineering graduates will acquire capability to apply their knowledge and skills to solve various kinds of computational engineering problems.",
    },
    {
      id: 2,
      shortcut: "PEO",

      title: "Professionalism",
      description:
        "Graduates will inculcate in students professional attitude, inter-disciplinary approach, ethics and ability to relate computer engineering issues with social awareness.",
    },
    {
      id: 3,
      shortcut: "PEO",

      title: "Managerial Skills",
      description:
        "Graduates will possess managerial skills to face challenges in the profession by working harmoniously in a team with effective communication skills.",
    },
    {
      id: 4,
      shortcut: "PEO",

      title: "Continuous Learning",
      description:
        "Graduates will continue to learn and adapt in a world of constantly evolving technologies and pursue research towards academic excellence.",
    },
    {
      id: 5,
      shortcut: "PEO",

      title: "Adaptability",
      description:
        "Graduates of Computer Science & Engineering will have soft skills to adapt to the diverse global environment.",
    },
  ];

  const programOutcomes = [
    {
      id: 1,
      shortcut: "PO",

      title: "Engineering Knowledge",
      description:
        "Apply the knowledge of mathematics, science, engineering fundamentals, and an engineering specialization to the solution of complex engineering problems.",
    },
    {
      id: 2,
      shortcut: "PO",

      title: "Problem Analysis",
      description:
        "Identify, formulate, review research literature, and analyze complex engineering problems reaching substantiated conclusions using first principles of mathematics, natural sciences, and engineering sciences.",
    },
    {
      id: 3,
      shortcut: "PO",

      title: "Design / Development of Solutions",
      description:
        "Design solutions for complex engineering problems and design system components or processes that meet the specified needs with appropriate consideration for public health and safety, and cultural, societal, and environmental considerations.",
    },
    {
      id: 4,
      shortcut: "PO",

      title: "Conduct Investigations of Complex Problems",
      description:
        "Use research-based knowledge and research methods including design of experiments, analysis and interpretation of data, and synthesis of the information to provide valid conclusions.",
    },
    {
      id: 5,
      shortcut: "PO",

      title: "Modern Tool Usage",
      description:
        "Create, select, and apply appropriate techniques, resources, and modern engineering and IT tools including prediction and modeling to complex engineering activities with an understanding of the limitations.",
    },
    {
      id: 6,
      shortcut: "PO",
      title: "The Engineer and Society",
      description:
        "Apply reasoning informed by the contextual knowledge to assess societal, health, safety, legal and cultural issues and the consequent responsibilities relevant to the professional engineering practice.",
    },
    {
      id: 7,
      shortcut: "PO",
      title: "Environment and Sustainability",
      description:
        "Understand the impact of the professional engineering solutions in societal and environmental contexts, and demonstrate the knowledge of, and need for sustainable development.",
    },
    {
      id: 8,
      shortcut: "PO",
      title: "Ethics",
      description:
        "Apply ethical principles and commit to professional ethics and responsibilities and norms of the engineering practice.",
    },
    {
      id: 9,
      shortcut: "PO",
      title: "Individual and Team Work",
      description:
        "Function effectively as an individual, and as a member or leader in diverse teams, and in multidisciplinary settings.",
    },
    {
      id: 10,
      shortcut: "PO",
      title: "Communication",
      description:
        "Communicate effectively on complex engineering activities with the engineering community and with society at large, such as, being able to comprehend and write effective reports and design documentation, make effective presentations, and give and receive clear instructions.",
    },
    {
      id: 11,
      shortcut: "PO",
      title: "Project Management and Finance",
      description:
        "Demonstrate knowledge and understanding of the engineering and management principles and apply these to one's own work, as a member and leader in a team, to manage projects and in multidisciplinary environments.",
    },
    {
      id: 12,
      shortcut: "PO",
      title: "Life-long Learning",
      description:
        "Recognize the need for, and have the preparation and ability to engage in independent and life-long learning in the broadest context of technological change.",
    },
  ];
  const renderSection = (title, data, colorClass) => {
    return (
      <div className="container pt-3 pb-5">
        <div className="row">
          <div className="col-12">
            <h2 className="display-5 text-center text-primary mb-4 text-uppercase">
              {title}
            </h2>
          </div>
        </div>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
          {data.map((item) => (
            <div key={item.id} className="col">
              <div className={`card h-100 border-0 shadow-lg ${colorClass}`}>
                <div className="card-header text-white d-flex justify-content-between align-items-center">
                  <h5 className="card-title mb-0">
                    {item.shortcut} {item.id}
                  </h5>
                </div>
                <div className="card-body">
                  <h5 className="card-title mb-3">{item.title}</h5>
                  <p className="card-text text-muted">{item.description}</p>
                </div>
                <button
                  className={`btn btn-outline-${colorClass.replace(
                    "bg-",
                    ""
                  )} w-100`}
                  data-bs-toggle="modal"
                  data-bs-target={`#modal-${title
                    .replace(/\s+/g, "-")
                    .toLowerCase()}-${item.id}`}
                >
                  Learn More
                </button>
              </div>

              <div
                className="modal fade"
                id={`modal-${title.replace(/\s+/g, "-").toLowerCase()}-${
                  item.id
                }`}
                tabIndex="-1"
              >
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title">{item.title}</h5>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                      ></button>
                    </div>
                    <div className="modal-body">
                      <p>{item.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="bg-light">
      <main>
        {renderSection("Program Educational Objectives", peoData, "bg-success")}
        {renderSection("Program Outcomes", programOutcomes, "bg-warning")}

        {renderSection("Program Specific Outcomes", psoData, "bg-info")}
      </main>

      <BackToTopButton />
    </div>
  );
};

export default Objectives;
