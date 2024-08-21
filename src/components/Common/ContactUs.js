import React, { useState, useEffect } from 'react';
import { API } from '../../http/API';
import axios from 'axios';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import contImg from "../../assets/images/getintouchh.jpg"


const MySwal = withReactContent(Swal)

const alertContent = () => {
    MySwal.fire({
        title: 'Congratulations!',
        text: 'Your message has been successfully sent and will back to you soon',
        icon: 'success',
        timer: 2000,
        timerProgressBar: true,
        showConfirmButton: false,
    })
}

// Form initial state
const INITIAL_STATE = {
    name: "",
    email: "",
    phone: "",
    subject: "",
    text: "",
    type: "contact_form"
};
const ContactUs = (props) => {

    const [ContactData, setContactData] = useState([]);

    useEffect(() => {
        setContactData(props?.ContactData);
    }, [props.ContactData]);

    const [contact, setContact] = useState(INITIAL_STATE);

    const handleChange = e => {
        const { name, value } = e.target;
        setContact(prevState => ({ ...prevState, [name]: value }));
        // console.log(contact)
    }

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            const url = "/enquiry";
            const { name, email, phone, subject, text, type } = contact;
            const payload = { name, email, phone, subject, text, type };
            const response = await API.post(url, payload);
            console.log(response);
            setContact(INITIAL_STATE);
            alertContent();
        } catch (error) {
            console.log(error)
        }
    };

    return (
        <div className="home-contact-area home-2-contact pb-70 pt-70">
            <div className="container">
                <div className="section-title">
                    <h2>{ContactData?.title}</h2>
                    <div dangerouslySetInnerHTML={{ __html: ContactData?.description }} />
                    <br />
                    <br />
                </div>
                <div className="row">
                    <div className="col-lg-6 col-md-6 mb-3">
                        <div className="content">
                            <form id="contactForm" className='homeContactForm' onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="col-lg-12 col-sm-12">
                                        <div className="form-group">
                                            <input type="text" name="name"
                                                id="name" className="form-control"
                                                value={contact.name}
                                                onChange={handleChange}
                                                required placeholder="Your Name" />
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-sm-12">
                                        <div className="form-group">
                                            <input type="email" name="email"
                                                id="email" className="form-control"
                                                required
                                                value={contact.email}
                                                onChange={handleChange}
                                                placeholder="Your Email" />
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-sm-12">
                                        <div className="form-group">
                                            <input type="text"
                                                name="phone"
                                                id="phone"
                                                value={contact.phone}
                                                onChange={handleChange}
                                                onKeyPress={(event) => {
                                                    if (!/[0-9]/.test(event.key)) {
                                                        event.preventDefault();
                                                    }
                                                }}
                                                required className="form-control" placeholder="Your Phone" />
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-sm-12">
                                        <div className="form-group">
                                            <input type="text" name="subject"
                                                id="subject" className="form-control"
                                                value={contact.subject}
                                                onChange={handleChange}
                                                required placeholder="Subject" />
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <textarea name="text"
                                                value={contact.text}
                                                onChange={handleChange}
                                                className="form-control" id="text" cols="30" rows="5" required placeholder="Your Message"></textarea>
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-12">
                                        <button type="submit"
                                            className="default-btn page-btn box-btn">Submit</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                        <div>
                            <img src={contImg} alt="contact" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs;