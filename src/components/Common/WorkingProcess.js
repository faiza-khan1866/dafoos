import React from 'react';


class WorkingProcess extends React.Component {
    constructor() {
        super()
        this.state = {
        }
    }
    render() {
        return (
            <div className="home-process-area pt-100 pb-70">
                <div className="container">
                    <div className="section-title">
                        <span>Working Process</span>
                        <h2>We are popular because of our way of working</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse.</p>
                    </div>

                    <div className="row">
                        <div className="col-lg-3 col-sm-6">
                            <div className="single-process">
                                <div className="icon">
                                    <img src="/images/process/process1.png" alt="process" />
                                    <span>
                                        <img src="/images/process/next.png" alt="shape" />
                                    </span>
                                </div>
                                <div className="content">
                                    <h3>Research Product</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet, co nsectetur adipiscing elit, sed do eiusmod tempor incididunt.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6">
                            <div className="single-process">
                                <div className="icon">
                                    <img src="/images/process/process2.png" alt="process" />
                                    <span className="pro-span">
                                        <img src="/images/process/next.png" alt="shape" />
                                    </span>
                                </div>
                                <div className="content">
                                    <h3>User Testing</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet, co nsectetur adipiscing elit, sed do eiusmod tempor incididunt.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6">
                            <div className="single-process">
                                <div className="icon">
                                    <img src="/images/process/process3.png" alt="process" />
                                    <span>
                                        <img src="/images/process/next.png" alt="shape" />
                                    </span>
                                </div>
                                <div className="content">
                                    <h3>Development</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet, co nsectetur adipiscing elit, sed do eiusmod tempor incididunt.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6">
                            <div className="single-process">
                                <div className="icon">
                                    <img src="/images/process/process4.png" alt="process" />
                                </div>
                                <div className="content">
                                    <h3>Product Handover</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet, co nsectetur adipiscing elit, sed do eiusmod tempor incididunt.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }

}
export default WorkingProcess;