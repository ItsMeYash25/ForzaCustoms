import { useEffect, useState } from "react";
import BackToHome from "../components/BackToHome";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Appointment = () => {

  const EmptyMessage = ()=>{
    if (appointments.length === 0) {
      return (
        <h1 className="part-head text-center">NO APPOINTMENTS TO REVIEW</h1>
      );
    }
    return (
      <h1 className="part-head text-center">CLICK ON APPOINTMENT TO REVIEW</h1>
    );
  }

  const [appointments, setAppointment] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    async function getAllAppointment() {
      const response = await axios.get("/service/");
      setAppointment(response.data);
    }
    getAllAppointment();
  }, []);

  const navigateTo = (appointment) => {
    navigate("/updateApt", { state: appointment });
  };
  return (
    <main>
      <div className="parts-page-style navbar">
        <BackToHome />
      </div>
      <div className="m-4 ">
        <main className="row gap-2 d-flex justify-content-center align-items-center">
          
          <EmptyMessage />
          {
          appointments?.map((appointment) => (
            <div
              className={
                appointment.status === "Unseen"
                  ? "list-group-item list-group-item-action d-flex gap-3 py-3 bg-warning"
                  : appointment.status === "Accepted"
                  ? "list-group-item list-group-item-action d-flex gap-3 py-3 bg-green"
                  : "list-group-item list-group-item-action d-flex gap-3 py-3 bg-danger"
              }
              onClick={() => navigateTo(appointment)}
              key={appointment._id}
            >
              <div className="d-flex gap-2 w-100 justify-content-between">
                <div>
                  <h6 className="mb-0 part-table-head">
                    {appointment.firstName + " " + appointment.lastName}
                  </h6>
                  <p className="mb-0 opacity-75 generate-bill-font">
                    ID: {appointment._id}
                  </p>
                  <p className="mb-0 opacity-75 generate-bill-font">
                    Status: {appointment.status}
                  </p>
                  <p className="mb-0 opacity-75 generate-bill-font">
                    Message: {appointment.message}
                  </p>
                  <p className="mb-0 opacity-75 generate-bill-font">
                    Appointment Date: {appointment.appointment_date}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </main>
      </div>
    </main>
  );
};

export default Appointment;
