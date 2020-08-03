import React, { Component } from "react";

import styles from "./App.module.css";
import "./App.css";
// import { Signin } from "./pages/Signin/Signin.page";
// import { Home } from "./pages/Home/Home.page";
import { InnerNavbar } from "./modules/InnerNavbar/InnerNavbar.module";
// import { AddProduct } from "./pages/AddProduct/AddProduct.page";

class App extends Component {

  state = {
    isSidebarCollapsed: false
  };

  onClickCollapse = () => {
    this.setState(prev => ({ isSidebarCollapsed: !prev.isSidebarCollapsed }));
  }

  render() {
    const { isSidebarCollapsed } = this.state;

    return (
      <div className={styles.bodyContainer}>
        <div className={styles.upperNavbarContainer}>
          <h1>upper navbar</h1>
        </div>
        <div className={styles.mainContainer}>
          <div className={`${styles.sideBarContainer} ${isSidebarCollapsed ? styles.sideBarContainerCollapse : null}`}>
            <button onClick={this.onClickCollapse}>button woi</button>
          </div>
          <div className={`${styles.contentAndNavContainer} ${isSidebarCollapsed ? styles.contentAndNavContainerExpand : null}`}>
            <InnerNavbar isSidebarCollapsed={isSidebarCollapsed} />
            <div className={styles.contentContainer}>
              <h2>this is content</h2>
              <h2>this is content</h2>
              <h2>this is content</h2>
              <h2>this is content</h2>
              <h2>this is content</h2>
              <h2>this is content</h2>
              <h2>this is content</h2>
              <h2>this is content</h2>
              <h2>this is content</h2>
              <h2>this is content</h2>
              <h2>this is content</h2>
              <h2>this is content</h2>
              <h2>this is content</h2>
              <h2>this is content</h2>
              <h2>this is content</h2>
              <h2>this is content</h2>
              <h2>this is content</h2>
              <h2>this is content</h2>
              <h2>this is content</h2>
              <h2>this is content</h2>
              <h2>this is content</h2>
              <h2>this is content</h2>
              <h2>this is content</h2>
              <h2>this is content</h2>
              <h2>this is content</h2>
              <h2>this is content</h2>
              <h2>this is content</h2>
              <h2>this is content</h2>
              <h2>this is content</h2>
              <h2>this is content</h2>
              <h2>this is content</h2>
              <h2>this is content</h2>
            </div>
          </div>
        </div>
        {/* <Signin /> */}
        {/*<Home /> */}
      </div>
    );
  }
}

export { App };
