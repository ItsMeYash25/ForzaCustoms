import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const GoToParts = () => {
  const navigate = useNavigate();
  function goToParts() {
    navigate("/parts");
  }
  return (
      <button
        className="d-flex justify-content-center align-items-center gap-2 btn home-btn"
        onClick={goToParts}
      >
        <BsArrowLeft />
        Order Parts
      </button>
  );
};

export default GoToParts;
