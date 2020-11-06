//feature-1
import React, { useState } from "react";
import './App.css';
import jdata from "./data.json";
import Products from "./components/Products";
import Filter from "./components/Filter";

const App = () => {

  const [data, setData] = useState({
    products: jdata.products,
    size: "",
    sort: ""
  });

  const filterProducts = (event) => {
    if (event.target.value === "") {
      setData({ size: event.target.value, products: data.products })
    }
    else {
      setData({
        size: event.target.value,
        products: jdata.products.filter(product => product.availableSizes.indexOf(event.target.value) >= 0)
      })
    }
  }

  const sortProducts = (event) => {
    const sort = event.target.value;
    setData((data) => ({
      sort: sort,
      products: jdata.products
        .slice()
        .sort((a, b) =>
          sort === "lowest"
            ? a.price > b.price
              ? 1
              : -1
            : sort === "highest"
              ? a.price < b.price
                ? 1
                : -1
              : a._id > b._id
                ? 1
                : -1
        ),
    }))
  }



  return (
    <div className="grid-container">
      <header>
        <a href="/">React Shopping Cart</a>
      </header>
      <main>
        <Filter count={data.products.length}
          size={data.size}
          sort={data.sort}
          filterProducts={filterProducts}
          sortProducts={sortProducts}
        />
        <div className="content">
          <div className="main">
            <Products data={data.products} />
          </div>
          <div className="sidebar">
            Cart Item
          </div>
        </div>
      </main>
      <footer>
        All Rights Reserved...
      </footer>
    </div>
  );
}

export default App;
