import React, { Component } from 'react';

class TokenLock extends Component {
    state = {
        data: {},
        workData: []
    }
    componentDidMount(){
        this.setState({
            data: {
                "preHeading": "Lock Token",
                "heading": "Coming Soon!",
              },
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
                </div>
            </section>
        );
    }
}

export default TokenLock;