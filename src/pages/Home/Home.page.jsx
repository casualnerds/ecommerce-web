import React, { Component } from 'react';

import styles from './Home.module.css';

class Home extends Component {
    render() {
        return (
            <div className={styles.homeContainer}>
                <p className={styles.pageTitle}>Dashboard</p>
                <p className={styles.sectionTitle}>Overview</p>
            </div>
        );
    }
}

export { Home };
