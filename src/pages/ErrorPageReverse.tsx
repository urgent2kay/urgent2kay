import React from "react";
import "./ErrorPage.css";
import errorLogo from "../assets/logo-purple1.svg";

function ErrorPageReverse() {
  return (
    <div className="main-error-div">
      <img src={errorLogo} alt="logo" className="error-page-image" />
      <div className="error-page-body reverse-body">
        <h1>OOPS!</h1>
        <h3>404 - PAGE NOT FOUND</h3>
        <p>
          The page you are looking for might have been removed, had its name
          changed or is temporarily unavailable
        </p>
      </div>
    </div>
  );
}

export default ErrorPageReverse;
