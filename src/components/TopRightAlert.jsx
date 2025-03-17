import React, { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const TopRightAlert = ({ message = "Welcome to Our Page" }) => {
  useEffect(() => {
    toast.info(message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      draggable: false,
      style: { width: "30vw" },
    });
  }, [message]);

  return <ToastContainer />;
};

export default TopRightAlert;
