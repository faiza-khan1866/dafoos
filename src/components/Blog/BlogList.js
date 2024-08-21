import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { API } from "../../http/API";


const BlogList = (props) => {

    const [BlogData, setBlogData] = useState();

    useEffect(() => {
        API.get(`/blogs`)
            .then((response) => {
                setBlogData(response.data.data);

            })
            .catch((err) => console.log(err));

    }, []);

    return (
        <div className="home-blog-area  pt-100 pb-70">
            <div className="container">
                <div className="section-title">
                    <h2>{props.introSection.title}</h2>
                    <div dangerouslySetInnerHTML={{ __html: props.introSection.content }} />
                </div>
                <div className="row justify-content-center">
                    {BlogData?.map((item, index) => (
                        <div className="col-lg-4 col-md-6" key={index}>
                            <div className="single-blog">
                                <div className="blog-img">
                                    <Link to={`/blog/${item.slug}`}><img src={item?.content?.featured_image} alt="blog" /></Link>
                                </div>
                                <div className="content">
                                    {/* <ul>
                                        <li>{item.publishdate}</li>
                                        <li><a href="#">{item.author}</a></li>
                                    </ul> */}
                                    <Link to={`/blog/${item.slug}`}>
                                        <h3>{item.title}</h3>
                                    </Link>
                                    <div dangerouslySetInnerHTML={{ __html: item.content.short_description }} />
                                    <Link to={`/blog/${item.slug}`} className="line-bnt">Read More</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default BlogList;