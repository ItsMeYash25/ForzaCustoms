import React from "react";
import { useNavigate } from "react-router-dom";

function PartContainer(props) {
  const navigate = useNavigate();

  var part = {
    id: 0,
    name: "",
    img: "",
    price: 0,
  };

  function handleSelect() {

    part = {
      id: props.id,
      name: props.part,
      img: props.img,
      price: props.price,
    };

    navigate("/partPage", {
      state: {
        id: part.id,
        name: part.name,
        img: part.img,
        price: part.price,
      },
    });
  }

  return (
    <div className="col">
      <div className="card shadow-sm part-box">
        <img className="part-img" src={props.img} alt={props.img} />
        <div className="card-body part-box-font">
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <h3>{props.part}</h3>
            </div>
            <h4 className="text-body-secondary">
              <button
                onClick={handleSelect}
                type="button"
                className="btn btn-lg btn-danger forza-bg"
              >
                Select Part
              </button>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PartContainer;

