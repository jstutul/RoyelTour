import React from "react";
import { Link } from "react-router-dom";

const SingleTour = (props) => {
  const { _id, title, image, category, date, description } = props.tour;

  return (
    <div className="col-lg-4 col-md-6">
      <div className="single-recent-blog-post">
        <div className="thumb">
          <img className="img-fluid" src={image} alt="post" />
        </div>
        <div className="details">
          <div className="tags">
            <p className="button_hover tag_btn">{category} Tour</p>
          </div>
          <h2>{title}</h2>
          <p>{description.slice(0, 110)}.....</p>
          <h6 className="date title_color">Date {date}</h6>
          <Link
            to={`/tours/${_id}`}
            className="btn btn-warning btn-sm text-light"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleTour;
