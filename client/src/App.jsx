import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import OrderParts from "./components/OrderParts";
import Service from "./components/Service";
import AboutUs from "./components/AboutUs";
import PartPage from "./components/Parts/PartPage";
import Billing from "./components/Billing";
import GenerateBill from "./components/GenerateBill";
import Bill from "./components/Bill";
import Users from "./admin/Users";
import ViewPart from "./admin/ViewPart";
import AddPart from "./admin/AddPart";
import { AuthState } from "./context/AuthContext";
import axios from "axios";
import Warehouse from "./warehouse/Warehouse";
import BillPage from "./warehouse/BillPage";
import AptStatus from "./components/AptStatus";
import GenerateApt from "./components/GenerateApt";
import Appointment from "./service/Appointment";
import AppointmentUpdate from "./service/AppointmentUpdate";

function App() {
  axios.defaults.baseURL = "http://localhost:4000/api";
  const { user } = AuthState();
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={!user ? <Login /> : <Navigate to="/" />}
        />
        <Route
          path="/signup"
          element={!user ? <Signup /> : <Navigate to="/" />}
        />
        <Route
          path="/parts"
          element={user ? <OrderParts /> : <Navigate to="/login" />}
        />
        <Route
          path="/service"
          element={user ? <Service /> : <Navigate to="/login" />}
        />
        <Route
          path="/about"
          element={user ? <AboutUs /> : <Navigate to="/login" />}
        />
        <Route
          path="/partPage"
          element={user ? <PartPage /> : <Navigate to="/login" />}
        />
        {/* Admin Routes Starts */}
        <Route
          path="/addParts"
          element={
            user && user.admin === true ? <AddPart /> : <Navigate to="/login" />
          }
        />
        <Route
          path="/viewParts"
          element={
            user && user.admin === true ? (
              <ViewPart />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/users"
          element={
            user && user.admin === true ? <Users /> : <Navigate to="/login" />
          }
        />
        {/* Admin Routes Ends */}
        <Route
          path="/billing"
          element={user ? <Billing /> : <Navigate to="/login" />}
        />
        <Route
          path="/generateBill"
          element={user ? <GenerateBill /> : <Navigate to="/login" />}
        />
        <Route
          path="/bill"
          element={user ? <Bill /> : <Navigate to="/login" />}
        />
        {/* Warehouse Route starts */}
        <Route
          path="/warehouse"
          element={
            user && user.warehouse === true ? (
              <Warehouse />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        {/* Warehouse Route Ends */}
        <Route
          path="/bill-page"
          element={user ? <BillPage /> : <Navigate to="/login" />}
        />
        <Route
          path="/aptStatus"
          element={user ? <AptStatus /> : <Navigate to="/login" />}
        />
        <Route
          path="/generateApt"
          element={user ? <GenerateApt /> : <Navigate to="/login" />}
        />
        {/* Service Route Starts */}
        <Route
          path="/appointment"
          element={
            user && user.service === true ? (
              <Appointment />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/updateApt"
          element={
            user && user.service === true ? (
              <AppointmentUpdate />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        {/* Service Route Ends */}
      </Routes>
    </Router>
  );
}

export default App;
