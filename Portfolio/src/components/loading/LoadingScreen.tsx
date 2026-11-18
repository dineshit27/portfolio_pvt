import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface LoadingScreenProps {
  onComplete: () => void;
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const introRef = useRef<HTMLDivElement>(null);
  const redContainerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Dynamically inject Google Fonts for the typography transition
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Anton&family=Bungee+Spice&family=Changa+One&family=Bebas+Neue&family=Nabla&family=Limelight&family=Special+Elite&family=Rock+Salt&family=Silkscreen&family=Poppins:wght@400;600;700;900&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    const stepDuration = 0.2;
    const introTL = gsap.timeline({
      onComplete: () => {
        onComplete();
      }
    });

    // 1. Cycle through various typography font-families + bg colors for the text
    introTL
      .to(introRef.current, { duration: stepDuration, backgroundColor: "#0f172a" }) // dark slate - Anton
      .to(textRef.current, { duration: 0, fontFamily: "Anton" }, "<")
      .to(introRef.current, { duration: stepDuration, backgroundColor: "#7c3aed" }) // violet - Bungee Spice
      .to(textRef.current, { duration: 0, fontFamily: "Bungee Spice" }, "<")
      .to(introRef.current, { duration: stepDuration, backgroundColor: "#0369a1" }) // sky blue - Changa One
      .to(textRef.current, { duration: 0, fontFamily: "Changa One" }, "<")
      .to(introRef.current, { duration: stepDuration, backgroundColor: "#b91c1c" }) // red - Bebas Neue
      .to(textRef.current, { duration: 0, fontFamily: "Bebas Neue" }, "<")
      .to(introRef.current, { duration: stepDuration, backgroundColor: "#065f46" }) // emerald - Nabla
      .to(textRef.current, { duration: 0, fontFamily: "Nabla" }, "<")
      .to(introRef.current, { duration: stepDuration, backgroundColor: "#92400e" }) // amber - Limelight
      .to(textRef.current, { duration: 0, fontFamily: "Limelight" }, "<")
      .to(introRef.current, { duration: stepDuration, backgroundColor: "#be185d" }) // pink - Special Elite
      .to(textRef.current, { duration: 0, fontFamily: "Special Elite" }, "<")
      .to(introRef.current, { duration: stepDuration, backgroundColor: "#1e3a5f" }) // navy - Rock Salt
      .to(textRef.current, { duration: 0, fontFamily: "Rock Salt" }, "<")
      .to(introRef.current, { duration: stepDuration, backgroundColor: "#134e4a" }) // teal - Bitcount
      .to(textRef.current, { duration: 0, fontFamily: "Silkscreen" }, "<")
      .to(introRef.current, { duration: 0.3, backgroundColor: "#000000" })          // snap back to black before curtain
      // 2. Scale up the container upward to collapse it (curtain reveal)
      .to(introRef.current, { duration: 1.4, scaleY: 0, ease: "expo.inOut" })
      // 3. Simultaneously scale the blue accent band
      .to(redContainerRef.current, { duration: 1.4, scaleY: 2, ease: "expo.inOut" }, "-=1.6");

    return () => {
      // Clean up the font link when the component is unmounted
      if (document.head.contains(link)) {
        document.head.removeChild(link);
      }
    };
  }, [onComplete]);

  return (
    <div
      ref={introRef}
      className="fixed inset-0 z-[1000] flex flex-col justify-center items-center bg-black select-none pointer-events-none origin-top overflow-hidden"
    >
      <div
        ref={textRef}
        className="text-white text-[10vw] sm:text-[6vw] font-bold uppercase transition-all tracking-wider text-center"
        style={{ fontFamily: 'Poppins, sans-serif' }}
      >
        Dinesh M
      </div>
      <div
        ref={redContainerRef}
        className="absolute bottom-0 left-0 w-full h-[30%] bg-[#2563eb] flex items-center justify-center overflow-hidden origin-bottom select-none pointer-events-none scale-y-0"
      >
        <div
          className="text-transparent font-black tracking-[-1vw] scale-x-[0.5] scale-y-[1.5] text-[30vw] leading-[30vh]"
          style={{
            fontFamily: 'Poppins, sans-serif',
            WebkitTextStroke: '1px #222'
          }}
        >
          DINESHDINESHDINESHDINESHDINESH
        </div>
      </div>
    </div>
  );
}