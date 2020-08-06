import React, { Component } from 'react';

import styles from './InputBasic.module.css';

class InputBasic extends Component {
    render() {
        const { onChange, width, height } = this.props;

        return (
            <>
                <input
                    type="text"
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
