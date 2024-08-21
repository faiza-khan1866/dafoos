import React from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemButton,
    AccordionItemHeading,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import data from '../../data/data.json';

const FaqContent = ({ introData, faqData }) => {
    return (
        <div className="choose-area ptb-100">
            <div className="container">
                <div className="section-title">
                    <span>{introData?.subtitle}</span>
                    <h2>{introData?.title}</h2>
                    <p
                        dangerouslySetInnerHTML={{
                            __html: introData?.description
                        }}
                    ></p>
                </div>

                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="choose-img">
                            <img src="/images/choose-img.png" alt="choose" />
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="choose-content">
                            <div className="faq-accordion">
                                <Accordion allowZeroExpanded preExpanded={['1']}>
                                    {faqData?.map((item, index) => (
                                        <AccordionItem uuid={index}>
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    {item?.questions}
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p
                                                    dangerouslySetInnerHTML={{
                                                        __html: item?.answers
                                                    }}
                                                ></p>
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                    ))}
                                </Accordion>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FaqContent;