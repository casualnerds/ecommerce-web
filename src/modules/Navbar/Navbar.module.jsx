import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './Navbar.module.css';

class Navbar extends Component {
    render() {
        const { onClickMenuSidebar, isSidebarCollapsed } = this.props;

        return (
            <div className={styles.upperNavbarContainer}>
                <FontAwesomeIcon
                    icon="bars"
                    color="white"
                    size="2x"
                    onClick={onClickMenuSidebar} className={`${styles.menuIcon} ${isSidebarCollapsed ? styles.menuIconExpand : null}`}
                />
            </div>
        );
    }
}

export { Navbar };
