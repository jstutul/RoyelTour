import React from "react";
import { Link } from "react-router-dom";

const History = () => {
  return (
    <section className="about_history_area section_gap">
      <div className="container">
        <div className="row">
          <div className="col-md-6 d_flex align-items-center">
            <div className="about_content">
              <h2 className="title title_color">
                About Us <br />
                Our History
                <br />
                Mission & Vision
              </h2>
              <p>
                inappropriate behavior is often laughed off as “boys will be
                boys,” women face higher conduct standards especially in the
                workplace. That’s why it’s crucial that, as women, our behavior
                on the job is beyond reproach. inappropriate behavior is often
                laughed.
              </p>
              <Link to="/contact" className="button_hover theme_btn_two">
                Contact Us
              </Link>
            </div>
          </div>
          <div className="col-md-6">
            <img className="img-fluid" src="image/about_bg.jpg" alt="img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default History;
