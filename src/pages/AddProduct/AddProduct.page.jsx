import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from "./AddProduct.module.css";

class AddProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categoryOptionShow: false,
            categories: [
                'Sneaker',
                'Boost',
                'Hiking',
                'Running',
                'Golf',
                'Basket',
                'Cycling'
            ],
            currentOptionsRef: {},
            choosedCategory: ''
        };
    }

    componentDidMount() {
        document.title = 'Patucool | Add Product';
    }

    toggleCategoryOptions = () => {
        this.setState(prev => ({
            categoryOptionShow: !prev.categoryOptionShow,
        }));
    }

    onBlurCategoryOptions = () => {
        this.setState({ categoryOptionShow: false });
    }

    onChooseCategory = category => () => {
        this.setState({ choosedCategory: category });
    }

    renderSelectInput = () => {
        const { categoryOptionShow, choosedCategory } = this.state;

        return (
            <div
                onClick={this.toggleCategoryOptions}
                onBlur={this.onBlurCategoryOptions}
                tabIndex="0" // nescesary for onFocus and onBlur
                className={styles.selectable}
            >
                <div className={styles.selectableRowWrapper}>
                    <p>{choosedCategory ? choosedCategory : 'Select an option ...'}</p>
                    <FontAwesomeIcon
                        icon="chevron-circle-down"
                        className={`${styles.arrowDownIcon} ${categoryOptionShow ? styles.arrowDownIconExpand : null}`}
                    />
                </div>
            </div>
        );
    }

    renderCategoryOptionsModal = () => {
        const {
            categoryOptionShow,
            currentOptionsRef,
            categories,
            choosedCategory
        } = this.state;

        return (
            <div
                className={`${styles.optionsContainer} ${categoryOptionShow ? styles.optionsContainerExpand : null}`}
                style={{ minWidth: currentOptionsRef.width }}
            >
                <ul className={styles.listContainer}>
                    {categories.map((category, i) => (
                        <li key={i} className={styles.listCard} onClick={this.onChooseCategory(category)}>
                            <div>
                                {
                                    category === choosedCategory
                                        ? <FontAwesomeIcon icon="check" className={styles.checkIcon} />
                                        : null
                                }
                            </div>
                            <p>{category}</p>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }

    render() {
        return (
            <div>
                <h3 className={styles.title}>Add New Product</h3>
                <h2 className={styles.inputTitle}>Product's Name:</h2>
                <input type="text" />
                <h2 className={styles.inputTitle}>Category:</h2>
                <div style={{ position: 'relative' }}>
                    {this.renderSelectInput()}
                    {this.renderCategoryOptionsModal()}
                </div>
                <h2 className={styles.inputTitle}>Product's Name:</h2>
                <input type="text" />
            </div >
        );
    }
}

export { AddProduct };
