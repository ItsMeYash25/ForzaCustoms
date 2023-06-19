import React from "react";
import BillItems from "./BillItems";
import html2pdf from "html2pdf.js";
import axios from "axios";

function Bill() {
  const bill = JSON.parse(localStorage.getItem("Bill"));
  const cart = bill.cart;

  function resetBillKey() {
    localStorage.removeItem("Bill");
    window.location.reload();
  }
  async function downloadPDF() {
    const invoice = document.getElementById("invoice-content");

    var options = {
      filename: "forza-invoice.pdf",
      margin: 10,
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 1 },
      jsPDF: { unit: "mm", format: "letter", orientation: "portrait" },
    };
    const response = await axios.post("/bill/generate", bill);
    await html2pdf().from(invoice).set(options).save();

    resetBillKey();
  }

  function createBillItems(item) {
    return (
      <BillItems
        key={item.id}
        id={item.id}
        name={item.name}
        price={item.price}
        qty={item.qty}
        total={item.total}
      />
    );
  }

  return (
    <div>
      <div className="text-center my-4">
        <button
          type="button"
          className="btn btn-danger forza-bg"
          onClick={downloadPDF}
        >
          Download Invoice
        </button>
      </div>
      <div className="col-lg-8 mx-auto p-4 py-md-5" id="invoice-content">
        <header className="d-flex align-items-center pb-3 border-bottom">
          <div className="logo mx-auto"></div>
        </header>

        <main>
          <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
            <h1 className="display-4 fw-normal text-body-emphasis bill-head">
              INVOICE
            </h1>
            <p className="fs-5 text-body-secondary bill-font">
              You will be informed through email when your order will be out for
              shipping.
            </p>
            <h5 className="bill-details">Name: {bill.name}</h5>
            <h5 className="bill-details">Email: {bill.email}</h5>
            <h5 className="bill-details">Address: {bill.addr}</h5>
            <h5 className="bill-details">Contact: {bill.contact}</h5>
          </div>

          <div className="d-flex flex-column flex-md-row p-4 gap-4 py-md-5 align-items-center justify-content-center bill-font">
            <div className="list-group">
              <div className="list-group-item list-group-item-action d-flex gap-3 py-3">
                <div className="table-responsive small text-center">
                  <h3>Cart</h3>
                  <table className="table table-striped table-sm text-center">
                    <thead>
                      <tr>
                        <th scope="col">id</th>
                        <th scope="col">Item-Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Total</th>
                      </tr>
                    </thead>
                    <tbody>{cart?.map(createBillItems)}</tbody>
                  </table>
                  <h5 className="text-center">
                    Grand Total: ${bill.totalCost}
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </main>

        <footer className="pt-5 my-5 text-center border-top text-dark bill-details">
          {/* <div className="bill-footer"> */}
          <h2 className="bill-end forza-color">
            !! THANKS FOR CHOOSING FORZA CUSTOMS !!
          </h2>
          Forza Customs · © 2023
          {/* </div> */}
        </footer>
      </div>
    </div>
  );
}

export default Bill;
