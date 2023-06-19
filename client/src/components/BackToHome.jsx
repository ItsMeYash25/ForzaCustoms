import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const BackToHome = () => {
  const navigate = useNavigate();
  function goToHome() {
    navigate("/");
  }
  return (
      <button
        className="d-flex justify-content-center align-items-center gap-2 btn home-btn"
        onClick={goToHome}
      >
        <BsArrowLeft />
        Back to Home
      </button>
  );
};

export default BackToHome;
