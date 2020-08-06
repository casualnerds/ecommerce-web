import React, { Component } from 'react';
import { Editor } from 'react-draft-wysiwyg';

import styles from './TextEditor.module.css';

class TextEditor extends Component {

    state = {
        toolbarOptions: [
            'inline',
            'blockType',
            'fontSize',
            'list',
            'textAlign',
            'colorPicker',
            'link',
            'embedded',
            'emoji',
            'image',
            'remove',
            'history'
        ],
        isEditorOnFocus: false
    }

    onFocusEditor = () => {
        this.setState({ isEditorOnFocus: true });
    }

    onBlurEditor = () => {
        this.setState({ isEditorOnFocus: false });
    }

    render() {
        const { editorState, onEditorStateChange } = this.props;
        const { isEditorOnFocus, toolbarOptions } = this.state;

        return (
            <>
                <Editor
                    editorState={editorState}
                    onEditorStateChange={onEditorStateChange}
                    wrapperClassName={styles.editorWrapper}
                    toolbarClassName={styles.toolbar}
                    editorClassName={`${styles.editor} ${isEditorOnFocus ? styles.editorFocus : null}`}
                    onFocus={this.onFocusEditor}
                    onBlur={this.onBlurEditor}
                    toolbar={{
                        options: toolbarOptions
                    }}
                />
            </>
        );
    }
}

export { TextEditor };
