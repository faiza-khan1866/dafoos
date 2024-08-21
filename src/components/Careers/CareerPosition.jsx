import React, { useState, useEffect } from 'react';
import { API } from "../../http/API";


const CareerPosition = ({ }) => {

    const [CareersList, setCareersList] = useState();

    useEffect(() => {
        API.get(`/careers`)
            .then((res) => {

                setCareersList(res.data.data);

            })
            .catch((err) => console.log(err));

    }, []);
    return (
        <>
            {CareersList?.map((item, index) => (
                < div className="col-lg-4 col-sm-6" key={index} >
                    < div className="single-contact" >
                        <div className="content">
                            <h3 className="career-post-title">{item.designation}</h3>
                            <div className="career-post-description" dangerouslySetInnerHTML={{ __html: item.description }} />
                            <div className="col-lg-12 col-sm-12">
                                <a href="mailto:hr@dafoos.com" className="default-btn page-btn box-btn custom-btn" style={{ color: 'white' }}>Apply Now</a>
                            </div>
                        </div>
                    </div >
                </div >
            ))

            }
        </>
    )
}

export default CareerPosition;

// import React, { useState, useEffect } from 'react';
// import { API } from "../../http/API";
// import CareerForm from '../Common/CareerForm';
// import { Modal } from 'react-responsive-modal';


// const CareerPosition = ({ }) => {
//     const [isOpen, setOpen] = useState(false);
//     const onOpenModal = () => setOpen(true);
//     const onCloseModal = () => setOpen(false);
//     const [CareersList, setCareersList] = useState();

//     useEffect(() => {
//         API.get(`/careers`)
//             .then((res) => {

//                 setCareersList(res.data.data);

//             })
//             .catch((err) => console.log(err));

//     }, []);
//     return (
//         <>
//             {CareersList?.map((item, index) => (
//                 < div className="col-lg-4 col-sm-6" key={index} >
//                     < div className="single-contact" >
//                         <div className="content">
//                             <h3 className="career-post-title">{item.designation}</h3>
//                             <div className="career-post-description" dangerouslySetInnerHTML={{ __html: item.description }} />
//                             <div className="col-lg-12 col-sm-12">
//                                 <button onClick={onOpenModal} className="default-btn page-btn box-btn custom-btn" style={{ color: 'white' }}>Apply Now</button>
//                             </div>
//                         </div>
//                     </div >
//                 </div >
//             ))

//             }
//             <Modal open={isOpen} onClose={onCloseModal} center>
//                 <CareerForm />
//             </Modal>
//         </>
//     )
// }

// export default CareerPosition;