import React from "react";
import "./ErrorPage.css";
import errorLogo from "../assets/logo-purple1.svg";
import construction from "../assets/construction.png";

function ErrorPage() {
  return (
    <div className="main-error-div">
      <img src={errorLogo} alt="logo" className="error-page-image" />
      <div className="error-page-body">
        <img src={construction} />
        <h3>PAGE UNDER CONSTRUCTION</h3>
        <p>Please come back later</p>
      </div>
    </div>
  );
}

export default ErrorPage;
