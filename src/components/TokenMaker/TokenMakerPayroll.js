import React, { Component } from 'react';
import PayoutWallet from './PayoutWallet';

class TokenMakerPayroll extends Component {
    constructor(props) {
        super(props);
        this.state = {
            taxRate: localStorage.getItem('taxRate') || 0,
            payout: []
        }
        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
        localStorage.setItem(e.target.name, e.target.value);
    }

    render() {
        return (
            <div className='row'>
                <div className="col-12 col-md-12">
                    <div className="form-group">
                        <label className="form-check-label tokenMaker" htmlFor="Tax Rate">Tax Rate (%) (+0 gas)</label>
                        <p className='tokenMakerDetails'>Percentage of ALL volume to go to your team. When tokens are purchased or sold, the taxable % will be set aside for your team fees. When a sell occurs, the taxed tokens are converted to ETH and sent to your team wallets.</p>
                        <input type="number" className="form-control" name="taxRate" value={this.state.taxRate} onChange={this.onChange}/>
                    </div>
                </div>
                {/* <div className='col-12 col-md-12'>
                    <div className='form-group'>
                        <button className='btn w-100 mt-3 mt-sm-4' onClick={() => 
                            this.props.handleAddPayout([...this.props.payoutWallets, <PayoutWallet />])
                        }>Add Payout Wallet</button>
                    </div>
                </div> */}
                <PayoutWallet />
                {/* { this.props.payoutWallets }
                {this.state.payout.map((payout, idx) => {
                    <PayoutWallet key={idx} wallet={payout[0]} allocation={payout[1]} />
                })} */}
            </div>
        )
    }
}

export default TokenMakerPayroll;