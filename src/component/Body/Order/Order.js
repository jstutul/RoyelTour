import React, { useState } from "react";
import useAuth from "../../../hooks/useAuth";
import { useForm } from "react-hook-form";
import "./Order.css";
import { useParams } from "react-router-dom";
import axios from "axios";
const Order = () => {
  const { user } = useAuth();
  const { id } = useParams();
  const [message, setMessage] = useState({ type: "", msg: "" });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    data.id = id;
    data.email = user.email;
    axios.post("http://localhost:5000/tour-join", data).then((res) => {
      if (res.data.insertedId) {
        const updatedMessage = {
          type: "Success",
          msg: "Data Added Successfully",
        };
        setMessage(updatedMessage);
      } else {
        const updatedMessage = {
          type: "Failed",
          msg: "Something went wrong",
        };
        setMessage(updatedMessage);
      }
    });
    reset();
  };
  const handleMessage = () => {
    const updatedMessage = {
      type: "",
      msg: "",
    };
    setMessage(updatedMessage);
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
            <h2 className="page-cover-tittle">Order Page</h2>
          </div>
        </div>
      </section>
      <section className="contact_area section_gap">
        <div className="container">
          <div className="row">
            <div className="col-md-6 mx-auto">
              <h2 className="my-2">Complete Order</h2>
              <hr />
              {message?.type && (
                <div
                  className="alert alert-success alert-dismissible fade show"
                  role="alert"
                >
                  <strong className="text-waring">
                    {message.type}! {message.msg}
                  </strong>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="alert"
                    aria-label="Close"
                    onClick={handleMessage}
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
              )}
              <form
                className="row contact_form"
                method="post"
                id="orderForm"
                noValidate="novalidate"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className="col-md-12">
                  <div className="form-group">
                    <input
                      className="form-control"
                      defaultValue={user.displayName}
                      {...register("Name", { required: true })}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      className="form-control"
                      placeholder="Enter City"
                      {...register("City", { required: true })}
                      required
                    />
                    {errors.City && (
                      <span className="error">This field is required</span>
                    )}
                  </div>
                  <div className="form-group">
                    <input
                      className="form-control"
                      placeholder="Enter Phone"
                      {...register("Phone", { required: true })}
                      required
                    />
                  </div>
                  {errors.Address && (
                    <span className="error">This field is required</span>
                  )}
                  <div className="form-group">
                    <input
                      className="form-control"
                      placeholder="Enter Address"
                      {...register("Address", { required: true })}
                      required
                    />
                    {errors.Address && (
                      <span className="error">This field is required</span>
                    )}
                  </div>
                </div>

                <input
                  type="submit"
                  value="submit"
                  className="btn theme_btn button_hover"
                />
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Order;
