import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './ChartLine.module.css';

class ChartLine extends Component {
    render() {
        const { data } = this.props;

        return (
            <div className={styles.cartContainer}>
                <div className={styles.titleContainer}>
                    <div className={styles.titleChart}>
                        <p>TRANSACTIONS</p>
                        <p>6.013</p>
                        <p>2.1 % (30 Days)</p>
                    </div>
                    <div className={styles.iconContainer}>
                        <FontAwesomeIcon icon="signal" className={styles.icon} />
                    </div>
                </div>
                <div>
                    <Line
                        data={data}
                        height={70}
                        options={{
                            scales: {
                                xAxes: [
                                    {
                                        ticks: {
                                            display: false
                                        },
                                        gridLines: false
                                    }
                                ],
                                yAxes: [
                                    {
                                        ticks: {
                                            beginAtZero: true,
                                            stepSize: 5,
                                            display: false
                                        },
                                        gridLines: false
                                    }
                                ]
                            },
                            legend: {
                                display: false
                            }
                        }}
                    />
                </div>
            </div>
        );
    }
}

export { ChartLine };
