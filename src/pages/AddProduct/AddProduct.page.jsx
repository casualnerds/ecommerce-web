import React, { Component } from "react";
import { EditorState } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

import styles from "./AddProduct.module.css";
import { InputSelect } from '../../modules/InputSelect/InputSelect.module';
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
            choosedCategory: '',
            editorState: EditorState.createEmpty()
        };
    }

    componentDidMount() {
        document.title = 'Patucool | Add Product';
    }

    onChooseCategory = category => () => {
        this.setState({ choosedCategory: category });
    }

    onEditorStateChange = editorState => {
        this.setState({ editorState }, () => console.log(this.state.editorState.getCurrentContent()));
    }

    renderInputSelect = () => {
        const { categories, choosedCategory } = this.state;

        return (
            <InputSelect
                options={categories}
                choosedOption={choosedCategory}
                onChooseOption={this.onChooseCategory}
                placeholder="Choose category .."
            // width={400} (optional)
            // height={30} (optional)
            />
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
                        <input type="text" />
                        <h2 className={styles.inputTitle}>Category:</h2>
                        {this.renderInputSelect()}
                        <h2 className={styles.inputTitle}>Price:</h2>
                        <div className={styles.inputIconContainer}>
                            <div className={styles.iconContainer}>
                                <p>Rp</p>
                            </div>
                            <input type="number" min="0" />
                        </div>
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
