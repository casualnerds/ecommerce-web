import React, { Component } from 'react'

import styles from './Product.module.css';


class Product extends Component {
    render() {
        return (
            <div className={styles.productList}>
                <h3>+ Add New </h3>
                <div className={styles.productFilter}>
                    <div className={styles.customSelect}>
                        <select>
                            <option value="" disabled="disabled" selected="selected">Choose a Category</option>
                            <option>Bender</option>
                            <option>Jerry Seinfeld</option>
                            <option>Zoidberg</option>
                            <option>Kramer</option>
                            <option>Hapskidoodle</option>
                            <option>Doodleski</option>
                        </select>

                    </div>
                    {/* <div className={styles.customSelect}>
                        <select>
                            <option value="" disabled="disabled" selected="selected">Choose An  User</option>
                            <option>Bender</option>
                            <option>Jerry Seinfeld</option>
                            <option>Zoidberg</option>
                            <option>Kramer</option>
                            <option>Hapskidoodle</option>
                            <option>Doodleski</option>
                        </select>

                    </div> */}
                    <input type="submit" value="Search" />
                </div>
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Actions</th>
                    </tr>
                    <tr>
                        <td>Alfreds Futterkiste</td>
                        <td>Maria Anders</td>
                        <td>Germany</td>
                    </tr>
                    <tr>
                        <td>Berglunds snabbköp</td>
                        <td>Christina Berglund</td>
                        <td>Sweden</td>
                    </tr>
                    <tr>
                        <td>Centro comercial Moctezuma</td>
                        <td>Francisco Chang</td>
                        <td>Mexico</td>
                    </tr>
                    <tr>
                        <td>Ernst Handel</td>
                        <td>Roland Mendel</td>
                        <td>Austria</td>
                    </tr>
                    <tr>
                        <td>Island Trading</td>
                        <td>Helen Bennett</td>
                        <td>UK</td>
                    </tr>
                    <tr>
                        <td>Königlich Essen</td>
                        <td>Philip Cramer</td>
                        <td>Germany</td>
                    </tr>
                    <tr>
                        <td>Laughing Bacchus Winecellars</td>
                        <td>Yoshi Tannamuri</td>
                        <td>Canada</td>
                    </tr>
                    <tr>
                        <td>Magazzini Alimentari Riuniti</td>
                        <td>Giovanni Rovelli</td>
                        <td>Italy</td>
                    </tr>
                    <tr>
                        <td>North/South</td>
                        <td>Simon Crowther</td>
                        <td>UK</td>
                    </tr>
                    <tr>
                        <td>Paris spécialités</td>
                        <td>Marie Bertrand</td>
                        <td>France</td>
                    </tr>
                </table>
            </div>

        )
    }
}


export { Product }
