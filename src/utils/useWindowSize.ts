import { useState, useEffect } from "react";

export type DeviceType = "mobile" | "desktop";

export interface IWindowSize {
  width: number;
  height: number;
}

const useWindowSize = () => {
  const [screenSize, setScreenSize] = useState<IWindowSize>({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return screenSize;
};

export default useWindowSize;
