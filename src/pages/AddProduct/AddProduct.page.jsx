import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from "./AddProduct.module.css";
import { InputSelect } from '../../modules/InputSelect/InputSelect.module';

class AddProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: [
                'Sneaker',
                'Boost',
                'Hiking',
                'Running',
                'Golf',
                'Basket',
                'Cycling'
            ],
            choosedCategory: ''
        };
    }

    componentDidMount() {
        document.title = 'Patucool | Add Product';
    }

    onChooseCategory = category => () => {
        this.setState({ choosedCategory: category });
    }

    renderInputSelect = () => {
        const { categories, choosedCategory } = this.state;

        return (
            <InputSelect
                options={categories}
                choosedOption={choosedCategory}
                onChooseOption={this.onChooseCategory}
                placeholder="Choose category .."
            />
        );
    }

    render() {
        return (
            <div>
                <h3 className={styles.title}>Add New Product</h3>
                <h2 className={styles.inputTitle}>Product's Name:</h2>
                <input type="text" />
                <h2 className={styles.inputTitle}>Category:</h2>
                {this.renderInputSelect()}
                <h2 className={styles.inputTitle}>Product's Name:</h2>
                <input type="text" />
            </div >
        );
    }
}

export { AddProduct };
