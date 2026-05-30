import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Logout from '../utils/Logout'
import CheckToken from '../utils/CheckToken'

function Header() {
    let[token,setToken]=useState(false)
    useEffect(()=>{
        let token=CheckToken()
        if(token){
            setToken(token)
        }
    },[])
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-white">
                <div className="container wide-container">
                    <Link className="navbar-brand" to="/">
                        <img src="../img/logo.png" alt="Logo" />
                    </Link>
                    <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#main-nav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="main-nav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/">Home</Link>					</li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About Us</Link>					</li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/categories">Categories</Link>					</li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/services">Services</Link>					</li>
                           
                            
                            <li className="nav-item">
                                <Link className="nav-link" to="/blog">Blog</Link>					</li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">Contact Us</Link>					</li>
                                {token!=""?(<>
                                    <li className="nav-item">
                                <Link className="nav-link" onClick={Logout}>Logout</Link>		</li>
                                    <li className="nav-item btn-appointment">
                                <Link className="nav-link" to="/bookings">My Bookings</Link>		</li>
                                <li className="nav-item btn-appointment">
                                <Link className="nav-link" to="/profile">Profile</Link>					</li>
                                </>):
                                (<>
                                    <li className="nav-item">
                                <Link className="nav-link" to="/signup">Signup</Link>		</li>
                             <li className="nav-item">
                                <Link className="nav-link" to="/login">Login</Link>		</li>
                                </>)}
                             
                            
                        </ul>
                    </div>
                </div>
            </nav>
            {/* end nav */}

        </>
    )
}

export default Header
