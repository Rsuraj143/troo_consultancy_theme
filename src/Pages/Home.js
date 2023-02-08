import React from 'react'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import HeroComponent from '../Components/HeroComponent/HeroComponent'
import BrandLogo from '../Components/BrandLogo/BrandLogo'
import AboutComponent from '../Components/AboutComponent/AboutComponent'
import ServiceComponent from '../Components/ServiceComponent/ServiceComponent'
import CounterComponent from '../Components/CounterComponent/CounterComponent'
import CaseStudyComponent from '../Components/CaseStuduyComponent/CaseStudyComponent'
import ExportsComponent from '../Components/ExporstComponent/ExportsComponent'
import TestimonialComponent from '../Components/TestimonialComponent/TestimonialComponent'
import FaqComponent from '../Components/FaqComponent/FaqComponent'
import BlogComponent from '../Components/BlogComponent/BlogComponent'
import FormComponent from '../Components/FormComponent/FormComponent'

const Home = () => {
  return (
    <div>
        <Header/>
        <HeroComponent/>
        <BrandLogo/>
        <AboutComponent/>
        <ServiceComponent/>
        <CounterComponent/>
        <CaseStudyComponent/>
        <ExportsComponent/>
        <TestimonialComponent/>
        <FaqComponent/>
        <BlogComponent/>
        <FormComponent/>
        <Footer/>

    </div>
  )
}

export default Home