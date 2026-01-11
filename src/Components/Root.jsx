import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router';
import HeroLeft from './Heroleft';
import Footer from './Footer';
import VantaBackground from './VantaBackground';
import { AnimatePresence } from 'framer-motion';
import { motion } from "framer-motion";




const Root = () => {

    const [isLoading, setIsLoading] = useState(true); // Preloader state


    // Simulate initial loading (2 sec) or replace with real data fetching
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000); // 2 seconds
        return () => clearTimeout(timer);
    }, []);

    // If loading, show preloader
   if (isLoading) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: "100%", opacity: 1 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: "-100%", opacity: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black text-white"
      >
        {/* Spinner */}
        <div className="flex flex-col items-center gap-4">
          <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-emerald-400"></div>
          <p className="text-sm tracking-widest uppercase text-gray-400">
            Loading...
          </p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

    // Main content after loader
    return (

        <div className='pt-4'>

            <VantaBackground />

            {/* Overlay for text readability */}
            <div className="fixed inset-0 bg-black/50 -z-0" />


            <Navbar />

            <div className="grid grid-cols-10 gap-4 w-11/12 mx-auto relative z-10 pt-10">
                {/* Left Sidebar (3 parts) */}
                <div className=" col-span-3 p-4 ">
                    <HeroLeft />
                </div>

                {/* Right Content (7 parts) */}
                <div className=" col-span-7 p-4">
                    <Outlet />
                </div>
            </div>

            <Footer />

        </div>
    );
};

export default Root;
