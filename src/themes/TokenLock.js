import React, { Component } from 'react';

import Header from '../components/Header/Header';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import TokenLockerBody from '../components/TokenLockerBody/TokenLockerBody';
import Footer from '../components/Footer/Footer';
import ModalSearch from '../components/Modal/ModalSearch';
import ModalMenu from '../components/Modal/ModalMenu';
import Scrollup from '../components/Scrollup/Scrollup';

class TokenLock extends Component {
    render() {
        return (
            <div className="main">
                <Header />
                <Breadcrumb title="Token Locker" subpage="Token Locker" />
                <TokenLockerBody />
                <Footer />
                <ModalSearch />
                <ModalMenu />
                <Scrollup />
            </div>
        );
    }
}

export default TokenLock;