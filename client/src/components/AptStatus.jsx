import React, { useState } from "react";
import BackToHome from "./BackToHome";
import Swal from "sweetalert2";
import axios from "axios";

function AptStatus() {
  const [id, setId] = useState("");
  const [document, setDocument] = useState();

  async function checkStatus(e) {
    e.preventDefault();

    try {
      const response = await axios.post("/service/check", { id });
      setDocument(response.data);
    } catch (error) {
      if (error.response.status === 404) {
        Swal.fire({
          icon: "error",
          title: "!! ID NOT FOUND !!",
          text: "Please enter a valid ID. The ID you entered might be blank or it does not exist in database.",
          button: "OK",
        });
        setId("");
      }
    }
  }

  return (
    <div>
      <div className="parts-page-style navbar">
        <BackToHome />
      </div>

      <div className="container my-4">
        <form onSubmit={checkStatus}>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control generate-bill-font"
              placeholder="Enter your appointment ID"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
              value={id}
              onChange={(ev) => setId(ev.target.value)}
            />
            <button
              className="btn btn-danger forza-bg generate-bill-font"
              type="submit"
              id="button-addon2"
            >
              Check The Status
            </button>
          </div>
        </form>

        <div>
          {/* ACTIVATE BELOW CODE ONLY IF ID IS FOUND IN DATABASE */}
          {document && (
            <div className="mb-3">
              <div className="d-flex flex-column flex-md-row p-4 gap-4 py-md-5 align-items-center justify-content-center">
                <div className="list-group">
                  <div className="list-group-item list-group-item-action d-flex gap-3 py-3">
                    <div>
                      <h6 className="mb-0 part-table-head">ID</h6>
                      <p className="mb-0 opacity-75 generate-bill-font">
                        {document._id}
                      </p>
                    </div>
                  </div>

                  <div className="list-group-item list-group-item-action d-flex gap-3 py-3">
                    <div>
                      <h6 className="mb-0 part-table-head">Name</h6>
                      <p className="mb-0 opacity-75 generate-bill-font">
                        {document.firstName + " " + document.lastName}
                      </p>
                    </div>
                  </div>

                  <div className="list-group-item list-group-item-action d-flex gap-3 py-3">
                    <div>
                      <h6 className="mb-0 part-table-head">Email</h6>
                      <p className="mb-0 opacity-75 generate-bill-font">
                        {document.email}
                      </p>
                    </div>
                  </div>

                  <div className="list-group-item list-group-item-action d-flex gap-3 py-3">
                    <div>
                      <h6 className="mb-0 part-table-head">Contact</h6>
                      <p className="mb-0 opacity-75 generate-bill-font">
                        {document.contact_number}
                      </p>
                    </div>
                  </div>

                  <div className="list-group-item list-group-item-action d-flex gap-3 py-3">
                    <div>
                      <h6 className="mb-0 part-table-head">Address</h6>
                      <p className="mb-0 opacity-75 generate-bill-font">
                        {document.address}
                      </p>
                    </div>
                  </div>

                  <div className="list-group-item list-group-item-action d-flex gap-3 py-3">
                    <div>
                      <h6 className="mb-0 part-table-head">Vehicle Name</h6>
                      <p className="mb-0 opacity-75 generate-bill-font">
                        {document.vehicle_name}
                      </p>
                    </div>
                  </div>

                  <div className="list-group-item list-group-item-action d-flex gap-3 py-3">
                    <div>
                      <h6 className="mb-0 part-table-head">Vehicle Number</h6>
                      <p className="mb-0 opacity-75 generate-bill-font">
                        {document.vehicle_number}
                      </p>
                    </div>
                  </div>

                  <div className="list-group-item list-group-item-action d-flex gap-3 py-3">
                    <div>
                      <h6 className="mb-0 part-table-head">Appointment Date</h6>
                      <p className="mb-0 opacity-75 generate-bill-font">
                        {document.appointment_date}
                      </p>
                    </div>
                  </div>

                  <div className="list-group-item list-group-item-action d-flex gap-3 py-3">
                    <div>
                      <h6 className="mb-0 part-table-head">Status</h6>
                      <p className="mb-0 opacity-75 generate-bill-font">
                        {document.status}
                      </p>
                    </div>
                  </div>

                  <div className="list-group-item list-group-item-action d-flex gap-3 py-3">
                    <div>
                      <h6 className="mb-0 part-table-head">Message</h6>
                      <p className="mb-0 opacity-75 generate-bill-font">
                        {document.message}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AptStatus;
