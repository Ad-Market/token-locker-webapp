import React, { Component } from 'react';
import Web3 from 'web3';

const minABI = [
    // balanceOf
    {
      "constant":true,
      "inputs":[{"name":"_owner","type":"address"}],
      "name":"balanceOf",
      "outputs":[{"name":"balance","type":"uint256"}],
      "type":"function"
    },
    // decimals
    {
      "constant":true,
      "inputs":[],
      "name":"decimals",
      "outputs":[{"name":"","type":"uint8"}],
      "type":"function"
    }
  ];

const ERC20ApproveABI = [{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"tokens","type":"uint256"}],"name":"approve","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"from","type":"address"},{"name":"to","type":"address"},{"name":"tokens","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"amount","type":"uint256"}],"name":"withdrawEther","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"_totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"tokenOwner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"acceptOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"a","type":"uint256"},{"name":"b","type":"uint256"}],"name":"safeSub","outputs":[{"name":"c","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":false,"inputs":[{"name":"to","type":"address"},{"name":"tokens","type":"uint256"}],"name":"transfer","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"a","type":"uint256"},{"name":"b","type":"uint256"}],"name":"safeDiv","outputs":[{"name":"c","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"tokens","type":"uint256"},{"name":"data","type":"bytes"}],"name":"approveAndCall","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"a","type":"uint256"},{"name":"b","type":"uint256"}],"name":"safeMul","outputs":[{"name":"c","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[],"name":"newOwner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"tokenAddress","type":"address"},{"name":"tokens","type":"uint256"}],"name":"transferAnyERC20Token","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"tokenOwner","type":"address"},{"name":"spender","type":"address"}],"name":"allowance","outputs":[{"name":"remaining","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"a","type":"uint256"},{"name":"b","type":"uint256"}],"name":"safeAdd","outputs":[{"name":"c","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":false,"inputs":[{"name":"_newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"tokens","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"tokenOwner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"tokens","type":"uint256"}],"name":"Approval","type":"event"}];

