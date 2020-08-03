import React from 'react';
import { Link } from 'react-router-dom';

import styles from './InnerNavbar.module.css';

function InnerNavbar({ isSidebarCollapsed }) {
    return (
        <div className={`${styles.innerNavbarContainer} ${isSidebarCollapsed ? styles.innerNavbarContainerExpand : null}`}>
            <div className={styles.innerNavbar}>
                <Link to="/">Home</Link>
                <Link to="/product">Products</Link>
                <Link to="/user">Users</Link>
            </div>
        </div>
    );
}

export { InnerNavbar };
