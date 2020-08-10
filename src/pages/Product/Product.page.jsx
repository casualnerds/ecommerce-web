import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import styles from './Product.module.css';


class Product extends Component {

    render() {

        return (

            <div className={styles.productListContainer}>
                <ul>
                    <li style={{ backgroundColor: '#2a302d', color: "white" }}>
                        <span>No</span>
                        <span>Image</span>
                        <span>Name</span>
                        <span>Rating</span>
                        <span>Price</span>
                        <span>Comment</span>
                        <span>Action</span>
                    </li>
                    <li>
                        <span className={styles.Number}>1</span>
                        <span className={styles.image}>image here</span>
                        <span className={styles.name}>Adidas</span>
                        <span className={styles.rating}>5</span>
                        <span className={styles.price}>$50</span>
                        <span className={styles.price}>comment here</span>
                        <span className={styles.action}></span>
                        <FontAwesomeIcon
                            icon='ellipsis-v'
                            color='black'
                            size='sm'
                        />
                    </li>
                    <li>
                        <span className={styles.Number}>2</span>
                        <span className={styles.image}>image here</span>
                        <span className={styles.name}>Adidas</span>
                        <span className={styles.rating}>5</span>
                        <span className={styles.price}>$50</span>
                        <span className={styles.price}>comment here</span>
                        <span className={styles.action}></span>
                        <FontAwesomeIcon
                            icon='ellipsis-v'
                            color='black'
                            size='sm'
                        />
                    </li>
                    <li>
                        <span className={styles.Number}>3</span>
                        <span className={styles.image}>image here</span>
                        <span className={styles.name}>Adidas</span>
                        <span className={styles.rating}>5</span>
                        <span className={styles.price}>$50</span>
                        <span className={styles.price}>comment here</span>
                        <span className={styles.action}></span>
                        <FontAwesomeIcon
                            icon='ellipsis-v'
                            color='black'
                            size='sm'
                        />
                    </li>
                    <li>
                        <span className={styles.Number}>4</span>
                        <span className={styles.image}>image here</span>
                        <span className={styles.name}>Adidas</span>
                        <span className={styles.rating}>5</span>
                        <span className={styles.price}>$50</span>
                        <span className={styles.price}>comment here</span>
                        <span className={styles.action}></span>
                        <FontAwesomeIcon
                            icon='ellipsis-v'
                            color='black'
                            size='sm'
                        />
                    </li>
                </ul>
            </div>



        );
    }
}


export { Product };
