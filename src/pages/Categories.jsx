import React, { useEffect, useState } from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
import Breadcrumbs from '../common/Breadcrumbs'
import HomeAppointment from '../common/HomeAppointment'
import api from '../utils/AxiosConfig'
import { Link } from 'react-router-dom'

function Categories() {
    return (
        <div>
            <Header />
            <CategoriesContent />
            <Footer />
        </div>
    )
}

function CategoriesContent() {
    return (
        <>
            <Breadcrumbs title="Categories" />
            <CategoriesCard />
            <HomeAppointment />
        </>
    )
}

function CategoriesCard() {
    let [categories, setCategories] = useState([])
    let [error, setError] = useState("")
    let [loading, setLoading] = useState(false)

    async function FetchCategories() {
        try {
            setLoading(true)
            let response = await api.get("/category")
            console.log(response.data.category);
            
            if (response.data.success) {
                setCategories(response.data.category)
                
            }
        }
        catch (e) {
            setError(e.response?.data?.message || e.message || "Failed to load categories")
        }
        finally {
            setLoading(false)
        }
    }
    useEffect(() => {
        FetchCategories()
    }, [])
    if (error) {return <h2>{error}</h2>}
    return (
        <>
            <section className="section-spacing">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="section-title text-center">
                                <h2><span>Our Categories</span></h2>
                                <p>Our product is fully personalized and well balanced for all age of customers or adults. We maintain the standards by lorem ipsum and certified by dolor set amet.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {loading ? (<> <h2>Loading...</h2></>) : (<>
                            {categories ? (<>
                                {categories.map((value, index) => {
                                    return (
                                        <>
                                            <div className="col-sm-6 col-md-4">
                                                <div className="gallery-item wow fadeIn">
                                                    <Link to={`/subcategoriesbycategory/${value._id}`} className="venobox" data-gall="gallery">
                                                        <img src={value.category_image ? `http://localhost:8000${value.category_image}` : "/img/gallery/1.jpg"} style={{height:"100%", width:"100%"}} alt={value.category_name || "Category"} />
                                                        <div className="gallery-caption text-center">
                                                            <i className="fa fa-heart-o" />
                                                            <h3>{value.category_name}</h3>
                                                            <p>{value.category_description}</p>
                                                        </div>
                                                    </Link>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })}
                            </>) : (<><h2>Categories not found</h2></>)}
                        </>)}


                    </div>
                </div>
            </section>
            {/* end gallery */}

        </>
    )
}

export default Categories
