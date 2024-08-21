import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import baseUrl from "../../utils/baseUrl";
import ContactInfoBottom from "./ContactInfoBottom";
import { API } from "../../http/API";
const MySwal = withReactContent(Swal);

const alertContent = () => {
  MySwal.fire({
    title: "Congratulations!",
    text: "Your message has been successfully sent and will back to you soon",
    icon: "success",
    timer: 2000,
    timerProgressBar: true,
    showConfirmButton: false,
  });
};

// Form initial state
const INITIAL_STATE = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  text: "",
  type: "contact_form",
};

const ContactForm = ({ locationInfo, introSec }) => {
  const [contact, setContact] = useState(INITIAL_STATE);
  const [disable, setDisable] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact((prevState) => ({ ...prevState, [name]: value }));
    // console.log(contact)
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setDisable(true);
    try {
      const url = "/enquiry";
      const { name, email, phone, subject, text, type } = contact;
      const payload = { name, email, phone, subject, text, type };
      const response = await API.post(url, payload);
      console.log(response);
      setContact(INITIAL_STATE);
      alertContent();
      setDisable(false);
    } catch (error) {
      setDisable(false);

      console.log(error);
    }
  };

  return (
    <div className="home-contact-area home-2-contact pt-100 pb-100">
      <div className="container">
        <div className="section-title">
          <h2>{introSec?.title}</h2>
          <p
            dangerouslySetInnerHTML={{
              __html: introSec?.description,
            }}
          ></p>
          <br />
          <br />
        </div>

        <div className="row">
          <div className="col-lg-5 col-md-6">
            <div className="content">
              <form onSubmit={handleSubmit} className="homeContactForm mb-5">
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
                        placeholder="Your Phone"
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
                        name="subject"
                        placeholder="Subject"
                        className="form-control"
                        value={contact.subject}
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
                    <button
                      type="submit"
                      disabled={disable}
                      className="default-btn page-btn box-btn"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div className="col-lg-7 col-md-6">
            <ContactInfoBottom locationInfo={locationInfo} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
