import React from 'react';
import CountUp from 'react-countup';

const Counter = () => {

    const activitys = [
        {
            icon: 'fa fa-smile-o',
            title: 'Clients',
            value: 2000,
            suffix: "+",
            id: 1
        },
        {
            icon: 'fa fa-briefcase',
            title: 'Projects',
            value: 5000,
            suffix: "+",
            id: 2
        },
        {
            icon: 'fa fa-heart',
            title: 'Years',
            value: 30,
            suffix: "+",
            id: 3
        }
    ]

    return (
        <div className="counter_main">
            <div className="container">
                <div className="row">
                    <div className="counter-area">
                        <div className="service-content">
                            <ul className="activityWrapper">
                                {activitys.map(item => (
                                    <li key={item.id} className="activityItem">
                                        <div className="activityIcon">
                                            <i className={item.icon}></i>
                                        </div>
                                        <div className="activityContent">
                                            <CountUp
                                                className="custom-count"
                                                start={0}
                                                end={item.value}
                                                duration={5}
                                                useEasing={true}
                                                suffix={item.suffix}
                                            />
                                            {/* <span>+</span> */}
                                            <p>{item.title}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );

}

export default Counter;