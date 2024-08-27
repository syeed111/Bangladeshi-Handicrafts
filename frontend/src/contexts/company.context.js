/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
export const CompanyContext = createContext();

const CompanyContextProvider = (props) => {
  const [company, setCompany] = useState([
    {
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
    }
  ]);

  const fetchCompanies =async()=>
  {
    const res=await fetch("http://localhost:5000/api/company");
    const  companies= await res.json();
    setCompany({companies.data})

  }


  

  return (
    <CompanyContext.Provider
      value={{
      company
        
      }}
    >
      {props.children}
    </CompanyContext.Provider>
  );
};

export default CompanyContextProvider;