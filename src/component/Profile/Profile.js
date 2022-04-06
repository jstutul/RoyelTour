import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useOrder from "../../hooks/useOrder";

const Profile = () => {
  const { order, pageCount, page, setPage } = useOrder();
  const { user } = useAuth();
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
            <h2 className="page-cover-tittle">Profile</h2>
            <ol className="breadcrumb">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li className="active">Profile</li>
            </ol>
          </div>
        </div>
      </section>
      <section className="contact_area section_gap">
        <div className="container">
          <div className="row">
            <div className="col-md-6 mx-auto">
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={user.photoURL}
                    className="img-fluid rounded-start"
                    alt={user.displayName}
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h3 className="card-title">
                      Welcome <br /> {user.displayName}
                    </h3>
                    <p className="card-text">Email : {user.email}</p>
                  </div>
                  {user.email === "jstutul30@gmail.com" ? (
                    <Link className="btn btn-primary" to="/dashboard">
                      Go to admin
                    </Link>
                  ) : (
                    <p></p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-8 mx-auto">
          <h1>My Order</h1>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Tour Id</th>
                <th scope="col">City</th>
                <th scope="col">Phone</th>
                <th scope="col">Address</th>
              </tr>
            </thead>
            <tbody>
              {order.map((t) => (
                <tr key={t._id}>
                  <td>{t.id}</td>
                  <td>{t.City}</td>
                  <td>{t.Phone}</td>
                  <td>{t.Address}</td>
                </tr>
              ))}
            </tbody>
          </table>
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
    </>
  );
};

export default Profile;
