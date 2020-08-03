import React, { Component } from 'react';

import styles from './Dasboard.module.css';
import { Navbar } from '../../modules/Navbar/Navbar.module';
import { SidebarLeft } from '../../modules/SidebarLeft/SidebarLeft.module';
import { InnerNavbar } from '../../modules/InnerNavbar/InnerNavbar.module';

class Dashboard extends Component {
    state = {
        isSidebarCollapsed: false
    };

    onClickMenuSidebar = () => {
        this.setState(prev => ({ isSidebarCollapsed: !prev.isSidebarCollapsed }));
    }

    render() {
        const { isSidebarCollapsed } = this.state;
        return (
            <div className={styles.bodyContainer}>
                <Navbar onClickMenuSidebar={this.onClickMenuSidebar} isSidebarCollapsed={isSidebarCollapsed} />
                <div className={styles.mainContainer}>
                    <SidebarLeft isSidebarCollapsed={isSidebarCollapsed} />
                    <div className={`${styles.contentAndNavContainer} ${isSidebarCollapsed ? styles.contentAndNavContainerExpand : null}`}>
                        <InnerNavbar isSidebarCollapsed={isSidebarCollapsed} />
                        <div className={styles.contentContainer}>
                            <h2>Content</h2>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export { Dashboard };
