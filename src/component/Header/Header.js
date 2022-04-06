import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Header = () => {
  const { user, logout } = useAuth();
  return (
    <header className="header_area">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
          <Link className="navbar-brand logo_h" to="/">
            <img src="image/Logo.png" alt="" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <div
            className="collapse navbar-collapse offset"
            id="navbarSupportedContent"
          >
            <ul className="nav navbar-nav menu_nav ml-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/tours">
                  Tours
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>

              {user?.email ? (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/profile">
                      {" "}
                      {"<<"}
                      {user.displayName}
                      {">>"}
                    </Link>
                  </li>
                  <li className="nav-item">
                    <button
                      className="btn btn-sm nav-link"
                      style={{
                        background: "none",
                        color: "blue",
                        boxShadow: "none",
                      }}
                      onClick={logout}
                    >
                      <span style={{ color: "black", cursor: "pointer" }}>
                        Log Out
                      </span>
                    </button>
                  </li>
                </>
              ) : (
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
