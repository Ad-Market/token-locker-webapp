import React, { Component } from 'react';

class TokenMakerSocial extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tgName: localStorage.getItem('tgName') || '',
            tgCom: localStorage.getItem('tgCom') || '',
            twitter: localStorage.getItem('twitter') || '',
            site: localStorage.getItem('site') || '',
            link: localStorage.getItem('link') || ''
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
                <div className="col-12 col-md-12">
                    <div className="form-group">
                        <label className="form-check-label tokenMaker" htmlFor="tgName">Telegram Username (required)</label>
                        <p className='tokenMakerDetails'>Provide your username so an FTP representative can contact you for assistance.</p>
                        <input type="text" className="form-control" name="tgName" placeholder="Telegram Username" value={this.state.tgName} onChange={this.handleChange} required="required" />
                    </div>
                </div>
                <div className="col-12 col-md-12">
                    <div className="form-group">
                        <label className="form-check-label tokenMaker" htmlFor="tgCom">Community Telegram</label>
                        <p className='tokenMakerDetails'>Adding a community telegram will drive followers to your token.</p>
                        <input type="text" className="form-control" name="tgCom" placeholder="Community Telegram" value={this.state.tgCom} onChange={this.handleChange} />
                    </div>
                </div>
                <div className="col-12 col-md-12">
                    <div className="form-group">
                        <label className="form-check-label tokenMaker" htmlFor="twitter">Twitter</label>
                        <p className='tokenMakerDetails'>Having a twitter page is a good way to keep your community updated.</p>
                        <input type="text" className="form-control" name="twitter" placeholder="Twitter" value={this.state.twitter} onChange={this.handleChange} />
                    </div>
                </div>
                <div className="col-12 col-md-12">
                    <div className="form-group">
                        <label className="form-check-label tokenMaker" htmlFor="stie">Website</label>
                        <p className='tokenMakerDetails'>A website is useful for a general reference of all of your project's materials.</p>
                        <input type="text" className="form-control" name="site" placeholder="Website" value={this.state.site} onChange={this.handleChange} />
                    </div>
                </div>
                <div className="col-12 col-md-12">
                    <div className="form-group">
                        <label className="form-check-label tokenMaker" htmlFor="link">Whitepaper Link</label>
                        <p className='tokenMakerDetails'>An informative, aesthetic whitepaper will teach your community about your mission.</p>
                        <input type="text" className="form-control" name="link" placeholder="Whitepaper Link" value={this.state.link} onChange={this.handleChange} />
                    </div>
                </div>
            </div>
        )
    }
} 

export default TokenMakerSocial;