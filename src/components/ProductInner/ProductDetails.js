import React, { useState, useEffect } from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import EnquireForm from '../Common/EnquireForm';

const ProductDetails = (props) => {
    const [isOpen, setOpen] = useState(false);
    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);
    const [productDetails, setProductDetails] = useState();

    useEffect(() => {

        setProductDetails(props.ProductInnerData);

    }, [props])
    return (
        <>
      
            {productDetails &&
                <div className="product-details-area home-company-area pt-100 pb-70">
                    <div className="container">
                        <div className="section-title">
                            <h2>{productDetails.sub_title}</h2>
                            <div dangerouslySetInnerHTML={{ __html: productDetails.short_description }} />
                        </div>
                        <div className="product-detail-boxes">
                            {productDetails?.content?.map((item, index) => (
                                index % 2 ?
                                    <div className="row align-items-center pb-70 even-products" key={index}>
                                        <div className="col-lg-6 col-md-6">
                                            <div className="product-img">
                                                <img src={item.section_image} alt="" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6">
                                            <div className="company-content">
                                                <div className="company-tittle">
                                                    <h2>{item.title}</h2>
                                                    <div dangerouslySetInnerHTML={{ __html: item.description }} />
                                                    <button onClick={onOpenModal} className="btn btn-enquire" style={{ marginTop: '20px' }}>ENquire now</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div> :
                                    <div className="row align-items-center pb-70 odd-products" key={index}>
                                        <div className="col-lg-6 col-md-6">
                                            <div className="company-content">
                                                <div className="company-tittle">
                                                    <h2>{item.title}</h2>
                                                    <div dangerouslySetInnerHTML={{ __html: item.description }} />
                                                    <button onClick={onOpenModal} className="btn btn-enquire" style={{ marginTop: '20px' }}>ENquire now</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6">
                                            <div className="product-img">
                                                <img src={item.section_image} alt="" />
                                            </div>
                                        </div>
                                    </div>
                            ))}
                        </div>
                    </div>
                </div>
            }
            <Modal open={isOpen} onClose={onCloseModal} center>
                <EnquireForm />
            </Modal>
        </>
    )
}

export default ProductDetails;