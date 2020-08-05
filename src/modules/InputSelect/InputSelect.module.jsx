import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './InputSelect.module.css';

class InputSelect extends Component {

    state = {
        modalOptionShow: false,
    }


    toggleOptionsModal = () => {
        this.setState(prev => ({
            modalOptionShow: !prev.modalOptionShow,
        }));
    }

    onBlurOptionsInput = () => {
        this.setState({ modalOptionShow: false });
    }

    renderSelectInputButton = () => {
        const { placeholder, choosedOption } = this.props;
        const { modalOptionShow } = this.state;

        return (
            <div
                onClick={this.toggleOptionsModal}
                onBlur={this.onBlurOptionsInput}
                tabIndex="0" // nescessary for onFocus and onBlur
                className={styles.selectable}
            >
                <div className={styles.selectableRowWrapper}>
                    <p>{choosedOption ? choosedOption : placeholder}</p>
                    <FontAwesomeIcon
                        icon="chevron-circle-down"
                        className={`${styles.arrowDownIcon} ${modalOptionShow ? styles.arrowDownIconExpand : null}`}
                    />
                </div>
            </div>
        );
    };

    renderOptionsModal = () => {
        const {
            options,
            onChooseOption,
            choosedOption
        } = this.props;
        const { modalOptionShow, } = this.state;

        return (
            <div
                className={`${styles.optionsContainer} ${modalOptionShow ? styles.optionsContainerExpand : null}`}
            >
                <ul className={styles.listContainer}>
                    {options.map((option, i) => (
                        <li key={i} className={styles.listCard} onClick={onChooseOption(option)}>
                            <div>
                                {
                                    option === choosedOption
                                        ? <FontAwesomeIcon icon="check" className={styles.checkIcon} />
                                        : null
                                }
                            </div>
                            <p>{option}</p>
                        </li>
                    ))}
                </ul>
            </div>
        );
    };

    render() {
        return (
            <div style={{ position: 'relative' }}>
                {this.renderSelectInputButton()}
                {this.renderOptionsModal()}
            </div >
        );
    }
}

export { InputSelect };
