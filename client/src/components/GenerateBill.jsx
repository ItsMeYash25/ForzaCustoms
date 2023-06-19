import React, { useState } from "react";
import GoToParts from "./GoToParts";
import CartItems from "./CartItems";
import { useNavigate } from "react-router-dom";

function GenerateBill() {
  const navigate = useNavigate();
  const bill = JSON.parse(localStorage.getItem("Bill"));
  // const cart = bill.cart;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [addr, setAddr] = useState("");
  const [cart, setCart] = useState(bill.cart);
  const [totalCost, setTotalCost] = useState(bill.totalCost);
  const [status, setStatus] = useState(bill.status);

  async function generateFinalBill() {
    const finalBill = {
      name: name,
      email: email,
      contact: contact,
      addr: addr,
      cart: cart,
      totalCost: totalCost,
      status: status,
    };
    localStorage.setItem("Bill", JSON.stringify(finalBill));
    //********************** QUERY TO ADD BILL OBJECT TO DATABASE **********************//
    //********************** CODE TO GENERATE DOWNLOADABLE INVOICE **********************//
    navigate("/bill");
  }

  function cartItems(item) {
    return (
      <CartItems
        key={item.id}
        name={item.name}
        price={item.price}
        qty={item.qty}
      />
    );
  }

  return (
    <div>
      <div className="parts-page-style navbar">
        <GoToParts />
      </div>

      <div className="container">
        <main>
          <div className="py-5 text-center">
            <h2>Enter Your Details</h2>
          </div>

          <div className="row g-5">
            <div className="col-md-5 col-lg-4 order-md-last">
              <h4 className="d-flex justify-content-between align-items-center mb-3">
                <span className="forza-color">Your cart</span>
                <span className="badge bg-danger rounded-pill forza-bg">
                  {cart.reduce((accumulator) => {
                    return accumulator + 1;
                  }, 0)}
                </span>
              </h4>

              <ul className="list-group mb-3">
                {cart?.map(cartItems)}

                <li className="list-group-item d-flex justify-content-between">
                  <span>Total (USD)</span>
                  <strong>${bill.totalCost}</strong>
                </li>
              </ul>
            </div>
            <div className="col-md-7 col-lg-8">
              <form className="needs-validation" noValidate="">
                <div className="row g-3">
                  <div className="col-sm-12">
                    <div className="form-floating">
                      <input
                        name="fullName"
                        type="text"
                        onChange={(e) => setName(e.target.value)}
                        className="my-2 form-control"
                        id="floatingInput"
                        placeholder="Enter full name"
                        required
                        value={name}
                      />
                      <label htmlFor="floatingInput">Full Name</label>
                    </div>

                    <div className="invalid-feedback">
                      Valid full name is required.
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="form-floating">
                      <input
                        name="contact"
                        type="number"
                        onChange={(e) => setContact(e.target.value)}
                        className="my-2 form-control"
                        id="floatingInput"
                        placeholder="Enter contact number"
                        required
                        value={contact}
                      />
                      <label htmlFor="floatingInput">Contact Number</label>
                    </div>

                    <div className="invalid-feedback">
                      Contact number is required
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="form-floating">
                      <input
                        name="email"
                        type="email"
                        onChange={(e) => setEmail(e.target.value)}
                        className="my-2 form-control"
                        id="floatingInput"
                        placeholder="name@example.com"
                        value={email}
                        required
                      />
                      <label htmlFor="floatingInput">Email address</label>
                    </div>
                    <div className="invalid-feedback">
                      Please enter a valid email address for shipping updates.
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="form-floating">
                      <input
                        name="addr"
                        type="text"
                        onChange={(e) => setAddr(e.target.value)}
                        className="my-2 form-control"
                        id="floatingInput"
                        placeholder="1234 Main St"
                        value={addr}
                        required
                      />
                      <label htmlFor="floatingInput">Delivery address</label>
                    </div>
                    <div className="invalid-feedback">
                      Please enter your shipping address.
                    </div>
                  </div>

                  <hr className="my-4" />

                  <button
                    className="w-100 btn btn-danger btn-lg forza-bg"
                    type="button"
                    onClick={generateFinalBill}
                  >
                    Generate Invoice
                  </button>
                </div>
              </form>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default GenerateBill;
