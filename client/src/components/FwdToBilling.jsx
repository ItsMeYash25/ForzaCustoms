import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const FwdToBilling = () => {
  const navigate = useNavigate();
  function goToBilling() {
    navigate("/billing");
  }
  return (
      <button
        className="d-flex justify-content-center align-items-center gap-2 btn home-btn"
        onClick={goToBilling}
      >
        Go To Cart
        <BsArrowRight />
      </button>
  );
};

export default FwdToBilling;

