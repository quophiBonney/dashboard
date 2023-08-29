import React from "react";
import "./Auth.css";
import {Link} from "react-router-dom";
import SignupSvg from "../assets/signup.svg";
function Signup() {
  return (
    <div className="signupContainer">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-sm-12 col-md-6 col-lg-6">
            <form>
              <div className="d-flex justify-content-between">
                <div className="form-group">
                  <label htmlFor="first name">
                    First Name<sup className="text-danger">*</sup>
                  </label>
                  <input
                    type="text"
                    onChange=""
                    placeholder="John"
                    className="form-control w-100"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="Last name">
                    Last Name<sup className="text-danger">*</sup>
                  </label>
                  <input
                    type="text"
                    onChange=""
                    placeholder="Doe"
                    className="form-control w-100"
                  />
                </div>
              </div>

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
                  <p className="">
                    Already a member?
                    <Link to="/auth/login" className="text-decoration-none">
                      Login
                    </Link>
                  </p>
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-between">
                <div className="mt-2">
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
                <div className="mt-2">
                  <p className="">
                    <Link
                      to="/auth/login"
                      className="btn btn-log-into btn-outline-primary text-primary text-decoration"
                    >
                      Log Into Account
                    </Link>
                  </p>
                </div>
              </div>
            </form>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6">
            <img src={SignupSvg} className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
