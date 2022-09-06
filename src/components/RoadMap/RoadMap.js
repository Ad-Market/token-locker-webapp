import React, { Component } from 'react';

class RoadMap extends Component {
    state = {
        data: {},
        workData: []
    }
    componentDidMount(){
        this.setState({
            data: {
                "preHeading": "Road Map",
                "heading": "Vault roadmap",
                "workData": [
                  {
                    "id": 1,
                    "icon": "icons icon-wallet text-effect",
                    "title": "Phase 1",
                    "text": " ⁃ Launch Senpai Token on ETH  ⁃ Create Holder base  ⁃ Telegram members 500  ⁃ Begin development for Vault"
                  },
                  {
                    "id": 2,
                    "icon": "icons icon-grid text-effect",
                    "title": "Create your collection",
                    "text": "Click Create and set up your collection. Add social links, a description, profile & banner images, and set a secondary sales fee."
                  },
                  {
                    "id": 3,
                    "icon": "icons icon-drawer text-effect",
                    "title": "Add your NFTs",
                    "text": "Upload your work (image, video, audio, or 3D art), add a title and description, and customize your NFTs with properties, stats, and unlockable content."
                  },
                  {
                    "id": 4,
                    "icon": "icons icon-bag text-effect",
                    "title": "List them for sale",
                    "text": "Choose between auctions, fixed-price listings, and declining-price listings. You choose how you want to sell your NFTs!"
                  }
                ]
              },
            workData: [
                {
                  "id": 1,
                  "icon": "icons icon-wallet text-effect",
                  "title": "Connect your wallet",
                  "text": "To connect your metamask wallet to this locker by clicking wallet connect button in the top right corner."
                },
                {
                  "id": 2,
                  "icon": "icons icon-grid text-effect",
                  "title": "Create Liquidity Pool",
                  "text": "Using uniswap v2 or pancakeswap v2 router, create your Liquidity Pool for your token."
                },
                {
                  "id": 3,
                  "icon": "icons icon-drawer text-effect",
                  "title": "Add Liquidity Pool",
                  "text": "With LP token address, Add Liquidity Pool to locker to Keep your LP token and reward $Thanos token."
                },
                {
                  "id": 4,
                  "icon": "icons icon-bag text-effect",
                  "title": "Widthraw Liquidity Pool",
                  "text": "When you want to widthraw Liquidity Pool, Unlock your locked LP token."
                }
              ]
        })
    }
    
    render() {
        return (
            <section className="work-area">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            {/* Intro */}
                            <div className="intro mb-4">
                                <div className="intro-content">
                                    <span>{this.state.data.preHeading}</span>
                                    <h3 className="mt-3 mb-0">{this.state.data.heading}</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row items">
                        <div className="col-12 col-sm-6 col-lg-3 item">
                            <div className="single-work">
                                <i className="fas fa-road" style={{fontSize: '54px', color: 'red'}}></i>
                                <h4>Phase 1</h4>
                                <p>⁃ Launch Senpai Token on ETH <br />
                                ⁃ Create Holder base<br />
                                ⁃ Telegram members 500<br />
                                ⁃ Begin development for Vault</p>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-3 item">
                            <div className="single-work">
                                <i className="fas fa-road" style={{fontSize: '54px', color: 'red'}}></i>
                                <h4>Phase 2</h4>
                                <p> ⁃ Development finished for Vault<br />
                                ⁃ Ethereum / BSC Vault live<br />
                                ⁃ Marketing begins<br />
                                ⁃ Influencer marketing<br />
                                ⁃ Banners Ads<br />
                                ⁃ AMA’s<br />
                                ⁃ Partnerships begin<br />
                                ⁃ Audit starts<br />
                                ⁃ Profit sharing model released</p>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-3 item">
                            <div className="single-work">
                                <i className="fas fa-road" style={{fontSize: '54px', color: 'red'}}></i>
                                <h4>Phase 3</h4>
                                <p>⁃ Solana Vault development begins <br />
                                ⁃ Token Locker for all networks above developed<br />
                                ⁃ Audit completed<br />
                                ⁃ Holder stories<br />
                                ⁃ 1st Annual Report released</p>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-3 item">
                            <div className="single-work">
                                <i className="fas fa-road" style={{fontSize: '54px', color: 'red'}}></i>
                                <h4>Onward</h4>
                                <p>⁃ Increase weekly locks<br />
                                ⁃ Increase profit sharing model<br />
                                ⁃ Large partnerships<br />
                                ⁃ Development of Launchpad<br />
                                ⁃ Marketing continues</p>
                            </div>
                        </div>
                    </div> 
                </div>
            </section>
        );
    }
}

export default RoadMap;