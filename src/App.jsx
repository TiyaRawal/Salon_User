import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Profile from "./pages/Profile"
import About from "./pages/About"
import Categories from "./pages/Categories"
import ChangePassword from "./pages/ChangePassword"
import Blog from "./pages/Blog"
import Contact from "./pages/Contact"
import Bookings from "./pages/Booking"
import SubcategoriesByCategory from "./pages/SubcategoriesByCategory"
import Service from "./pages/Service"
import Servicedetails from "./pages/Servicedetails"
import ServicesByCategory from "./pages/ServicesByCategory"
import ServicesBySubcategory from "./pages/ServicesBySubcategory"


function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/"element={<Home/>}/>
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/profile" element={<Profile/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/categories" element={<Categories/>} />
      <Route path="/changepassword" element={<ChangePassword/>} />
      <Route path="/blog" element={<Blog/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/bookings" element={<Bookings/>} />
      <Route path="/services" element={<Service/>} />
      <Route path="/servicedetails/:id" element={<Servicedetails/>} />
      <Route path="/servicesbycategory/:id" element={<ServicesByCategory/>} />
      <Route path="/servicesbysubcategory/:id" element={<ServicesBySubcategory/>} />
      <Route path="/subcategoriesbycategory/:id" element={<SubcategoriesByCategory/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
