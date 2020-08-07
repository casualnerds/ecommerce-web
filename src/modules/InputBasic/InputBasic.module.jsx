import React, { Component } from 'react';

// eslint-disable-next-line no-unused-vars
import styles from './InputBasic.module.css';

class InputBasic extends Component {
    render() {
        const { onChange, width, height, text } = this.props;

        return (
            <>
                <input
                    type={text}
                    onChange={onChange}
                    style={{
                        width,
                        height
                    }}
                />
            </>
        );
    }
}

export { InputBasic };
