import React, { Component } from 'react';

import Header from '../components/Header/Header';
import PBreadcrumb from '../components/PBreadcrumb/PBreadcrumb';
import PancakeLP from '../components/PancakeLP/PancakeLP';
import ModalMenu from '../components/Modal/ModalMenu';
import Footer from '../components/Footer/Footer';
import Scrollup from '../components/Scrollup/Scrollup';

class Pancakev2 extends Component {
    render() {
        return (
            <div className="main">
                <Header />
                <PBreadcrumb title="Pancake V2 Liquidity Pool" subpage="Locker" page = "Pancake V2 Locker" />
                <PancakeLP />
                <Footer />
                <ModalMenu />
                <Scrollup />
            </div>
        );
    }
}

export default Pancakev2;