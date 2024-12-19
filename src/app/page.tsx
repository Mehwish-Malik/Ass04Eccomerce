import Hero from "./Components/Hero";
import Getfavour from "./Components/Nav";
import Navbar from "./Components/Navbar";
import React from 'react';
import NewArrivals from "./Components/NewArrivals";
import Topselling from "./Components/Topselling";
import Style from "./Components/Style";
import Customers from "./Components/Customers";
import Footer from "./Components/Footer";
const page = () => {
  return (
    <div>
      <Getfavour />
      <Navbar />
      <Hero />
      <NewArrivals />
      <Topselling />
      <Style />
      <Customers />
      <Footer />
    </div>
  );
}

export default page;
