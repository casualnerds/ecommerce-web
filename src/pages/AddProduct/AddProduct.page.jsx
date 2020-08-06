import React, { Component } from "react";
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { EditorState } from 'draft-js';

import styles from "./AddProduct.module.css";
import { InputSelect } from '../../modules/InputSelect/InputSelect.module';
import { InputBasic } from '../../modules/InputBasic/InputBasic.module';
import { InputIcon } from '../../modules/InputIcon/InputIcon.module';
import { TextEditor } from '../../modules/TextEditor/TextEditor.module';

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
            productName: '',
            choosedCategory: '',
            editorState: EditorState.createEmpty()
        };
    }

    componentDidMount() {
        document.title = 'Patucool | Add Product';
    }

    onChooseCategory = choosedCategory => () => {
        this.setState({ choosedCategory });
    }

    onChangeProductName = (productName) => {
        this.setState({ productName });
    }

    onChangePriceInput = (price) => {
        this.setState({ price });
    }

    onEditorStateChange = editorState => {
        this.setState({ editorState });
    }

    renderProductNameInput = () => {
        return (
            <InputBasic
                onChange={this.onChangeProductName}
            // width={500} // optional
            // height={40}  // optional
            />
        );
    }

    renderInputSelect = () => {
        const { categories, choosedCategory } = this.state;

        return (
            <InputSelect
                options={categories}
                choosedOption={choosedCategory}
                onChooseOption={this.onChooseCategory}
                placeholder="Choose category .."
            // width={400} // (optional)
            // height={30} // (optional)
            />
        );
    }

    renderPriceInput = () => {
        return (
            <InputIcon
                type="number"
                onChange={this.onChangePriceInput}
            // width={400} // (optional)
            // height={30} // (optional)
            >
                <p>Rp</p>
            </InputIcon>
        );
    }

    renderTextEditor = () => {
        const { editorState } = this.state;
        return (
            <TextEditor
                editorState={editorState}
                onEditorStateChange={this.onEditorStateChange}
            />
        );
    }

    render() {
        return (
            <div>
                <h3 className={styles.title}>Add New Product</h3>
                <div className={styles.formContainer}>
                    <div className={styles.formLeftSide}>
                        <h2 className={styles.inputTitle}>Product's Name:</h2>
                        {this.renderProductNameInput()}
                        <h2 className={styles.inputTitle}>Category:</h2>
                        {this.renderInputSelect()}
                        <h2 className={styles.inputTitle}>Price:</h2>
                        {this.renderPriceInput()}
                    </div>
                    <div className={styles.formRightSide}>
                        <h2 className={styles.inputTitle}>Description:</h2>
                        {this.renderTextEditor()}
                    </div>
                </div>
            </div >
        );
    }
}

export { AddProduct };
