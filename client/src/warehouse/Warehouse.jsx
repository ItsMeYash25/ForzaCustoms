import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BackToHome from "../components/BackToHome";
import axios from "axios";
function Warehouse() {
  const navigate = useNavigate();

  const [bills, setBills] = useState([]);
  useEffect(() => {
    axios.get("/bill/").then((res) => setBills(res.data.billDoc));
  });

  async function changeStatus(id, status) {
    const res = await axios.put("/bill/shipped/" + id, { status });
  }

  function viewCart(bill) {
    navigate("/bill-page", { state: bill });
  }

  function mapBillDetails(bill) {
    return (
      <tr key={bill._id} className="bill-table-col">
        <td>{bill._id}</td>
        <td>{bill.name}</td>
        <td>{bill.email}</td>
        <td>{bill.contact}</td>
        <td>{bill.addr}</td>
        <td>${bill.totalCost}</td>
        <td>{bill.status}</td>
        <td>
          <button
            className={
              bill.status === "shipped" ? "btn btn-warning" : "btn btn-success"
            }
            onClick={() => changeStatus(bill._id, bill.status)}
          >
            {bill.status === "shipped" ? "Mark Pending" : "Mark Shipped"}
          </button>
        </td>
        <td>
          <button className="btn btn-danger" onClick={() => viewCart(bill)}>
            View Bill
          </button>
        </td>
      </tr>
    );
  }

  return (
    <>
      <main>
        <div className="parts-page-style navbar">
          <BackToHome />
        </div>
        <div className="m-4 table-responsive">
          <table className="table">
            <thead>
              <tr className="table-dark text-center bill-table-head">
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Contact</th>
                <th>Address</th>
                <th>Total Amount</th>
                <th>Status</th>
                <th>Change Status</th>
                <th>View Bill</th>
              </tr>
            </thead>
            <tbody className="table-danger text-center">
              {bills?.map(mapBillDetails)}
            </tbody>
          </table>
        </div>
      </main>
    </>
  );
}

export default Warehouse;
