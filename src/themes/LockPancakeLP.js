import React, { Component } from 'react';

import Header from '../components/Header/Header';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import NewLockBSC from '../components/NewLock/NewLockBSC';
import ModalMenu from '../components/Modal/ModalMenu';
import Footer from '../components/Footer/Footer';
import Scrollup from '../components/Scrollup/Scrollup';

class LockPancakeLP extends Component {
    render() {
        return (
            <div className="main">
                <Header />
                <Breadcrumb title="Lock New LP Uniswap V2 LP" subpage="Uniswap V2 Locker" page = "Lock New LP" />
                <NewLockBSC />
                <Footer />
                <ModalMenu />
                <Scrollup />
            </div>
        );
    }
}

export default LockPancakeLP;