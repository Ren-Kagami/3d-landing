'use client';
import Head from "next/head";
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

// Config
import { appConfig } from "../config/app.config";

const Home: FC = () => (
  <>
    <Head>
      <title>{appConfig.title}</title>
      <meta name="description" content={appConfig.description} />
      <meta name="author" content={appConfig.author} />
    </Head>
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