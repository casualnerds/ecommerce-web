import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './SidebarLeft.module.css';

class SidebarLeft extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menus: [
                { name: 'Home', icon: 'home' },
                { name: 'Transaction', icon: 'signal' },
                { name: 'Sales', icon: 'money-bill-wave-alt' },
                { name: 'Reporting', icon: 'exclamation-circle' }
            ]
        };
    }

    renderMenuList = () => {
        const { menus } = this.state;
        const { isSidebarCollapsed } = this.props;

        return (
            <div>
                {
                    menus.map((menu, i) => (
                        <div key={i} className={`${styles.menuCard} ${isSidebarCollapsed ? styles.menuCardCollapse : null}`}>
                            <p className={`${styles.menuName} ${isSidebarCollapsed && styles.menuNameCollapse}`}>{menu.name}</p>
                            <div className={styles.iconContainer}>
                                <FontAwesomeIcon icon={menu.icon} className={styles.menuIcon} />
                            </div>
                        </div>
                    ))
                }
            </div>
        );
    }

    render() {
        const { isSidebarCollapsed } = this.props;

        return (
            <div className={`${styles.sideBarContainer} ${isSidebarCollapsed ? styles.sideBarContainerCollapse : null}`}>
                {this.renderMenuList()}
            </div>
        );
    }
}

export { SidebarLeft };
