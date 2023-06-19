import React from "react";

function CartItems(props) {
  return (
    <li className="list-group-item d-flex justify-content-between lh-sm">
      <div>
        <h6 className="my-0">{props.name}</h6>
        <small className="text-body-secondary me-1">Price: ${props.price}</small>
        <small className="text-body-secondary me-1">Qty: {props.qty}</small>
      </div>
      <span className="text-body-secondary">${props.price * props.qty}</span>
    </li>
  );
}

export default CartItems;
