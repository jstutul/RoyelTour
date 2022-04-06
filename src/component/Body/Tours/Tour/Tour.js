import React from "react";
import useTour from "../../../../hooks/useTour";
import SingleTour from "../SingleTour/SingleTour";

const Tour = () => {
  const { alltours, page, pageCount, setPage } = useTour();
  return (
    <section className="latest_blog_area section_gap">
      <div className="container">
        <div className="section_title text-center">
          <h2 className="title_color">Latest Tour's</h2>
          <p>
            Fast book our tour package and enjoy the beauty of nature and fell
            it on your heart.
          </p>
        </div>
        <div className="row mb_60">
          {alltours.map((tour) => (
            <SingleTour key={tour._id} tour={tour}></SingleTour>
          ))}
        </div>
        <nav aria-label="...">
          <ul className="pagination  justify-content-end">
            {[...Array(pageCount).keys()].map((number) => (
              <button
                className={
                  number === page ? "btn btn-primary mx-2" : "btn mx-2"
                }
                key={number}
                onClick={() => setPage(number)}
              >
                {number}
              </button>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default Tour;
