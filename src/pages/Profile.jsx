import React, { useEffect, useState } from 'react'
import Breadcrumbs from '../common/Breadcrumbs'
import Footer from '../common/Footer'
import Header from '../common/Header'
import api from '../utils/AxiosConfig'
import { Link } from 'react-router-dom'

function Profile() {
    return (
        <>
            <Header />
            <ProfileContent />
            <Footer />
        </>
    )
}

function ProfileContent() {
    return (
        <>
            <Breadcrumbs title="My Profile" />
            <UserProfileForm />
        </>
    )
}

function UserProfileForm() {
    let [user, setUser] = useState({})
    let [formData, setFormData] = useState({
        full_name: "",
        mobile_no: "",
        city: ""
    })
    let [profileImage, setProfileImage] = useState(null)
    let [loading, setLoading] = useState(true)
    let [error, setError] = useState("")

    async function FetchUserProfile() {

        try {

            let response = await api.get("/profile");
            console.log(response.data);
            if (response.data.success) {
                let profileData = response.data.data || response.data.user || {}
                setUser(profileData)
                setFormData({
                    full_name: profileData.full_name || "",
                    mobile_no: profileData.mobile_no || "",
                    city: profileData.city || ""
                })




            }

        } catch (e) {
            setError(e.response?.data?.message || e.message || "Failed to load profile")

        }
        finally {
            setLoading(false)
            
        }

    }
    useEffect(() => {
        FetchUserProfile()
    }, [])

    function HandleInputChange(e) {
        let { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    function HandleFileChange(e) {
        setProfileImage(e.target.files[0])
    }

    async function HandleSubmit(e) {
        e.preventDefault()
        try {
            let data = new FormData()
            data.append("user_id", user._id)
            data.append("full_name", formData.full_name)
            data.append("mobile_no", formData.mobile_no)
            data.append("city", formData.city)
            if (profileImage) {
                data.append("profile_image", profileImage)
            }

            let response = await api.put("/updateprofile", data, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            })

            if (response.data.success) {
                alert(response.data.message)
                FetchUserProfile()
            }
        } catch (e) {
            alert(e.response?.data?.message || "Profile update failed")
        }
    }

    if (error) {
        return <h2>{error}</h2>
    }
    return (
        <>

            {loading ? (<>
                <div className="row">
                    <div className="col-md-12 col-lg-8 offset-lg-2">
                        <div className="contact-form">

                            {/* Profile Image */}
                            <div className="text-center mb-4">
                                <div
                                    className="skeleton"
                                    style={{ width: "120px", height: "120px", borderRadius: "50%", margin: "auto" }}
                                />
                                <div
                                    className="skeleton mt-2"
                                    style={{ height: "40px", width: "60%", margin: "auto" }}
                                />
                            </div>

                            <div className="row">

                                <div className="col-md-6">
                                    <div className="skeleton" style={{ height: "45px", marginBottom: "15px" }} />
                                </div>

                                <div className="col-md-6">
                                    <div className="skeleton" style={{ height: "45px", marginBottom: "15px" }} />
                                </div>

                            </div>

                            <div className="row">

                                <div className="col-md-6">
                                    <div className="skeleton" style={{ height: "45px", marginBottom: "15px" }} />
                                </div>

                                <div className="col-md-6">
                                    <div className="skeleton" style={{ height: "45px", marginBottom: "15px" }} />
                                </div>

                            </div>

                            {/* Button */}
                            <div className="text-center">
                                <div
                                    className="skeleton"
                                    style={{ height: "45px", width: "150px", margin: "auto" }}
                                />
                            </div>

                        </div>
                    </div>
                </div>
            </>) : (<>
                <section className="section-spacing">
                    <div className="container">

                        {/* Title */}
                        <div className="row">
                            <div className="col-md-12">
                                <div className="section-title text-center">
                                    <h2><span>My Profile</span></h2>
                                </div>
                            </div>
                        </div>

                        {/* Profile Form */}
                        <div className="row">
                            <div className="col-md-12 col-lg-8 offset-lg-2">
                                <form className="contact-form" onSubmit={HandleSubmit}>

                                    {/* Profile Image */}
                                    <div className="text-center mb-4">
                                        <img
                                            src={user.profile_image ? `http://localhost:8000${user.profile_image}` : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCKnkcldvTLRKwVmiqfMYdxuK04cx_OiBQnQ&s"}
                                            alt="profile"
                                            style={{ borderRadius: "50%", width: "120px", height: "120px" }}
                                        />
                                        <div className="mt-2">
                                            <input type="file" className="form-control" onChange={HandleFileChange} />
                                        </div>
                                    </div>

                                    <div className="row">

                                        {/* Full Name */}
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Full Name"
                                                    name="full_name"
                                                    value={formData.full_name}
                                                    onChange={HandleInputChange}
                                                />
                                            </div>
                                        </div>

                                        {/* Email */}
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    placeholder="Email Address"
                                                    value={user.email || ""}
                                                    readOnly />
                                            </div>
                                        </div>

                                    </div>

                                    <div className="row">

                                        {/* Mobile Number */}
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Mobile Number"
                                                    name="mobile_no"
                                                    value={formData.mobile_no}
                                                    onChange={HandleInputChange}
                                                />
                                            </div>
                                        </div>

                                        {/* City */}
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="City"
                                                    name="city"
                                                    value={formData.city}
                                                    onChange={HandleInputChange}
                                                />
                                            </div>
                                        </div>

                                    </div>



                                    {/* Submit Button */}
                                    <div className="text-center mt-4 d-flex justify-content-center flex-wrap" style={{ gap: "12px" }}>
                                        <button type="submit" className="btn btn-primary">
                                            Update Profile
                                        </button>
                                   
                                        <Link to="/changepassword" className="btn btn-primary">
                                            Change Password
                                        </Link>
                                    </div>


                                   

                                </form>
                            </div>
                        </div>

                    </div>
                </section>

            </>)}

        </>
    )
}

export default Profile
