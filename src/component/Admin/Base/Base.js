import React from "react";
import { Link } from "react-router-dom";

const Base = (props) => {
  return (
    <>
      <section className="breadcrumb_area">
        <div
          className="overlay bg-parallax"
          data-stellar-ratio="0.8"
          data-stellar-vertical-offset="0"
          data-background=""
        ></div>
        <div className="container">
          <div className="page-cover text-center">
            <h2 className="page-cover-tittle">Admin Panel</h2>
            <ol className="breadcrumb">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li className="active">Admin</li>
            </ol>
          </div>
        </div>
      </section>
      <section className="contact_area section_gap">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="row contact_info">
                <Link
                  className="col-md-12 my-2 btn btn-primary text-center"
                  to="/dashboard"
                >
                  Dashboard
                </Link>
                <Link
                  className="col-md-12 my-2 btn btn-danger text-center"
                  to="/manageevent"
                >
                  Manage Tour
                </Link>
                <Link
                  className="col-md-12 my-2 btn btn-warning text-center"
                  to="/orderlist"
                >
                  Join List
                </Link>
                <Link
                  className="col-md-12 my-2 btn btn-secondary text-center"
                  to="/addevent"
                >
                  Add Tour
                </Link>
              </div>
            </div>
            <div className="col-md-9">{props.children}</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Base;
