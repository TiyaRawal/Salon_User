import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../common/Header'
import Breadcrumbs from '../common/Breadcrumbs'
import Footer from '../common/Footer'

function Blog() {
    return (
        <>
            <Header/>
            <Breadcrumbs title="Latest News"/>
            <section className="section-spacing">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="section-title text-center">
                                <h2><span>Latest news</span></h2>
                                <p>Our product is fully personalized and well balanced for all age of customers or adults. We maintain the standards by lorem ipsum and certified by dolor set amet.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-8">
                           
                            <div className="news-block">
                                <div className="news-thumb">
                                    <img src="img/news/2.jpg" alt />
                                    <div className="overlay">
                                        <Link to="/blog"><i className="fa fa-link" /></Link>
                                    </div>
                                </div>
                                <div className="news-bottom">
                                    <ul className="post-meta list-inline">
                                        <li className="list-inline-item"><a href="#"><i className="fa fa-user" /> admin</a></li>
                                        <li className="list-inline-item"><i className="fa fa-calendar" /> 20 Oct, 2018</li>
                                        <li className="list-inline-item"><i className="fa fa-eye" /> 10</li>
                                    </ul>
                                    <h3><Link to="/blog">The balance &amp; harmony of body and mind</Link></h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                    <Link to="/blog" className="btn btn-link">Continue Reading <i className="fa fa-angle-double-right" /></Link>
                                </div>
                            </div>
                            <div className="news-block">
                                <div className="news-thumb">
                                    <img src="img/news/3.jpg" alt />
                                    <div className="overlay">
                                        <Link to="/blog"><i className="fa fa-link" /></Link>
                                    </div>
                                </div>
                                <div className="news-bottom">
                                    <ul className="post-meta list-inline">
                                        <li className="list-inline-item"><a href="#"><i className="fa fa-user" /> admin</a></li>
                                        <li className="list-inline-item"><i className="fa fa-calendar" /> 20 Oct, 2018</li>
                                        <li className="list-inline-item"><i className="fa fa-eye" /> 10</li>
                                    </ul>
                                    <h3><Link to="/blog">The balance &amp; harmony of body and mind</Link></h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                    <Link to="/blog" className="btn btn-link">Continue Reading <i className="fa fa-angle-double-right" /></Link>
                                </div>
                            </div>
                            <div className="news-block">
                                <div className="news-thumb">
                                    <img src="img/news/4.jpg" alt />
                                    <div className="overlay">
                                        <Link to="/blog"><i className="fa fa-link" /></Link>
                                    </div>
                                </div>
                                <div className="news-bottom">
                                    <ul className="post-meta list-inline">
                                        <li className="list-inline-item"><a href="#"><i className="fa fa-user" /> admin</a></li>
                                        <li className="list-inline-item"><i className="fa fa-calendar" /> 20 Oct, 2018</li>
                                        <li className="list-inline-item"><i className="fa fa-eye" /> 10</li>
                                    </ul>
                                    <h3><Link to="/blog">The balance &amp; harmony of body and mind</Link></h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                    <Link to="/blog" className="btn btn-link">Continue Reading <i className="fa fa-angle-double-right" /></Link>
                                </div>
                            </div>
                            <div className="news-block">
                                <div className="news-thumb">
                                    <img src="img/news/5.jpg" alt />
                                    <div className="overlay">
                                        <Link to="/blog"><i className="fa fa-link" /></Link>
                                    </div>
                                </div>
                                <div className="news-bottom">
                                    <ul className="post-meta list-inline">
                                        <li className="list-inline-item"><a href="#"><i className="fa fa-user" /> admin</a></li>
                                        <li className="list-inline-item"><i className="fa fa-calendar" /> 20 Oct, 2018</li>
                                        <li className="list-inline-item"><i className="fa fa-eye" /> 10</li>
                                    </ul>
                                    <h3><Link to="/blog">The balance &amp; harmony of body and mind</Link></h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                    <Link to="/blog" className="btn btn-link">Continue Reading <i className="fa fa-angle-double-right" /></Link>
                                </div>
                            </div>
                            <div className="news-block">
                                <div className="news-thumb">
                                    <img src="img/news/6.jpg" alt />
                                    <div className="overlay">
                                        <Link to="/blog"><i className="fa fa-link" /></Link>
                                    </div>
                                </div>
                                <div className="news-bottom">
                                    <ul className="post-meta list-inline">
                                        <li className="list-inline-item"><a href="#"><i className="fa fa-user" /> admin</a></li>
                                        <li className="list-inline-item"><i className="fa fa-calendar" /> 20 Oct, 2018</li>
                                        <li className="list-inline-item"><i className="fa fa-eye" /> 10</li>
                                    </ul>
                                    <h3><Link to="/blog">The balance &amp; harmony of body and mind</Link></h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                    <Link to="/blog" className="btn btn-link">Continue Reading <i className="fa fa-angle-double-right" /></Link>
                                </div>
                            </div>
                           
                        </div>
                        <div className="col-md-4">
                            <div className="sidebar">
                                <div className="sidebar-item">
                                    <form method="post" action="#">
                                        <div className="input-group">
                                            <input type="text" className="form-control" placeholder="Enter keyword..." name="search" />
                                            <span className="input-group-addon"><button type="submit"><i className="fa fa-search" /></button></span>
                                        </div>
                                    </form>
                                </div>
                                {/*end sidebar-item*/}
                                <div className="sidebar-item sidebar-widget">
                                    <h3>Categories</h3>
                                    <ul className="category-list">
                                        <li><a href="#">Herbal Spa</a></li>
                                        <li><a href="#">Stone Message</a></li>
                                        <li><a href="#">Body Message</a></li>
                                        <li><a href="#">Aromatherapy</a></li>
                                    </ul>
                                </div>
                                {/*end sidebar-item*/}
                                <div className="sidebar-item sidebar-widget">
                                    <h3>Archive</h3>
                                    <ul className="archive-list">
                                        <li><a href="#">October 2018</a></li>
                                        <li><a href="#">May 2018</a></li>
                                        <li><a href="#">April 2018</a></li>
                                        <li><a href="#">March 2018</a></li>
                                        <li><a href="#">February 2018</a></li>
                                        <li><a href="#">January 2018</a></li>
                                    </ul>
                                </div>
                                {/*end sidebar-item*/}
                                <div className="sidebar-item sidebar-widget">
                                    <h3>Tag Cloudes</h3>
                                    <ul className="tag-list">
                                        <li><a href="#">spa</a></li>
                                        <li><a href="#">wellness center</a></li>
                                        <li><a href="#">beauty parlour</a></li>
                                        <li><a href="#">beauty care</a></li>
                                        <li><a href="#">massage</a></li>
                                        <li><a href="#">salon</a></li>
                                        <li><a href="#">skin care</a></li>
                                    </ul>
                                </div>{/*end sidebar-item*/}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>       
            {/* end news */}

        </>
    )
}

export default Blog
