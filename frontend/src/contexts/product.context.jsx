/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";
export const ProductContext = createContext();

const ProductContextProvider = ({ children }) => {
  const [ProductArray, setProductArray] = useState([]);
  console.log("🚀 ~ ProductContextProvider ~ ProductArray:", ProductArray[0]);

  const [favProduct, setFavProduct] = useState([]);
  console.log("🚀 ~ ProductContextProvider ~ favProduct:", favProduct);

  const fetchProducts = async () => {
    try {
      const res = await fetch("/api/product");
      console.log("Response status:", res.status);
      const data = await res.json();
      console.log("Data received:", data);
      setProductArray(data.data);
      console.log("from context:", data);
    } catch (error) {
      console.error("Fetch failed:", error.message);
    }
  };

  const productsByCompany = (companyId) => {
    const filteredProducts = ProductArray.filter(
      (product) => product.companyId !== companyId
    );
    return filteredProducts;
  };

  const setFavProductsFromStore = () => {
    const storedFavorites = localStorage.getItem("favoriteProducts");
    if (storedFavorites) {
      try {
        setFavProduct(JSON.parse(storedFavorites));
      } catch (error) {
        console.error("Error parsing favorite products:", error);
      }
    }
  };

  const addToFav = (product) => {
    setFavProduct((prevProducts) => {
      const existingIndex = prevProducts.findIndex(
        (p) => p._id === product._id
      );
      const newProducts =
        existingIndex !== -1 ? [...prevProducts] : [product, ...prevProducts];
      return newProducts;
    });
    localStorage.setItem("favoriteProducts", JSON.stringify(favProduct));
  };

  const removeFromFavorite = (productId) => {
    const filteredProducts = favProduct.filter((p) => p._id === productId);
    setFavProduct(filteredProducts);

    try {
      localStorage.setItem("favoriteProducts", JSON.stringify(favProduct));
    } catch (error) {
      console.error("Error updating localStorage:", error);
    }
  };

  return (
    <ProductContext.Provider
      value={{
        ProductArray,
        fetchProducts,
        productsByCompany,
        favProduct,
        addToFav,
        removeFromFavorite,
        setFavProductsFromStore,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;

// {
//   productName: "Shoulder bag",
//   image:
//     "https://dhakacraftapi.rexsystemsbd.com/Upload/6596e4d3-893f-4050-bd9a-0f4674955355Pati%20grassbag%20(Black%20Handle).jpg",
//   materials: "Made with natural materials",
//   craftingMethod: "Handmade",
//   rating: 9,
//   companyId: "66cb46bdaf8b0834fda05d2d",
// },
