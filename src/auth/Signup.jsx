import React from "react";
import "./Auth.css";
import {Link} from "react-router-dom";
import SignupSvg from "../assets/engineer_svg.svg";
import logo from "../assets/logo3.png";
function Signup() {
  return (
    <div className="signupContainer">
      <div className="container-fluid">
        <div className="row">
          <div>
            <img
              src={logo}
              style={{width: "100px", height: "100px"}}
              alt="BuildBridge logo"
              className="img-fluid"
            />
          </div>
          <div className="col-sm-12 col-md-12 col-lg-6 mt-5 hide">
            <div
              className="mt-5"
              data-aos="zoom-in"
              data-aos-duration="2000"
              data-aos-delay="300"
            >
              <img src={SignupSvg} className="img-fluid" />
            </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-6 mt-2">
            <div
              className=""
              data-aos="zoom-in"
              data-aos-duration="2000"
              data-aos-delay="100"
            >
              <h3 className="text-center">Complete Your Registration</h3>
              <p className="text-center">
                Fill the form the with your personal details to complete your
                registration.
              </p>
              <form>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="form-group w-50">
                    <label htmlFor="first name">
                      First Name<sup className="text-danger">*</sup>
                    </label>
                    <input
                      type="text"
                      onChange=""
                      placeholder="John"
                      className="form-control"
                    />
                  </div>
                  <div className="form-group w-50 m-2">
                    <label htmlFor="Last name">
                      Last Name<sup className="text-danger">*</sup>
                    </label>
                    <input
                      type="text"
                      onChange=""
                      placeholder="Doe"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="form-group w-50">
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
                  <div className="form-group w-50 m-2">
                    <label htmlFor="Phone">
                      Phone<sup className="text-danger">*</sup>
                    </label>
                    <input
                      type="number"
                      onChange=""
                      placeholder="123456789"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="form-group w-50">
                    <label htmlFor="Password">
                      Password<sup className="text-danger">*</sup>
                    </label>
                    <input
                      type="password"
                      onChange=""
                      placeholder="Build@2023"
                      className="form-control"
                    />
                  </div>
                  <div className="form-group w-50 m-2">
                    <label htmlFor="Confirm Password">
                      Confirm Password<sup className="text-danger">*</sup>
                    </label>
                    <input
                      type="password"
                      onChange=""
                      placeholder="Build@2023"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="d-flex align-items-center justify-content-between">
                  <div className="">
                    <input type="checkbox" />
                    Remember me?
                  </div>
                  <div className="">
                    Already a member?
                    <Link to="/auth/login" className="text-decoration-none">
                      Login
                    </Link>
                  </div>
                </div>
                <div className="d-flex align-items-center justify-content-between mt-3 mb-3">
                  <div className="">
                    {/* <input
                    type="submit"
                    value="Signup"
                    className="btn"
                    style={{background: "teal", color: "#fff"}}
                  /> */}
                    <Link
                      to="/auth/login"
                      className="btn text-decoration-none"
                      style={{background: "teal", color: "#fff"}}
                    >
                      Signup
                    </Link>
                  </div>
                  <div className="">
                    <Link
                      to="/auth/login"
                      className="btn btn-log-into btn-outline-primary text-primary text-decoration"
                    >
                      Log Into Account
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

export default Signup;
