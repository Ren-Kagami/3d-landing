'use client';
import { FC } from "react";

// Layout components
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

// Section components
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Features from "../components/sections/Features";
import Equipment from "../components/sections/Equipment";
import WhyUs from "../components/sections/WhyUs";
import Contacts from "../components/sections/Contacts";
import CTABanner from "../components/sections/CTABanner";

const Home: FC = () => (
  <>
    <Navbar />
    <div className="pt-20">
      <Hero />
      <About />
      <Features />
      <Equipment />
      <WhyUs />
      <Contacts /> 
      <CTABanner />
      <Footer />
    </div>
  </>
);

export default Home;