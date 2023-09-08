import React from "react";
import "./Auth.css";
import {Link} from "react-router-dom";
import ForgotPasswordSvg from "../assets/forgot_password.svg";
import logo from "../assets/logo3.png";
function ForgotPassword() {
  return (
    <div>
      <div className="container-fluid login-layout">
        <div className="row" style={{minHeight: "100vh"}}>
          <div class="logo-space-signup">
            <img
              src={logo}
              style={{width: "80px", height: "80px"}}
              alt="BuildBridge logo"
              className="img-fluid"
            />
          </div>
          <div
            className="col-sm-xs-12 col-sm-12 col-md-12 col-lg-7 mt-2 text-center hide"
            style={{overflow: "hidden"}}
          >
            <div
              className="px-4"
              data-aos="fade-in"
              data-aos-duration="2000"
              data-aos-delay="300"
            >
              <img src={ForgotPasswordSvg} className="w-50" />
            </div>
          </div>
          <div
            className="col-sm-12 col-sm-12 col-md-12 col-lg-5 px-4"
            style={{overflow: "hidden"}}
          >
            <div
              className="mt-3 px-4"
              data-aos="fade-in"
              data-aos-duration="2000"
              data-aos-delay="100"
            >
              <h3 className="text-center">Password Recovery</h3>
              <ul style={{listStyle: "none"}} className="text-center">
                <li>
                  <span className="fs-2" style={{fontWeight: "bolder"}}>
                    1.
                  </span>
                  Type the email you used in your registration.
                </li>
                <li>
                  <span className="fs-2" style={{fontWeight: "bolder"}}>
                    2.
                  </span>
                  Check your email for verification link.
                </li>
              </ul>
              <form>
                <div className="form-group">
                  <label htmlFor="email">
                    Email<sup className="text-danger">*</sup>
                  </label>
                  <input
                    type="email"
                    onChange=""
                    placeholder="Enter your email address"
                    className="form-control"
                  />
                </div>
                <div className="d-flex justify-content-between">
                  <div className="form-group mt-2">
                    <Link
                      to="/auth/login"
                      className="btn w-100 text-decoration-none"
                      style={{background: "teal", color: "#fff"}}
                    >
                      Submit
                    </Link>
                  </div>
                  <div className="form-group mt-2">
                    <Link
                      to="/auth/login"
                      className="text-secondary text-decoration-none"
                    >
                      Back to login
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
