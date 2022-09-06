import React, { Component } from 'react';
import Web3 from 'web3';
import { connect } from "react-redux";
import { WalletConnect } from '../../store/actions/wallet.action';

class Activity extends Component {
    constructor(props) {
        super(props);
        this.state = {
            walletAddress: '',
            balance: 0,
            chainId: '',
            decimal: 1000000000000000000,
            chain: '',
            chainImage: ''
        }
    }
    componentDidMount(){
        console.log('this is componentDidMount')
    }

    async walletEnable(e) {
        if (typeof window.ethereum !== 'undefined') {
            const web3 = new Web3(window.ethereum);
            try {
                await window.ethereum.enable();
                const accounts =  await web3.eth.getAccounts();
                const balance = await web3.eth.getBalance(accounts[0]);
                const chainId = window.ethereum['chainId'];
                this.setState({
                    walletAddress: accounts[0],
                    balance: balance,
                    chainId: chainId,
                })
                if(chainId == '0x1'){
                    this.setState({
                        chain: 'Ethereum',
                        chainImage: '/img/Ethereum_Classic-Logo.wine.png'
                    })
                }
                console.log(accounts[0])
                this.props.WalletConnect({
                    walletAddress: accounts[0],
                    balance: balance,
                    chainId: chainId,
                });

                console.log(this.state.walletAddress, this.state.balance/this.state.decimal, this.state.chainId)
            } catch (e) {
                return false;
            }
        }
    }

    addWallet(e) {
        console.log('add other Wallet');
    }
    
    render() {
        return (
            <section className="wallet-connect-area">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-8 col-lg-7">
                            {/* Intro */}
                            <div className="intro text-center">
                                <span>Wallet Connect</span>
                                <h3 className="mt-3 mb-0">Connect your Wallet</h3>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center items">
                        <div className="col-12 col-md-6 col-lg-4 item">
                            {/* Single Wallet */}
                            <div className="card single-wallet">
                                <a className="d-block text-center" type = 'button' onClick={this.walletEnable.bind(this)}>
                                    <img className="avatar-lg" src="/img/metamask.jpg" alt="" />
                                    <h4 className="mb-0">MetaMask</h4>
                                    <p>A browser extension with great flexibility. The web's most popular wallet</p>
                                </a>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4 item">
                            {/* Single Wallet */}
                            <div className="card single-wallet">
                                <a className="d-block text-center" type= 'button' onClick={this.addWallet.bind(this)}>
                                    <img className="avatar-lg" src="/img/otherWallet.png" alt="" />
                                    <h4 className="mb-0">Add Other Wallet</h4>
                                    <p>A browser extension with great flexibility. The web's most popular wallet</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

const mapToDispatchProps = (dispatch) => ({
    WalletConnect: dispatch((event) => WalletConnect(event))
})

export default connect(null, mapToDispatchProps)(Activity);