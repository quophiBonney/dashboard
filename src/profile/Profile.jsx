import { Button } from "react-bootstrap";
import { AiOutlineCheckCircle } from "react-icons/ai";
import React from "react";
import avatar from "../assets/avatar.png";
const Profile = () => {
  return (
    <div className="container-fluid mt-3 mb-5">
      <div className="row justify-content-center">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
          <div className="card shadow">
            <div className="text-center">
              <img
                src={avatar}
                alt="logo"
                className="img-fluid mt-3"
                style={{ width: "110px", height: "110px" }}
              />
              <p className="fs-4 fw-bold mt-4 text-muted">Hi John,</p>
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
        <div className="col-sm-12 col-md-12 col-lg-6">
          <div className=" card shadow px-4">
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
            </div>
            <div className="mt-2">
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
