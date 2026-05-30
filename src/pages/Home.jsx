import React, { useEffect, useState } from 'react'
import HomeAppointment from '../common/HomeAppointment'
import Team from '../common/Team'
import Header from '../common/Header'
import Footer from '../common/Footer'
import HomeUs from '../common/HomeUs'
import HomeService from '../common/HomeService'
import api from '../utils/AxiosConfig'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <>
            <div>
                <Header />
                <HomeContent />
                <Footer />
            </div>

        </>
    )
}

function HomeContent() {
    return (
        <>
            <HomeBanner />
            <HomeService />
            <HomeUs />
            <HomePricing />
            <HomeGallery /> 
            <HomeAppointment />
            <Team />
            <HomeFacts />
            <HometTestimonials />
        </>
    )
}
function HomeBanner() {
    return (
        <>
            <section className="carousel slide" id="banner" data-ride="carousel" data-pause="false">
                <div className="carousel-inner">
                    <div className="carousel-item active" style={{ backgroundImage: 'url(img/banner/slide-1.jpg)' }}>
                        <div className="banner-caption">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-7">
                                        <div className="hero-text">
                                            <h6 className="animated fadeInDown">Consetetur Adipiscing</h6>
                                            <h1 className="animated fadeInUp">Soft &amp; Pure Spa Salon</h1>
                                            <p className="animated fadeInUp">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt ullamcorper magna, in tincidunt ex auctor et.</p>
                                            <Link to="/contact" className="btn btn-primary animated fadeInUp">Contact Us</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item" style={{ backgroundImage: 'url(img/banner/slide-2.jpg)' }}>
                        <div className="banner-caption">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-7">
                                        <div className="hero-text">
                                            <h6 className="animated fadeInLeft">Consetetur Adipiscing</h6>
                                            <h1 className="animated fadeInLeft">Soft &amp; Pure Spa Salon</h1>
                                            <p className="animated fadeInLeft">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt ullamcorper magna, in tincidunt ex auctor et.</p>
                                            <Link to="/contact" className="btn btn-primary animated fadeInLeft">Contact Us</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item" style={{ backgroundImage: 'url(img/banner/slide-3.jpg)' }}>
                        <div className="banner-caption">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-7">
                                        <div className="hero-text">
                                            <h6 className="animated fadeInRight">Consetetur Adipiscing</h6>
                                            <h1 className="animated fadeInRight">Soft &amp; Pure Spa Salon</h1>
                                            <p className="animated fadeInRight">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt ullamcorper magna, in tincidunt ex auctor et.</p>
                                            <Link to="/contact" className="btn btn-primary animated fadeInRight">Contact Us</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ol className="carousel-indicators">
                        <li data-target="#banner" data-slide-to={0} className="active" />
                        <li data-target="#banner" data-slide-to={1} />
                        <li data-target="#banner" data-slide-to={2} />
                    </ol>
                </div>
            </section>
            {/* end banner */}
        </>
    )
}





function HomePricing() {
    return (
        <>
            <section className="section-spacing">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="section-title text-center">
                                <h2><span>Cheapest pricing plan</span></h2>
                                <p>Our product is fully personalized and well balanced for all age of customers or adults. We maintain the standards by lorem ipsum and certified by dolor set amet.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="pricing-table wow fadeIn">
                                <div className="thumb">
                                    <img src="img/pricing/1.jpg" alt />
                                </div>
                                <div className="pricing-info text-center">
                                    <h3>Basic</h3>
                                    <ul>
                                        <li>Nail Cutting</li>
                                        <li>Hair Coloring</li>
                                        <li>Spa Therapy</li>
                                        <li>Body massage</li>
                                        <li>Manicure</li>
                                    </ul>
                                    <h2><sub>$</sub>29.00</h2>
                                    <Link to="/contact" className="btn btn-default">Contact Us</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="pricing-table wow fadeIn">
                                <div className="thumb">
                                    <img src="img/pricing/2.jpg" alt />
                                </div>
                                <div className="pricing-info text-center">
                                    <h3>Medium</h3>
                                    <ul>
                                        <li>Nail Cutting</li>
                                        <li>Hair Coloring</li>
                                        <li>Spa Therapy</li>
                                        <li>Body massage</li>
                                        <li>Manicure</li>
                                    </ul>
                                    <h2><sub>$</sub>39.00</h2>
                                    <Link to="/contact" className="btn btn-default">Contact Us</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="pricing-table wow fadeIn">
                                <div className="thumb">
                                    <img src="img/pricing/3.jpg" alt />
                                </div>
                                <div className="pricing-info text-center">
                                    <h3>Ultimate</h3>
                                    <ul>
                                        <li>Nail Cutting</li>
                                        <li>Hair Coloring</li>
                                        <li>Spa Therapy</li>
                                        <li>Body massage</li>
                                        <li>Manicure</li>
                                    </ul>
                                    <h2><sub>$</sub>49.00</h2>
                                    <Link to="/contact" className="btn btn-default">Contact Us</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* end pricing */}
        </>
    )
}

