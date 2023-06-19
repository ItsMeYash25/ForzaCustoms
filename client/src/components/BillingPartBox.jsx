import React, {useContext} from "react";
import { BillContext } from "../context/BillContext";

function BillingPartBox(props) {

  const { userBill, removePart } = useContext(BillContext);


  return (
    <div className="col">
      <div className="card mb-4 rounded-3 shadow-sm">
        <div className="card-header py-3">
          <h2 className="hide-overflow cart-box-head">{props.part}</h2>
        </div>
        <div className="card-body cart-box-content">
          <ul className="list-unstyled mt-3 mb-4">
            <li>
              <h4 className="hide-overflow">Price: ${props.price}</h4>
            </li>
            <li>
              <h4 className="hide-overflow">Qty: {props.qty}</h4>
            </li>
            <li>
              <h4 className="hide-overflow">Total: ${props.total}</h4>
            </li>
          </ul>
          <button
            type="button"
            className="btn btn-lg btn-danger forza-bg"
            value={props.id}
            onClick={removePart}
          >
            Remove from Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default BillingPartBox;
