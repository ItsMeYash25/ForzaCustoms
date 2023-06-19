import React, { useContext, useState } from "react";
import BackToHome from "../BackToHome";
import Swal from 'sweetalert2';
import FwdToBilling from "../FwdToBilling";
import { useLocation, useNavigate } from "react-router-dom";
import { BillContext } from "../../context/BillContext";

function PartPage() {
  const bill = JSON.parse(localStorage.getItem("Bill"));
  const cart = bill.cart;

  const { userBill, addPart } = useContext(BillContext);
  const navigate = useNavigate();

  const location = useLocation();
  const part = {
    id: location.state.id,
    name: location.state.name,
    img: location.state.img,
    price: location.state.price,
    qty: 0,
  };

  const [partsCount, setPartsCount] = useState(1);
  function handleAddRemove(event) {
    const name = event.target.name;
    if (name === "add") {
      setPartsCount(partsCount + 1);
    } else if (name === "remove" && partsCount > 1) {
      setPartsCount(partsCount - 1);
    }
  }

  function addToCart() {
    const isPartAdded = cart.filter((obj) => obj.id === part.id).length > 0;
    if (isPartAdded) {
      Swal.fire({
        icon: 'error',
        title: '!! ITEM ALREADY ADDED TO CART !!',
        text: 'Remove item from cart and add again with required quantity',
        button: "OK"
      }) 
    } else {
      part.qty = partsCount;
      addPart({
        id: part.id,
        name: part.name,
        price: part.price,
        qty: part.qty,
        total: part.price * part.qty,
      });
      navigate("/parts");
    }
  }

  return (
    <div>
      <div className="parts-page-style navbar">
        <BackToHome />
        <FwdToBilling />
      </div>
      <div className="text-center container px-4 py-5">
        <img src={part.img} className="img-thumbnail" alt="..." />
        <div className="col">
          <div className="row g-4">
            <h1 className="my-4 p-2 border-bottom part-head">{part.name}</h1>
            <p className="text-body-secondary part-font">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum
              autem, voluptatum assumenda architecto, esse libero consequatur
              iusto, nulla debitis voluptatibus in atque maxime facilis aliquam
              quaerat eveniet! Optio maxime inventore modi vitae sit et
              doloremque odio assumenda, molestias soluta aliquid, nemo officia
              voluptate alias tenetur, cum fugit libero atque placeat!
            </p>
            <h2 className="p-2 part-head">${part.price}</h2>

            <div className="d-grid gap-4 col-6 mx-auto">
              <div
                className="btn-group"
                role="group"
                aria-label="Basic mixed styles example"
              >
                <button
                  type="button"
                  className="btn btn-success part-font"
                  name="add"
                  onClick={handleAddRemove}
                >
                  +
                </button>
                <span className="input-group-text part-font">{partsCount}</span>
                <button
                  type="button"
                  className="btn btn-warning part-font"
                  name="remove"
                  onClick={handleAddRemove}
                >
                  -
                </button>
              </div>
              <button
                className="btn btn-danger part-font forza-bg"
                type="button"
                onClick={addToCart}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PartPage;
