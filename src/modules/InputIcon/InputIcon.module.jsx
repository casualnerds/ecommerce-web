import React, { Component } from 'react';

import styles from './InputIcon.module.css';

class InputIcon extends Component {
    render() {
        const {
            children,
            width,
            height,
            type,
            price
        } = this.props;

        return (
            <div className={styles.inputIconContainer}>
                <div className={styles.iconContainer}>
                    {children}
                </div>
                <input
                    type={type}
                    min="0"
                    value={price}
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
