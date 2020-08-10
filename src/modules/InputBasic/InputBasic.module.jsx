import React, { Component } from 'react';

// eslint-disable-next-line no-unused-vars
import styles from './InputBasic.module.css';

class InputBasic extends Component {
    render() {
        const {
            onChange,
            width,
            height,
            text,
            placeholder
        } = this.props;

        return (
            <>
                <input
                    className={styles.inputBasic}
                    type={text}
                    onChange={onChange}
                    style={{
                        width,
                        height
                    }}
                    placeholder={placeholder}
                />
            </>
        );
    }
}

export { InputBasic };
