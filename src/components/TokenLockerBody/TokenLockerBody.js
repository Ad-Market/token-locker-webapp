import React, { Component } from 'react';

const initData = {
    heading: "Comming Soon!"
}

class TokenLockerBody extends Component {
    state = {
        initData: {}
    }
    componentDidMount(){
        this.setState({
            initData: initData
        })
    }
    render() {
        return (
            <section className="author-area">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-8 col-lg-7">
                            {/* Intro */}
                            <div className="intro text-center">
                                <h3 className="mt-3 mb-0">{this.state.initData.heading}</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default TokenLockerBody;