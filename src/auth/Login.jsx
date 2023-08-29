import React from "react";
import "./Auth.css";
import {Link} from "react-router-dom";
import EngineerSvg from "../assets/engineer_svg.svg";
function Login() {
  return (
    <div className="LoginContainer">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-sm-12 col-md-6 col-lg-6">
            <img src={EngineerSvg} className="img-fluid" />
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6">
            <h3 className="text-center">Welcome Back</h3>
            <p className="fs-6 text-center">
              To keep connected with us please login with your personal
              information by email address and password
            </p>
            <form>
              <div className="form-group mt-2">
                <label htmlFor="Email">
                  Email<sup className="text-danger">*</sup>
                </label>
                <input
                  type="text"
                  onChange=""
                  placeholder="jane.doe@mail.com"
                  className="form-control"
                />
              </div>
              <div className="form-group mt-2">
                <label htmlFor="Password">
                  Passwrod<sup className="text-danger">*</sup>
                </label>
                <input
                  type="password"
                  onChange=""
                  placeholder="Build@2023"
                  className="form-control"
                />
              </div>
              <div className="d-flex align-items-center justify-content-between">
                <div className="mt-2">
                  <input type="checkbox" />
                  Remember me?
                </div>
                <div className="mt-2">
                  <Link
                    to="/auth/password-recovery"
                    className="text-decoration-none text-secondary"
                  >
                    Forgot password?
                  </Link>
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-between">
                <div className="mt-2">
                  {/* <input
                    type="submit"
                    value="Login Now"
                    className="btn"
                    style={{background: "teal", color: "#fff"}}
                  /> */}
                  <Link
                    to="/dashboard"
                    className="btn text-decoration-none"
                    style={{background: "teal", color: "#fff"}}
                  >
                    Login Now
                  </Link>
                </div>
                <div className="mt-2">
                  <p className="">
                    <Link
                      to="/auth/signup"
                      className="btn btn-log-into btn-outline-secondary text-secondary text-decoration"
                    >
                      Create Account
                    </Link>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
