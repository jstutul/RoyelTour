import React, { useRef, useState } from "react";
import useCategory from "../../../hooks/useCategory";
import axios from "axios";

const AddEvent = () => {
  const { category } = useCategory();
  const titleRef = useRef("");
  const categoryRef = useRef("");
  const descriptionRef = useRef("");
  const imageRef = useRef("");
  const dateRef = useRef("");
  const [message, setMessage] = useState({ type: "", msg: "" });

  const handletour = (e) => {
    const title = titleRef.current.value;
    const description = descriptionRef.current.value;
    const image = imageRef.current.value;
    const category = categoryRef.current.value;
    const date = dateRef.current.value;
    const newtours = { title, category, description, image, date };
    axios.post("http://localhost:5000/addtour", newtours).then((result) => {
      console.log(result);
      if (result.data.insertedId) {
        const updatedMessage = {
          type: "Success",
          msg: "Data Added Successfully",
        };
        setMessage(updatedMessage);
        e.target.reset();
      } else {
        const updatedMessage = {
          type: "Failed",
          msg: "Something went wrong",
        };
        setMessage(updatedMessage);
      }
    });
    e.preventDefault();
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
      <h2>Add Event</h2>
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
      <form className="row g-3" onSubmit={handletour} method="post">
        <div className="col-12">
          <label htmlFor="inputTitle" className="form-label">
            Event Title
          </label>
          <input
            type="text"
            ref={titleRef}
            className="form-control"
            id="inputTitle"
            required
          />
        </div>
        <div className="col-12">
          <label htmlFor="inputDescription" className="form-label">
            Description
          </label>
          <textarea
            required
            rows="3"
            className="form-control"
            id="inputDescription"
            ref={descriptionRef}
          ></textarea>
        </div>
        <div className="col-md-6">
          <label htmlFor="inputImageUrl" className="form-label">
            Image Url
          </label>
          <input
            type="text"
            required
            className="form-control"
            ref={imageRef}
            id="inputImageUrl"
          />
        </div>
        <div className="col-md-3">
          <label htmlFor="inputCategory" className="form-label">
            Category
          </label>
          <select
            id="inputCategory"
            ref={categoryRef}
            className="form-select"
            required
          >
            <option value="">Choose...</option>
            {category.map((cats) => (
              <option key={cats._id} value={cats.name}>
                {cats.name}
              </option>
            ))}
          </select>
        </div>
        <div className="col-md-3">
          <label htmlFor="inputDate" className="form-label">
            Date
          </label>
          <input
            type="date"
            required
            className="form-control"
            ref={dateRef}
            id="inputDate"
          />
        </div>
        <div className="col-12 my-2">
          <button type="submit" className="btn btn-primary">
            Add Tour
          </button>
        </div>
      </form>
    </>
  );
};

export default AddEvent;
