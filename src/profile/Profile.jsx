import { Button } from "react-bootstrap";
import { AiOutlineCheckCircle } from "react-icons/ai";
import React from "react";
import avatar from "../assets/avatar.png";
const Profile = () => {
  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 mt-3">
          <div className="shadow px-3 mt-3 mb-3 border-2 card">
            <div>
              <div className="text-center">
                <img
                  src={avatar}
                  alt="logo"
                  className="img-fluid"
                  style={{ width: "125px", height: "125px" }}
                />
                <p className="fs-4 fw-bold mt-3 text-muted">Hi John,</p>
                <Button className="btn border-0" style={{ background: "teal" }}>
                  Complete Your Profile
                </Button>
              </div>
              <ul style={{ listStyle: "none" }} className="mt-4">
                <li className="fs-6 text-muted">
                  <div className="d-flex justify-content-between">
                    <div>
                      Personal Information
                      <br />
                      <span className="fw-bold" style={{ color: "teal" }}>
                        Completed
                      </span>
                    </div>
                    <div className="mt-3">
                      <AiOutlineCheckCircle style={{ color: "teal" }} />
                    </div>
                  </div>
                </li>
                <li className="fs-6 text-muted mt-4">
                  <div className="d-flex justify-content-between">
                    <div>
                      Professional Information
                      <br />
                      <span className="fw-bold" style={{ color: "teal" }}>
                        Completed
                      </span>
                    </div>
                    <div className="mt-3">
                      <AiOutlineCheckCircle style={{ color: "teal" }} />
                    </div>
                  </div>
                </li>
                <li className="fs-6 text-muted mt-4">
                  <div className="d-flex justify-content-between">
                    <div>
                      Bank Details
                      <br />
                      <span className="fw-bold" style={{ color: "teal" }}>
                        Completed
                      </span>
                    </div>
                    <div className="mt-3">
                      <AiOutlineCheckCircle style={{ color: "teal" }} />
                    </div>
                  </div>
                </li>
                
              </ul>
            </div>
          </div>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-5 mt-3">
          <div className="shadow px-3 mt-3 mb-3 border-2 card">
            <div>
              <h5 className="mt-3 fw-bold text-muted text-center">
                Update Profile
              </h5>
              <form>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Enter your first name"
                    className="form-control"
                  />
                </div>
                <div className="form-group mt-3">
                  <input
                    type="text"
                    placeholder="Enter your last name"
                    className="form-control"
                  />
                </div>
                <div className="form-group mt-3">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="form-control"
                  />
                </div>
                <div className="form-group mt-3">
                  <input
                    type="text"
                    placeholder="Enter your phone number"
                    className="form-control"
                  />
                </div>
                <div className="form-group mt-3">
                  <input
                    type="text"
                    placeholder="Enter your current password"
                    className="form-control"
                  />
                </div>
                <div className="form-group mt-3">
                  <input
                    type="text"
                    placeholder="Enter your new password"
                    className="form-control"
                  />
                </div>
                <div className="form-group mt-3">
                  <input
                    type="text"
                    placeholder="Confirm password"
                    className="form-control"
                  />
                </div>
                <div className="form-group mt-3">
                  <input
                    type="submit"
                    value="Save Changes"
                    className="btn text-light"
                    style={{ background: "teal" }}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3 mt-3">
          <div className="shadow px-3 mt-3 mb-3 border-2 card">
            <h5 className="mt-2 fw-bold text-muted text-center">Details</h5>
            <p className="text-center">All your credentials used are below.</p>
            <div className="mt-2">
                <p className="text-muted">
                  First Name
                  <br />
                  <span className="fw-bold" style={{ color: "teal" }}>
                    John
                  </span>
                </p>
                <p className="text-muted">
                  Last Name
                  <br />
                  <span className="fw-bold" style={{ color: "teal" }}>
                    Bonney
                  </span>
                </p>
            </div>
            <div className="mt-3">
                <p className="text-muted">
                  Contact
                  <br />
                  <span className="fw-bold" style={{ color: "teal" }}>
                    015545445455
                  </span>
                </p>
                <p className="text-muted">
                  City
                  <br />
                  <span className="fw-bold" style={{ color: "teal" }}>
                    Accra
                  </span>
                </p>
            </div>
            <div className="mt-3">
                <p className="text-muted">
                  Email
                  <br />
                  <span className="fw-bold" style={{ color: "teal" }}>
                    b@gmail.com
                  </span>
                </p>
                <p className="text-muted">
                  Password
                  <br />
                  <span className="fw-bold" style={{ color: "teal" }}>
                    ..............
                  </span>
                </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
