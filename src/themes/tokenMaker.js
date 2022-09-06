import React, { Component } from 'react';

import Header from '../components/Header/Header';
import TokenMakerBreadcrumb from '../components/Breadcrumb/TokenMakerBreadcrumb';
import TokenMakerM from '../components/TokenMaker/TokenMakerM';
import Footer from '../components/Footer/Footer';
import ModalSearch from '../components/Modal/ModalSearch';
import ModalMenu from '../components/Modal/ModalMenu';
import Scrollup from '../components/Scrollup/Scrollup';

class tokenMaker extends Component {

    render() {
        return (
            <div className="main">
                <Header />
                <TokenMakerBreadcrumb title="Token Maker" subpage="Token Maker" />
                <TokenMakerM />
                <Footer />
                <ModalSearch />
                <ModalMenu />
                <Scrollup />
            </div>
        );
    }
}

export default tokenMaker;