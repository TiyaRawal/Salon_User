import React, { useEffect, useState } from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
import Breadcrumbs from '../common/Breadcrumbs'
import HomeAppointment from '../common/HomeAppointment'
import api from '../utils/AxiosConfig'
import { Link, useLocation } from 'react-router-dom'

function ServicesByCategory() {
    return (
        <>
            <Header />
            <ServicesByCategoryContent />
            <Footer />
        </>
    )
}

function ServicesByCategoryContent() {
    return (
        <>
            <Breadcrumbs title="Services By Category" />
            <ServicesByCategoryList />
            <HomeAppointment />
        </>
    )
}

function ServicesByCategoryList() {
    let id = useLocation().pathname.split("/")[2]
    let [services, setServices] = useState([])
    let [error, setError] = useState("")
    let [loading, setLoading] = useState(true)

    async function FetchServices() {
        try {
            let response = await api.get(`/servicesbycategory/${id}`)
            if (response.data.success) {
                setServices(response.data.services || [])
            }
        } catch (e) {
            setError(e.response?.data?.message || e.message || "Failed to load services")
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        FetchServices()
    }, [id])

    if (error) {
        return <h2>{error}</h2>
    }

    return (
        <section className="section-spacing">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="section-title text-center">
                            <h2><span>Services By Category</span></h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {loading ? <h2>Loading...</h2> : services.length > 0 ? services.map((value) => (
                        <div className="col-md-4" key={value._id}>
                            <div className="service-item wow fadeIn">
                                <div className="thumb">
                                    <Link to={`/servicedetails/${value._id}`}><img src={value.service_image ? `http://localhost:8000${value.service_image}` : "/img/services/1.jpg"} style={{ height: "200px" }} alt={value.service_name} /></Link>
                                </div>
                                <div className="service-info text-center">
                                    <h3><Link to={`/servicedetails/${value._id}`}>{value.service_name}</Link></h3>
                                    <p>{value.service_description}</p>
                                    <Link to={`/servicedetails/${value._id}`} className="btn btn-default">View Details & Book</Link>
                                </div>
                            </div>
                        </div>
                    )) : <h2>No services found</h2>}
                </div>
            </div>
        </section>
    )
}

export default ServicesByCategory