import React from "react";
import Navbar from './../../shared/components/Navbar';
import Footer from "../../shared/components/Footer";

import image from "../../assets/bg.jpg"; 

const Home = () => {
  return (
    <div style={{ backgroundImage:`url(${image})` }}>
      <Navbar/>
        <div className="container-fluid text-white text-center pt-5">
          <h3>Quem eu sou?</h3>
          <img src={require('../../assets/me.jpg')} className="rounded-circle img-fluid h-50 w-50"  alt="Quem sou eu"/>
          <h4>Sou um pequeno programador</h4>

          <div className="container-fluid text-center">
            <h3>What Am I?</h3>
            <p>Lorem ipsum..</p>
          </div>
          <Footer/>
        </div>
      </div>
  );
};

export default Home;
