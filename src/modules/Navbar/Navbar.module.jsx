import React from 'react'

import styles from './Navbar.module.css';

function Navbar() {
    return (
        <div className={styles.navbar}>
            <div className={`${styles.subMenuContainer} ${styles.tigaperlima}`}>
                <a className={styles.menuButton}>Home</a>
                <a className={styles.menuButton}>Product</a>
            </div>
            <div className={`${styles.subMenuContainer} ${styles.duaperlima}`}>
                <a className={styles.menuButton}>Home</a>
                <a className={styles.menuButton}>Product</a>
            </div>
        </div>
    )
}

export { Navbar };
