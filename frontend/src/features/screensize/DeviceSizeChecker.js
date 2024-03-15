import React, { useState, useEffect, useRef } from "react";

const DeviceSizeChecker = () => {
  const [isTablet, setIsTablet] = useState(false);
  const [isPhone, setIsPhone] = useState(false);

  let screenWidth;

  useEffect(() => {
    const checkDeviceSize = () => {
      
      screenWidth = window.innerWidth;

      // Define the breakpoints for tablet and phone views
      const tabletBreakpoint = 768; // Example breakpoint for tablet view
      const phoneBreakpoint = 576; // Example breakpoint for phone view

      // Check if the screen size corresponds to tablet view
      if (screenWidth >= tabletBreakpoint) {
        setIsTablet(true);
        setIsPhone(false);
      } else if (screenWidth >= phoneBreakpoint) {
        setIsTablet(false);
        setIsPhone(true);
      } else {
        setIsTablet(false);
        setIsPhone(false);
      }
    };

    // Call the function on component mount and window resize
    checkDeviceSize();
    window.addEventListener("resize", checkDeviceSize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", checkDeviceSize);
    };
  }, [screenWidth]);

  return { isPhone, isTablet };
};

export default DeviceSizeChecker;
