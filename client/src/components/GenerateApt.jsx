import React from "react";
import html2pdf from "html2pdf.js";
import { useLocation } from "react-router-dom";

function GenerateApt() {
  const location = useLocation();
  const serviceApt = location.state;

  async function downloadPDF() {
    const invoice = document.getElementById("service-content");

    var options = {
      filename: "forza-service.pdf",
      margin: 10,
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 1 },
      jsPDF: { unit: "mm", format: "letter", orientation: "portrait" },
    };
    await html2pdf().from(invoice).set(options).save();
    window.location.reload();
  }
  return (
    <div>
      <div className="text-center my-4">
        <button
          type="button"
          className="btn btn-danger forza-bg"
          onClick={downloadPDF}
        >
          Download Service Appointment
        </button>
      </div>
      <div className="col-lg-8 mx-auto p-4 py-md-5" id="service-content">
        <header className="d-flex align-items-center pb-3 border-bottom">
          <div className="logo mx-auto"></div>
        </header>

        <main>
          <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
            <h1 className="display-4 fw-normal text-body-emphasis bill-head">
              Service Appointment
            </h1>
            <p className="fs-5 text-body-secondary bill-font">
              Please check your appointment status by entering given ID in
              "Check Appointment Status" on Service Appointment page.
            </p>
            <h5 className="bill-details my-4">ID: {serviceApt._id}</h5>
            <h5 className="bill-details my-4">
              Name: {serviceApt.firstName} {serviceApt.lastName}
            </h5>
            <h5 className="bill-details my-4">Email: {serviceApt.email}</h5>
            <h5 className="bill-details my-4">
              Contact: {serviceApt.contact_number}
            </h5>
            <h5 className="bill-details my-4">Address: {serviceApt.address}</h5>
            <h5 className="bill-details my-4">
              Vehicle Name: {serviceApt.vehicle_name}
            </h5>
            <h5 className="bill-details my-4">
              Vehicle Number: {serviceApt.vehicle_number}
            </h5>
            <h5 className="bill-details my-4">
              Appointment Date: {serviceApt.appointment_date}
            </h5>
            <p className="fs-5 text-body-secondary bill-font">
              The amount to be paid for servicing will be declared based on
              analysis and repairs done on your vehicle in Forza-Customs garage
              at the time of appointment.
            </p>
          </div>
        </main>

        <footer className="pt-5 my-5 text-center border-top text-dark bill-details">
          <h3 className="bill-end forza-color">
            YOUR APPOINTMENT WILL BE NOTED
          </h3>
          <h2 className="bill-end forza-color">
            !! THANKS FOR CHOOSING FORZA CUSTOMS !!
          </h2>
          Forza Customs · © 2023
        </footer>
      </div>
    </div>
  );
}

export default GenerateApt;
