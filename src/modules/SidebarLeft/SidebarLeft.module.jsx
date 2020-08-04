import React, { Component } from 'react';

import styles from './SidebarLeft.module.css';

class SidebarLeft extends Component {
    render() {
        const { isSidebarCollapsed } = this.props;

        return (
            <div className={`${styles.sideBarContainer} ${isSidebarCollapsed ? styles.sideBarContainerCollapse : null}`}>

            </div>
        );
    }
}

export { SidebarLeft };
