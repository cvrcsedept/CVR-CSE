import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function BackToTopButton() {
  const [visible, setVisible] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 200);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);
  useEffect(() => {
    const styleSheet = document.createElement("style");
    styleSheet.innerHTML = `
      @keyframes ping-once {
        0% {
          transform: scale(0.95);
          box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.7);
        }
        70% {
          transform: scale(1);
          box-shadow: 0 0 0 10px rgba(59, 130, 246, 0);
        }
        100% {
          transform: scale(0.95);
          box-shadow: 0 0 0 0 rgba(59, 130, 246, 0);
        }
      }
      .animate-ping-once {
        animation: ping-once 0.3s cubic-bezier(0, 0, 0.2, 1) 1;
      }
    `;
    document.head.appendChild(styleSheet);
    return () => document.head.removeChild(styleSheet);
  }, []);

  const handleClick = () => {
    setIsClicked(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
    setTimeout(() => {
      setIsClicked(false);
    }, 300);
  };

  return (
    <button
      onClick={handleClick}
      className={`fixed shadow-lg transition-all duration-300 flex items-center justify-center 
      ${visible ? "opacity-80 scale-100" : "opacity-0 scale-90"}
      ${
        isClicked
          ? "animate-ping-once bg-blue-700"
          : "bg-gradient-to-br from-blue-500 to-indigo-600"
      }`}
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        zIndex: "1000",
        height: "40px",
        width: "40px",
        borderRadius: "50%",
        aspectRatio: "1 / 1",
        border: "2px solid rgba(255, 255, 255, 0.2)",
        boxShadow: isClicked
          ? "0 0 10px rgba(59, 130, 246, 0.7)"
          : "0 4px 10px rgba(0, 0, 0, 0.2)",
      }}
    >
      <FaArrowUp
        size={18}
        className={`transition-transform duration-300 text-black ${
          isClicked ? "translate-y-1" : ""
        }`}
      />
    </button>
  );
}
