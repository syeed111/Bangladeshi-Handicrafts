/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
const CompanyCard = ({
  company: { _id, picture, name, yearsOfOperation, numberOfProducts, likes },
}) => {
  const company = {
    _id,
    picture,
    name,
    yearsOfOperation,
    numberOfProducts,
    likes,
  };
  console.log("🚀 ~ company:", company);
  return (
    <div className="card bg-base-100 shadow-xl max-w-sm mx-auto" key={_id}>
      <figure className="w-full h-48">
        <img className="w-full h-full object-cover" src={picture} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title justify-center">{name}</h2>
        <h5>Years of operation:{yearsOfOperation}</h5>
        <h6>Number of products:{numberOfProducts}</h6>
        <h6>
          <b>Total likes:{likes}</b>
        </h6>
        <div className="flex flex-row card-actions justify-center">
          <Link className="btn" to={`/business/${_id}`}>
            View Products
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CompanyCard;
