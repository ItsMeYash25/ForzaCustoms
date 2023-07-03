import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthState } from "../context/AuthContext";
import BackToHome from "./BackToHome";

function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { dispatch } = AuthState();
  async function register(event) {
    event.preventDefault();

    try {
      const res = await axios.post(
        "/users/register",
        { username, email, password },
        { Credential: true }
      );
      if (res.status === 201) {
        navigate("/login");
      }
    } catch (error) {
      if (error.response.status === 400) {
        Swal.fire({
          icon: "error",
          title: "!! INVALID USER DATA !!",
          text: "Please fill the fields properly",
          button: "OK",
        });
        setEmail("");
        setPassword("");
      }
      if (error.response.status === 401) {
        Swal.fire({
          icon: "error",
          title: "!! USER ALREADY EXISTS !!",
          text: "Please choose different credentials",
          button: "OK",
        });
        setEmail("");
        setPassword("");
      }
    }
  }

  return (
    <div className="background-signup">
      <div className="parts-page-style navbar">
        <BackToHome />
      </div>
      <div className="input-login">
        <form onSubmit={register}>
          <div className="logo-login"></div>
          <h1 className="head-login h3 my-4 fw-normal">Sign Up</h1>

          <div className="login-form-style">
            <div className="form-floating">
              <input
                name="username"
                type="text"
                onChange={(event) => setUsername(event.target.value)}
                className="my-2 form-control"
                placeholder="Username"
                value={username}
              />
              <label htmlFor="floatingInput">Username</label>
            </div>
            <div className="form-floating">
              <input
                name="email"
                type="email"
                onChange={(event) => setEmail(event.target.value)}
                className="my-2 form-control"
                id="floatingInput"
                placeholder="name@example.com"
                value={email}
              />
              <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating">
              <input
                name="password"
                type="password"
                onChange={(event) => setPassword(event.target.value)}
                className="my-2 form-control"
                id="floatingPassword"
                placeholder="Password"
                value={password}
              />
              <label htmlFor="floatingPassword">Password</label>
            </div>
          </div>

          <button className="my-4 login-button-style w-100 btn btn-danger">
            Sign up
          </button>
          <p className="login-cp-style mt-5 mb-3 text-body-secondary">© 2023</p>
        </form>
      </div>
    </div>
  );
}

export default Signup;
