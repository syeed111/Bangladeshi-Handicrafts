/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";
export const CompanyContext = createContext();

const CompanyContextProvider = ({ children }) => {
  const [companyArray, setCompanyArray] = useState([
    {
      _id: "66cb46bdaf8b0834fda05d2d",
      picture:
        "https://i0.wp.com/rmgbd.net/wp-content/uploads/2019/04/639291-handicraft.jpg?fit=1280%2C720&ssl=1",
      name: "Dhaka Handicrafts",
      description:
        "Dhaka Handicrafts Limited (DH Ltd.) is in the business of production and export of handicrafts with the commitment of advancing indigenous and impoverished artisans. DH Ltd. is a non-profit handicrafts manufacturing and trading concern. It is a hundred percent export oriented crafts producing business entity registered under the Joint Stock Company Act 1994 as Limited Company by Guarantee. The registration number is C- 38459(417)/99 Dated 29 August 1999.",
      yearsOfOperation: 5,
      numberOfProducts: 0,
      likes: 0,
      createdAt: "2024-08-25T14:59:09.200Z",
      updatedAt: "2024-08-25T14:59:09.200Z",
      __v: 0,
    },
  ]);

  const fetchCompanies = async () => {
    try {
      const res = await fetch("/api/company/getCompany");
      console.log("Response status:", res.status);
      const data = await res.json();
      console.log("Data received:", data);
      setCompanyArray(data.data);
      console.log("from context:", data);
    } catch (error) {
      console.error("Fetch failed:", error.message);
    }
  };

  const getCompanyById = (companyId) => {
    const company = companyArray.find((item) => item._id === companyId);
    return company;
  };
  // useEffect(() => {
  //   fetchCompanies();
  // }, []);

  return (
    <CompanyContext.Provider
      value={{
        companyArray,
        fetchCompanies,
        getCompanyById,
      }}
    >
      {children}
    </CompanyContext.Provider>
  );
};

export default CompanyContextProvider;
