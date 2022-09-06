import React, { Component } from 'react';
import Web3 from 'web3';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const ERC20ApproveABI = [{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"tokens","type":"uint256"}],"name":"approve","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"from","type":"address"},{"name":"to","type":"address"},{"name":"tokens","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"amount","type":"uint256"}],"name":"withdrawEther","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"_totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"tokenOwner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"acceptOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"a","type":"uint256"},{"name":"b","type":"uint256"}],"name":"safeSub","outputs":[{"name":"c","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":false,"inputs":[{"name":"to","type":"address"},{"name":"tokens","type":"uint256"}],"name":"transfer","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"a","type":"uint256"},{"name":"b","type":"uint256"}],"name":"safeDiv","outputs":[{"name":"c","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"tokens","type":"uint256"},{"name":"data","type":"bytes"}],"name":"approveAndCall","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"a","type":"uint256"},{"name":"b","type":"uint256"}],"name":"safeMul","outputs":[{"name":"c","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[],"name":"newOwner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"tokenAddress","type":"address"},{"name":"tokens","type":"uint256"}],"name":"transferAnyERC20Token","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"tokenOwner","type":"address"},{"name":"spender","type":"address"}],"name":"allowance","outputs":[{"name":"remaining","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"a","type":"uint256"},{"name":"b","type":"uint256"}],"name":"safeAdd","outputs":[{"name":"c","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":false,"inputs":[{"name":"_newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"tokens","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"tokenOwner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"tokens","type":"uint256"}],"name":"Approval","type":"event"}];

