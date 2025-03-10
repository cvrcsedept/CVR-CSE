import React from "react";
import ImageHoverText from "./ImageHoverText";

const FacultyGallery = () => {
  const ProfImgData = [
    {
      src: "/images/Afroz 1.jpeg",
      alt: "Afroz1",
      text: "Afroz1 - CSE",
    },
    {
      src: "/images/Afroz 2.jpeg",
      alt: "Afroz2",
      text: "Afroz2 - CSE",
    },
    {
      src: "/images/Afroz 3.jpeg",
      alt: "Afroz3",
      text: "Afroz3 - CSE",
    },
  ];

  return <ImageHoverText images={ProfImgData} />;
};

export default FacultyGallery;
