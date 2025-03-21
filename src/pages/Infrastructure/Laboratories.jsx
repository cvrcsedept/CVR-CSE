import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import BackToTopButton from "../../components/BackToTopButton";
import "bootstrap-icons/font/bootstrap-icons.css";

const Laboratories = () => {
  const [selectedLab, setSelectedLab] = useState(null);
  const [activeFilter, setActiveFilter] = useState("All");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const laboratories = [
    {
      name: "Mobile Application Development Lab-1 ",
      image: "/images/civil/104-inside.jpg",
      title: "Mobile Application Development Lab ",
      description:
        "The Lenovo Desktop-VO6ECHF with an Intel Core i5, 8GB RAM, and 500GB SSD is perfect for efficient mobile app development.",
      icon: "bi-phone",
      color: "dark",
      location: "CB 104",
      category: "App development",
    },
    {
      name: "Mobile Application Development Lab-2 ",
      image: "/images/civil/104-inside.jpg",
      title: "Mobile Application Development Lab ",
      description:
        "The Lenovo Desktop-VO6ECHF with an Intel Core i5, 8GB RAM, and 500GB SSD is perfect for efficient mobile app development.",
      icon: "bi-phone",
      color: "dark",
      location: "CB 105",
      category: "App development",
    },
    {
      name: "Iot and CC lab-1",
      image: "/images/civil/203-inside.jpg",
      title: "IOT and CC lab",
      description:
        "The system with an Intel i3, 8GB RAM, and 500GB SSD is perfect for running IoT and Cloud Computing applications, handling tasks and experiments efficiently.",
      icon: "bi-cloud",
      color: "dark",
      location: "CB 203",
      category: "IOT",
    },
    {
      name: "Iot and CC lab-2",
      image: "/images/civil/203-inside.jpg",
      title: "IOT and CC lab",
      description:
        "The system with an Intel i3, 8GB RAM, and 500GB SSD is perfect for running IoT and Cloud Computing applications, handling tasks and experiments efficiently.",
      icon: "bi-cloud",
      color: "dark",
      location: "CB 204",
      category: "IOT",
    },
    {
      name: "Software engineering lab-1 ",
      image: "/images/civil/c3a-inside.jpg",
      title: "Software engineering laboratory",
      description:
        "The Acer Veriton M200 with a Pentium Dual Core 4.01 GHz processor, 8GB RAM, 1TB HDD, and 18.5 LED monitor is ideal for software engineering, offering solid performance",
      icon: "bi-code-slash",
      color: "dark",
      location: "CB C3A",
      category: "Design",
    },
    {
      name: "Software engineering lab-2 ",
      image: "/images/civil/c3b-inside.jpg",
      title: "Software engineering laboratory",
      description:
        "The Acer Veriton M200 with a Pentium Dual Core 4.01 GHz processor, 8GB RAM, 1TB HDD, and 18.5 LED monitor is ideal for software engineering, offering solid performance.",
      icon: "bi-code-slash",
      color: "dark",
      location: "CB C3B",
      category: "Design",
    },
    {
      name: "DB and Algorithms lab-1 ",
      image: "/images/laboratories/111 CB.JPG",
      title: "DB and Algorithms lab",
      description:
        "The system with an Intel i3, 8GB RAM, and 500GB SSD is perfect for running algorithms tasks, paired with Dell peripherals and a Samsung monitor.",
      icon: "bi-code-slash",
      color: "dark",
      location: "CB  111",
      category: "Algorithms",
    },
    {
      name: "DB and Algorithms lab-2 ",
      image: "/images/laboratories/112 CB.JPG",
      title: "DB and Algorithms lab",
      description:
        "The system with an Intel i3, 8GB RAM, and 500GB SSD is perfect for running algorithms tasks, paired with Dell peripherals and a Samsung monitor.",
      icon: "bi-code-slash",
      color: "dark",
      location: "CB 112",
      category: "Algorithms",
    },
    {
      name: "Data Visualization lab-I",
      image: "/images/civil/cbc2a-inside.jpg",
      title: "Data Visualization lab",
      description:
        "The system with 8GB RAM, 1TB HDD, and an 18.5 Acer monitor is well-suited for data visualization tasks, paired with Acer keyboard and mouse.",
      icon: "bi-bar-chart-line-fill",
      color: "primary",
      location: "CBC2A",
      category: "Data Science",
    },
    {
      name: "Data Visualization lab-II",
      image: "/images/civil/cbc2b-inside.jpg",
      title: "Data Visualization lab",
      description:
        "The system with 8GB RAM, 1TB HDD, and an 18.5 Acer monitor is well-suited for data visualization tasks, paired with Acer keyboard and mouse.",
      icon: "bi-bar-chart-line-fill",
      color: "primary",
      location: "CBC2B",
      category: "Data Science",
    },
    {
      name: "Java laboratory-1",
      image: "/images/laboratories/309CM.JPG",
      title: "Java laboratory",
      description:
        "The 32 systems with Intel Core i5 8th Gen, 16GB RAM, 1TB/2TB HDD, and LED monitors are ideal for Java development, offering powerful performance and connectivity.",
      icon: "bi-code",
      color: "warning",
      location: "CM 309",
      category: "Programming",
    },
    {
      name: "Java laboratory-2",
      image: "/images/laboratories/310 CM.JPG",
      title: "Java laboratory",
      description:
        "The 32 systems with Intel Core i5 8th Gen, 16GB RAM, 1TB/2TB HDD, and LED monitors are ideal for Java development, offering powerful performance and connectivity.",
      icon: "bi-code",
      color: "warning",
      location: "CM 310",
      category: "Programming",
    },
    {
      name: "Full Stack Development lab-1",
      image: "/images/civil/19-inside.jpg",
      title: "Full Stack development lab",
      description:
        "The system with an Intel i5 12th Gen processor, 8GB RAM, and 512GB SSD is perfect for full-stack development, offering strong performance for coding and testing.",
      icon: "bi-code",
      color: "warning",
      location: "Lib 2FA",
      category: "Web Development",
    },
    {
      name: "Full Stack Development lab-2",
      image: "/images/lib/20-inside.jpg",
      title: "Full Stack development lab",
      description:
        "The system with an Intel i5 12th Gen processor, 8GB RAM, and 512GB SSD is perfect for full-stack development, offering strong performance for coding and testing.",
      icon: "bi-code",
      color: "warning",
      location: "Lib 2FB",
      category: "Web Development",
    },
    {
      name: "CAD lab 1",
      image: "/images/laboratories/315 A FB.JPG",
      title: "CAD lab",
      description:
        "The system with an Intel G6405 CPU, 8GB RAM, 250GB SSD, 22 Samsung LED monitor, and Logitech keyboard/mouse is ideal for CAD applications, offering reliable performance and efficient design capabilities.",
      icon: "bi-code",
      color: "warning",
      location: "FB 315A",
      category: "Design",
    },
    {
      name: "CAD lab 2",
      image: "/images/laboratories/315 A FB.JPG",
      title: "CAD lab",
      description:
        "The system with an Intel G6405 CPU, 8GB RAM, 250GB SSD, 22 Samsung LED monitor, and Logitech keyboard/mouse is ideal for CAD applications, offering reliable performance and efficient design capabilities.",
      icon: "bi-code",
      color: "warning",
      location: "FB 315B",
      category: "Design",
    },
    {
      name: "CAD lab 3",
      image: "/images/laboratories/318 FB.JPG",
      title: "CAD lab",
      description:
        "The system with an Intel G6405 CPU, 8GB RAM, 250GB SSD, 22 Samsung LED monitor, and Logitech keyboard/mouse is ideal for CAD applications, offering reliable performance and efficient design capabilities.Comprehensive Full stack  development lab with 34 Acer computers for advanced database management and implementation.",
      icon: "bi-code",
      color: "warning",
      location: "FB 318",
      category: "Design",
    },
    {
      name: "CAD lab 4",
      image: "/images/fb/319-inside.jpg",
      title: "CAD lab",
      description:
        "The system with an Intel G6405 CPU, 8GB RAM, 250GB SSD, 22 Samsung LED monitor, and Logitech keyboard/mouse is ideal for CAD applications, offering reliable performance and efficient design capabilities.",
      icon: "bi-code",
      color: "warning",
      location: "FB 319",
      category: "Design",
    },
    {
      name: "CAD lab 5",
      image: "/images/laboratories/315 A FB.JPG",
      title: "CAD lab",
      description:
        "The system with an Intel G6405 CPU, 8GB RAM, 250GB SSD, 22 Samsung LED monitor, and Logitech keyboard/mouse is ideal for CAD applications, offering reliable performance and efficient design capabilities.",
      icon: "bi-code",
      color: "warning",
      location: "CM 204A",
      category: "Design",
    },
    {
      name: "CAD lab 6",
      image: "/images/laboratories/315 A FB.JPG",
      title: "CAD lab",
      description:
        "The system with an Intel G6405 CPU, 8GB RAM, 250GB SSD, 22 Samsung LED monitor, and Logitech keyboard/mouse is ideal for CAD applications, offering reliable performance and efficient design capabilities.",
      icon: "bi-code",
      color: "warning",
      location: "CM 204B",
      category: "Design",
    },
    {
      name: "Data Structures lab-1",
      image: "/images/laboratories/207 FB.JPG",
      title: "Data structures lab 1",
      description:
        "The Fingers Power Tower C8 with 8GB RAM, 500GB SSD, Intel Pentium Gold G7400, and a 22 Samsung LED monitor is perfect for data structures tasks, offering solid performance and efficiency.",
      icon: "bi-code-square",
      color: "danger",
      location: "FB 204",
      category: "Programming",
    },
    {
      name: "Data Structures lab-2",
      image: "/images/laboratories/207 FB.JPG",
      title: "Data structures lab 1",
      description:
        "The Fingers Power Tower C8 with 8GB RAM, 500GB SSD, Intel Pentium Gold G7400, and a 22 Samsung LED monitor is perfect for data structures tasks, offering solid performance and efficiency.",
      icon: "bi-code-square",
      color: "danger",
      location: "FB 205",
      category: "Programming",
    },
    {
      name: "Data Structures lab-3",
      image: "/images/laboratories/304 FB.JPG",
      title: "Data structures lab 1",
      description:
        "The Fingers Power Tower C8 with 8GB RAM, 500GB SSD, Intel Pentium Gold G7400, and a 22 Samsung LED monitor is perfect for data structures tasks, offering solid performance and efficiency.",
      icon: "bi-code-square",
      color: "danger",
      location: "FB 304",
      category: "Programming",
    },
    {
      name: "Data Structures lab-4",
      image: "/images/laboratories/304 FB.JPG",
      title: "Data structures lab 1",
      description:
        "The Fingers Power Tower C8 with 8GB RAM, 500GB SSD, Intel Pentium Gold G7400, and a 22 Samsung LED monitor is perfect for data structures tasks, offering solid performance and efficiency.",
      icon: "bi-code-square",
      color: "danger",
      location: "FB 305",
      category: "Programming",
    },
    {
      name: "Data Structures lab-5",
      image: "/images/laboratories/207 FB.JPG",
      title: "Data structures lab 1",
      description:
        "The Fingers Power Tower C8 with 8GB RAM, 500GB SSD, Intel Pentium Gold G7400, and a 22 Samsung LED monitor is perfect for data structures tasks, offering solid performance and efficiency.",
      icon: "bi-code-square",
      color: "danger",
      location: "CM 109",
      category: "Programming",
    },
    {
      name: "ELCS lab 1",
      image: "/images/laboratories/ELCS Lab 1 113 FB.JPG",
      title: "ELCS lab",
      description:
        "The Samsung PC with 8GB RAM, 500GB SSD, and a 22 LED monitor is well-suited for English Language and ELCS lab activities.",
      icon: "bi-graph-up",
      color: "secondary",
      location: "FB 113",
      category: "Communication",
    },
    {
      name: "ELCS lab 2",
      image: "/images/laboratories/ELCS Lab 1 113 FB.JPG",
      title: "Data Science Center",
      description:
        "The Samsung PC with 8GB RAM, 500GB SSD, and a 22 LED monitor is well-suited for English Language and ELCS lab activities.",
      icon: "bi-graph-up",
      color: "secondary",
      location: "FB 114",
      category: "Communication",
    },
    {
      name: "ELCS lab 3",
      image: "/images/fb/114-inside.jpg",
      title: "Data Science Center",
      description:
        "The Samsung PC with 8GB RAM, 500GB SSD, and a 22 LED monitor is well-suited for English Language and ELCS lab activities.",
      icon: "bi-graph-up",
      color: "secondary",
      location: "FB 207",
      category: "Communication",
    },
    {
      name: "Python Programming and Interfacing Lab - 1",
      image: "/images/laboratories/ELCS Lab 1 113 FB.JPG",
      title: "Data Science Center",
      description:
        "Specialized lab with 100 Acer systems for enhancing English language communication and professional skills.",
      icon: "bi-graph-up",
      color: "secondary",
      location: "FB 307",
      category: "Communication",
    },
    {
      name: "Python Programming and Interfacing Lab - 2",
      image: "/images/fb/308-inside.jpg",
      title: "Data Science Center",
      description:
        "The Acer Veriton M200 with Pentium Gold G5420, 1TB HDD, and a 20 LED monitor is ideal for Python programming, offering reliable performance for coding tasks.",
      icon: "bi-graph-up",
      color: "secondary",
      location: "FB 308",
      category: "Programming",
    },
    {
      name: "Python Programming and Interfacing Lab - 3",
      image: "/images/laboratories/ELCS Lab 1 113 FB.JPG",
      title: "Data Science Center",
      description:
        "The Acer Veriton M200 with Pentium Gold G5420, 1TB HDD, and a 20 LED monitor is ideal for Python programming, offering reliable performance for coding tasks.",
      icon: "bi-graph-up",
      color: "secondary",
      location: "FB 208",
      category: "Programming",
    },
    {
      name: "Python Programming and Interfacing Lab - 4",
      image: "/images/laboratories/ELCS Lab 1 113 FB.JPG",
      title: "Data Science Center",
      description:
        "The Acer Veriton M200 with Pentium Gold G5420, 1TB HDD, and a 20 LED monitor is ideal for Python programming, offering reliable performance for coding tasks.",
      icon: "bi-graph-up",
      color: "secondary",
      location: "CM 209",
      category: "Programming",
    },
    {
      name: "Python Programming and Interfacing Lab - 5",
      image: "/images/laboratories/ELCS Lab 1 113 FB.JPG",
      title: "Data Science Center",
      description:
        "The Acer Veriton M200 with Pentium Gold G5420, 1TB HDD, and a 20 LED monitor is ideal for Python programming, offering reliable performance for coding tasks.",
      icon: "bi-graph-up",
      color: "secondary",
      location: "CB 110",
      category: "Programming",
    },
    {
      name: "PG Lab (M. Tech. - AI)",
      image: "/images/civil/202-inside.jpg",
      title: "PG lab",
      description:
        "Specialized lab with 100 Acer systems for enhancing English language communication and professional skills.",
      icon: "bi-graph-up",
      color: "secondary",
      location: "CB 202",
      category: "AI",
    },
    {
      name: "Computer Center",
      image: "/images/laboratories/Computer Centre.JPG",
      title: "Research Resource Center",
      description:
        "Dedicated research space with 65 Acer systems for in-depth exploration of academic and technological resources.",
      icon: "bi-pc-display",
      color: "dark",
      location: "MB 202",
      category: "Research",
    },
    {
      name: "Research Laboratory - 1 (New Cellar)",
      image: "/images/laboratories/CBC1.JPG",
      title: "Research Resource Center",
      description:
        "Dedicated research space with 65 Acer systems for in-depth exploration of academic and technological resources.",
      icon: "bi-pc-display",
      color: "dark",
      location: "CB C1",
      category: "Research",
    },
    {
      name: "Research Laboratory - 2",
      image: "/images/laboratories/Computer Centre.JPG",
      title: "Research Resource Center",
      description:
        "Dedicated research space with 65 Acer systems for in-depth exploration of academic and technological resources.",
      icon: "bi-pc-display",
      color: "dark",
      location: "CB 103",
      category: "Research",
    },
    {
      name: "Projects lab - 1",
      image: "/images/laboratories/Computer Centre.JPG",
      title: "Projects lab",
      description:
        "A projects lab with Lenovo ThinkCentre Neo 50T ensures smooth performance with i5 processors, 16GB RAM, and 512GB SSDs.",
      icon: "bi-pc-display",
      color: "dark",
      location: "CM 304A",
      category: "Research",
    },
    {
      name: "Projects lab - 2",
      image: "/images/laboratories/Computer Centre.JPG",
      title: "Projects lab",
      description:
        "A projects lab with Lenovo ThinkCentre Neo 50T ensures smooth performance with i5 processors, 16GB RAM, and 512GB SSDs.",
      icon: "bi-pc-display",
      color: "dark",
      location: "CM 304B",
      category: "Research",
    },
  ];

  const categories = [
    "All",
    ...new Set(laboratories.map((lab) => lab.category)),
  ];

  const filteredLaboratories =
    activeFilter === "All"
      ? laboratories
      : laboratories.filter((lab) => lab.category === activeFilter);

  const handleLabClick = (lab) => {
    setSelectedLab(lab);
  };

  return (
    <div className="bg-light">
      <div className="page-header position-relative">
        <div className="container py-3 position-relative">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <h1 className="display-3 fw-bold mb-3 text-white">
                Department Laboratories
              </h1>
              <p className="lead opacity-75 mb-0">
                Cutting-edge technological spaces designed to transform academic
                learning into real-world innovation and research excellence.
              </p>
            </div>
            <div className="col-lg-4 text-end d-none d-lg-block">
              <i
                className="bi bi-laptop-fill"
                style={{ fontSize: "10rem", opacity: 0.1, color: "white" }}
              ></i>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-4">
        <div className="d-flex justify-content-center flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              className={`btn ${
                activeFilter === category
                  ? "btn-primary"
                  : "btn-outline-primary"
              } btn-sm`}
              onClick={() => setActiveFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="container py-4">
        <div className="row g-4">
          {filteredLaboratories.map((lab, index) => (
            <div key={index} className="col-md-6 col-lg-4">
              <div
                className="card border-0 shadow-lg hover-lift cursor-pointer position-relative overflow-hidden"
                onClick={() => handleLabClick(lab)}
                style={{
                  transition: "all 0.3s ease",
                  transform: "scale(1)",
                  perspective: "1000px",
                }}
              >
                <div className="position-relative">
                  <img
                    src={lab.image}
                    className="card-img-top"
                    alt={lab.name}
                    style={{
                      height: "300px",
                      objectFit: "cover",
                      filter: "brightness(0.8)",
                    }}
                  />
                  <div className="card-img-overlay d-flex align-items-end p-3">
                    <div className="bg-dark bg-opacity-50 p-2 rounded text-white">
                      <h5 className="card-title mb-0">{lab.name}</h5>
                      <small className="text-white-50">{lab.location}</small>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <div className="d-flex align-items-center mb-3">
                    <div
                      className={`bg-${lab.color}-soft p-3 rounded-circle me-3`}
                    >
                      <i
                        className={`bi ${lab.icon} text-${lab.color} fs-4`}
                      ></i>
                    </div>
                    <h3 className="h5 mb-0 text-muted">{lab.title}</h3>
                  </div>
                  <p className="text-muted">{lab.description}</p>
                  <div className="position-absolute top-0 end-0 m-3">
                    <span className="badge bg-primary">{lab.category}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedLab && (
        <div className="modal fade show d-block" tabIndex="-1">
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content shadow-lg">
              <div className="modal-header border-0 pb-0">
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setSelectedLab(null)}
                ></button>
              </div>
              <div className="modal-body">
                <div className="row align-items-center">
                  <div className="col-md-6">
                    <img
                      src={selectedLab.image}
                      className="img-fluid rounded-3 shadow-lg"
                      alt={selectedLab.name}
                    />
                  </div>
                  <div className="col-md-6">
                    <span className="badge bg-primary mb-3">
                      {selectedLab.category}
                    </span>
                    <h2 className="h3 mb-3">{selectedLab.name}</h2>
                    <h4 className="text-muted mb-3">{selectedLab.title}</h4>
                    <p className="lead text-muted">{selectedLab.description}</p>
                    <div className="d-flex align-items-center">
                      <i
                        className={`bi ${selectedLab.icon} text-primary me-3 fs-2`}
                      ></i>
                      <div>
                        <strong>Location:</strong> {selectedLab.location}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <BackToTopButton />
      <style jsx>{`
        .page-header {
          background: linear-gradient(135deg, #2575fc 0%, #6a11cb 100%);
          padding: 2rem 0;
          color: white;
          position: relative;
          overflow: hidden;
        }

        .page-header::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.3);
        }
      `}</style>
    </div>
  );
};

export default Laboratories;
