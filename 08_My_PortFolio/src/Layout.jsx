
import React from "react";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import { Outlet } from "react-router-dom";
import CardContainer from "./Components/CardContainers/CardContainers";



const cardsData = [
    {
      image: './img/class.jpg  ',
      name:"Eduverse",
      description: ' Scalable Education Management System',
      technologies: ["Angular",  "Spring Boot", "RESTful APIs", "MySQL", "Hibernate"],
      link: 'https://github.com/Saksheekolekar/Eduverse'
    },
    {
      image: './img/pack.jpg',
      name:"Olpx",
      description: 'Online Product Exchange System (Educational Project)',
      technologies: ["Java", "JSP", "JDBC", "PostgreSQL", "Bootstrap", "Spring Boot", "Hibernate", "React"],
      link: 'https://github.com/Saksheekolekar/OLPX_Online_Product_Exchange_System'
    },
    {
      image: './img/p.jpg',
      name:"LetsWrite",
      description: "A Full-Stack Blogging Application",
      technologies: ["React", "Appwrite", "React Router", "Redux Toolkit", "Tailwind CSS", "TinyMCE", "HTML-React-Parser", "React Hook Form"]
      ,
      link: 'https://github.com/Saksheekolekar/Learn-React/tree/main/11_LetsWrite'
    },{
        image: './img/dianno.jpg',
        name:"Personal Portfolio Website",
        description: 'Built a responsive portfolio website using React with Formspree for contact form submissions.',
        technologies: ["React", "Tailwind CSS", "Redux", "Formspree"]        ,
        link: 'https://github.com/Saksheekolekar/Learn-React/tree/main/08_My_PortFolio'
      },
      
    // Add more cards as needed
  ];
function Layout() {
    return ( <>
    <Header/>
    <Outlet/>
    <CardContainer cards={cardsData}/>
    <Footer/>
    </> );
}

export default Layout;