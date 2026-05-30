import React, { useState } from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
import Breadcrumbs from '../common/Breadcrumbs'
import HomeAppointment from '../common/HomeAppointment'
import api from '../utils/AxiosConfig'

function Contact() {
    return (
        <>
            <Header />
            <ContactComponent />
            <Footer />
        </>
    )
}
function ContactComponent() {
    return (
        <>
            <Breadcrumbs title="Contact Us" />
            <ContactForm/>
            <HomeAppointment/>
        </>
    )
}
function ContactForm() {
    let[inquiry,setInquiry]=useState({
        inquiry_subject:"",
        inquiry_message:""
    })
    console.log(inquiry);
    const HandleInputChange=((e)=>{
        setInquiry((prev)=>({
            ...prev,
            [e.target.name]:e.target.value

        }))
    })
    const HandleSubmit= async(e)=>{
        e.preventDefault()
        try{
            let response=await api.post("/addgeneralinquiry",inquiry)
            if (response.data.success) {
                console.log(response.data);
                alert(response.data.message)
                setInquiry({
                    inquiry_subject:"",
                    inquiry_message:""
                })
                
                
            }
        }
        catch(e){
            alert(e.response.data.message)
            setInquiry({
                    inquiry_subject:"",
                    inquiry_message:""
                })
        }
    }
    return (
        <>
            <section className="section-spacing">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="contact-info text-center wow fadeIn">
                                <i className="fa fa-phone-square" />
                                <h3>Make a Call</h3>
                                <p><a href="tel:+61383766284">+61 3 8376 6284</a><br /></p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="contact-info text-center wow fadeIn">
                                <i className="fa fa-envelope-open-o" />
                                <h3>Send a Mail</h3>
                                <p><a href="mailto:info@example.com">info@example.com</a><br /></p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="contact-info text-center wow fadeIn">
                                <i className="fa fa-map-marker" />
                                <h3>Find Us</h3>
                                <p>Ahmedabad, Gujarat</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="section-title text-center">
                                <h2><span>Have Any Question?</span></h2>
                            </div>
                        </div>
                    </div>
                        <div className="row">
                            <div className="col-md-12 col-lg-8 offset-lg-2">
                                <form onSubmit={HandleSubmit} id="contactForm" className="contact-form wow fadeIn" data-toggle="validator" method="post">
                                    
                                    <div className="form-group">
                                        <input placeholder="Inquiry Subject" id="inquiry_subject" className="form-control" name="inquiry_subject" type="text" onChange={HandleInputChange} value={inquiry.inquiry_subject} required  />
                                        <div className="help-block with-errors" />
                                    </div>
                                    <div className="form-group">
                                        <textarea placeholder="enter Your message" name='inquiry_message' id="inquiry_message" cols={20} rows={8} className="form-control" required onChange={HandleInputChange}  value={inquiry.inquiry_message} />
                                        <div className="help-block with-errors" />
                                    </div>
                                    <div className="text-center">
                                        <input defaultValue="Send Message" name="submit" className="btn btn-primary" type="submit" />
                                        <div id="msgSubmit" className="hidden" />
                                    </div>
                                </form>
                            </div>
                        </div>
                </div>
            </section>
            {/* end contact */}

        </>
    )
}

export default Contact
