import React, { Component, createRef } from "react";
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { EditorState } from 'draft-js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Lottie from 'react-lottie';

import styles from "./AddProduct.module.css";
import {
    nominalSeparator,
    isNumber,
    removeSeparator,
    removeZeroOnFront,
    calculateDiscount
} from '../../helpers/helpers';
import { InputSelect } from '../../modules/InputSelect/InputSelect.module';
import { InputBasic } from '../../modules/InputBasic/InputBasic.module';
import { InputIcon } from '../../modules/InputIcon/InputIcon.module';
import { InputSwitch } from '../../modules/InputSwitch/InputSwitch.module';
import { TextEditor } from '../../modules/TextEditor/TextEditor.module';
import { checkAnimation } from '../../themes/lottieAnimations';

class AddProduct extends Component {
    constructor(props) {
        super(props);
        this.image0 = createRef();
        this.image1 = createRef();
        this.image2 = createRef();
        this.image3 = createRef();
        this.state = {
            categories: [
                'Sponge',
                'Butter',
                'Chiffon',
                'Cotton',
                'Red Velvet',
                'Pound',
                'Genoise'
            ],
            smallImagesCount: [1, 2, 3],
            dimensionCount: [
                { name: 'width', code: 'W' },
                { name: 'length', code: 'L' },
                { name: 'height', code: 'H' }
            ],
            productName: '',
            choosedCategory: '',
            price: 0,
            formattedPrice: '0',
            discount: 0,
            netPrice: 0,
            isDiscount: false,
            editorState: EditorState.createEmpty(),
            uploadedImages: [],
            isReadyStock: false,
            stock: 1,
            isPublished: true,
            uploadError: '',
            dropDepth: 0
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

    onChangePriceInput = (e) => {
        const { discount } = this.state;
        const value = e.target.value;
        if (isNumber(value)) {
            const removeZero = removeZeroOnFront(value);
            const separated = nominalSeparator(removeZero);
            this.setState({
                price: removeZero ? parseInt(removeSeparator(removeZero)) : 0,
                formattedPrice: removeZero ? separated : '0',
                netPrice: value ? calculateDiscount(parseInt(removeSeparator(removeZero)), discount) : 0
            });
        }
    }

    onChangeDiscount = e => {
        const { price } = this.state;
        const value = e.target.value;

        if (isNumber(value)) {
            if (value <= 100) {
                this.setState({
                    discount: value ? parseInt(value) : 0,
                    netPrice: value ? calculateDiscount(price, value) : price
                });
            } else {
                this.setState({
                    discount: value ? 100 : 0,
                    netPrice: value ? calculateDiscount(price, 100) : price
                });
            }
        }
    }

    onClickDiscount = () => {
        this.setState(prev => ({ isDiscount: !prev.isDiscount }));
    }

    onEditorStateChange = editorState => {
        this.setState({ editorState });
    }

    onChangeFile = (e, i) => {
        const { uploadedImages } = this.state;
        const file = e.target.files[0]; // pick the image file
        this.setState({ uploadError: '' });

        if (file) {
            const newArrayImages = uploadedImages;
            newArrayImages[i] = URL.createObjectURL(file);

            if (file.type.split("/")[0] === "image") {
                this.setState({
                    uploadedImages: newArrayImages
                });
            } else {
                this.setState({
                    uploadError: 'Only allow image file type.'
                });
            }
        }
    }

    onDragEnterFiles = e => {
        const { dropDepth } = this.state;
        e.preventDefault();
        e.stopPropagation();

        this.setState({
            dropDepth: dropDepth + 1
        });
    }

    onDragLeaveFiles = e => {
        const { dropDepth } = this.state;
        e.preventDefault();
        e.stopPropagation();
        this.setState({
            dropDepth: dropDepth - 1
        });
    }

    onDragOverFiles = e => {
        e.preventDefault();
        e.stopPropagation();
        e.dataTransfer.dropEffect = 'copy';
    }

    onDropFiles = e => {
        e.preventDefault();
        e.stopPropagation();
        const { uploadedImages } = this.state;
        const newArray = [...uploadedImages];

        this.setState({ dropDepth: 0, uploadError: '' });
        const filesObject = e.dataTransfer.files;
        const filesArray = Object.keys(filesObject);
        filesArray.forEach(key => {
            const isImageFormat = filesObject[key].type.split("/")[0] === "image";
            if ((newArray.length < 4)) {
                if (isImageFormat) {
                    newArray.push(URL.createObjectURL(filesObject[key]));
                } else {
                    this.setState({
                        uploadError: 'Only allow image file type.'
                    });
                }
            }
        });
        this.setState({
            uploadedImages: newArray
        });
    }

    onClickSwitchStock = () => {
        this.setState(prev => ({ isReadyStock: !prev.isReadyStock }));
    }

    onChangeStock = (e) => {
        const value = e.target.value;

        if (isNumber(value)) {
            this.setState({
                stock: value ? parseInt(value) : 1
            });
        }
    }

    onClickLever = (operator) => () => {
        const { stock } = this.state;
        switch (operator) {
            case '-':
                if (stock > 1) {
                    this.setState(prev => ({ stock: prev.stock - 1 }));
                }
                break;
            case '+':
                this.setState(prev => ({ stock: prev.stock + 1 }));
                break;
            default:
                break;
        }
    }

    onClickSwitchPublish = () => {
        this.setState(prev => ({ isPublished: !prev.isPublished }));
    }

    deleteImage = i => () => {
        const { uploadedImages } = this.state;
        const newArray = [...uploadedImages];
        newArray.splice(i, 1);

        this.setState({ uploadedImages: newArray }, () => {
            for (let x = 0; x <= newArray.length; x++) { // delete all choosen file on input
                this[`image${x}`].current.value = "";
            }
        });
    }

    renderLeftForm = () => {
        return (
            <div className={styles.formLeftSide}>
                <div className={styles.leftSideCard}>
                    <h2 className={styles.inputTitle}>Name</h2>
                    <p className={styles.describer}>Give your fancy prodcut name. e.g: Rainbow Cake</p>
                    {this.renderProductNameInput()}
                    <h2 className={styles.inputTitle}>Category</h2>
                    <p className={styles.describer}>What category your product is?</p>
                    {this.renderInputSelect()}
                    <h2 className={styles.inputTitle}>Price</h2>
                    <p className={styles.describer}>Give your best price for its value</p>
                    {this.renderPriceInput()}
                    {this.renderDiscountOption()}
                </div>
            </div>
        );
    }

    renderRightForm = () => {
        return (
            <div className={styles.formRightSide}>
                <div className={styles.rightSideCard}>
                    <h2 className={styles.inputTitle}>Description</h2>
                    <p className={styles.describer}>Describe your product in details for consumers to know what you offered</p>
                    {this.renderTextEditor()}
                </div>
            </div>
        );
    }

    renderProductNameInput = () => {
        return (
            <div className={styles.inputName}>
                <InputBasic
                    type="text"
                    onChange={this.onChangeProductName}
                    placeholder="e.g. Rainbow Cake"
                />
            </div>
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
        const { formattedPrice } = this.state;
        return (
            <InputIcon
                type="text"
                onChange={this.onChangePriceInput}
                value={formattedPrice}
            >
                <p className={styles.priceIcon}>Rp</p>
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

    renderDiscountOption = () => {
        const { isDiscount, discount, netPrice } = this.state;
        return (
            <div>
                <div className={styles.checkDiscountWrapper}>
                    <FontAwesomeIcon
                        icon="check-square"
                        className={`${styles.checkIcon} ${isDiscount ? styles.checkIconChecked : null}`}
                        onClick={this.onClickDiscount}
                    />
                    <p className={styles.discountText}>discount</p>
                </div>
                {
                    isDiscount ? (
                        <div className={styles.discountInputContainer}>
                            <InputIcon width="5vw" type="text" onChange={this.onChangeDiscount} value={discount}>
                                <FontAwesomeIcon icon="percent" className={styles.percentageIcon} />
                            </InputIcon>
                            <p className={styles.netPrice}>Net Price: <span>Rp {nominalSeparator(netPrice)}, -</span></p>
                        </div>
                    ) : null
                }
            </div>
        );
    }

    renderUploadImages = () => {
        const { uploadError } = this.state;
        return (
            <div className={styles.uploadImageContainer}>
                <h2 className={styles.inputTitle}>Upload Images</h2>
                <p className={styles.uploadError}>{uploadError}</p>
                <div className={styles.uploadAndDescWrapper}>
                    <div className={styles.imagesContainer}>
                        {this.renderMainImage()}
                        {this.renderOtherImages()}
                        {this.renderDndArea()}
                    </div>
                    {this.renderTipsContainer()}
                </div>
            </div>
        );
    }

    renderTipsContainer = () => {
        return (
            <div className={styles.tipsContainer}>
                <div>
                    <FontAwesomeIcon icon="info-circle" className={styles.infoIcon} />
                </div>
                <div>
                    <h5 className={styles.tipsTitle}>Images Recommendation:</h5>
                    <p><span>1.</span> Use at least 500x500 px image resolution</p>
                    <p><span>2.</span> Upload images at difference angles to give your consumer perspective</p>
                    <p><span>3.</span> Use attractive images to attract your consumers</p>
                    <p><span>4.</span> Maximize the image up to 4 files</p>
                </div>
            </div>
        );
    }

    renderMainImage = () => {
        const { uploadedImages } = this.state;
        return (
            <div
                className={`${styles.mainImage} ${uploadedImages[0] ? styles.mainImageExist : null}`}
                style={{
                    backgroundImage: uploadedImages[0] ? `url(${uploadedImages[0]})` : null,
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center"
                }}
            >
                <FontAwesomeIcon
                    icon="images"
                    className={styles.uploadMainIcon}
                    style={{ opacity: uploadedImages[0] ? 0 : 1 }}
                />
                <div
                    className={styles.addImageTextContainer}
                    style={{ opacity: uploadedImages[0] ? 0 : 1 }}
                >
                    <FontAwesomeIcon icon="plus" className={styles.plusIconMain} />
                    <p className={styles.addImageTextMain}>Add new image</p>
                </div>
                <input
                    ref={this.image0}
                    type="file"
                    className={styles.inputFile}
                    onChange={event => this.onChangeFile(event, 0)}
                    accept="image/*"
                />
                {
                    uploadedImages[0] ? (
                        <div className={styles.deleteMainImageIconContainer} onClick={this.deleteImage(0)}>
                            <FontAwesomeIcon icon="times-circle" className={styles.deleteMainImageIcon} />
                        </div>
                    ) : null
                }
            </div>
        );
    }

    renderOtherImages = () => {
        const { smallImagesCount, uploadedImages } = this.state;
        return (
            <div className={styles.smallImagesContainer}>
                {
                    smallImagesCount.map((_, i) => (
                        <div
                            key={i}
                            className={`${styles.smallImage} ${uploadedImages[i + 1] ? styles.smallImageExist : null}`}
                            style={{
                                backgroundImage: uploadedImages[i + 1] ? `url(${uploadedImages[i + 1]})` : null,
                                backgroundSize: "contain",
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "center"
                            }}
                        >
                            {
                                uploadedImages[i] ? ( // render if previous index image is exist
                                    <input
                                        ref={this[`image${i + 1}`]}
                                        type="file"
                                        className={styles.inputFile}
                                        onChange={event => this.onChangeFile(event, i + 1)}
                                        accept="image/*"
                                    />
                                ) : null
                            }

                            {
                                uploadedImages[i + 1] ? (
                                    <div className={styles.deleteSmallImageIconContainer} onClick={this.deleteImage(i + 1)}>
                                        <FontAwesomeIcon icon="times-circle" className={styles.deleteSmallImageIcon} />
                                    </div>
                                ) : (
                                        <FontAwesomeIcon icon="plus" className={styles.smallImageIcon} />
                                    )
                            }
                        </div>
                    ))
                }
            </div>
        );
    }

    renderDndArea = () => {
        const { dropDepth, uploadedImages } = this.state;
        return (
            <>
                {
                    uploadedImages.length === 4 ? (
                        this.renderCheckAnimation()
                    ) : (
                            <div
                                className={styles.dndAreaContainer}
                                onDragEnter={this.onDragEnterFiles}
                                onDragLeave={this.onDragLeaveFiles}
                                onDragOver={this.onDragOverFiles}
                                onDrop={this.onDropFiles}
                            >
                                <div className={`${styles.dndMessageBox} ${dropDepth > 0 ? styles.dndMessageBoxExpand : null}`}>
                                    <FontAwesomeIcon icon="upload" className={styles.uploadDragIcon} />
                                    <p>or Drop</p>
                                    <p>your multiple images here</p>
                                </div>
                            </div>
                        )
                }
            </>
        );
    }

    renderCheckAnimation = () => {
        const options = {
            loop: false,
            autoplay: true,
            animationData: checkAnimation,
            rendererSettings: {
                preserveAspectRatio: 'xMidYMid slice'
            }
        };

        return (
            <div className={styles.checkAnimationContainer}>
                <Lottie
                    options={options}
                    height={'4vw'}
                    width={'4vw'}
                />
                <p className={styles.completeUpload}>Yeay! your product images are complete.</p>
            </div>
        );
    }

    renderAddDimension = () => {
        const { dimensionCount } = this.state;
        return (
            <div className={styles.addDimensionContainer}>
                <h2 className={styles.inputTitle}>The Cake's Dimension</h2>
                <p>Add your cake dimension in centimeter (e.g. 20x20x10)</p>
                <div className={styles.dimensionContainer}>
                    {
                        dimensionCount.map((dimension, i) => (
                            <div key={i} className={styles.rowWrapper}>
                                <div>
                                    <p>{dimension.name} <span>({dimension.code})</span></p>
                                </div>
                                <p>:</p>
                                <div className={styles.input}>
                                    <InputBasic width="4.5vw" />
                                </div>
                                <p className={styles.cm}>cm</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        );
    }

    renderStock = () => {
        const { stock, isReadyStock } = this.state;
        return (
            <div className={styles.productPublishingContainer}>
                <h2 className={styles.inputTitle}>Product Stock</h2>
                <div className={styles.subInputTitleWrapper}>
                    <p className={styles.subInputTitle}>Is your product ready stock?</p>
                    <p className={styles.subInputTitle}>If you disable this switch, it means your products aren't ready, consumer need to pre-order your product.</p>
                </div>
                {this.renderSwitch('STOCK')}
                {
                    isReadyStock && (
                        <div className={styles.gaugeContainer}>
                            <div onClick={this.onClickLever('-')}>
                                <FontAwesomeIcon icon="minus" />
                            </div>
                            <div>
                                <InputBasic
                                    width="4vw"
                                    onChange={this.onChangeStock}
                                    type="number"
                                    value={stock}
                                />
                            </div>
                            <div onClick={this.onClickLever('+')}>
                                <FontAwesomeIcon icon="plus" />
                            </div>
                        </div>
                    )
                }
            </div>
        );
    }

    renderProductPublishing = () => {
        return (
            <div className={styles.productPublishingContainer}>
                <h2 className={styles.inputTitle}>Product Publishing</h2>
                <div className={styles.subInputTitleWrapper}>
                    <p className={styles.subInputTitle}>Do you want to publish your new product right now?</p>
                    <p className={styles.subInputTitle}>If you disable this switch you can still switch it on Edit Product.</p>
                </div>
                {this.renderSwitch('PUBLISHING')}
            </div>
        );
    }

    renderSwitch = (cases) => {
        const { isPublished, isReadyStock } = this.state;

        switch (cases) {
            case 'STOCK':
                return (
                    <InputSwitch
                        switchValue={isReadyStock}
                        onClick={this.onClickSwitchStock}
                    />
                );
            case 'PUBLISHING':
                return (
                    <InputSwitch
                        switchValue={isPublished}
                        onClick={this.onClickSwitchPublish}
                    />
                );
            default:
                break;
        }
    }

    renderAddProductButton = () => {
        return (
            <div className={styles.addProductButtonContainer}>
                <p>Please check all the required input form above before click the <span>Add product</span> button below.</p>
                <div className={styles.addProductButton}>
                    <p>Add Product</p>
                </div>
            </div>
        );
    }

    render() {
        return (
            <div>
                <h3 className={styles.title}>Add New Product</h3>
                <h2 className={styles.inputTitle}>Product Information</h2>
                <div className={styles.formContainer}>
                    {this.renderLeftForm()}
                    {this.renderRightForm()}
                </div>
                {this.renderUploadImages()}
                {this.renderAddDimension()}
                {this.renderStock()}
                {this.renderProductPublishing()}
                {this.renderAddProductButton()}
            </div >
        );
    }
}

export { AddProduct };
