import React, { Component } from 'react';

// const options = [
//     {
//         label: '@blue_ftp',
//         value: '@blue_ftp'
//     },
//     {
//         label: '@richarddwi',
//         value: '@richarddwi'
//     },
//     {
//         label: '@BENJI_BENJI_BENJI',
//         value: '@BENJI_BENJI_BENJI'
//     }
// ];

class TokenMakerInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // ftp: localStorage.getItem('ftp') || '@blue_ftp',
            tokenName: localStorage.getItem('tokenName') || '',
            desc: localStorage.getItem('desc') || '',
            tokenSymbol:  localStorage.getItem('tokenSymbol') || ''
        }
        this.handleChange = this.handleChange.bind(this);

    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value }); 
        localStorage.setItem(e.target.name, e.target.value);
    }

    render () {
        return (
            <div className='row'>
                {/* <div className="col-12 col-md-12">
                    <div className="form-group">
                        <label className="form-check-label tokenMaker" htmlFor="FTP Representative">FTP Representative (required)</label>
                        <p className='tokenMakerDetails'>Your representative will assist you throughout the launch process.</p>
                        <select onChange={this.handleChange} name='ftp' value={this.state.ftp}>
                            {options.map((option) => (
                                <option key={option.value} value={option.value} style={{color: '#fbfafe'}}>{option.label}</option>
                            ))}
                        </select>
                    </div>
                </div> */}
                <div className="col-12 col-md-12">
                    <div className="form-group">
                        <label className="form-check-label tokenMaker" htmlFor="tokenName">Token Name (required)</label>
                        <p className='tokenMakerDetails'>Display name for your token.</p>
                        <input type="text" className="form-control" name="tokenName" placeholder="Token Name" value={this.state.tokenName} onChange={this.handleChange} required="required" />
                    </div>
                </div>
                <div className="col-12 col-md-12">
                    <div className="form-group">
                        <label className="form-check-label tokenMaker" htmlFor="Description">Description</label>
                        <p className='tokenMakerDetails'>Tell everyone about your mission. Why is this token worth investing in?</p>
                        <textarea className="form-control" name="desc" placeholder="Description..." col="50" value={this.state.desc} onChange={this.handleChange} />
                    </div>
                </div>
                <div className="col-12 col-md-12">
                    <div className="form-group">
                        <label className="form-check-label tokenMaker" htmlFor="Token Symbol">Token Symbol (required)</label>
                        <p className='tokenMakerDetails'>A shortname commonly used in charts and pair data. (Eg. ETH)</p>
                        <input type="text" className="form-control" name="tokenSymbol" placeholder="Token Symbol" value={this.state.tokenSymbol} onChange={this.handleChange} required="required" />
                    </div>
                </div>
            </div>
        )
    }
} 

export default TokenMakerInfo;
