import React, { useEffect } from "react";
import "../../styles.css";
import BackToTopButton from "../../components/BackToTopButton";

const Gallery = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div></div>

      <BackToTopButton />
    </>
  );
};

export default Gallery;
