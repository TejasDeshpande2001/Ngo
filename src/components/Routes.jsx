import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import AboutUs from "./AboutUs";
import Footer from "./Footer";
// import ContactUs from "./ContactUs";
import OneDayMeal from "./OneDayMeal";
import VirtualAdoption from "./VirtualAdoption";
import SponsorTreatment from "./SponsorTreatment";
import FeedingDrive from "./FeedingDrive";
import VaccinationDrive from "./VaccinationDrive";
import DonationForm from "./DonationForm";
import Sider from "./Sider";
import ReportingForm from "./ReportingForm";
import AnimalAdoption from "./AnimalAdoption";
import ContactUs from "./ContactUs";
import WhatWeDo from "./WhatWeDo";
import VideoGallery from "./VideoGallery";
import Display_Sheet from "./Display_Sheet";




const AppRoutes = () => {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/Ngo/" element={<Home />} />
        <Route path="/Ngo/about" element={<AboutUs />} />
        {/* <Route path="/contact" element={<ContactUs />} /> */}
        <Route path="/Ngo/onedaymeal" element={<OneDayMeal />} />
        <Route path="/Ngo/virtualadoption" element={<VirtualAdoption />} />
        <Route path="/Ngo/sponsortreatment" element={<SponsorTreatment />} />
        <Route path="/Ngo/feedingdrive" element={<FeedingDrive />} />
        <Route path="/Ngo/vaccination" element={<VaccinationDrive />} />
        <Route path="/Ngo/donation" element={<DonationForm />} />
        <Route path="/Ngo/report" element={<ReportingForm />} />
        <Route path="/Ngo/animaladoption" element={<AnimalAdoption />} />
        <Route path="/Ngo/contactus" element={<ContactUs />} />
        <Route path="/Ngo/whatwedo" element={<WhatWeDo />} />
        <Route path="/Ngo/videogallery" element={<VideoGallery />} />
      </Routes>
      <Sider />
      <Footer />
      {/* <Display_Sheet/> */}
    </Router>
  );
};

export default AppRoutes;
