import React, { useEffect, useState } from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
import Breadcrumbs from '../common/Breadcrumbs'
import api from '../utils/AxiosConfig'
import { Link } from 'react-router-dom'

function Bookings() {
    return (
        <>
            <Header />
            <BookingsContent />
            <Footer />
        </>
    )
}

function BookingsContent() {
    return (
        <>
            <Breadcrumbs title="My Bookings" />
            <BookingsList />
        </>
    )
}

function BookingsList() {
    let [bookings, setBookings] = useState([])
    let [serviceMap, setServiceMap] = useState({})
    let [loading, setLoading] = useState(true)

    function normalizeId(value) {
        if (!value) return ""
        if (typeof value === "string") return value
        if (value.$oid) return value.$oid
        try {
            return value.toString()
        } catch {
            return ""
        }
    }

    async function FetchBookings() {
        try {
            const [bookingsResponse, servicesResponse] = await Promise.all([
                api.get("/bookings"),
                api.get("/services")
            ])

            if (bookingsResponse.data.success) {
                setBookings(bookingsResponse.data.bookings || [])
            }

            if (servicesResponse.data.services) {
                const map = {}
                servicesResponse.data.services.forEach((service) => {
                    map[normalizeId(service._id)] = service.service_name
                })
                setServiceMap(map)
            }
        } catch (e) {
            console.log(e)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        FetchBookings()
    }, [])

    return (
        <section className="section-spacing">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="section-title text-center">
                            <h2><span>My Bookings</span></h2>
                            <p>After payment from Service Details, your bookings and payment status appear here.</p>
                            <p><Link to="/services" className="btn btn-default">Browse Services</Link></p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {loading ? <h2>Loading...</h2> : bookings.length > 0 ? bookings.map((booking) => (
                        <div className="col-md-6" key={booking._id}>
                            <div className="booking-card wow fadeIn">
                                <div className="booking-header">
                                    <div>
                                        <h4 style={{margin:0}}>Booking #{booking._id?.slice(-6)}</h4>
                                        <div className="booking-meta">Date: {booking.booking_date || '—'}</div>
                                    </div>
                                    <div>
                                        {booking.payment_status === 'Paid' ? (
                                            <span className="booking-badge badge-paid">Paid</span>
                                        ) : booking.payment_status === 'Cancelled' ? (
                                            <span className="booking-badge badge-cancelled">Cancelled</span>
                                        ) : (
                                            <span className="booking-badge badge-pending">Pending</span>
                                        )}
                                    </div>
                                </div>
                                <div className="booking-body">
                                    <p style={{marginBottom:6}}><strong>Service:</strong> {booking.service_name || serviceMap[normalizeId(booking.service_id)] || 'Service booked'}</p>
                                    <p style={{marginBottom:6}}><strong>Status:</strong> {booking.booking_status || '—'}</p>
                                    <p style={{marginBottom:6}}><strong>Payment:</strong> {booking.payment_status || '—'}</p>
                                </div>
                                <div className="booking-actions text-right">
                                    {booking.payment_status === 'Paid' ? (
                                        <Link to={`/bookings/${booking._id}`} className="btn btn-default btn-receipt">View Receipt</Link>
                                    ) : (
                                        <Link to="/services" className="btn btn-primary">Complete Payment</Link>
                                    )}
                                </div>
                            </div>
                        </div>
                    )) : <h2>No bookings found</h2>}
                </div>
            </div>
        </section>
    )
}

export default Bookings