import React from "react";
import { useState } from "react";
import { json, useLocation } from "react-router";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import BackToApts from "../components/BackToApts";

const AppointmentUpdate = () => {
  const navigate = useNavigate();
  const appointment = useLocation();

  const [data, update] = useState({
    id: appointment.state._id,
    status: "",
    message: "",
  });

  // console.log(appointment);

  async function handleUpdate(event) {
    // const aptObject = JSON.stringify(data);
    const id = data.id;
    const status = data.status;
    const message = data.message;

    if (message === "") {
      Swal.fire({
        icon: "error",
        title: "!! PLEASE FILL IN A MESSAGE !!",
        button: "OK",
      });
    } else {
      try {
        const response = await axios.put("/service/update", {
          id,
          status,
          message,
        });
        response.status === 200
          ? Swal.fire({
              icon: "success",
              title: "!! APPOINTMENT UPDATED !!",
              button: "OK",
            })(navigate("/appointment"))
          : Swal.fire({
              icon: "error",
              title: "UPDATION FAILED",
              text: "Please review the appointment again",
              button: "OK",
            });
      } catch (err) {
        console.log(err);
      }
    }
  }
  return (
    <div>
      <div className="parts-page-style navbar">
        <BackToApts />
      </div>
      <ul class="list-group">
        <li class="list-group-item generate-bill-font">ID: {appointment.state._id}</li>
        <li class="list-group-item generate-bill-font">Name: {appointment.state.firstName + " " + appointment.state.lastName}</li>
        <li class="list-group-item generate-bill-font">Email: {appointment.state.email}</li>
        <li class="list-group-item generate-bill-font">Contact Number: {appointment.state.contact_number}</li>
        <li class="list-group-item generate-bill-font">Address: {appointment.state.address}</li>
        <li class="list-group-item generate-bill-font">Vehicle Name: {appointment.state.vehicle_name}</li>
        <li class="list-group-item generate-bill-font">Vehicle Number: {appointment.state.vehicle_number}</li>
        <li class="list-group-item generate-bill-font">Date: {appointment.state.appointment_date}</li>
        <li class="list-group-item generate-bill-font">Status: {appointment.state.status}</li>
        <li class="list-group-item generate-bill-font">Message: {appointment.state.message}</li>
      </ul>

      <div className="row m-4 bill-details">
        <h1 className="h1 bill-head">ACCEPT/DECLINE APPOINTMENT:</h1>
        <div className="col-9 my-2">
          <input
            type="radio"
            className="btn-check"
            name="options-outlined"
            id="success-outlined"
            value={"Accepted"}
            onChange={(e) => update({ ...data, status: e.target.value })}
          />
          <label className="btn btn-outline-success" htmlFor="success-outlined">
            Accept Appointment
          </label>
        </div>
        <div className="col-9 my-2">
          <input
            type="radio"
            className="btn-check"
            name="options-outlined"
            id="danger-outlined"
            value={"Declined"}
            onChange={(e) => update({ ...data, status: e.target.value })}
          />
          <label className="btn btn-outline-danger" htmlFor="danger-outlined">
            Decline Appointment
          </label>
        </div>

        <div className="input-group my-4">
          <span className="input-group-text">
            Enter your message to the customer:
          </span>
          <textarea
            className="form-control"
            aria-label="With textarea"
            onChange={(e) => update({ ...data, message: e.target.value })}
          ></textarea>
        </div>
        <button
          type="button"
          className="btn btn-danger btn-lg forza-bg"
          onClick={handleUpdate}
        >
          Update Appointment
        </button>

        {/* <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Message</label>
          <textarea className="form-control">{appointment.state.message}</textarea>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
            />
            <label className="form-check-label" htmlFor="flexRadioDefault1">
              accepted
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
            />
            <label className="form-check-label" htmlFor="flexRadioDefault1">
              Declined
            </label>
          </div>
          <button className="btn btn-info">Submit</button>
        </div>
      </form>
    </div> */}
      </div>
    </div>
  );
};

export default AppointmentUpdate;
