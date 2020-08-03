import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from "./App.module.css";
import './themes/iconInitiation';
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
          <FontAwesomeIcon icon="bars" color="white" size="2x" onClick={this.onClickCollapse} className={styles.menuIcon}/>
        </div>
        <div className={styles.mainContainer}>
          <div className={`${styles.sideBarContainer} ${isSidebarCollapsed ? styles.sideBarContainerCollapse : null}`}>

          </div>
          <div className={`${styles.contentAndNavContainer} ${isSidebarCollapsed ? styles.contentAndNavContainerExpand : null}`}>
            <InnerNavbar isSidebarCollapsed={isSidebarCollapsed} />
            <div className={styles.contentContainer}>

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
