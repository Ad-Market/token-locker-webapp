import React, { Component } from 'react';

class Footer extends Component {
    state = {
        data: {},
        socialData: [],
        widgetData_1: [],
        widgetData_2: []
    }
    componentDidMount(){
        this.setState({
            data: {
                "img": "/img/toplogo.png",
                "content": "To keep your Liquidity Pool, Use this Locker",
                "widget_1": "Useful Links",
                "widget_2": "Community",
                "widget_3": "Subscribe Us",
              },
              socialData: [
                {
                  "id": 1,
                  "link": "facebook",
                  "icon": "fab fa-facebook-f"
                },
                {
                  "id": 2,
                  "link": "twitter",
                  "icon": "fab fa-twitter"
                },
                {
                  "id": 3,
                  "link": "google-plus",
                  "icon": "fab fa-google-plus-g"
                },
                {
                  "id": 4,
                  "link": "vine",
                  "icon": "fab fa-vine"
                }
              ],
              widgetData_1: [
                {
                  "id": 1,
                  "text": "All Locked LPs"
                },
                {
                  "id": 2,
                  "text": "How It Works"
                },
                {
                  "id": 3,
                  "text": "Lock LP pairs"
                },
                {
                  "id": 4,
                  "text": "Explore"
                },
                {
                  "id": 5,
                  "text": "Privacy & Terms"
                }
              ],
              widgetData_2: [
                {
                  "id": 1,
                  "text": "Help Center"
                },
                {
                  "id": 2,
                  "text": "Blog"
                },
                {
                  "id": 3,
                  "text": "Newsletter"
                },
              ]
        })
    }
    render() {
        return (
            <footer className="footer-area">
                {/* Footer Top */}
                <div className="footer-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-sm-6 col-lg-3 res-margin">
                                {/* Footer Items */}
                                <div className="footer-items">
                                    {/* Logo */}
                                    <a className="navbar-brand" href="/">
                                        <img src={this.state.data.img} alt="" />
                                    </a>
                                    <p>{this.state.data.content}</p>
                                    {/* Social Icons */}
                                    <div className="social-icons d-flex">
                                        {this.state.socialData.map((item, idx) => {
                                            return (
                                                <a key={`sd_${idx}`} className={item.link} href="#">
                                                    <i className={item.icon} />
                                                    <i className={item.icon} />
                                                </a>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-3 res-margin">
                                {/* Footer Items */}
                                <div className="footer-items">
                                    {/* Footer Title */}
                                    <h4 className="footer-title">{this.state.data.widget_1}</h4>
                                    <ul>
                                        {this.state.widgetData_1.map((item, idx) => {
                                            return (
                                                <li key={`wdo_${idx}`}><a href="#">{item.text}</a></li>
                                            );
                                        })}
                                    </ul>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-3 res-margin">
                                {/* Footer Items */}
                                <div className="footer-items">
                                    {/* Footer Title */}
                                    <h4 className="footer-title">{this.state.data.widget_2}</h4>
                                    <ul>
                                        {this.state.widgetData_2.map((item, idx) => {
                                            return (
                                                <li key={`wdo_${idx}`}><a href="#">{item.text}</a></li>
                                            );
                                        })}
                                    </ul>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-3">
                                {/* Footer Items */}
                                <div className="footer-items">
                                    {/* Footer Title */}
                                    <h4 className="footer-title">{this.state.data.widget_3}</h4>
                                    {/* Subscribe Form */}
                                    <div className="subscribe-form d-flex align-items-center">
                                        <input type="email" className="form-control" placeholder="info@yourmail.com" />
                                        <button type="submit" className="btn"><i className="icon-paper-plane" /></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Footer Bottom */}
                <div className="footer-bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                {/* Copyright Area */}
                                <div className="copyright-area d-flex flex-wrap justify-content-center justify-content-sm-between text-center py-4">
                                    {/* Copyright Left */}
                                    <div className="copyright-left">©2021 SENPAI, All Rights Reserved.</div>
                                    {/* Copyright Right */}
                                    <div className="copyright-right">Made with <i className="fas fa-heart" /> By <a href="#">Senpai & Zimen</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;