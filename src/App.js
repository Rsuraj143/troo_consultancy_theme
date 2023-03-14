import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";

import Service from "./Pages/Service/Service";
import ServiceBusiness from "./Pages/Service/ServiceBusiness";
import ServiceQuality from "./Pages/Service/ServiceQuality";
import ServiceFinalcial from "./Pages/Service/ServiceFinalcial";

import Pages from "./Pages/Page/Page"
import CaseStudy from "./Pages/Page/CaseStudy"
import Portfolio from "./Pages/Page/Portfolio";
import TeamMember from "./Pages/Page/TeamMember";
import ClientReview from "./Pages/Page/ClientReview";
import Faq from "./Pages/Page/Faq";
import Page404 from "./Pages/Page/Page404";

import Blogs from "./Pages/Blogs/Blogs";
import LatestBlog from "./Pages/Blogs/LatestBlog";
import BlogDetails from "./Pages/Blogs/BlogDetails";

import Contact from "./Pages/Contact";





function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/> } />
        <Route path="/about" element={<About/>}/>
        
        <Route path= "/service" element={<Service/>} />
        <Route path= "/service/business_services" element={<ServiceBusiness/>} />
        <Route path= "/service/quality_resourcing" element={<ServiceQuality/>} />
        <Route path= "/service/financial_planning" element={<ServiceFinalcial/>} />

        <Route path="/pages" element={<Pages/>} />
        <Route path="/pages/case_studies" element={<CaseStudy/>} />
        <Route path="/pages/portfolio" element={<Portfolio/>} />
        <Route path="/pages/meet_team_member" element={<TeamMember/>} />
        <Route path="/pages/clients_review" element={<ClientReview/>} />
        <Route path="/pages/faq" element={<Faq/>} />
        <Route path="/pages/404_page" element={<Page404/>} />

        <Route path="/blogs" element={<Blogs/>} />
        <Route path="/blogs/latest_blogs" element={<LatestBlog/>} />
        <Route path="/blogs/blog_details" element={<BlogDetails/>}  />

        <Route path="/contact" element ={<Contact/>} />
       
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
