import React, { useState } from 'react'
import Swal from 'sweetalert2'
import { API } from "../../http/API"
import withReactContent from 'sweetalert2-react-content'
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
const initialObject = {
    name: "",
    email: "",
    phone: "",
    company: "",
    text: "",
    type: "career_form"
};

const CareerForm = () => {

    const [contact, setContact] = useState(initialObject);

    const handleChange = (e) => {
        setContact({
            ...contact,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        try {
            let updatedData = { ...contact };
            API.post("/enquiry", updatedData)
                .then((response) => {
                    if (response.status === 200 || response.status === 201) {
                        setContact(initialObject);
                        alertContent();
                    }
                })

        } catch (error) {
            console.log(error)
        }
    };

    return (
        <div className="home-contact-area home-2-contact"
            style={{ background: "transparent" }}
        >
            <div className="container">
                <div className="section-title">
                    <h2>Enquire Form</h2>
                </div>

                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <div className="content">
                            <form onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                name="name"
                                                placeholder="Your Name"
                                                className="form-control"
                                                value={contact.name}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <input
                                                type="email"
                                                name="email"
                                                placeholder="Your Email"
                                                className="form-control"
                                                value={contact.email}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                name="phone"
                                                placeholder="Phone number"
                                                className="form-control"
                                                value={contact.phone}
                                                onChange={handleChange}
                                                required
                                                onKeyPress={(event) => {
                                                    if (!/[0-9]/.test(event.key)) {
                                                        event.preventDefault();
                                                    }
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                name="company"
                                                placeholder="Company"
                                                className="form-control"
                                                value={contact.company}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <textarea
                                                name="text"
                                                cols="30"
                                                rows="6"
                                                placeholder="Your Message..."
                                                className="form-control"
                                                value={contact.text}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-sm-12">
                                        <button type="submit" className="default-btn page-btn box-btn">
                                            Submit
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CareerForm;