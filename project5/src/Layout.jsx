
import React from "react";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import { Outlet } from "react-router-dom";
import CardContainer from "./Components/CardContainers/CardContainers";



const cardsData = [
    {
      image: './p.jpg  ',
      name:"Blogging Website",
      description: 'Blogging Application for the exploring new Aeticles.',
      technologies: ['React.js', 'Tailwind CSS','Appwrite'],
      link: 'https://github.com/project1'
    },
    {
      image: './pack.jpg',
      name:"Olpx",
      description: 'Educational Project,  functionality as  user can sell or buy products online. ',
      technologies: ['Java' ,'Jsp','Css','Js'],
      link: 'https://github.com/Saksheekolekar/OLPX_Online_Product_Exchange_System'
    },
    {
      image: './wp.webp',
      name:"What's App Clone",
      description: "practice project.clone of very famous chat application.",
      technologies: ['React', 'Tailwind CSS'],
      link: 'https://github.com/project3'
    },{
        image: './amazone.png',
        name:"Amazon Clone",
        description: 'E-Commerce website with variety of products.',
        technologies: ['React', 'Tailwind CSS'],
        link: 'https://github.com/project2'
      },
      {
        image: './UTUBE.jpg',
        name:"YouTube Clone",
        description: 'Social Media platform for Learning and Earning Purpose',
        technologies: ['React', 'Tailwind CSS'],
        link: 'https://github.com/project3'
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