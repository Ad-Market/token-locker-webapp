import React, { Component } from 'react';

import Header from '../components/Header/Header';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import WithdrawP from '../components/WithdrawP/WithdrawP';
import ModalMenu from '../components/Modal/ModalMenu';
import Footer from '../components/Footer/Footer';
import Scrollup from '../components/Scrollup/Scrollup';

class WithdrawPancakeswapLP extends Component {
    render() {
        return (
            <div className="main">
                <Header />
                <Breadcrumb title="Withdraw Uniswap V2 LP Pair" subpage="Withdraw Uniswap V2" page = "withdraw LP" />
                <WithdrawP />
                <Footer />
                <ModalMenu />
                <Scrollup />
            </div>
        );
    }
}

export default WithdrawPancakeswapLP;