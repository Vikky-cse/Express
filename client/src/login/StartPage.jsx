import React from "react";
import logo from "../assets/logo.png";
import pic from "../assets/center0pic.png";
import { Link } from "react-router-dom";
function StartPage() {
  return (
    <>
      <div>
        <img src={logo} alt="Logo" />
      </div>
      <div className="d-flex flex-column justify-content-center align-items-center vh-100">
        <img src={pic} alt="Logo" />
        <p>ToDo makes it easy to create to create and organize your tasks</p>
        <div>
          <Link to="/register">
            <button className="btn btn-danger mt-3">Get Started</button>
          </Link>
          <span style={{ margin: "0 10px" }}></span>
          <Link to="/login">
            <button className="btn btn-danger mt-3">Login</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default StartPage;
