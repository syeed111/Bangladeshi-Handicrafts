/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { Star } from "lucide-react";
import { ProductContext } from "../contexts/product.context";
const ProductCard = ({
  Product: {
    _id,
    productName,
    image,
    materials,
    craftingMethod,
    rating,
    companyId,
  },
}) => {
  const product = {
    _id,
    productName,
    image,
    materials,
    craftingMethod,
    rating,
    companyId,
  };

  const { addToFav, removeFromFavorite } = useContext(ProductContext);
  const [favicon, setFavicon] = useState(false);

  return (
    <div className="card bg-base-100 shadow-xl max-w-sm mx-auto" key={_id}>
      <figure className="w-full h-48">
        <img className="w-full h-full object-cover" src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title justify-center">{productName}</h2>
        <h5>Materials:{materials}</h5>
        <h6>Crafting method:{craftingMethod}</h6>
        <div className="flex justify-between mt-auto">
          <h2 className="text-xl font-semibold">Rating : {rating}</h2>
          {!favicon ? (
            <button
              onClick={() => {
                addToFav(product);
                setFavicon(true);
              }}
            >
              <Star strokeWidth={1.75} />
            </button>
          ) : (
            <button
              onClick={() => {
                removeFromFavorite(_id);
                setFavicon(false);
              }}
            >
              <Star strokeWidth={1.75} fill="black" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
