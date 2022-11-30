import {Outlet} from "react-router-dom"
import Footer from "../../layout/Footer"
import Navbar from "../../layout/Navbar"

export const HomePage =() => {
    return (
        <> 
            <Navbar/>
            <Outlet/>
            <Footer/>
        </>
    )
}