const LockContractABI = [{"inputs":[{"internalType":"contract IUniFactory","name":"_uniswapFactory","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"lpToken","type":"address"},{"indexed":false,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"lockDate","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"unlockDate","type":"uint256"}],"name":"onDeposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"lpToken","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"onWithdraw","type":"event"},{"inputs":[],"name":"gFees","outputs":[{"internalType":"uint256","name":"ethFee","type":"uint256"},{"internalType":"contract IERCBurn","name":"secondaryFeeToken","type":"address"},{"internalType":"uint256","name":"secondaryTokenFee","type":"uint256"},{"internalType":"uint256","name":"secondaryTokenDiscount","type":"uint256"},{"internalType":"uint256","name":"liquidityFee","type":"uint256"},{"internalType":"uint256","name":"referralPercent","type":"uint256"},{"internalType":"contract IERCBurn","name":"referralToken","type":"address"},{"internalType":"uint256","name":"referralHold","type":"uint256"},{"internalType":"uint256","name":"referralDiscount","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_index","type":"uint256"}],"name":"getLockedTokenAtIndex","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getNumLockedTokens","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_lpToken","type":"address"}],"name":"getNumLocksForToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"},{"internalType":"address","name":"_lpToken","type":"address"},{"internalType":"uint256","name":"_index","type":"uint256"}],"name":"getUserLockForTokenAtIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"},{"internalType":"uint256","name":"_index","type":"uint256"}],"name":"getUserLockedTokenAtIndex","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"getUserNumLockedTokens","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"},{"internalType":"address","name":"_lpToken","type":"address"}],"name":"getUserNumLocksForToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"getUserWhitelistStatus","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_index","type":"uint256"}],"name":"getWhitelistedUserAtIndex","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getWhitelistedUsersLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_lpToken","type":"address"},{"internalType":"uint256","name":"_index","type":"uint256"},{"internalType":"uint256","name":"_lockID","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"incrementLock","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_lpToken","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"uint256","name":"_unlock_date","type":"uint256"},{"internalType":"address payable","name":"_referral","type":"address"},{"internalType":"bool","name":"_fee_in_eth","type":"bool"},{"internalType":"address payable","name":"_withdrawer","type":"address"}],"name":"lockLPToken","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"_lpToken","type":"address"},{"internalType":"uint256","name":"_index","type":"uint256"},{"internalType":"uint256","name":"_lockID","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"migrate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_lpToken","type":"address"},{"internalType":"uint256","name":"_index","type":"uint256"},{"internalType":"uint256","name":"_lockID","type":"uint256"},{"internalType":"uint256","name":"_unlock_date","type":"uint256"}],"name":"relock","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address payable","name":"_devaddr","type":"address"}],"name":"setDev","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_referralPercent","type":"uint256"},{"internalType":"uint256","name":"_referralDiscount","type":"uint256"},{"internalType":"uint256","name":"_ethFee","type":"uint256"},{"internalType":"uint256","name":"_secondaryTokenFee","type":"uint256"},{"internalType":"uint256","name":"_secondaryTokenDiscount","type":"uint256"},{"internalType":"uint256","name":"_liquidityFee","type":"uint256"}],"name":"setFees","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract IMigrator","name":"_migrator","type":"address"}],"name":"setMigrator","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract IERCBurn","name":"_referralToken","type":"address"},{"internalType":"uint256","name":"_hold","type":"uint256"}],"name":"setReferralTokenAndHold","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_secondaryFeeToken","type":"address"}],"name":"setSecondaryFeeToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_lpToken","type":"address"},{"internalType":"uint256","name":"_index","type":"uint256"},{"internalType":"uint256","name":"_lockID","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"splitLock","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"tokenLocks","outputs":[{"internalType":"uint256","name":"lockDate","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"initialAmount","type":"uint256"},{"internalType":"uint256","name":"unlockDate","type":"uint256"},{"internalType":"uint256","name":"lockID","type":"uint256"},{"internalType":"address","name":"owner","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_lpToken","type":"address"},{"internalType":"uint256","name":"_index","type":"uint256"},{"internalType":"uint256","name":"_lockID","type":"uint256"},{"internalType":"address payable","name":"_newOwner","type":"address"}],"name":"transferLockOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"uniswapFactory","outputs":[{"internalType":"contract IUniFactory","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"},{"internalType":"bool","name":"_add","type":"bool"}],"name":"whitelistFeeAccount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_lpToken","type":"address"},{"internalType":"uint256","name":"_index","type":"uint256"},{"internalType":"uint256","name":"_lockID","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]

const lockContractAddress = "0x268f103ebb85f4af59d0f2fdac1bcd9e56815d28";

class NewLockETH extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pairAddress: "",
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
            buttonTitle: 'Approve'
        }
        this.onInputChange = this.onInputChange.bind(this)
        this.onAmountChange = this.onAmountChange.bind(this)
        this.onChangeDate = this.onChangeDate.bind(this)
        this.getBalance25 = this.getBalance25.bind(this)
        this.getBalance50 = this.getBalance50.bind(this)
        this.getBalance75 = this.getBalance75.bind(this)
        this.getBalance100 = this.getBalance100.bind(this)
        this.approveLPToken = this.approveLPToken.bind(this)
        this.lockLPpair = this.lockLPpair.bind(this)
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
                if(chainId == '0x1'){
                    this.setState({
                        chain: 'Ethereum',
                        chainImage: '/img/Ethereum_Classic-Logo.wine.png'
                    });
                }
                console.log(accounts[0], balance, chainId)
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
        const web3_LP = new Web3("https://ropsten.infura.io/v3/88b3ca144c6648df843909df0371ee08");
        // ropsten contract address - https://ropsten.etherscan.io/address/0x63cc36ce7074ee0dc37943a65288614e64e26b69#readContract
        // const web3_LP = new Web3("https://mainnet.infura.io/v3/8a1115e747524e11b2928a22a19a6388")

        const contract = new web3_LP.eth.Contract(minABI, this.state.pairAddress)
        console.log("contract-", contract);
        const result =  await contract.methods.balanceOf(this.state.walletAddress).call()
        const pairBalance = web3_LP.utils.fromWei(result)
        this.setState({
            pairBalance: pairBalance,
        })
        console.log("state pair Balance", this.state.pairBalance)
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
        console.log(this.state.pairBalance);
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

    // approve liqudity Pool pair to contract 
    async approveLPToken() {
        if (this.state.buttonTitle != "Lock"){
            console.log('approve clicked!', Math.floor(this.state.inputPairBalance))
            const web3 = new Web3(window.ethereum);
            const token_contract = new web3.eth.Contract(ERC20ApproveABI, this.state.pairAddress);
            await token_contract.methods.approve(lockContractAddress, Math.floor(this.state.inputPairBalance)).send({from: this.state.walletAddress}).then(function(result){
                console.log('approve result!', result)
            })
            this.lockLPpair()
        } else {
            const web3 = new Web3(window.ethereum);
            const lockContract = new web3.eth.Contract(LockContractABI, lockContractAddress);
            lockContract.methods.lockLPToken(this.state.pairAddress, Math.floor(this.state.inputPairBalance), Date.parse(this.state.withdrawDate)/1000, "0x0000000000000000000000000000000000000000", true, this.state.walletAddress).send({from: this.state.walletAddress, gas: 3000000, value: 150000000000000000}).then(function(result){
                console.log("lock result", result)
            })
        }
    }

    lockLPpair() {
        console.log("function is called!")
        this.setState({
            buttonTitle: "Lock"
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
                                    <span>Lock New LP</span>
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
                                    <div className="col-12 col-md-12">
                                        <div className="form-group">
                                            <label className="form-check-label" htmlFor="WidthrawDate">Widthraw Date</label>
                                            <input type="date" className="form-control" name="WidthrawDate" placeholder="Widthraw Date" value={this.state.withdrawDate} onChange={this.onChangeDate} required="required" />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <button className="btn w-100 mt-3 mt-sm-4" onClick={(e)=>{
                                            console.log(e.target);
                                            
                                            e.preventDefault();
                                            this.approveLPToken()
                                        }}>{this.state.buttonTitle}</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default NewLockETH;