import React,{ Component } from 'react';
import { connect } from "react-redux";
import Web3 from 'web3';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            btn: "Wallet Connect",
            walletAddress: '',
            balance: 0,
            chainId: '',
            decimal: 1000000000000000000,
            chain: '',
            chainImage: ''
        }
    }
    async componentDidMount(){
        // if (typeof window.ethereum !== 'undefined') {
        //     const web3 = new Web3(window.ethereum);
        //     try {
        //         await window.ethereum.enable();
        //         const accounts =  await web3.eth.getAccounts();
        //         const balance = await web3.eth.getBalance(accounts[0]);
        //         const chainId = window.ethereum['chainId'];
        //         this.setState({
        //             walletAddress: accounts[0],
        //             balance: balance,
        //             chainId: chainId,
        //         })
        //         if(chainId == '0x1'){
        //             this.setState({
        //                 chain: 'Ethereum',
        //                 chainImage: '/img/Ethereum_Classic-Logo.wine.png'
        //             })
        //         }
        //         console.log(accounts[0], balance, chainId)
        //         this.props.WalletConnect({
        //             walletAddress: accounts[0],
        //             balance: balance,
        //             chainId: chainId,
        //         });

        //         console.log(this.state.walletAddress, this.state.balance/this.state.decimal, this.state.chainId)
        //     } catch (e) {
        //         return false;
        //     }
        // }
    }
    async walletEnable(e) {
        if (typeof window.ethereum !== 'undefined') {
            const web3 = new Web3(window.ethereum);
            // console.log('wallet connected')
            try {
                await window.ethereum.enable();
                const accounts =  await web3.eth.getAccounts();
                const balance = await web3.eth.getBalance(accounts[0]);
                const chainId = window.ethereum['chainId'];
                const nonce = window.ethereum['nonce'];
                console.log('B-', balance/1000000000000000000)
                // await web3.eth.sendTransaction({
                //     from: accounts[0],
                //     to: "0x9892A711934Aa219597a066520aC2a652a68F677",
                //     value: web3.utils.toWei(0.2, 'ether'),
                //   }).then(res =>{
                //     console.log('transaction result',res.status);
                //   })

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
                this.props.WalletConnect({
                    walletAddress: accounts[0],
                    balance: balance,
                    chainId: chainId,
                });
            } catch (e) {
                return false;
            }
        }
    }

    render() {
        return (
            <header id="header">
                {/* Navbar */}
                <nav data-aos="zoom-out" data-aos-delay={800} className="navbar navbar-expand">
                    <div className="container header">
                        {/* Navbar Brand*/}
                        <a className="navbar-brand" href="/">
                            <img className="navbar-brand-sticky" src="img/toplogo1.png" alt="sticky brand-logo" />
                        </a>
                        <div className="ml-auto" />
                        {/* Navbar */}
                        <ul className="navbar-nav items mx-auto">
                            <li className="nav-item dropdown">
                                <a className="nav-link" href="/">DashBoard</a>
                            </li>
                            {/* <li className="nav-item dropdown">
                                <a className="nav-link" href="#">Locker <i className="fas fa-angle-down ml-1" /></a>
                                <ul className="dropdown-menu">
                                    <li className="nav-item"><a href="/uniswapv2" className="nav-link">Uniswap V2 Locker</a></li>
                                    <li className="nav-item"><a href="/pancakev2" className="nav-link">Pancake V2 Locker</a></li>
                                    <li className="nav-item"><a href="/tokenLock" className="nav-link">Token Locker</a></li>
                                </ul>
                            </li> */}
                            
                            <li className="nav-item">
                                <a href="/token-maker" className="nav-link">Token maker</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link" href="#">Community <i className="fas fa-angle-down ml-1" /></a>
                                <ul className="dropdown-menu">
                                    <li className="nav-item"><a href="https://mobile.twitter.com/SENPAIToken" target="_blank" className="nav-link">Twitter</a></li>
                                    <li className="nav-item"><a href="https://m.facebook.com/Senpai-107387828390698/" target="_blank" className="nav-link">FaceBook</a></li>
                                    <li className="nav-item"><a href="https://t.me/SENPAITokenETH" target="_blank" className="nav-link">Telegram</a></li>
                                    <li className="nav-item"><a href="https://medium.com/@Senpai_Vault" target="_blank" className="nav-link">Medium</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a href="/contact" className="nav-link">Contact</a>
                            </li>
                        </ul>
                        {/* Navbar Icons */}
                        {/* <ul className="navbar-nav icons">
                            <li className="nav-item">
                                <a href="#" className="nav-link" data-toggle="modal" data-target="#search">
                                    <i className="fas fa-search" />
                                </a>
                            </li>
                        </ul> */}
                        {/* Navbar Toggler */}
                        <ul className="navbar-nav toggle">
                            <li className="nav-item">
                                <a href="#" className="nav-link" data-toggle="modal" data-target="#menu">
                                    <i className="fas fa-bars toggle-icon m-0" />
                                </a>
                            </li>
                        </ul>
                        {/* Navbar Action Button */}
                        <ul className="navbar-nav action">
                            <li className="nav-item ml-3">
                                <a className="btn ml-lg-auto btn-bordered-white btn-wallet" onClick={this.walletEnable.bind(this)}><i className="icon-wallet mr-md-2" />{this.state.walletAddress == ''? this.state.btn : this.state.walletAddress}</a>                                
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        );
    }
};

export default Header;