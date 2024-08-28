/* eslint-disable react/jsx-key */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect } from "react";
import Banner from "../components/Banner";
import CompanyCard from "../components/companyCard";
import { CompanyContext } from "../contexts/company.context";

const HomePage = () => {
  console.log("from homepage useContext:", useContext(CompanyContext));
  const { companyArray, fetchCompanies } = useContext(CompanyContext);
  console.log("🚀 ~ HomePage ~ companyArray:", companyArray);

  useEffect(() => {
    fetchCompanies();
  }, [fetchCompanies]);

  return (
    <div>
      <Banner />
      <h1 className="text-4xl font-bold text-center text-gray-800 mt-5 mb-5">
        Companies
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {companyArray.map((company) => (
          <CompanyCard company={company} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;

// {company_array.length > 1 ? (
//   <div>
//     {company_array.map((company) => (
//       <CompanyCard company={company} />
//     ))}
//   </div>
// ) : (
//   <div> No companies found</div>
// )}
