import React, { useEffect, useState } from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
import Breadcrumbs from '../common/Breadcrumbs'
import HomeAppointment from '../common/HomeAppointment'
import api from '../utils/AxiosConfig'
import { Link, useLocation } from 'react-router-dom'

function SubcategoriesByCategory() {
    return (
        <div>
            <Header />
            <SubcategoriesByCategoryContent />
            <Footer />
        </div>
    )
}

function SubcategoriesByCategoryContent() {
    return (
        <>
            <Breadcrumbs title="SubcategoriesByCategory" />
            <SubcategoriesByCategoryCard />
            <HomeAppointment />
        </>
    )
}

function SubcategoriesByCategoryCard() {
    let location = useLocation()
    let id = location.pathname.split("/")[2]
    let [SubcategoriesByCategory, setSubcategoriesByCategory] = useState([])
    let [error, setError] = useState("")
    let [loading, setLoading] = useState(false)

    async function FetchSubcategoriesByCategory() {
        try {
            setLoading(true)
            let response = await api.get(`/subcategories/${id}`)
            if (response.data.subcategories) {
                console.log(response.data.subcategories);
                
                setSubcategoriesByCategory(response.data.subcategories)
            }
        }
        catch (e) {
            setError(e.response?.data?.message || e.message || "Failed to load subcategories")
        }
        finally {
            setLoading(false)
        }
    }
    useEffect(() => {
        FetchSubcategoriesByCategory()
    }, [id])
    if (error) {return <h2>{error}</h2>}
    return (
        <>
            <section className="section-spacing">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="section-title text-center">
                                <h2><span>Our SubcategoriesByCategory</span></h2>
                                <p>Our product is fully personalized and well balanced for all age of customers or adults. We maintain the standards by lorem ipsum and certified by dolor set amet.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {loading ? (<> <h2>Loading...</h2></>) : (<>
                            {SubcategoriesByCategory ? (<>
                                {SubcategoriesByCategory.map((value) => {
                                    return (
                                            <div className="col-sm-6 col-md-4" key={value._id}>
                                                <div className="gallery-item wow fadeIn">
                                                    <Link to={`/servicesbysubcategory/${value._id}`} className="venobox" data-gall="gallery">
                                                        <img src={value.subcategory_image ? `http://localhost:8000${value.subcategory_image}` : "/img/gallery/1.jpg"} style={{height:"100%", width:"100%"}} alt={value.subcategory_name} />
                                                        <div className="gallery-caption text-center">
                                                            <i className="fa fa-heart-o" />
                                                            <h3>{value.subcategory_name}</h3>
                                                            <p>{value.subcategory_description}</p>
                                                        </div>
                                                    </Link>
                                                </div>
                                            </div>
                                    )
                                })}
                            </>) : (<><h2>SubcategoriesByCategory not found</h2></>)}
                        </>)}


                    </div>
                </div>
            </section>
            {/* end gallery */}

        </>
    )
}

export default SubcategoriesByCategory
