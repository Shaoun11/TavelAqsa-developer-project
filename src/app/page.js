"use client"
import React from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Discover from './Components/Discover';
import Destination from './Components/Destination';
import About from './Components/About';
import Customer from './Components/Customer';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import BackToTopButton from './utility/botomtop';
import EnvatoButton from './utility/Envato';


const page = () => {
  return (
    
    <div>
       <Navbar></Navbar>
      <Hero></Hero>
      <Discover></Discover>
      <Destination></Destination>
      <About></About>
      <Customer></Customer>
      <Contact></Contact>
     <Footer></Footer>
      <BackToTopButton>
     
      </BackToTopButton>
      <EnvatoButton></EnvatoButton>
    </div>
  );
};
/*
This file is made by DevGenius (2024)
Project Name:TravelAqsa landing page
*/
export default page;