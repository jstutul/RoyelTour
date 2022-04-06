import React from "react";
import useTour from "../../../hooks/useTour";
import SingleTour from "../Tours/SingleTour/SingleTour";
import Banner from "./Banner/Banner";
import History from "./History/History";
const Home = () => {
  const { alltours } = useTour();
  return (
    <div>
      <Banner></Banner>
      <section className="latest_blog_area section_gap">
        <div className="container">
          <div className="section_title text-center">
            <h2 className="title_color">Latest Tour's</h2>
            <p>
              Fast book our tour package and enjoy the beauty of nature and fell
              it on your heart.
            </p>
          </div>
          <div className="row mb_30">
            {alltours.slice(0, 6).map((tour) => (
              <SingleTour key={tour._id} tour={tour}></SingleTour>
            ))}
          </div>
        </div>
      </section>
      <History></History>
    </div>
  );
};

export default Home;
