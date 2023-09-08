import React from "react";
import "./Auth.css";
import {Link, useNavigate} from "react-router-dom";
import EngineerSvg from "../assets/use.svg";
import logo from "../assets/logo3.png";
function Signup() {
  const navigate = useNavigate();
  const home = () => {
    navigate("/auth/login");
  };
  return (
    <div>
      <div className="container-fluid login-layout">
        <div className="row" style={{minHeight: "100vh"}}>
          <div class="logo-space-signup">
            <img
              src={logo}
              style={{width: "80px", height: "80px"}}
              alt="BuildBridge logo"
              className="img-fluid logo"
              onClick={home}
            />
          </div>
          <div
            className="col-sm-xs-12 col-sm-12 col-md-12 col-lg-7 mt-5 text-center hide"
            style={{overflow: "hidden"}}
          >
            <div
              className="mt-2 px-4"
              data-aos="fade-in"
              data-aos-duration="2000"
              data-aos-delay="300"
            >
              <img src={EngineerSvg} className="img-fluid" />
            </div>
          </div>
          <div
            className="col-sm-12 col-sm-12 col-md-12 col-lg-5 px-4"
            style={{overflow: "hidden"}}
          >
            <div
              className=""
              data-aos="fade-in"
              data-aos-duration="2000"
              data-aos-delay="100"
            >
              <h3 className="text-center">Complete Your Registration</h3>
              <p className="text-center">
                Fill the form the with your personal details to complete your
                registration.
              </p>
              <form>
                <div className="form-group">
                  <label htmlFor="first name">
                    First Name<sup className="text-danger">*</sup>
                  </label>
                  <input
                    type="text"
                    onChange=""
                    placeholder="Enter your first name"
                    className="form-control"
                  />
                </div>
                <div className="form-group mt-2">
                  <label htmlFor="Last name">
                    Last Name<sup className="text-danger">*</sup>
                  </label>
                  <input
                    type="text"
                    onChange=""
                    placeholder="Enter your last name"
                    className="form-control"
                  />
                </div>
                <div className="form-group mt-2">
                  <label htmlFor="Email">
                    Email<sup className="text-danger">*</sup>
                  </label>
                  <input
                    type="text"
                    onChange=""
                    placeholder=" Enter your email address"
                    className="form-control"
                  />
                </div>
                <div className="form-group mt-2">
                  <label htmlFor="Phone">
                    Phone<sup className="text-danger">*</sup>
                  </label>
                  <input
                    type="text"
                    onChange=""
                    placeholder="Enter your phone number"
                    className="form-control"
                  />
                </div>
                <div className="form-group mt-2">
                  <label htmlFor="Password">
                    Password<sup className="text-danger">*</sup>
                  </label>
                  <input
                    type="password"
                    onChange=""
                    placeholder="Enter your password"
                    className="form-control"
                  />
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
                <div className="mt-3 mb-3">
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
                    Signup Now
                  </Link>
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
