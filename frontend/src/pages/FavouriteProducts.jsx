/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { ProductContext } from "../contexts/product.context";
import ProductCard from "../components/ProductCard";

const FavouriteProducts = () => {
  const { favProduct } = useContext(ProductContext);
  console.log("🚀 ~ FavouriteProducts ~ favProduct:", favProduct);

  return (
    <div className="flex flex-col">
      <h1 className="text-4xl font-bold text-center text-gray-800 mt-5 mb-5">
        Favourite Products
      </h1>

      {favProduct.length !== 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {favProduct.map((product) => (
            <ProductCard key={product._id} Product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-600 mt-8">
          <p>No favourite products yet.</p>
          <p>Start adding products to your favourites!</p>
        </div>
      )}
    </div>
  );
};

export default FavouriteProducts;
