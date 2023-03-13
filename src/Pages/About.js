import React from "react";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import HeroCompoentGlobal from "../Components/HeroComponent/HeroCompoentGlobal";
import AboutComponentDetails from "../Components/AboutComponent/AboutComponentDetails";
import ServiceComponent from "../Components/ServiceComponent/ServiceComponent";
import ExportsComponent from "../Components/ExporstComponent/ExportsComponent";
import TestimonialComponent from "../Components/TestimonialComponent/TestimonialComponent";
import FormComponent from "../Components/FormComponent/FormComponent";



const About = () => {
  return (
    <div className="about-page">
      <Header />
      <HeroCompoentGlobal />
      <AboutComponentDetails/>
      <ServiceComponent/>
      <ExportsComponent/>
      <TestimonialComponent/>
      <FormComponent/>
      <Footer />
    </div>
  );
};

export default About;
