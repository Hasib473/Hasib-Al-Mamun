import React, { useState, useEffect } from "react";

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

          // Use OpenStreetMap Nominatim API to get city name
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
        (error) => {
          setLocation("Location Denied");
        }
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

      {/* Background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-gradient-to-br from-gray-700 to-transparent rounded-full blur-3xl"></div>
      </div>

      {/* Dynamic Location + Time */}
      <div className="absolute top-10 left-8 md:left-20 text-sm text-gray-400 tracking-widest uppercase">
        {location} {formatTime(currentTime)}
      </div>

      {/* Main Content */}
      <div className="max-w-4xl z-10">
        <h1 className="text-5xl md:text-7xl font-medium leading-[1.1] mb-8 tracking-tight">
        I'm a <br/> <span className="text-emerald-500
        ">Web Devloper</span>
        </h1>
        <div className="max-w-lg mb-12">
          <p className="text-gray-400 text-lg leading-relaxed">
            I build responsive, user-friendly websites and web applications that are fast, elegant, and easy to use. I turn ideas into seamless digital experiences.

          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          {['React.js', 'Tailwind CSS', 'MERN Stack', 'Responsive Design'].map((tag) => (
            <button 
              key={tag}
              className="px-6 py-2.5 border border-gray-800 rounded-full bg-white/5 hover:bg-white/10 transition-all duration-300 text-sm text-gray-300"
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
