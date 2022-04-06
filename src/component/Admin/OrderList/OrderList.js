import React from "react";
import useJoinTour from "../../../hooks/useJoinTour";
import axios from "axios";
const OrderList = () => {
  const { jointours, page, pageCount, setJoinTours, setPage } = useJoinTour();
  const handleDeleteTourJoin = (id) => {
    const url = `http://localhost:5000/tour-joiner/${id}`;
    axios.delete(url).then((res) => {
      if (res.data.deletedCount === 1) {
        const newTour = jointours.filter((tour) => tour._id !== id);
        setJoinTours(newTour);
        alert("Data Deleted");
      }
      console.log(res);
    });
  };
  return (
    <>
      <h1>Manage Tour Join List</h1>
      <table className="table">
        <thead>
          <tr>
            <th colSpan="2">User Name</th>
            <th scope="col">Tour Id</th>
            <th scope="col">City</th>
            <th scope="col">Phone</th>
            <th scope="col">Address</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {jointours.map((t) => (
            <tr key={t._id}>
              <th colSpan="2">{t.Name}</th>
              <td>{t.id}</td>
              <td>{t.City}</td>
              <td>{t.Phone}</td>
              <td>{t.Address}</td>
              <td>
                <button
                  className="btn"
                  onClick={() => handleDeleteTourJoin(t._id)}
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

export default OrderList;
