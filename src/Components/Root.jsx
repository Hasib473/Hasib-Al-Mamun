import React, { useState } from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router';
import Hero from './Hero';
import HeroLeft from './Heroleft';

const Root = () => {
    const [darkMode, setDarkMode] = useState(false);

    const theme = darkMode
        ? {
            navBg: "bg-gray-900",
            border: "border-gray-700",
            textSecondary: "text-gray-300",
            hover: "hover:text-white",
            bgSecondary: "bg-gray-800",
        }
        : {
            navBg: "bg-gray-100",
            border: "border-gray-200",
            textSecondary: "text-gray-700",
            hover: "hover:text-emerald-600",
            bgSecondary: "bg-white",
        };

    return (
        <div>
            <Navbar
                theme={theme}
                darkMode={darkMode}
                setDarkMode={setDarkMode}
            />
            <div className="grid grid-cols-10 gap-4 w-11/12 mx-auto pt-28">
                {/* Left Sidebar (3 parts) */}
                <div className="col-span-3 p-4 ">
                    <HeroLeft />
                </div>

                {/* Right Content (7 parts) */}
                <div className=" col-span-7 p-4">
                    <Outlet />
                </div>
            </div>



        </div>

    );
};

export default Root;