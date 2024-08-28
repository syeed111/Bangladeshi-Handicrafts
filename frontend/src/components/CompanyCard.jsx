/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const CompanyCard = ({
  company: { _id, picture, name, yearsOfOperation, numberOfProducts, likes },
}) => {
  return (
    <div className="card bg-base-100 w-70 shadow-xl" key={_id}>
      <figure>
        <img src={picture} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title justify-center">{name}</h2>
        <h5>Years of operation:{yearsOfOperation}</h5>
        <h6>Number of products:{numberOfProducts}</h6>
        <h6>
          <b>Total likes:{likes}</b>
        </h6>
        <div className="flex flex-row card-actions justify-center">
          <button className="btn btn-primary">View Products</button>
        </div>
      </div>
    </div>
  );
};

export default CompanyCard;
