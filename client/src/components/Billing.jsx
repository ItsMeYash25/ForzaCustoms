import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { BillContext } from "../context/BillContext";
import BillingPartBox from "./BillingPartBox";
import GoToParts from "./GoToParts";

function Billing() {
  const bill = JSON.parse(localStorage.getItem("Bill"));
  const cart = bill.cart;

  const navigate = useNavigate();

  const { userBill } = useContext(BillContext);
  const [currentCart, updateCart] = useState(cart);

  function prepareBill()
  {
    const finalBill = bill;
    finalBill.status = "pending";

    const total = finalBill.cart.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.total;
    }, 0);
    finalBill.totalCost = total;
    localStorage.setItem("Bill", JSON.stringify(finalBill));
    navigate("/generateBill");
  }

  function createPartBox(part) {
    return (
      <BillingPartBox
        key={part.id}
        id={part.id}
        part={part.name}
        price={part.price}
        qty={part.qty}
        total={part.total}
      />
    );
  }

  useEffect(()=>{
    updateCart(()=>(cart));
  }, [cart]);


  return (
    <div>
    <div className="parts-page-style navbar">
        <GoToParts />
      </div>
      <div className="container py-3">
        <header>
          <div className="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom">
            <div className="logo"></div>

            <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
              <h2 className="hide-overflow cart-head">Cart & Billing</h2>
            </nav>
          </div>

          <div className="pricing-header p-3 pb-md-4 mx-auto text-center"></div>
        </header>

        <main>
          <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
            {currentCart?.map(createPartBox)}
          </div>

        </main>
        <button className="btn btn-danger w-100 py-2 part-table-font forza-bg" type="button" onClick={prepareBill}>Prepare Bill</button>
      </div>
    </div>
  );
}

export default Billing;
