import React, { Component } from 'react';
class PancakeLP extends Component {
    state = {
        exploreData: []
    }
    componentDidMount(){
        this.setState({
            exploreData: [
                
              ]
        })
    }
    render() {
        return (
            <section className="explore-area">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            {/* Intro */}
                            <div className="intro d-flex justify-content-between align-items-end m-0 pancakeswap-lp-content">
                                <div className="intro-content">
                                    <span>Locked LPs</span>
                                    <h3 className="mt-3 mb-0">Explore</h3>
                                </div>
                                <div className="intro-btn text-center">
                                    <a className="btn ml-lg-auto btn-bordered-white" href="/Lock-PancakeLP">Lock New LP Pair</a>
                                    <a className="btn ml-lg-auto btn-bordered-white" href="/Withdraw-PancakeLP" style = {{marginLeft: '10px !important'}}>Withdraw LP Pair</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row items">
                        {this.state.exploreData.map((item, idx) => {
                            return (
                                <div key={`edt_${idx}`} className="col-12 col-sm-6 col-lg-3 item">
                                    <div className="card">
                                        <div className="image-over">
                                            <img className="card-img-top" src={item.img} alt="" />
                                        </div>
                                        {/* Card Caption */}
                                        <div className="card-caption col-12 p-0">
                                            {/* Card Body */}
                                            <div className="card-body">
                                                <h5 className="mb-0">{item.pair}</h5>
                                                <div className="seller d-flex align-items-center my-3">
                                                    <span>Liquidity: </span>
                                                    <h6 className="ml-2 mb-0">{item.liquidity}</h6>
                                                </div>
                                                <div className="card-bottom d-flex justify-content-between">
                                                </div>
                                                <h6 className="ml-2 mb-0">{item.lockTime}</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    
                </div>
            </section>
        );
    }
}

export default PancakeLP;