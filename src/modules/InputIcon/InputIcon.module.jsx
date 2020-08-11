import React, { Component } from 'react';

import styles from './InputIcon.module.css';
import { nominalSeparator } from '../../helpers/helpers';

class InputIcon extends Component {
    render() {
        const {
            children,
            width,
            height,
            type,
            value,
            onChange
        } = this.props;

        return (
            <div className={styles.inputIconContainer}>
                <div className={styles.iconContainer}>
                    {children}
                </div>
                <input
                    type={type}
                    onChange={onChange}
                    value={value}
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
