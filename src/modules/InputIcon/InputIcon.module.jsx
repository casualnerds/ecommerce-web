import React, { Component } from 'react';

import styles from './InputIcon.module.css';

class InputIcon extends Component {
    render() {
        const { children, width, height, type } = this.props;

        return (
            <div className={styles.inputIconContainer}>
                <div className={styles.iconContainer}>
                    {children}
                </div>
                <input
                    type={type}
                    min="0"
                    style={{
                        width,
                        height
                    }}
                />
            </div>
        );
    }
}

export { InputIcon };