function HomeGallery() {
     let [categories, setCategories] = useState([])
    let [error, setError] = useState("")
    let [loading, setLoading] = useState(false)

    async function FetchCategories() {
        try {
            setLoading(true)
            let response =await api.get("/category")
            if (response.data.category) {
                setCategories(response.data.category.slice(0,6))
            }
        }
        catch (e) {
            setError(e)
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
            <section className="section-spacing inverse-bg">
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
                                                    <a href={value.category_image ? `http://localhost:8000${value.category_image}` : "/img/gallery/1.jpg"} className="venobox" data-gall="gallery">
                                                        <img src={value.category_image ? `http://localhost:8000${value.category_image}` : "/img/gallery/1.jpg"} alt={value.category_name || "Category"} />
                                                        <div className="gallery-caption text-center">
                                                            <i className="fa fa-heart-o" />
                                                            <h3>{value.category_name}</h3>
                                                            <p>{value.category_description}</p>
                                                        </div>
                                                    </a>
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



function HomeFacts() {
    return (
        <>
            <section className="section-spacing">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <div className="fun-fact-img wow fadeIn">
                                <img className="tilt-img" src="img/fun-facts/1.png" alt />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-xs-6 col-sm-6 col-md-6 text-center">
                                    <div className="features-info">
                                        <span className="counter">800</span>
                                        <h3>Clients</h3>
                                    </div>
                                </div>
                                <div className="col-xs-6 col-sm-6 col-md-6 text-center">
                                    <div className="features-info">
                                        <span className="counter">50</span>
                                        <h3>Therapists</h3>
                                    </div>
                                </div>
                                <div className="col-xs-6 col-sm-6 col-md-6 text-center">
                                    <div className="features-info">
                                        <span className="counter">35</span>
                                        <h3>Procedures</h3>
                                    </div>
                                </div>
                                <div className="col-xs-6 col-sm-6 col-md-6 text-center">
                                    <div className="features-info">
                                        <span className="counter">890</span>
                                        <h3>Treatments</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* end fun facts */}
        </>
    )
}

function HometTestimonials() {
    return (
        <>
            <section className="section-spacing inverse-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="section-title text-center">
                                <h2><span>Happy Clients</span></h2>
                                <p>Our product is fully personalized and well balanced for all age of customers or adults. We maintain the standards by lorem ipsum and certified by dolor set amet.</p>
                            </div>
                        </div>
                    </div>
                    <div className="owl-carousel testimonial-carousel">
                        <div className="testimonial-list">
                            <div className="author-comment">
                                <div className="quote">
                                    <i className="fa fa-quote-left" />
                                </div>
                                <p>Dummy text is text that is used in the publishing industry or by web designers to occupy the space which will later be filled with ‘real’ content. This is required when, for example, the final text is not yet available.</p>
                            </div>
                            <div className="author-info">
                                <div className="author_thumb">
                                    <img src="img/testimonials/1.png" alt />
                                </div>
                                <div className="author-meta">
                                    <span className="author-name">David Warner</span>
                                    <span className="designation"><em>Envato Customer</em></span>
                                </div>
                            </div>
                        </div>
                        <div className="testimonial-list">
                            <div className="author-comment">
                                <div className="quote">
                                    <i className="fa fa-quote-left" />
                                </div>
                                <p>Dummy text is text that is used in the publishing industry or by web designers to occupy the space which will later be filled with ‘real’ content. This is required when, for example, the final text is not yet available.</p>
                            </div>
                            <div className="author-info">
                                <div className="author_thumb">
                                    <img src="img/testimonials/2.png" alt />
                                </div>
                                <div className="author-meta">
                                    <span className="author-name">Alex Smith</span>
                                    <span className="designation"><em>Envato Customer</em></span>
                                </div>
                            </div>
                        </div>
                        <div className="testimonial-list">
                            <div className="author-comment">
                                <div className="quote">
                                    <i className="fa fa-quote-left" />
                                </div>
                                <p>Dummy text is text that is used in the publishing industry or by web designers to occupy the space which will later be filled with ‘real’ content. This is required when, for example, the final text is not yet available.</p>
                            </div>
                            <div className="author-info">
                                <div className="author_thumb">
                                    <img src="img/testimonials/3.png" alt />
                                </div>
                                <div className="author-meta">
                                    <span className="author-name">David Warner</span>
                                    <span className="designation"><em>Envato Customer</em></span>
                                </div>
                            </div>
                        </div>
                        <div className="testimonial-list">
                            <div className="author-comment">
                                <div className="quote">
                                    <i className="fa fa-quote-left" />
                                </div>
                                <p>Dummy text is text that is used in the publishing industry or by web designers to occupy the space which will later be filled with ‘real’ content. This is required when, for example, the final text is not yet available.</p>
                            </div>
                            <div className="author-info">
                                <div className="author_thumb">
                                    <img src="img/testimonials/1.png" alt />
                                </div>
                                <div className="author-meta">
                                    <span className="author-name">Alex Smith</span>
                                    <span className="designation"><em>Envato Customer</em></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* end team testimonials */}
        </>
    )
}
export default Home
