/* eslint-disable no-unused-vars */
import React from "react";

const Banner = (company) => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src="https://i0.wp.com/rmgbd.net/wp-content/uploads/2019/04/639291-handicraft.jpg?fit=1280%2C720&ssl=1"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">Dhaka Handicrafts</h1>
          <p className="py-6">
            Dhaka Handicrafts Limited (DH Ltd.) is in the business of production
            and export of handicrafts with the commitment of advancing
            indigenous and impoverished artisans. DH Ltd. is a non-profit
            handicrafts manufacturing and trading concern. It is a hundred
            percent export oriented crafts producing business entity registered
            under the Joint Stock Company Act 1994 as Limited Company by
            Guarantee. The registration number is C- 38459(417)/99 Dated 29
            August 1999.
          </p>
          <button className="btn btn-primary">View Page</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
