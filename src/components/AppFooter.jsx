import React from "react";
import {useLocation} from "react-router-dom";
const AppFooter = () => {
  const location = useLocation();
  if (
    location.pathname === "/" ||
    location.pathname === "/auth/login" ||
    location.pathname === "/auth/signup" ||
    location.pathname === "/password-recovery"
  ) {
    return null;
  }
  return (
    <>
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-12 text-center">
            <p className="fs-6">All rights reserved &copy; 2023 BuildBridge</p>
            <p></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppFooter;
