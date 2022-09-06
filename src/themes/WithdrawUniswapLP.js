import React, { Component } from 'react';

import Header from '../components/Header/Header';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import WithdrawU from '../components/WithdrawU/WithdrawU';
import Footer from '../components/Footer/Footer';
import Scrollup from '../components/Scrollup/Scrollup';

class WithdrawUniswapLP extends Component {
    render() {
        return (
            <div className="main">
                <Header />
                <Breadcrumb title="Withdraw Uniswap V2 LP Pair" subpage="Withdraw Uniswap V2" page = "withdraw LP" />
                <WithdrawU />
                <Footer />
                <Scrollup />
            </div>
        );
    }
}

export default WithdrawUniswapLP;