import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import useAuth from "./../../../../hooks/useAuth";

const TourDetails = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const [tour, setTour] = useState([]);
  const [register, setRegister] = useState(false);
  useEffect(() => {
    const url = `https://tour.tutul.xyz/tours/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((result) => setTour(result));
  }, [id]);
  useEffect(() => {
    const url = `https://tour.tutul.xyz/tours-join/${id}/${user.email}`;
    fetch(url)
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          setRegister(true);
        }
      });
  }, [user, id]);
  return (
    <>
      <section className="breadcrumb_area blog_banner_two">
        <div
          className="overlay bg-parallax"
          data-stellar-ratio="0.8"
          data-stellar-vertical-offset="0"
          data-background=""
        ></div>
        <div className="container">
          <div className="page-cover text-center">
            <h2 className="page-cover-tittle f_48">Tour Details page</h2>
            <ol className="breadcrumb">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/tours">Tours</Link>
              </li>
              <li className="active">Tour Details</li>
            </ol>
          </div>
        </div>
      </section>

      <section className="blog_area single-post-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 posts-list">
              <div className="single-post row">
                <div className="col-lg-12 col-md-12 blog_details">
                  <div className="feature-img">
                    <img className="img-fluid" src={tour.image} alt="" />
                  </div>
                  <h2>{tour.title}</h2>
                  <code>Date : {tour.date}</code>
                  <h5>
                    Category :
                    <span className="text-warning">{tour.category}</span>
                  </h5>
                  <span></span>
                  <p className="excert">{tour.description}</p>
                </div>
              </div>
            </div>
          </div>
          {register ? (
            <button className="btn btn-primary" disabled>
              Already Joined
            </button>
          ) : (
            <Link
              className="btn btn-primary"
              to={`/order/${id}`}
              // onClick={handleOrder}
            >
              Purchase Now
            </Link>
          )}
        </div>
      </section>
    </>
  );
};

export default TourDetails;
