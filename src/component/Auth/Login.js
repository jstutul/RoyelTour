import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "./../../hooks/useAuth";

const Login = () => {
  const {
    signInWithGoogle,
    setUser,
    signInWithGithub,
    signInWithFaceBook,
    user,
  } = useAuth();
  const location = useLocation();
  const history = useNavigate();
  console.log(location.form?.pathname);
  console.log("came from", location.state?.form);
  const redirect_uri = location.state?.form.pathname || "/";
  const handleGoogleAuth = () => {
    signInWithGoogle()
      .then((result) => {
        setUser(result.user);
        history(redirect_uri);
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage);
      });
  };
  const handleFacebookAuth = () => {
    signInWithFaceBook()
      .then((result) => setUser(result.user))
      .catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage);
      });
  };
  const handleGithubAuth = () => {
    signInWithGithub()
      .then((result) => setUser(result.user))
      .catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage);
      });
  };
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
            <h2 className="page-cover-tittle">Login or Signup Page</h2>
            <ol className="breadcrumb">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li className="active">Login</li>
            </ol>
          </div>
        </div>
      </section>
      <section className="contact_area section_gap">
        <div className="container">
          <div className="row">
            <div className="col-md-4 mx-auto">
              <button
                className="btn btn-primary btn-lg btn-google btn-block text-uppercase"
                type="submit"
                onClick={handleGoogleAuth}
                style={{ background: "#dd4b39" }}
              >
                <i className="fab fa-google mr-2"></i> Sign in with Google
              </button>{" "}
              <button
                className="btn btn-lg btn-facebook btn-block text-uppercase text-light"
                type="submit"
                onClick={handleFacebookAuth}
                style={{ background: "#3B5998" }}
              >
                <i className="fab fa-facebook-f mr-2"></i> Sign in with Facebook
              </button>
              <button
                className="btn btn-lg btn-github btn-block text-uppercase text-light"
                type="submit"
                onClick={handleGithubAuth}
                style={{ background: "#444" }}
              >
                <i className="fa-brands fa-github mr-2"></i>Sign in with Github
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
