import React, { useState } from 'react';
import { Link } from "react-router-dom";
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import EnquireForm from '../Common/EnquireForm';


const TopHeader = () => {
    const [isOpen, setOpen] = useState(false);

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);
    return (
        <header className="header-area">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-2 d-none d-lg-block">
                        <div className="logo">
                            <Link to="/">
                                <img src="/images/logo.png" alt="logo" />
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-10 col-md-12">
                        <div className="header-content-right">
                            <ul className="header-contact">
                                <li>
                                    <button onClick={onOpenModal} className="btn btn-enquire">Enquire Now</button>
                                </li>
                                <li>
                                    <a href="tel:+0600 54 5452">UAE Hotline 600 54 5452</a>
                                </li>
                                <li>
                                    <a href="tel:+974 4437 4871" className="btn btn-qatar">qatar</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <Modal open={isOpen} onClose={onCloseModal} center>
                <div className="modal-enquireForm">
                    <EnquireForm />
                </div>
            </Modal>
        </header>
    )
}

export default TopHeader;