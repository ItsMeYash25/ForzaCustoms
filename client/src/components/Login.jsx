import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";
import { AuthState } from "../context/AuthContext";
import BackToHome from "./BackToHome";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { dispatch } = AuthState();
  async function login(event) {
    event.preventDefault();

    try {
      const res = await axios.post(
        "/users/login",
        { email, password },
        { Credential: true }
      );
      const user = res.data;
      localStorage.setItem("user", JSON.stringify(user));
      dispatch({ type: "LOGIN", payload: user });
      if (res.status === 201) {
        navigate("/");
      }
    } catch (error) {
      if (error.response.status === 401) {
        Swal.fire({
          icon: "error",
          title: "!! INCORRECT CREDENTIALS !!",
          text: "Please enter correct credentials",
          button: "OK",
        });
        setEmail("");
        setPassword("");
      }
    }
  }

  return (
    <div className="background-login">
      <div className="parts-page-style navbar">
        <BackToHome />
      </div>
      <div className="input-login">
        <form onSubmit={login}>
          <div className="logo-login"></div>
          <h1 className="head-login h3 my-4 fw-normal">Log In</h1>

          <div className="login-form-style">
            <div className="form-floating">
              <input
                name="email"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
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
                onChange={(e) => setPassword(e.target.value)}
                className="my-2 form-control"
                id="floatingPassword"
                placeholder="Password"
                value={password}
              />
              <label htmlFor="floatingPassword">Password</label>
            </div>
          </div>

          <button
            className="my-4 login-button-style w-100 btn btn-danger"
            type="submit"
          >
            Sign in
          </button>
          <p className="login-cp-style mt-5 mb-3 text-body-secondary">© 2023</p>
        </form>
      </div>
    </div>
  );
}

export default Login;
