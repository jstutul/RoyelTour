import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <section className="banner_area">
      <div className="booking_table d_flex align-items-center">
        <div
          className="overlay bg-parallax"
          data-stellar-ratio="0.9"
          data-stellar-vertical-offset="0"
          data-background=""
        ></div>
        <div className="container">
          <div className="banner_content text-center">
            <h6>Away from monotonous life</h6>
            <h2>Relax Your Mind</h2>
            <p>
              If you are looking at blank cassettes on the web, you may be very
              confused at the
              <br />
              difference in price. You may see some for as low as $.17 each.
            </p>
            <Link to="/tours" className="btn theme_btn button_hover">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
