import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const ViewOrders = () => {
  const navigate = useNavigate();
  function goToOrders() {
    navigate("/warehouse");
  }
  return (
      <button
        className="d-flex justify-content-center align-items-center gap-2 btn home-btn"
        onClick={goToOrders}
      >
        <BsArrowLeft />
        View Orders
      </button>
  );
};

export default ViewOrders;

