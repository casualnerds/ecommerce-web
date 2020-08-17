import React, { Component } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import styles from './Product.module.css';


class Product extends Component {

    constructor(props) {
        super(props);
        this.state = {
            headers: [
                'No',
                'Image',
                'Name',
                'Price',
                'Comment',
                'Username',
                'Action'
            ],
            items: [
                '1',
                '2',
                '3',
                '4',
                '5',
                '6',
                '...'
            ]
        };
    }

    render() {

        const { headers, items } = this.state;

        return (
            <div>
                <h3 className={styles.title}>Add New Product</h3>
                {/* <h2 className={styles.inputTitle}>Product Information</h2> */}
                <div className={styles.optionsContainer}>

                    <ul className={styles.productsContainer}>
                        <li style={{ listStyle: 'none' }}>
                            {
                                headers.map((option, i) => (
                                    <span key={i} className={styles.productCardHeader}>{option}</span>

                                ))
                            }
                        </li>
                        {
                            items.map((option, i) => (
                                <li key={i} className={styles.productCardItems}>
                                    <span className={styles.itemNum}>{option}</span>
                                    <span className={styles.itemImage}><img src="https://cleata.co/wp-content/uploads/2018/11/SEPATU-FAHSION-TC-219-SEPATU-WANITA-SLIP-ON.jpeg" alt="patu" /></span>
                                    <span className={styles.itemName}>Sepatu XXI</span>
                                    <span className={styles.itemPrice}>$100</span>
                                    <span className={styles.itemComment}>zu zu zuzuzu zuzu, mipa nyam nyam2 nyam3</span>
                                    <span className={styles.itemUsername}>dedy firmansyah</span>
                                    <span className={styles.itemAction}>...</span>
                                </li>
                            ))
                        }


                    </ul>
                </div>
            </div>

        );
    }
}


export { Product };

