/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
const Banner = ({ company: { _id, picture, name, description } }) => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <img src={picture} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">{name}</h1>
          <p className="py-6">{description}</p>
          <span>
            <Link to={`/business/${_id}`} className="btn btn-primary">
              View Page
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
