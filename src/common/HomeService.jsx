import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import api from "../utils/AxiosConfig"

function HomeService() {
    let [services, setServices] = useState([])
    let [error, setError] = useState("")
    let [loading, setLoading] = useState(false)

    async function FetchServices() {
        try {
            setLoading(true)
            let response = await api.get("/services")
            if (response.data.services) {
                setServices(response.data.services.slice(0,3))
            }
        }
        catch (e) {
            setError(e.message || "Failed to load services")
        }
        finally {
            setLoading(false)
        }
    }
    useEffect(() => {
        FetchServices()
    }, [])
    if (error) {
        return <h2>{error}</h2>
    }
    return (
        <>
            <section className="section-spacing">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="section-title text-center">
                                <h2><span>Our Services</span></h2>
                                <p>Our product is fully personalized and well balanced for all age of customers or adults. We maintain the standards by lorem ipsum and certified by dolor set amet.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {loading ? (<><h2>Loading...</h2></>) : (<>
                            {services ? (<>
                                {services.map((service) => {
                                    return (
                                        <>
                                            <div className="col-md-4" key={service._id}>
                                                <div className="service-item wow fadeIn">
                                                    <div className="thumb">
                                                            <Link to={`/servicedetails/${service._id}`}><img src={`http://localhost:8000${service.service_image}`} style={{ height: "200px" }} alt={service.service_name} /></Link>
                                                    </div>
                                                    <div className="service-info text-center">
                                                            <h3><Link to={`/servicedetails/${service._id}`}>{service.service_name}</Link></h3>
                                                        <p>{service.service_description}</p>
                                                            <Link to={`/servicedetails/${service._id}`} className="btn btn-default">View Details & Book</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })}
                            </>) : (<><h2>Services not Found!</h2></>)}
                        </>)}
                        

                    </div>
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <Link to="/services" className="btn btn-primary">All Services</Link>
                        </div>
                    </div>
                </div>
            </section>
            {/* end services */}
        </>
    )
}

export default HomeService