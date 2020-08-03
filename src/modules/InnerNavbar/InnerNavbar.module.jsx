import React from 'react';

import styles from './InnerNavbar.module.css';

function InnerNavbar({ isSidebarCollapsed }) {
    return (
        <div className={`${styles.innerNavbarContainer} ${isSidebarCollapsed ? styles.innerNavbarContainerExpand : null}`}>
            <div className={styles.innerNavbar}>

            </div>
        </div>
    );
}

export { InnerNavbar };
