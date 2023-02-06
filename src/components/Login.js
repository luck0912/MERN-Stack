import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { NavLink } from "react-router-dom";

const Login = () => {
  const css = {
    color: "black",
    textDecoration: "none",
    textAlign: "center",
    display: "block",
  };
  return (
    <>
      <section className="vh-100" style={{ backgroundColor: "#eee",fontFamily: "JetBrains Mono" }}>
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black" style={{ borderRadius: "25px" }}>
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                        Sign in
                      </p>

                      <form className="mx-1 mx-md-4">
                        <div className="d-flex flex-row align-items-center ">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="email"
                              id="email"
                              name="email"
                              placeholder="Your Email"
                              className="form-control"
                            />
                            <label
                              className="form-label"
                              htmlFor="email"
                            ></label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center">
                          <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="password"
                              placeholder="Your Password"
                              name="password"
                              id="password"
                              className="form-control"
                            />
                            <label
                              className="form-label"
                              htmlFor="password"
                            ></label>
                          </div>
                        </div>

                        <div className="d-flex justify-content-center mx-4 ">
                          <input
                            type="submit"
                            name="signin"
                            id="signin"
                            className="btn btn-primary form-submit btn-md"
                            value="Login"
                          />
                        </div>
                      </form>
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <figure>
                        <img
                          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                          className="img-fluid"
                          alt="Sample "
                        />
                        <NavLink to="/signup" style={css}>
                          Create an account
                        </NavLink>
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
