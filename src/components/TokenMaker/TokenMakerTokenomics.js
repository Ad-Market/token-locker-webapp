import React, { Component } from 'react';

class TokenMakerTokenomics extends Component {
    constructor(props) {
        super(props);
        this.state = {
            supply: localStorage.getItem('supply') || 100000000000000,
            walletCap: localStorage.getItem('walletCap') || 4.00,
            WCP: localStorage.getItem('WCP') || 1,
            TL: localStorage.getItem('TL') || 0.25,
            TLP: localStorage.getItem('TLP') || 120,
            LLP: localStorage.getItem('LLP') || 90
        }
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount = async() => {
        localStorage.setItem('supply', 100000000000000);
        localStorage.setItem('walletCap', 4.00);
        localStorage.setItem('WCP', 1);
        localStorage.setItem('TL', 0.25);
        localStorage.setItem('TLP', 120);
        localStorage.setItem('LLP', 90);
    }

    handleChange(e) {
        this.setState({[e.target.name]: e.target.value});
        localStorage.setItem(e.target.name, e.target.value);
    }

    render () {
        return (
            <div className='row'>
                <div className="col-12 col-md-12">
                    <div className="form-group">
                        <label className="form-check-label tokenMaker" htmlFor="Supply">Supply (required)</label>
                        <p className='tokenMakerDetails'>How many tokens will be available to buy and sell?</p>
                        <input type="number" className="form-control" name="supply" value={this.state.supply} onChange={this.handleChange} />
                    </div>
                </div>
                <div className="col-12 col-md-12">
                    <div className="form-group">
                        <label className="form-check-label tokenMaker" htmlFor="walletCap">Wallet Cap (%) (required)</label>
                        <p className='tokenMakerDetails'>Soft wallet cap as a percentage of total supply. How much supply can a single wallet own? After the soft wallet cap is exceeded, the wallet cannot purchase more.</p>
                        <input type="number" className="form-control" name="walletCap" step='0.01' value={this.state.walletCap} onChange={this.handleChange} />
                    </div>
                </div>
                <div className="col-12 col-md-12">
                    <div className="form-group">
                        <label className="form-check-label tokenMaker" htmlFor="WCP">Wallet Cap Period (hours) (required)</label>
                        <p className='tokenMakerDetails'>Hours before the soft wallet cap is lifted.</p>
                        <input type="number" className="form-control" name="WCP" value={this.state.WCP} onChange={this.handleChange} />
                    </div>
                </div>
                <div className="col-12 col-md-12">
                    <div className="form-group">
                        <label className="form-check-label tokenMaker" htmlFor="TL">Transaction Limit (%) (required)</label>
                        <p className='tokenMakerDetails'>Max transaction as a percentage of total supply. How much supply can be purchased in a single transaction?</p>
                        <input type="number" className="form-control" name="TL" step='0.01' value={this.state.TL} onChange={this.handleChange} />
                    </div>
                </div>
                <div className="col-12 col-md-12">
                    <div className="form-group">
                        <label className="form-check-label tokenMaker" htmlFor="TLP">Transaction Limit Period (minutes) (required)</label>
                        <p className='tokenMakerDetails'>Minutes before transaction limit is lifted.</p>
                        <input type="number" className="form-control" name="TLP" value={this.state.TLP} onChange={this.handleChange} />
                    </div>
                </div>
                <div className="col-12 col-md-12">
                    <div className="form-group">
                        <label className="form-check-label tokenMaker" htmlFor="LLP">Liquidity Lock Period (days) (required)</label>
                        <p className='tokenMakerDetails'>Days before liquidity is unlocked.</p>
                        <input type="number" className="form-control" name="LLP" value={this.state.LLP} onChange={this.handleChange} />
                    </div>
                </div>
            </div>
        )
    }
} 

export default TokenMakerTokenomics;