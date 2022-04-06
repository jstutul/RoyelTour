import React, { useEffect, useState } from "react";
import axios from "axios";
import useTour from "../../../hooks/useTour";
const ManageEvent = () => {
  const { alltours, page, pageCount, setTours, setPageCount, setPage, size } =
    useTour();
  useEffect(() => {
    fetch(`http://localhost:5000/tours?page=${page}&&size=${size}`)
      .then((res) => res.json())
      .then((result) => {
        setTours(result.tours);
        const count = result.count;
        const pageNumber = Math.ceil(count / size);
        setPageCount(pageNumber);
      });
  }, [page]);
  const handleDeleteTour = (id) => {
    const url = `http://localhost:5000/delete-tour/${id}`;
    axios.delete(url).then((res) => {
      if (res.data.deletedCount === 1) {
        const newTour = alltours.filter((tour) => tour._id !== id);
        setTours(newTour);
        alert("Data Deleted");
      }
      console.log(res);
    });
  };
  return (
    <>
      <h1>Manage Tour</h1>
      <table className="table">
        <thead>
          <tr>
            <th colSpan="2">Event Title</th>
            <th scope="col">Category</th>
            <th scope="col">Date</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {alltours.map((t) => (
            <tr key={t._id}>
              <th colSpan="2">{t.title}</th>
              <td>{t.category}</td>
              <td>{t.date}</td>
              <td>
                <button
                  onClick={() => handleDeleteTour(t._id)}
                  className="btn"
                  style={{ background: "none" }}
                >
                  <i className="fa fa-trash text-danger"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <nav aria-label="...">
        <ul className="pagination  justify-content-end">
          {[...Array(pageCount).keys()].map((number) => (
            <button
              className={number === page ? "btn btn-primary mx-2" : "btn mx-2"}
              key={number}
              onClick={() => setPage(number)}
            >
              {number}
            </button>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default ManageEvent;
