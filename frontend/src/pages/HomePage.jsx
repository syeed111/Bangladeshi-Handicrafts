/* eslint-disable no-unused-vars */
import React from "react";
import Banner from "../components/Banner";
import CompanyCard from "../components/companyCard";

const HomePage = () => {
  const company = {
    picture:
      "https://i0.wp.com/rmgbd.net/wp-content/uploads/2019/04/639291-handicraft.jpg?fit=1280%2C720&ssl=1",
    name: "Dhaka Handicrafts",
    description:
      "The export earnings from handicraft witnessed upward trend during the July-April period of the current financial year, reports BSS.The country earned a total of US $17.16 million from handicraft exports in 10 months (July-April) of fiscal year 2018-19. The amount is 21.88 per cent higher than the same period of the previous fiscal year.",
    yearsOfOperation: 5,
    numberOfProducts: 0,
    likes: 0,
    _id: "66cb46bdaf8b0834fda05d2d",
    createdAt: "2024-08-25T14:59:09.200Z",
    updatedAt: "2024-08-25T14:59:09.200Z",
    __v: 0,
  };

  return (
    <div>
      <Banner />
      <h1 className="text-4xl font-bold text-center text-gray-800 mt-5 mb-5">
        Companies
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <CompanyCard company={company} />
      </div>
    </div>
  );
};

export default HomePage;
