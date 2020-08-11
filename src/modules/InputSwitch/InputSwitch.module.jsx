import React, { Component } from 'react';

import styles from './InputSwitch.module.css';

class InputSwitch extends Component {
    render() {
        const { switchValue, onClick } = this.props;
        return (
            <div
                onClick={onClick}
                className={`${styles.inputContainer} ${switchValue ? styles.inputContainerOn : null}`}
            >
                <div className={`${styles.switch} ${switchValue ? styles.switchOn : null}`} />
            </div>
        );
    }
}

export { InputSwitch };
