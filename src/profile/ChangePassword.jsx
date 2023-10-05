import { Button } from "react-bootstrap";
import { AiOutlineCheckCircle } from "react-icons/ai";
import React from "react";
import engineer from "../assets/engineer_svg.svg";
const ChangePassword = () => {
  return (
    <div className="container-fluid mt-3 mb-5">
      <div className="row justify-content-center">
        <div className="col-sm-12 col-md-12 col-lg-10">
          <div className=" card shadow px-4">
            <h5 className="mt-2 fw-bold text-muted text-center">
              Change Your Password
            </h5>
            <p className="text-center">
              Update your password to something more secure.
            </p>
            <form action="" method="post">
              <div className="form-group mt-3">
                <input
                  type="password"
                  placeholder="Enter your current password"
                  className="form-control"
                />
              </div>
              <div className="form-group mt-3">
                <input
                  type="password"
                  placeholder="Enter your new password"
                  className="form-control"
                />
              </div>
              <div className="form-group mt-3">
                <input
                  type="password"
                  placeholder="Confirm your new password"
                  className="form-control"
                />
              </div>
              <div className="form-group mt-3 mb-3">
                <input
                  type="submit"
                  value="Update Password"
                  className="btn text-light"
                  style={{ background: "teal" }}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
