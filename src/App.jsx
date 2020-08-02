import React from "react";

import "./App.css";
// import { Signin } from "./pages/Signin/Signin.page";
// import { Home } from "./pages/Home/Home.page";
import { Navbar } from "./modules/Navbar/Navbar.module";
import { AddProduct } from "./pages/AddProduct/AddProduct.page";

function App() {

  return (
    <>
      <Navbar />
      <AddProduct />
      <div>
        <div></div>
      </div>
      {/* <Signin /> */}
      {/*<Home /> */}
    </>
  );
}

export default App;
