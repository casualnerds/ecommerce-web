import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import styles from './Product.module.css';


class Product extends Component {

    render() {

        return (

            <div>
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








 // <div className={`${styles.productContainer} ${isSidebarCollapsed ? styles.productContainerExpand : null} `}>
            //     <div className={`${styles.addProduct}`}>
            //         <FontAwesomeIcon
            //             icon="plus-square"
            //             color="#45a049"
            //             size="2x"
            //         />
            //         <span className={`${styles.spanCustom}`}>New Product</span>
            //     </div>
            //     <div className={`${styles.dropdown}`}>
            //         <div className={`${styles.dropdownSelect}`}>
            //             <span>Selected item</span>
            //             <FontAwesomeIcon
            //                 icon="caret-down"
            //                 color="black"
            //                 size="sm"
            //             />
            //         </div>
            //         <div className={`${styles.dropdownList}`}>
            //             <div className={`${styles.dropdownListItem}`}>Pepsi</div>
            //             <div className={`${styles.dropdownListItem}`}>Coca</div>
            //             <div className={`${styles.dropdownListItem}`}>Monster</div>
            //         </div>
            //     </div>
            //     <table className={`${styles.productTable}`}>
            //         <thead>
            //             <tr>
            //                 <th>No</th>
            //                 <th>Name</th>
            //                 <th>Image</th>
            //                 <th>Rating</th>
            //                 <th>username</th>
            //                 <th>Action</th>
            //             </tr>
            //         </thead>
            //         <tbody>
            //             <tr>
            //                 <td>1</td>
            //                 <td>Domenic</td>
            //                 <td>88,110</td>
            //                 <td>dcode</td>
            //                 <td>ucain</td>
            //                 <td>...</td>
            //             </tr>
            //             <tr className={`${styles.activeRow}`}>
            //                 <td>2</td>
            //                 <td>Sally</td>
            //                 <td>72,400</td>
            //                 <td>Students</td>
            //                 <td>ucain</td>
            //                 <td>...</td>
            //             </tr>
            //             <tr>
            //                 <td>3</td>
            //                 <td>Nick</td>
            //                 <td>52,300</td>
            //                 <td>dcode</td>
            //                 <td>ucain</td>
            //                 <td>...</td>
            //             </tr>
            //         </tbody>
            //     </table>
            // </div>