import React, { useEffect } from "react";
import BackToTopButton from "../../components/BackToTopButton";

const StudentWork = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <h1>Student Work</h1>
      <h2>Smart India Hackathon</h2>
      <p>
        Innovation and entrepreneurship are at the peak in India. In order to
        make development a comprehensive mass movement and innovate on all
        fronts, MHRD, AICTE, i4c and Persistent Systems have come together to
        organise Smart India Hackathon (SIH) 2019 - a unique Open Innovation
        Model for identifying new and disruptive technology innovations to solve
        the challenges faced in our country. It's a non-stop product development
        competition, where problem statements are posed to technology students
        for innovative solutions. It can help to: Harness creativity & expertise
        of students Spark institute-level hackathons Build funnel for 'Startup
        India' campaign Crowdsource solutions for improving governance and
        quality of life Provide opportunity to citizens to provide innovative
        solutions to India's daunting problems
      </p>

      <BackToTopButton />
    </div>
  );
};

export default StudentWork;
