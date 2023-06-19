import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const BackToApts = () => {
  const navigate = useNavigate();
  function goToApts() {
    navigate("/appointment");
  }
  return (
      <button
        className="d-flex justify-content-center align-items-center gap-2 btn home-btn"
        onClick={goToApts}
      >
        <BsArrowLeft />
        Back to Appointments
      </button>
  );
};

export default BackToApts;
