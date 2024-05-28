
import React from "react";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import { Outlet } from "react-router-dom";
import CardContainer from "./Components/CardContainers/CardContainers";



const cardsData = [
    {
      image: 'https://via.placeholder.com/150',
      description: 'Project 1',
      technologies: ['React', 'Tailwind CSS'],
      link: 'https://github.com/project1'
    },
    {
      image: 'https://via.placeholder.com/150',
      description: 'Project 2',
      technologies: ['React', 'Tailwind CSS'],
      link: 'https://github.com/project2'
    },
    {
      image: 'https://via.placeholder.com/150',
      description: 'Project 3',
      technologies: ['React', 'Tailwind CSS'],
      link: 'https://github.com/project3'
    },{
        image: 'https://via.placeholder.com/150',
        description: 'Project 5',
        technologies: ['React', 'Tailwind CSS'],
        link: 'https://github.com/project2'
      },
      {
        image: 'https://via.placeholder.com/150',
        description: 'Project 6',
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