const LockContractABI = [{"inputs":[{"internalType":"contract IUniFactory","name":"_uniswapFactory","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"lpToken","type":"address"},{"indexed":false,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"lockDate","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"unlockDate","type":"uint256"}],"name":"onDeposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"lpToken","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"onWithdraw","type":"event"},{"inputs":[],"name":"gFees","outputs":[{"internalType":"uint256","name":"ethFee","type":"uint256"},{"internalType":"contract IERCBurn","name":"secondaryFeeToken","type":"address"},{"internalType":"uint256","name":"secondaryTokenFee","type":"uint256"},{"internalType":"uint256","name":"secondaryTokenDiscount","type":"uint256"},{"internalType":"uint256","name":"liquidityFee","type":"uint256"},{"internalType":"uint256","name":"referralPercent","type":"uint256"},{"internalType":"contract IERCBurn","name":"referralToken","type":"address"},{"internalType":"uint256","name":"referralHold","type":"uint256"},{"internalType":"uint256","name":"referralDiscount","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_index","type":"uint256"}],"name":"getLockedTokenAtIndex","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getNumLockedTokens","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_lpToken","type":"address"}],"name":"getNumLocksForToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"},{"internalType":"address","name":"_lpToken","type":"address"},{"internalType":"uint256","name":"_index","type":"uint256"}],"name":"getUserLockForTokenAtIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"},{"internalType":"uint256","name":"_index","type":"uint256"}],"name":"getUserLockedTokenAtIndex","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"getUserNumLockedTokens","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"},{"internalType":"address","name":"_lpToken","type":"address"}],"name":"getUserNumLocksForToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"getUserWhitelistStatus","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_index","type":"uint256"}],"name":"getWhitelistedUserAtIndex","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getWhitelistedUsersLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_lpToken","type":"address"},{"internalType":"uint256","name":"_index","type":"uint256"},{"internalType":"uint256","name":"_lockID","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"incrementLock","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_lpToken","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"uint256","name":"_unlock_date","type":"uint256"},{"internalType":"address payable","name":"_referral","type":"address"},{"internalType":"bool","name":"_fee_in_eth","type":"bool"},{"internalType":"address payable","name":"_withdrawer","type":"address"}],"name":"lockLPToken","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"_lpToken","type":"address"},{"internalType":"uint256","name":"_index","type":"uint256"},{"internalType":"uint256","name":"_lockID","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"migrate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_lpToken","type":"address"},{"internalType":"uint256","name":"_index","type":"uint256"},{"internalType":"uint256","name":"_lockID","type":"uint256"},{"internalType":"uint256","name":"_unlock_date","type":"uint256"}],"name":"relock","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address payable","name":"_devaddr","type":"address"}],"name":"setDev","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_referralPercent","type":"uint256"},{"internalType":"uint256","name":"_referralDiscount","type":"uint256"},{"internalType":"uint256","name":"_ethFee","type":"uint256"},{"internalType":"uint256","name":"_secondaryTokenFee","type":"uint256"},{"internalType":"uint256","name":"_secondaryTokenDiscount","type":"uint256"},{"internalType":"uint256","name":"_liquidityFee","type":"uint256"}],"name":"setFees","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract IMigrator","name":"_migrator","type":"address"}],"name":"setMigrator","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract IERCBurn","name":"_referralToken","type":"address"},{"internalType":"uint256","name":"_hold","type":"uint256"}],"name":"setReferralTokenAndHold","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_secondaryFeeToken","type":"address"}],"name":"setSecondaryFeeToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_lpToken","type":"address"},{"internalType":"uint256","name":"_index","type":"uint256"},{"internalType":"uint256","name":"_lockID","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"splitLock","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"tokenLocks","outputs":[{"internalType":"uint256","name":"lockDate","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"initialAmount","type":"uint256"},{"internalType":"uint256","name":"unlockDate","type":"uint256"},{"internalType":"uint256","name":"lockID","type":"uint256"},{"internalType":"address","name":"owner","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_lpToken","type":"address"},{"internalType":"uint256","name":"_index","type":"uint256"},{"internalType":"uint256","name":"_lockID","type":"uint256"},{"internalType":"address payable","name":"_newOwner","type":"address"}],"name":"transferLockOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"uniswapFactory","outputs":[{"internalType":"contract IUniFactory","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"},{"internalType":"bool","name":"_add","type":"bool"}],"name":"whitelistFeeAccount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_lpToken","type":"address"},{"internalType":"uint256","name":"_index","type":"uint256"},{"internalType":"uint256","name":"_lockID","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]

const lockContractAddress = "0x11089CA2ef4723D1a3Ec4170e377C76F916fF412";

class WithdrawP extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pairAddress: "",
            pairAmount: 0,
            lockAmount: 0.0,
            withdrawDate: '',
            walletAddress: '',
            balance: 0,
            chainId: '',
            decimal: 1000000000000000000,
            chain: '',
            chainImage: '',
            pairBalance: 0,
            inputPairBalance: 0,
            buttonTitle: 'Approve',
            show: false
        }
        this.onInputChange = this.onInputChange.bind(this)
        this.onAmountChange = this.onAmountChange.bind(this)
        this.getBalance25 = this.getBalance25.bind(this)
        this.getBalance50 = this.getBalance50.bind(this)
        this.getBalance75 = this.getBalance75.bind(this)
        this.getBalance100 = this.getBalance100.bind(this)
        this.withdraw = this.withdraw.bind(this)
        this.handleClose = this.handleClose.bind(this)
        this.handleShow = this.handleShow.bind(this)
    }

    async componentDidMount(){
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

    async onInputChange(event) {
        await this.setState({ pairAddress: event.target.value });
        // const web3_LP = new Web3("https://data-seed-prebsc-1-s1.binance.org:8545/");
        const web3_LP = new Web3("https://ropsten.infura.io/v3/8a1115e747524e11b2928a22a19a6388");
        // ropsten contract address - https://ropsten.etherscan.io/address/0x63cc36ce7074ee0dc37943a65288614e64e26b69#readContract
        // const web3_LP = new Web3("https://mainnet.infura.io/v3/8a1115e747524e11b2928a22a19a6388")
        
        if(this.state.pairAddress.substr(0,2) === "0x" && this.state.pairAddress.length == 42){
            console.log('success!')
            const contract = new web3_LP.eth.Contract(LockContractABI, lockContractAddress)
            const userNumber =  await contract.methods.getUserNumLocksForToken(this.state.walletAddress, this.state.pairAddress).call()
            const lockResult = await contract.methods.getUserLockForTokenAtIndex(this.state.walletAddress, this.state.pairAddress, 0).call()
            console.log("lock result", lockResult)
            console.log('timestamp', Math.floor(Date.now()/1000))
            this.setState({
                pairBalance: lockResult[2]
            })
        }
    }

    async onAmountChange(event) {
        await this.setState({ inputPairBalance: event.target.value });
    }

    // change input date 
    async onChangeDate(event) {
        await this.setState({
            withdrawDate: event.target.value,
        })
        console.log(Date.parse(this.state.withdrawDate)/1000)
    }

    // Get 25% of Balance
    getBalance25(){
        this.setState({ 
            inputPairBalance: this.state.pairBalance/4
        })
    }
    
    // Get 50% of Balance
    getBalance50() {
        this.setState({ 
            inputPairBalance: this.state.pairBalance/2
        })
    }

    // Get 75% of Balance
    getBalance75() {
        this.setState({ 
            inputPairBalance: this.state.pairBalance*3/4
        })
    }

    // Get 100% of Balance
    getBalance100() {
        this.setState({ 
            inputPairBalance: this.state.pairBalance
        })
    }

    async withdraw() {
        const web3 = new Web3(window.ethereum);
        const contract = new web3.eth.Contract(LockContractABI, lockContractAddress);
        const lockResult = await contract.methods.getUserLockForTokenAtIndex(this.state.walletAddress, this.state.pairAddress, 0).call()
        console.log('lock result', lockResult)
        await contract.methods.withdraw(this.state.pairAddress, 0, lockResult[4], lockResult[2]).send({from: this.state.walletAddress}).then(function(result){
            console.log(result)
            this.handleShow()
        })
    }

    handleClose() {
        this.setState({
            show: false
        })
    }

    handleShow() {
        this.setState({
            show: true
        })
    }

    render() {
        return (
            <section className="author-area">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-12 col-md-7">
                            {/* Intro */}
                            <div className="intro mt-5 mt-lg-0 mb-4 mb-lg-5">
                                <div className="intro-content">
                                    <span>Withdraw LP</span>
                                    <h3 className="mt-3 mb-0">Input Pair Info</h3>
                                </div>
                            </div>
                            {/* Item Form */}
                            <form className="item-form card no-hover">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="form-group mt-3">
                                            <input type="text" className="form-control" name="LPAddress" value={this.state.pairAddress} onChange={this.onInputChange} placeholder="PAIR ADDRESS" required="required" />
                                            <label className="form-check-label" htmlFor="LPAddress">ex: 0x....</label>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-12">
                                        <div className="form-group">
                                            <label className="form-check-label availableBalance" htmlFor="Amount">Your Balance: {this.state.pairBalance}</label>
                                            <input type="number" className="form-control" name="Amount" placeholder="Amount" onChange={this.onAmountChange} value = {this.state.inputPairBalance} required="required" />
                                            <div className="btn-group" role="group" aria-label="Basic example">
                                                <button type="button" className="btn btn-secondary" onClick={this.getBalance25}>25%</button>
                                                <button type="button" className="btn btn-secondary" onClick={this.getBalance50}>50%</button>
                                                <button type="button" className="btn btn-secondary" onClick={this.getBalance75}>75%</button>
                                                <button type="button" className="btn btn-secondary" onClick={this.getBalance100}>100%</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <button className="btn w-100 mt-3 mt-sm-4"  onClick={(e)=>{
                                            console.log(e.target);
                                            
                                            e.preventDefault();
                                            this.withdraw()
                                        }} >Withdraw</button>
                                    </div>

                                    <Modal
                                        show={this.state.show}
                                        onHide={this.handleClose}
                                        backdrop="static"
                                        keyboard={false}
                                    >
                                        <Modal.Header closeButton>
                                        <Modal.Title>Modal title</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                        I will not close if you click outside me. Don't even try to press
                                        escape key.
                                        </Modal.Body>
                                        <Modal.Footer>
                                        <Button variant="secondary" onClick={this.handleClose}>
                                            Close
                                        </Button>
                                        <Button variant="primary">Understood</Button>
                                        </Modal.Footer>
                                    </Modal>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default WithdrawP;