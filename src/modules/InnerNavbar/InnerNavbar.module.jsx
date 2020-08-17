import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import styles from './InnerNavbar.module.css';

class InnerNavbar extends Component {

    componentDidMount() {
        console.log(this.props);
    }

    render() {
        const { isSidebarCollapsed } = this.props;

        return (
            <div className={`${styles.innerNavbarContainer} ${isSidebarCollapsed && styles.innerNavbarContainerExpand}`}>
                <div className={styles.innerNavbar}>
                    <Link to="/" className={styles.menuBarSelected}><span>Home</span></Link>
                    <Link to="/product" className={styles.menuBarUnselected}><span>Products</span></Link>
                    <Link to="/user" className={styles.menuBarUnselected}><span>Users</span></Link>
                </div>
            </div >
        );
    }
}

export { InnerNavbar };
