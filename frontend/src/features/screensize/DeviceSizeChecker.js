import React, { useState, useEffect, useRef } from "react";

const DeviceSizeChecker = () => {
  const [isTablet, setIsTablet] = useState(false);
  const [isPhone, setIsPhone] = useState(false);
  const screenWidthRef = useRef(0);

  useEffect(() => {
    const checkDeviceSize = () => {
      screenWidthRef.current = window.innerWidth;

      // Define the breakpoints for tablet and phone views
      const tabletBreakpoint = 768; // Example breakpoint for tablet view
      const phoneBreakpoint = 576; // Example breakpoint for phone view

      // Check if the screen size corresponds to tablet view
      if (screenWidthRef.current >= tabletBreakpoint) {
        setIsTablet(true);
        setIsPhone(false);
      } else if (screenWidthRef.current >= phoneBreakpoint) {
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
  }, [screenWidthRef]);

  return { isPhone, isTablet };
};

export default DeviceSizeChecker;
