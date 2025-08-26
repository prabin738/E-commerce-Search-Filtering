import React from "react";
import Category from "./components/Category";

const App = () => {
  return (
    <>
      <div className="py-[40px]">
        <div className="max-w- [1320px] mx-auto ">
          <h1 className="text-center text-[40px] font-bold mb-[30px]  ">
            Our Products
          </h1>
          <div className="grid frid-cols-[30%_auto] gap-[20px] ">
            <div>
              <Category />
            </div>
            <div>
              <div className="grid grid-cols-3 gap-4">
                <ProductItems />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;

function ProductItems() {
  return (
    <div className="shadow-lg text-center pb-4 ">
      <img
        src="https://yuvaanjewels.com/wp-content/uploads/2025/08/IMG_20250812_172809_794.jpg"
        alt=""
      />
      <h4>Bracelet</h4>
      <b>Rs 1000</b>
    </div>
  );
}
