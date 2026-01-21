import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router';
import HeroLeft from './Heroleft';
import Footer from './Footer';
import VantaBackground from './VantaBackground';
import { AnimatePresence, motion } from 'framer-motion';
import HomeAbout from './HomeAbout';
import HomeProjects from './HomeProject';
import FloatingIcons from './FloatingIcons';

const Root = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  /* 🔹 Loader */
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  /* 🔹 Scroll logic */
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        setShowNavbar(false); // scroll down → hide
      } else {
        setShowNavbar(true); // scroll up → show
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  /* 🔹 Loader UI */
  if (isLoading) {
    return (
      <AnimatePresence>
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black text-white"
        >
          <div className="flex flex-col items-center gap-4">
            <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-emerald-400"></div>
            <p className="tracking-widest text-gray-400 text-sm">LOADING</p>
          </div>
        </motion.div>
      </AnimatePresence>
    );
  }

  return (
    <div className="relative overflow-hidden">
      {/* 🌌 Background */}
      <VantaBackground />
      <div className="fixed inset-0 bg-black/60 -z-0" />

      {/* 🧭 Navbar */}
      <AnimatePresence>
        {showNavbar && (
          <motion.div
            initial={{ y: -80 }}
            animate={{ y: 0 }}
            exit={{ y: -80 }}
            transition={{ duration: 0.4 }}
            className="fixed top-0 w-full z-40"
          >
           <div className='py-4'>
             <Navbar />
           </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 🔘 Floating Icons (navbar hide হলে) */}
      {!showNavbar && <FloatingIcons />}

      {/* 🧩 Main Content */}
      <div className="relative z-10 pt-28">
        <div className="grid grid-cols-10 gap-6 w-11/12 mx-auto border-b-1 pb-6">
          {/* Left */}
          <div className="col-span-10 md:col-span-3">
            <HeroLeft />
          </div>

          {/* Right */}
          <div className="col-span-10 md:col-span-7">
            <Outlet />
          </div>
        </div>

        {/* Sections */}
        <section className="mt-5 pb-10 border-b-1 w-11/12 mx-auto">
          <HomeAbout />
        </section>

        <section className="mt-5">
          <HomeProjects />
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default Root;
