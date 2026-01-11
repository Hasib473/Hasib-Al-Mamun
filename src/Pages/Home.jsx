import React, { useState, useEffect } from "react";
import { NavLink } from "react-router";

const Home = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [location, setLocation] = useState("Loading...");

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Get user location dynamically
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          try {
            const res = await fetch(
              `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
            );
            const data = await res.json();
            const cityName = data.address.city || data.address.town || data.address.state || "Unknown Location";
            setLocation(cityName);
          } catch (err) {
            setLocation("Unknown Location");
          }
        },
        () => setLocation("Location Denied")
      );
    } else {
      setLocation("Geolocation Not Supported");
    }
  }, []);

  // Format time
  const formatTime = (date) => {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    const minutesStr = minutes < 10 ? `0${minutes}` : minutes;
    return `${hours}:${minutesStr} ${ampm}`;
  };

  

  return (
    <div className="rounded-xl min-h-screen relative z-10 text-white font-sans selection:bg-white selection:text-black flex flex-col justify-center px-8 md:px-20 relative overflow-hidden">

      {/* Background shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-gradient-to-br from-gray-900 to-transparent rounded-full blur-3xl animate-pulseSlow"></div>
        <div className="absolute bottom-[-15%] left-[-10%] w-[400px] h-[400px] bg-gradient-to-tr from-emerald-500/30 to-transparent rounded-full blur-3xl animate-pulseSlow delay-2000"></div>
      </div>

      {/* Dynamic Location + Time */}
      <div className="absolute top-10 left-8 md:left-150 text-sm text-gray-400 tracking-widest uppercase">
        {location} {formatTime(currentTime)}
      </div>

      {/* Main Content */}
      <div className="max-w-4xl z-10">
        <h1 className="text-5xl md:text-7xl font-medium leading-[1.1] mb-6 tracking-tight">
          I'm <br />Hasib Al Mamun <br />
          <span className="text-emerald-500 text-4xl">Web Developer</span>
        </h1>

        <div className="max-w-lg mb-12">
          <p className="text-gray-400 text-lg leading-relaxed">
            I build responsive, user-friendly websites and web applications that are fast, elegant, and easy to use. I turn ideas into seamless digital experiences.
          </p>
        </div>

        {/* Skill Buttons */}
        <div className="flex flex-wrap gap-3 mb-8">
          {['React.js', 'Tailwind CSS', 'MERN Stack', 'Responsive Design'].map((tag) => (
            <button 
              key={tag}
              className="px-6 py-2.5 border border-gray-800 rounded-full bg-white/5 hover:bg-emerald-500/20 transition-all duration-300 text-sm text-gray-300 hover:text-white"
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Explore My Work Button */}
       <NavLink
  to="/projects"
  className="inline-block px-8 py-3 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-sm transition-all duration-300 shadow-lg hover:shadow-xl"
>
  Explore My Work
</NavLink>
      </div>
    </div>
  );
};

export default Home;
