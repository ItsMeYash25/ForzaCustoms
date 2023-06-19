import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthState } from "../context/AuthContext";
import { RxHamburgerMenu } from "react-icons/rx";

function Home() {
  const { dispatch, user } = AuthState();
  const [User, setUser] = useState([]);
  const navigate = useNavigate();
  async function logout(event) {
    event.preventDefault();
    const checkAdmin = User.admin;
    const checkWarehouseAdmin = User.warehouse;
    const checkServiceAdmin = User.service;
    localStorage.removeItem("user");
    dispatch({ type: "LOGOUT" });
    if (
      checkAdmin === true ||
      checkWarehouseAdmin === true ||
      checkServiceAdmin === true
    ) {
      navigate("/login");
    }
  }
  useEffect(() => {
    async function profile() {
      const res = await axios.get("/users/profile", {
        headers: { Authorization: `Bearer ${user.token}` },
      });
      setUser(res.data);
    }
    user && profile();
  });

  return (
    <div>
      <div className="top">
        <nav className="navbar navbar-expand-lg sticky-top bg-body-tertiary">
          <div className="container">
            <div className="logo"></div>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <RxHamburgerMenu style={{ color: "#fff" }} />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav justify-content-center ms-auto">
                {User?.admin === true && (
                  <>
                    <li className="nav-item">
                      <Link className="nav-link m-2" to="/addParts">
                        Add Parts
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link m-2" to="/viewParts">
                        View Parts
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link m-2" to="/users">
                        Users
                      </Link>
                    </li>
                  </>
                )}
                {User?.service === true && (
                  <>
                    <li className="nav-item">
                      <Link className="nav-link m-2" to="/appointment">
                        View All Appointments
                      </Link>
                    </li>
                  </>
                )}
                {User?.warehouse === true && (
                  <>
                    <li className="nav-item">
                      <Link className="nav-link m-2" to="/warehouse">
                        View All Orders
                      </Link>
                    </li>
                  </>
                )}
                <li className="nav-item">
                  <Link className="nav-link m-2" to="/parts">
                    Order Parts
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link m-2" to="/service">
                    Service
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link m-2" to="/about">
                    About Us
                  </Link>
                </li>
                {!user && (
                  <>
                    <li className="nav-it em">
                      <Link className="nav-link m-2" to="/signup">
                        Sign-up
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link m-2" to="/login">
                        Log-in
                      </Link>
                    </li>
                  </>
                )}
                {user && (
                  <>
                    <li className="nav-item">
                      <Link className="nav-link m-2" onClick={logout}>
                        Logout
                      </Link>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </nav>
        <h1 className="header-title">PUSHING THE LIMITS FEELING THE RUSH</h1>
      </div>

      <div className="mid">
        <div className="p-5 text-center bg-body-tertiary">
          <div className="container py-5">
            <h1>THE DRIVER'S DREAM</h1>
            <p className="mx-auto my-3">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat
              cum optio quos accusamus consectetur provident quod eum,
              reprehenderit dolore ut iure doloremque impedit sunt ab
              dignissimos. Assumenda ipsum accusamus pariatur amet quia vero
              blanditiis harum nostrum numquam ad laborum totam, aliquid tenetur
              reiciendis quos mollitia consequuntur culpa corrupti. Suscipit,
              optio?
            </p>
            <p className="mx-auto my-3">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae
              rerum blanditiis mollitia voluptate minus earum cupiditate est
              perferendis amet, molestias maiores voluptatem vitae, ab molestiae
              beatae illo quasi magnam adipisci.
            </p>
          </div>
        </div>
      </div>

      <div className="bottom">
        <h1 className="text-center">OUR PRODUCTS & SERVICES</h1>
        <div className="container marketing">
          <div className="row featurette mt-5">
            <div className="col-md-7">
              <h2 className="featurette-heading fw-normal lh-1 hide-overflow">
                First featurette heading
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                nihil sequi enim voluptates eos! Provident porro est nesciunt.
                Atque ut architecto mollitia hic molestias magnam rerum facilis,
                nostrum aliquid debitis repellendus? Consequatur error deserunt
                temporibus sit recusandae architecto excepturi ea!
              </p>
            </div>
            <div className="col-md-5">
              <div className="ft1 img-fluid mx-auto"></div>
            </div>
          </div>

          <div className="row featurette mt-5">
            <div className="col-md-7 order-md-2">
              <h2 className="featurette-heading fw-normal lh-1 hide-overflow">
                Second featurette heading
              </h2>
              <p className="lead">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                temporibus quas eum debitis repellat atque, blanditiis at illo,
                error tempora molestiae minus qui suscipit inventore magni ullam
                pariatur veniam maiores?
              </p>
            </div>
            <div className="col-md-5 order-md-1">
              <div className="ft2 img-fluid mx-auto"></div>
            </div>
          </div>

          <div className="row featurette mt-5">
            <div className="col-md-7">
              <h2 className="featurette-heading fw-normal lh-1 hide-overflow">
                Third featurette heading
              </h2>
              <p className="lead">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                unde sunt iusto dignissimos ipsa iure sequi error perferendis
                debitis soluta.
              </p>
            </div>
            <div className="col-md-5">
              <div className="ft3 img-fluid mx-auto"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <div className="col-md-4 d-flex align-items-center">
            <div className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
              <div className="logo"></div>
            </div>
          </div>
          <span className="mb-3 mb-md-0 text-body-secondary footer">
            © 2023 Forza Customs, Inc
          </span>

          <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li className="ms-3">
              <a
                className="text-body-secondary"
                href="https://www.facebook.com"
              >
                <div className="fb"></div>
              </a>
            </li>
            <li className="ms-3">
              <a
                className="text-body-secondary"
                href="https://www.instagram.com"
              >
                <div className="ig"></div>
              </a>
            </li>
            <li className="ms-3">
              <a className="text-body-secondary" href="https://www.twitter.com">
                <div className="tw"></div>
              </a>
            </li>
          </ul>
        </footer>
      </div>
    </div>
  );
}
export default Home;
