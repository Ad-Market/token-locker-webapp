import React, { Component } from 'react';

class TokenMakerServices extends Component {
    constructor(props) {
        super(props);
        this.state = {
            antiBot: JSON.parse(localStorage.getItem('antiBot')) || false,
            ethReflect: JSON.parse(localStorage.getItem('ethReflect')) || false,
            reflectionRate: localStorage.getItem('reflectionRate') || 0,
            liquidityAdd: JSON.parse(localStorage.getItem('liquidityAdd')) || false,
            liquidityAddTaxRate: localStorage.getItem('liquidityAddTaxRate') || 0
        }
        this.onChangeCheck = this.onChangeCheck.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onChangeCheck(e) {
        this.setState({ [e.target.name]: e.target.checked });
        localStorage.setItem(e.target.name, e.target.checked);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
        localStorage.setItem(e.target.name, e.target.value);
    }
    
    render () {
        return (
            <div className='row'>
                <div className="col-12 col-md-12">
                    <div className="form-group">
                        <label className="form-check-label tokenMaker">Anti Snipper Bot</label>
                        <p className='tokenMakerDetails'>This service wards off harmful bots from purchasing or selling tokens. Use this to protect yourself from pump n' dump bots, sniper bots, and other long-term malicious actors.</p>
                        <span>Click Checkbox to Enable</span><input type="checkbox" className="form-control" name="antiBot" checked={this.state.antiBot} onChange={this.onChangeCheck} />
                    </div>
                </div>
                <div className="col-12 col-md-12">
                    <div className="form-group">
                        <label className="form-check-label tokenMaker"> Eth Reflect (+0 gas)</label>
                        <p className='tokenMakerDetails'>This service rewards your holders with a percentage of transaction fees by allowing them to withdraw Ethereum from the  Dashboard</p>
                        <span>Click Checkbox to Enable</span><input type="checkbox" className="form-control" name="ethReflect" checked={this.state.ethReflect} onChange={this.onChangeCheck} />
                    </div>
                </div>
                <div className="col-12 col-md-12">
                    <div className="form-group">
                        <label className="form-check-label tokenMaker" htmlFor="Reflection Rate">Reflection Rate (%)</label>
                        <p className='tokenMakerDetails'>Percentage of ALL volume to go to Ethereum reflections for your traders. When tokens are purchased or sold, the taxable % will be set aside for reflections. When a sell occurs, the tokens are converted to ETH and set aside for your traders to withdraw.</p>
                        <input type="number" className="form-control" name="reflectionRate" value={this.state.reflectionRate} onChange={this.onChange} />
                    </div>
                </div>
                <div className="col-12 col-md-12">
                    <div className="form-group">
                        <label className="form-check-label tokenMaker"> Liquidity Add (+0 gas)</label>
                        <p className='tokenMakerDetails'>This service automatically adds WETH to your pair, gradually increasing Liquidity. The WETH added is protected by the lock.</p>
                        <span>Click Checkbox to Enable</span><input type="checkbox" className="form-control" name="liquidityAdd" checked={this.state.liquidityAdd}  onChange={this.onChangeCheck} />
                    </div>
                </div>
                <div className="col-12 col-md-12">
                    <div className="form-group">
                        <label className="form-check-label tokenMaker" htmlFor="LiquidityAdd Tax Rate">LiquidityAdd Tax Rate (%)</label>
                        <p className='tokenMakerDetails'>Percentage of ALL volume to go to Liquidity in the form of WETH.</p>
                        <input type="number" className="form-control" name="liquidityAddTaxRate" value={this.state.liquidityAddTaxRate} onChange={this.onChange} />
                    </div>
                </div>
            </div>
        )
    }
} 

export default TokenMakerServices;