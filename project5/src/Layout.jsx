
import React from "react";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import { Outlet } from "react-router-dom";

function Layout() {
    return ( <>
    <Header/>
    <Outlet/>
    <Footer/>
    </> );
}

export default Layout;