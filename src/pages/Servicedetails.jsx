import React, { useEffect, useState } from 'react'
import Breadcrumbs from '../common/Breadcrumbs'
import Header from '../common/Header'
import Footer from '../common/Footer'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import api, { baseURL } from '../utils/AxiosConfig'

function Servicedetails() {
    return (
        <>
            <Header />
            <ServiceContent />
            <Footer />
        </>
    )
}

function ServiceContent() {
    return (
        <>
            <Breadcrumbs title="Service Details" />
            <ServiceDetailSection />
        </>
    )
}

function ServiceDetailSection() {
    let [serviceDetail, setServiceDetail] = useState({})
    let [error, setError] = useState("")
    let [loading, setLoading] = useState(true)
    let [isSubmitting, setIsSubmitting] = useState(false)
    let id = useLocation().pathname.split("/")[2]
    let [booking, setBooking] = useState({
        service_id: id,
        booking_date: "",
        notes: ""
    })
    let navigate = useNavigate()

    async function FetchServiceDetails() {
        try {
            let response = await api.get(`/services/${id}`)
            if (response.data.services) {
                setServiceDetail(response.data.services)
            }
        } catch (e) {
            setError(e.response?.data?.message || e.message || "Failed to load service details")
        } finally {
            setLoading(false)
        }
    }

    function HandleInputChange(e) {
        setBooking((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    async function HandleSubmit(e) {
        e.preventDefault()
        setIsSubmitting(true)
        try {
            let bookingresponse = await api.post("/bookservice", booking)

            if (bookingresponse.data.success) {
                setBooking({
                    service_id: id,
                    booking_date: "",
                    notes: ""
                })

                let orderresponse = await api.post("/generateorder", { booking_id: bookingresponse.data.booking_id })
                if (orderresponse.data.success) {
                    const { total_amount, currency, order_id } = orderresponse.data.data
                    const options = {
                        key: "rzp_test_VQhEfe2NCXbbwI",
                        amount: total_amount,
                        currency: currency,
                        name: "Salon Booking",
                        description: "Service Payment",
                        order_id: order_id,
                        handler: async (paymentresponse) => {
                            alert("Payment successful! Verifying payment...")
                            try {
                                let verifyresponse = await api.post("/verifypayment", {
                                    razorpay_order_id: paymentresponse.razorpay_order_id,
                                    razorpay_payment_id: paymentresponse.razorpay_payment_id,
                                    razorpay_signature: paymentresponse.razorpay_signature,
                                    booking_id: bookingresponse.data.booking_id
                                })
                                if (verifyresponse.data.success) {
                                    alert(verifyresponse.data.message)
                                    navigate("/bookings")
                                }
                            } catch (verifyError) {
                                console.log(verifyError)
                            }
                        },
                        prefill: {
                            name: "John Doe",
                            email: "john.doe@example.com",
                            contact: "9999999999",
                        },
                        theme: {
                            color: "#7d3c92",
                        },
                    }

                    const paymentObject = new window.Razorpay(options)
                    paymentObject.open()
                }
            }
        } catch (e) {
            console.log(e)
        } finally {
            setIsSubmitting(false)
        }
    }

    useEffect(() => {
        FetchServiceDetails()
    }, [id])

    if (error) return <h2>{error}</h2>

    return (
        <>
            <div>
                {loading ? (
                    <h2 className="text-center">Loading service details...</h2>
                ) : (
                    <section className="section-spacing">
                        <div className="container">
                            <div className="row align-items-stretch">
                                <div className="col-lg-6">
                                    <div className="service-item wow fadeIn service-detail-main">
                                        <div className="thumb">
                                            <img src={serviceDetail.service_image ? `${baseURL}${serviceDetail.service_image}` : "/img/services/1.jpg"} alt={serviceDetail.service_name} />
                                        </div>
                                        <div className="service-info service-detail-content">
                                            <h3>{serviceDetail.service_name}</h3>
                                            <div className="service-meta-row">
                                                <span className="service-meta-pill">Duration: {serviceDetail.duration_mins} mins</span>
                                                <span className="service-meta-pill">Price: Rs {serviceDetail.price}</span>
                                            </div>
                                            <p><strong>Category:</strong> {serviceDetail.category?.category_name || '-'}</p>
                                            <p><strong>Subcategory:</strong> {serviceDetail.subcategory?.subcategory_name || '-'}</p>
                                            <p>{serviceDetail.service_description}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="booking-panel wow fadeIn">
                                        <h4>Book This Service</h4>
                                        <p className="booking-steps">Choose your date, add notes, then proceed to payment.</p>

                                        <form onSubmit={HandleSubmit} id="contactForm" className="contact-form booking-form" data-toggle="validator" method="post">
                                            <div className="form-group">
                                                <label htmlFor="booking_date">Booking Date</label>
                                                <input
                                                    id="booking_date"
                                                    className="form-control"
                                                    name="booking_date"
                                                    type="date"
                                                    onChange={HandleInputChange}
                                                    required
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="notes">Notes</label>
                                                <textarea
                                                    placeholder="Any note for your appointment"
                                                    name="notes"
                                                    id="notes"
                                                    cols={20}
                                                    rows={5}
                                                    className="form-control"
                                                    onChange={HandleInputChange}
                                                />
                                            </div>
                                            <div className="booking-actions-row">
                                                <button className="btn btn-primary btn-block" type="submit" disabled={isSubmitting}>
                                                    {isSubmitting ? 'Processing...' : 'Book & Proceed to Pay'}
                                                </button>
                                                <Link to="/services" className="btn btn-default btn-block">Back to Services</Link>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                )}

                <section className="section-spacing inverse-bg">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="section-title text-center">
                                    <h2><span>You may also like</span></h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <div className="service-item wow fadeIn">
                                    <div className="thumb">
                                        <Link to="/services"><img src="../img/services/2.jpg" alt="Stone Message" /></Link>
                                    </div>
                                    <div className="service-info text-center">
                                        <h3><Link to="/services">Stone Message</Link></h3>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.</p>
                                        <Link to="/services" className="btn btn-default">View Services</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="service-item wow fadeIn">
                                    <div className="thumb">
                                        <Link to="/services"><img src="../img/services/3.jpg" alt="Body Message" /></Link>
                                    </div>
                                    <div className="service-info text-center">
                                        <h3><Link to="/services">Body Message</Link></h3>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.</p>
                                        <Link to="/services" className="btn btn-default">View Services</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="service-item wow fadeIn">
                                    <div className="thumb">
                                        <Link to="/services"><img src="../img/services/5.jpg" alt="Aromatherapy" /></Link>
                                    </div>
                                    <div className="service-info text-center">
                                        <h3><Link to="/services">Aromatherapy</Link></h3>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.</p>
                                        <Link to="/services" className="btn btn-default">View Services</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <Link to="/contact" className="btn btn-primary">Contact us</Link>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        </>
    )
}

export default Servicedetails
