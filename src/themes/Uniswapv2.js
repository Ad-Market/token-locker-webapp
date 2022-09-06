import React, { Component } from 'react';
import Header from '../components/Header/Header';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import UniswapLP from '../components/UniswapLP/UniswapLP';
import ModalMenu from '../components/Modal/ModalMenu';
import Footer from '../components/Footer/Footer';
import Scrollup from '../components/Scrollup/Scrollup';

class Uniswapv2 extends Component {
    render() {
        return (
            <div className="main">
                <Header />
                <Breadcrumb title="Uniswap V2 Liquidity Pool" subpage="Locker" page = "Uniswap V2 Locker" />
                <UniswapLP />
                <Footer />
                <ModalMenu />
                <Scrollup />
            </div>
        );
    }
}

export default Uniswapv2;