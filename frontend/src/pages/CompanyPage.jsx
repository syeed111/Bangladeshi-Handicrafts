/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import Banner from "../components/Banner";
import { ProductContext } from "../contexts/product.context";
import ProductCard from "../components/ProductCard";
import { CompanyContext } from "../contexts/company.context";
import { useParams } from "react-router-dom";

const CompanyPage = () => {
  const companyId = useParams().companyId;
  console.log("🚀 ~ CompanyPage ~ companyId:", companyId);

  const { productsByCompany } = useContext(ProductContext);
  const { getCompanyById } = useContext(CompanyContext);

  const company = getCompanyById(companyId);

  const products = productsByCompany(companyId);

  console.log("🚀 ~ CompanyPage ~ products:", products);

  return (
    <div>
      <Banner company={company} />
      <h1 className="text-4xl font-bold text-center text-gray-800 mt-5 mb-5">
        Products
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products && products.length > 0 ? (
          products.map((product) => (
            <ProductCard key={product._id} Product={product} />
          ))
        ) : (
          <div>
            <h3 className="text-xl font-semibold">
              Products are coming soon !
            </h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default CompanyPage;
