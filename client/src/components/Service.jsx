import React, { useState } from "react";
import BackToHome from "./BackToHome";
import { useNavigate } from "react-router-dom";
import GoToApt from "./GoToApt";
import Swal from 'sweetalert2';
import axios from "axios";

function Service() {
  const navigate = useNavigate();

  const [service, setService] = useState({
    id: "",
    fName: "",
    lName: "",
    email: "",
    contact: "",
    addr: "",
    vName: "",
    vNum: "",
    aptDate: "",
  });
  async function serviceObj() {
    const serviceApt = service;

    const response = await axios.post("/service/add", serviceApt);
    Swal.fire({
      icon: 'success',
      title: '!! YOUR APPOINTMENT HAS BEEN QUEUED !!',
      text: 'Please remember your appointment id',
      button: "OK"
    });
    navigate("/generateApt", { state: response.data });
  }

  return (
    <div>
      <div className="parts-page-style navbar">
        <BackToHome />
        <GoToApt />
      </div>
      <div className="container generate-bill-font">
        <main>
          <div className="py-5 text-center">
            <div className="logo d-block mx-auto mb-4"></div>
            <h1 className="generate-bill-head">Make an Appointment</h1>
            <p className="lead generate-bill-cart">
              Fill out the below given form to make an appointment with our very
              own Forza-Customs servicing garage. You'll be able to see if your
              service appointment has been accepted or you have to choose
              another time. Click on top-right corner button to view your
              appointment status.
            </p>
          </div>

          <div className="h-100 d-flex align-items-center justify-content-center">
            <div className="col-md-7 col-lg-8">
              <form className="needs-validation" noValidate="">
                <div className="row g-3">
                  <div className="col-sm-6">
                    <label htmlFor="firstName" className="form-label">
                      First name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="firstName"
                      placeholder=""
                      value={service.fName}
                      required={true}
                      onChange={(e) =>
                        setService({ ...service, fName: e.target.value })
                      }
                    />
                    <div className="invalid-feedback">
                      Valid first name is required.
                    </div>
                  </div>

                  <div className="col-sm-6">
                    <label htmlFor="lastName" className="form-label">
                      Last name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="lastName"
                      placeholder=""
                      value={service.lName}
                      required={true}
                      onChange={(e) =>
                        setService({ ...service, lName: e.target.value })
                      }
                    />
                    <div className="invalid-feedback">
                      Valid last name is required.
                    </div>
                  </div>

                  <div className="col-12">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="you@example.com"
                      value={service.email}
                      onChange={(e) =>
                        setService({ ...service, email: e.target.value })
                      }
                    />
                    <div className="invalid-feedback">
                      Please enter a valid email address. updates.
                    </div>
                  </div>

                  <div className="col-12">
                    <label htmlFor="contact" className="form-label">
                      Contact Number
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="contact"
                      placeholder="Enter a 10 digit phone number"
                      value={service.contact}
                      onChange={(e) =>
                        setService({
                          ...service,
                          contact: e.target.valueAsNumber,
                        })
                      }
                    />
                    <div className="invalid-feedback">
                      Please enter a valid phone number for letting us contact
                      you.
                    </div>
                  </div>

                  <div className="col-12">
                    <label htmlFor="address" className="form-label">
                      Address
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="address"
                      placeholder="Enter your full postal address"
                      required={true}
                      value={service.addr}
                      onChange={(e) =>
                        setService({ ...service, addr: e.target.value })
                      }
                    />
                    <div className="invalid-feedback">
                      Please enter your address.
                    </div>
                  </div>

                  <div className="col-12">
                    <label htmlFor="vehicle" className="form-label">
                      Vehicle Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="vehicle"
                      placeholder="Enter name of the vehicle you want to service"
                      required={true}
                      value={service.vName}
                      onChange={(e) =>
                        setService({ ...service, vName: e.target.value })
                      }
                    />
                    <div className="invalid-feedback">
                      Please enter a valid vehicle name.
                    </div>
                  </div>

                  <div className="col-12">
                    <label htmlFor="vnumber" className="form-label">
                      Vehicle number
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="vnumber"
                      placeholder="Enter the number plate of the vehicle you want to service"
                      required={true}
                      value={service.vNum}
                      onChange={(e) =>
                        setService({ ...service, vNum: e.target.value })
                      }
                    />
                    <div className="invalid-feedback">
                      Please enter your vehicle's number plate.
                    </div>
                  </div>

                  <div className="mb-3">
                    <div className="input-group">
                      <span className="input-group-text">Appointment Date</span>
                      <input
                        type="date"
                        className="form-control"
                        id="basic-url"
                        aria-describedby="basic-addon3 basic-addon4"
                        value={service.aptDate}
                        onChange={(e) =>
                          setService({ ...service, aptDate: e.target.value })
                        }
                      />
                      <div className="invalid-feedback">
                        Please select a date.
                      </div>
                    </div>
                  </div>
                </div>

                <hr className="my-4" />

                <button
                  className="w-100 btn btn-danger btn-lg forza-bg"
                  type="button"
                  onClick={serviceObj}
                >
                  Submit Form
                </button>
              </form>
            </div>
          </div>
        </main>

        <footer className="my-5 pt-5 text-body-secondary text-center text-small">
          <p className="mb-1">© 2023 Forza Customs</p>
        </footer>
      </div>
    </div>
  );
}

export default Service;
