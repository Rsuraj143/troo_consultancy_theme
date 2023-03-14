import React from 'react'
import CaseStudyComponent from '../../Components/CaseStuduyComponent/CaseStudyComponent'
import ExportsComponent from '../../Components/ExporstComponent/ExportsComponent'
import Footer from '../../Components/Footer/Footer'
import FormComponent from '../../Components/FormComponent/FormComponent'
import Header from '../../Components/Header/Header'
import HeroCompoentGlobal from '../../Components/HeroComponent/HeroCompoentGlobal'
import TestimonialComponent from '../../Components/TestimonialComponent/TestimonialComponent'

const CaseStudy = () => {
  return (
    <div>
        <Header/>
        <HeroCompoentGlobal/>
        <CaseStudyComponent/>
        <ExportsComponent/>
        <TestimonialComponent/>
        <FormComponent/>
        <Footer/>
    </div>
  )
}

export default CaseStudy