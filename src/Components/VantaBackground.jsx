import { useEffect, useRef } from "react";

const VantaNetBackground = () => {
  const vantaRef = useRef(null);

  useEffect(() => {
    let vantaEffect;

    const loadVanta = async () => {
      // Step 1: Load Three.js if not already loaded
      if (!window.THREE) {
        const threeScript = document.createElement("script");
        threeScript.src = "https://unpkg.com/three@0.134.0/build/three.min.js";
        threeScript.async = true;
        document.body.appendChild(threeScript);

        await new Promise((resolve) => {
          threeScript.onload = resolve;
        });
      }

      // Step 2: Load Vanta.NET
      const vantaScript = document.createElement("script");
      vantaScript.src = "https://unpkg.com/vanta/dist/vanta.net.min.js";
      vantaScript.async = true;
      document.body.appendChild(vantaScript);

      vantaScript.onload = () => {
        if (window.VANTA) {
          vantaEffect = window.VANTA.NET({
            el: vantaRef.current,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200,
            minWidth: 200,
            scale: 1,
            scaleMobile: 1,
            color: 0x215b8b,          // line color
            backgroundColor: 0x261d33 // background color
          });
        }
      };
    };

    loadVanta();

    // Cleanup on unmount
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, []);

  return <div ref={vantaRef} className="fixed inset-0 -z-10" />;
};

export default VantaNetBackground;
