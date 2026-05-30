import React, { useEffect, useState } from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
import Breadcrumbs from '../common/Breadcrumbs'
import HomeService from '../common/HomeService'
import HomeUs from '../common/HomeUs'
import HomeAppointment from '../common/HomeAppointment'
import api, { baseURL } from '../utils/AxiosConfig'
import { Link, useLocation } from 'react-router-dom'

function ServicesBySubcategory() {
  return (
    <>
      <Header />
      <ServicesBySubcategoryComponent />
      <Footer />
    </>
  )
}
function ServicesBySubcategoryComponent() {
  return (
    <>
      <Breadcrumbs title="Our ServicesBySubcategorys" />
      <ServicesBySubcategoryCard />
      <HomeUs />
      <HomeAppointment />
    </>
  )
}
function ServicesBySubcategoryCard() {
let id = useLocation().pathname.split("/")[2]
  let [ServicesBySubcategorys, setServicesBySubcategorys] = useState([])
  let [error, setError] = useState("")
  let [loading, setLoading] = useState(false)

  async function FetchServicesBySubcategorys() {
    try {
      setLoading(true)
      let response = await api.get(`/servicesbysubcategory/${id}`)
      if (response.data.services) {
        setServicesBySubcategorys(response.data.services)
      }
    }
    catch (e) {
      setError(e.response?.data?.message || e.message || 'Failed to load services')
    }
    finally {
      setLoading(false)
    }
  }
  useEffect(() => {
    FetchServicesBySubcategorys()
  }, [id])
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
                <h2><span>Our ServicesBySubcategorys</span></h2>
                <p>Our product is fully personalized and well balanced for all age of customers or adults. We maintain the standards by lorem ipsum and certified by dolor set amet.</p>
              </div>
            </div>
          </div>
          <div className="row">
            {loading ? (<><h2>Loading...</h2></>) : (<>
              {ServicesBySubcategorys ? (<>
                {ServicesBySubcategorys.map((value) => {
                  return (
                      <div className="col-md-4" key={value._id}>
                        <div className="service-item wow fadeIn">
                          <div className="thumb">
                            <Link to={`/servicedetails/${value._id}`}><img src={value.service_image ? `${baseURL}${value.service_image}` : "/img/services/1.jpg"} style={{height:"100%", width:"100%"}} alt={value.service_name} /></Link>
                          </div>
                          <div className="service-info text-center">
                            <h3><Link to={`/servicedetails/${value._id}`}>{value.service_name}</Link></h3>
                            <p>{value.service_description}</p>
                            <Link to={`/servicedetails/${value._id}`} className="btn btn-default">View Details & Book</Link>
                          </div>
                        </div>
                      </div>
                  )
                })}
              </>) : (<><h2>ServicesBySubcategorys Not Found</h2></>)}
            </>)}


          </div>
          <div className="row">
            <div className="col-md-12 text-center">
                <Link to="/contact" className="btn btn-primary">Contact us</Link>
              </div>
          </div>
        </div>
      </section>
      {/* end ServicesBySubcategorys */}

    </>
  )
}
export default ServicesBySubcategory
