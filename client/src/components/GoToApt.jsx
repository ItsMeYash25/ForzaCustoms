import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const GoToApt = () => {
  const navigate = useNavigate();
  function goToApt() {
    navigate("/aptStatus");
  }
  return (
    <button
      className="d-flex justify-content-center align-items-center gap-2 btn home-btn"
      onClick={goToApt}
    >
      Check Appointment Status
      <BsArrowRight />
    </button>
  );
};

export default GoToApt;
