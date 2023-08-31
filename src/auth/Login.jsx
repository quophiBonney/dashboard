import React from "react";
import "./Auth.css";
import {Link} from "react-router-dom";
import EngineerSvg from "../assets/engineer_svg.svg";
import logo from "../assets/logo3.png";
function Login() {
  return (
    <div className="signupContainer">
      <div className="container-fluid" style={{height: "100vh"}}>
        <div className="row">
          <div>
            <img
              src={logo}
              style={{width: "80px", height: "80px"}}
              alt="BuildBridge logo"
              className="img-fluid"
            />
          </div>
          <div
            className="col-sm-xs-12 col-sm-12 col-md-12 col-lg-7 mt-5 hide"
            style={{overflow: "hidden"}}
          >
            <div
              className="mt-2"
              data-aos="slide-right"
              data-aos-duration="2000"
              data-aos-delay="100"
            >
              <img src={EngineerSvg} className="img-fluid" />
            </div>
          </div>
          <div
            className="col-sm-12 col-sm-12 col-md-12 col-lg-5 px-4 mt-3"
            style={{overflow: "hidden"}}
          >
            <div
              className="mt-5"
              data-aos="slide-left"
              data-aos-duration="2000"
              data-aos-delay="300"
            >
              <h3 className="text-center">Welcome Back</h3>
              <p className="fs-6 text-center">
                This admin dashboard is for authorized personnel only. Only
                authorized users of <strong>BuildBridge</strong> are allowed
                access. Unauthorized access is strictly prohibited.
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
                    <Link
                      to="/auth/signup"
                      className="btn btn-log-into btn-outline-secondary text-secondary text-decoration"
                    >
                      Create Account
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

export default Login;
