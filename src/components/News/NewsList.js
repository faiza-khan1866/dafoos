import React from 'react';
import { Link } from "react-router-dom";
import data from '../../data/data.json';

const NewsList = () => {
    return (
        <div className="home-blog-area  pt-100 pb-70">
            <div className="container">
                <div className="section-title">
                    <h2>{data.blogdetails.title}</h2>
                    <p>{data.blogdetails.description}</p>
                </div>
                <div className="row justify-content-center">
                    {data.blogdetails.items.map((item, index) => (
                        <div className="col-lg-4 col-md-6" key={index}>
                            <div className="single-blog">
                                <div className="blog-img">
                                    <Link to={`/news/${item.route}`}><img src={item.image} alt="blog" /></Link>
                                </div>
                                <div className="content">
                                    <ul>
                                        <li>{item.publishdate}</li>
                                        <li><a href={`/news/${item.route}`}>{item.author}</a></li>
                                    </ul>
                                    <Link to={`/news/${item.route}`}>
                                        <h3>{item.title}</h3>
                                    </Link>
                                    <p>{item.description}</p>
                                    <Link to={`/news/${item.route}`} className="line-bnt">Read More</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default NewsList;