import React, { useEffect, useState } from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
import Breadcrumbs from '../common/Breadcrumbs'
import api from '../utils/AxiosConfig'
import CheckToken from '../utils/CheckToken'

function ChangePassword() {
    return (
        <>
            <Header />
            <ChangePasswordContent />
            <Footer />
        </>
    )
}

function ChangePasswordContent() {
    return (
        <>
            <Breadcrumbs title="Change Password" />
            <ChangePasswordForm />
        </>
    )
}

function ChangePasswordForm() {
    let [formData, setFormData] = useState({
        email: "",
        old_password: "",
        new_password: ""
    })

    useEffect(() => {
        const token = CheckToken()
        if (token) {
            try {
                let payload = JSON.parse(atob(token.split('.')[1]))
                setFormData((prev) => ({ ...prev, email: payload.email || "" }))
            } catch (e) {
                console.log(e)
            }
        }
    }, [])

    function HandleInputChange(e) {
        let { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    async function HandleSubmit(e) {
        e.preventDefault()
        try {
            let response = await api.put("/changepassword", formData)
            if (response.data.success) {
                alert(response.data.message)
                setFormData((prev) => ({ ...prev, old_password: "", new_password: "" }))
            }
        } catch (e) {
            alert(e.response?.data?.message || "Password change failed")
        }
    }

    return (
        <section className="section-spacing">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-lg-8 offset-lg-2">
                        <form className="contact-form" onSubmit={HandleSubmit}>
                            <div className="form-group">
                                <input className="form-control" type="email" name="email" placeholder="Email" value={formData.email} onChange={HandleInputChange} required />
                            </div>
                            <div className="form-group">
                                <input className="form-control" type="password" name="old_password" placeholder="Old Password" value={formData.old_password} onChange={HandleInputChange} required />
                            </div>
                            <div className="form-group">
                                <input className="form-control" type="password" name="new_password" placeholder="New Password" value={formData.new_password} onChange={HandleInputChange} required />
                            </div>
                            <div className="text-center">
                                <button type="submit" className="btn btn-primary">Change Password</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ChangePassword