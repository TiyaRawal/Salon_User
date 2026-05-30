import { useState } from "react"
import { useNavigate } from "react-router-dom";
import api from "../utils/AxiosConfig"
import Header from "../common/Header";
import Footer from "../common/Footer";



function Signup() {
    return (
        <>
            <Header/>
            <SignupComponent />
            <Footer/>
           
        </>
    )
}
function SignupComponent() {
    return (
        <>
            
            <SignupForm/>
            
        </>
    )
}
function SignupForm() {
    let navigate=useNavigate()
    let[loading,setLoading]=useState(false)
    let[user,setUser]=useState({
        full_name:"",
        email:"",
        mobile_no:"",
        city:"",
        password:""
    })
function HandleInputChange(e){
    let{name,value}=e.target;
    setUser((prev)=>({
        ...prev,
        [name]:value
    }))
}
let handleSubmit=async(e)=>{
    e.preventDefault();
    setLoading(true)
    try{
        let response=await api.post("/signup",user)
        setUser({
        full_name:"",
        email:"",
        mobile_no:"",
        city:"",
        password:""
        })
        if(response.data.success){
            alert(response.data.message);
            navigate("/login")

        }
    }
    catch(e){
        setUser({
        full_name:"",
        email:"",
        mobile_no:"",
        city:"",
        password:""
        })
        alert(e.response?.data?.message || "Signup failed!")
    }
    finally{
        setLoading(false)
    }
}
    return (
        <>
            <section className="section-spacing">
                <div className="container">
                    <div className="row">
                        
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="section-title text-center">
                                <h2><span>Sign up !</span></h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 col-lg-8 offset-lg-2">
                            <form id="contactForm" onSubmit={handleSubmit} className="contact-form wow fadeIn" data-toggle="validator" method="post">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <input placeholder="Full Name" onChange={HandleInputChange} value={user.full_name} id="full_name" className="form-control" name="full_name" type="text" required data-error="Please enter your full name" />
                                            <div className="help-block with-errors" />
                                        </div>
                                    </div>
                                   
                                </div>
                                <div className="form-group">
                                    <input placeholder="Email Address" onChange={HandleInputChange} value={user.email} id="email" className="form-control" name="email" type="email" required data-error="Please enter your valid email address" />
                                    <div className="help-block with-errors" />
                                </div>
                                <div className="form-group">
                                    <input placeholder="Mobile Number" onChange={HandleInputChange} value={user.mobile_no} id="mobile_no" className="form-control" name="mobile_no" type="text" required data-error="Please enter your mobile number" />
                                    <div className="help-block with-errors" />
                                </div>
                                <div className="form-group">
                                    <input placeholder="Enter your city" onChange={HandleInputChange} value={user.city} id="city" className="form-control" name="city" type="text" required data-error="Please enter your city" />
                                    <div className="help-block with-errors" />
                                </div>
                                <div className="form-group">
                                    <input placeholder="Enter Your Password" onChange={HandleInputChange} value={user.password} id="password" className="form-control" name="password" type="password" required data-error="Please enter your password" />
                                    <div className="help-block with-errors" />
                                </div>
                               
                                <div className="text-center">
                                    <input value={loading?"Creating account...":"Sign up"} name="submit" className="btn btn-primary" type="submit" />
                                    <div id="msgSubmit" className="hidden" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            {/* end contact */}
        
        </>
    )
}

export default Signup