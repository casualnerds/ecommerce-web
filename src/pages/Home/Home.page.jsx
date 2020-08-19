import React, { Component } from 'react';

import styles from './Home.module.css';
import { ChartLine } from '../../modules/ChartLine/ChartLine.module';

class Home extends Component {
    componentDidMount() {
        document.title = "Cakery | Dashboard";
        this.requestTransactionsPerYear();
    }

    requestTransactionsPerYear = () => {
        const { getTransactionPerYear } = this.props;
        getTransactionPerYear();
    }

    renderChartTransactionsPerYear = () => {
        const { transactionsPerYear } = this.props;
        return (
            <ChartLine
                data={transactionsPerYear}
            />
        );
    }

    render() {
        return (
            <div className={styles.homeContainer}>
                <p className={styles.pageTitle}>Dashboard</p>
                <p className={styles.sectionTitle}>Overview</p>
                <div className={styles.chartsTopContainer}>
                    {this.renderChartTransactionsPerYear()}
                </div>
            </div>
        );
    }
}

export { Home };
