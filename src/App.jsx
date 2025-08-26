import React, { useEffect, useState } from "react";
import Category from "./components/Category";
import axios from "axios";

const App = () => {
  //objects are array that's why we are passing [] in usestate
  let [finalCategory, setFinalCategory] = useState([]);
  let [finalProduct, setFinalProduct] = useState([]);

  //function to get product categories
  let getCategory = () => {
    axios
      .get("https://dummyjson.com/products/categories")
      .then((res) => res.data)
      .then((finalRes) => {
        setFinalCategory(finalRes);
      })
      .catch((err) => {
        console.log("Error fetching categories", err);
      });
  };

  //function to get product

  let getProducts = () => {
    axios
      .get("https://dummyjson.com/products")
      .then((proRes) => proRes.data)
      .then((finalRes) => {
        setFinalProduct(finalRes.products);
        //products is from that api
      });
  };

  useEffect(() => {
    getCategory();
    getProducts();
  }, []);

  let Pitems = finalProduct.map((products, index) => {
    return <ProductItems key={index} pdata={products} />;
  });

  return (
    <>
      <div className="py-[40px]">
        <div className="max-w-[1320px] mx-auto ">
          <h1 className="text-center text-[40px] font-bold mb-[30px]  ">
            Our Products
          </h1>
          <div className="grid grid-cols-[30%_auto] gap-[20px] ">
            <div>
              {/* {finalCategory.length} test data is fetched or not */}
              <Category finalCategory={finalCategory} />
            </div>
            <div>
              <div className="grid grid-cols-3 gap-4">{Pitems}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;

function ProductItems({ pdata }) {
  console.log(pdata);
  return (
    <div className="shadow-lg text-center pb-4 ">
      <img
        src="https://yuvaanjewels.com/wp-content/uploads/2025/08/IMG_20250812_172809_794.jpg"
        alt=""
      />
      <h4>{pdata.title}</h4>
      <b>$ {pdata.price}</b>
    </div>
  );
}
