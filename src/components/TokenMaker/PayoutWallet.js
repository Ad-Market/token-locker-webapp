import React, { Component } from 'react';

class PayoutWallet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            wallet: localStorage.getItem('wallet') || '',
            allocation: localStorage.getItem('allocation') || '',
            wallets: []
        }
        this.handleWallet = this.handleWallet.bind(this);
        this.allocation = this.allocation.bind(this);
    }

    handleWallet(e) {
        this.state.wallets[0] = e.target.value;
        this.setState({ [e.target.name]: e.target.value });
        localStorage.setItem(e.target.name, e.target.value);
    }
    allocation(e) {
        this.state.wallets[1] = e.target.value;
        this.setState({ [e.target.name]: e.target.value });
        localStorage.setItem(e.target.name, e.target.value);
    }

    render() {
        return (
            <div className='col-12 col-md-12'>
                <div className='form-group payoutWallet'>
                    <div className='col-6 col-md-6'>
                        <p className='tokenMaker'>Wallet</p>
                        <p className='tokenMakerDetails'>Wallet address for team payout.</p>
                        <input type='text' className="form-control" name='wallet' value={this.state.wallet} onChange={this.handleWallet} />
                    </div>
                    <div className='col-6 col-md-6'>
                        <p className='tokenMaker'>Allocation (%)</p>
                        <p className='tokenMakerDetails'>Team taxes for this wallet.</p>
                        <input type='text' className="form-control" name='allocation' value={this.state.allocation} onChange={this.allocation} />
                    </div>
                    {/* <div className='removePayrollWalletBtn cancelBtn' onClick={(e) => e.target.parentElement.parentElement.remove()}>Remove</div> */}
                </div> 
            </div>
        );
    }
}

export default PayoutWallet;