import { useState } from "react"
import { useNavigate } from "react-router-dom";
import cookie from "js-cookie"
import api from "../utils/AxiosConfig"
import Header from "../common/Header";
import Footer from "../common/Footer";
import Breadcrumbs from "../common/Breadcrumbs";


function Login() {
    return (
        <>
            <Header/>  
            <LoginComponent />
            <Footer/>
           
        </> 
    )
}
function LoginComponent() {
    return (
        <>
            <Breadcrumbs title="Login Now"/>
            <LoginForm/>
            
        </>
    )
}
function LoginForm() {

     let navigate=useNavigate()
    let[loading,setLoading]=useState(false)
    let[user,setUser]=useState({
        email:"",
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
    e.preventDefault()
    setLoading(true)
    try{
        let response=await api.post("/login",user)
        if(response.data.success){
            setUser({
            email:"",
            password:""
            })
            cookie.set("token",response.data.token);
            alert(response.data.message);
            
            navigate("/")

        }
        
    }
    catch(e){
        setUser({
        email:"",
        password:""
        })
        alert(e.response?.data?.message || "Login failed!")
    }
    finally{
        setLoading(false)
    }
    
}
console.log(user);

    return (
        <>
            <section className="section-spacing">
                <div className="container">
                    <div className="row">
                        
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="section-title text-center">
                                <h2><span>Login !   </span></h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 col-lg-8 offset-lg-2">
                            <form id="contactForm" onSubmit={handleSubmit} className="contact-form wow fadeIn" data-toggle="validator" method="post">
                                <div className="row">
                                    <div className="col-md-12">
                                        
                                    </div>
                                   
                                </div>
                                <div className="form-group">
                                    <input placeholder="Email Address" onChange={HandleInputChange} value={user.email} id="email" className="form-control" name="email" type="email" required data-error="Please enter your valid email address" />
                                    <div className="help-block with-errors" />
                                </div>
                                
                                <div className="form-group">
                                    <input placeholder="Enter Your Password" onChange={HandleInputChange} value={user.password} id="password" className="form-control" name="password" type="password" required data-error="Please enter your password" />
                                    <div className="help-block with-errors" />
                                </div>
                               
                                <div className="text-center">
                                    <input value={loading?"Fetching account...":"Login"} name="submit" className="btn btn-primary" type="submit" />
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

export default Login