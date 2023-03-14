import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import HeroCompoentGlobal from "../../Components/HeroComponent/HeroCompoentGlobal";
import ServiceComponent2 from "../../Components/ServiceComponent/ServiceComponent2";
import CounterComponent from "../../Components/CounterComponent/CounterComponent";
import CaseStudyComponent from "../../Components/CaseStuduyComponent/CaseStudyComponent";
import BrandLogo from "../../Components/BrandLogo/BrandLogo";
import FormComponent from "../../Components/FormComponent/FormComponent";


const Service = () => {
  return (
    <div>
      <Header />
      <HeroCompoentGlobal />
      <ServiceComponent2 />
      <CounterComponent/>
      <CaseStudyComponent/>
      <BrandLogo/>
      <FormComponent/>
      <Footer />
    </div>
  );
};

export default Service;
