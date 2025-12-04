//app/hooks/useStickyNav.ts

import { useState, useEffect } from "react";

export function useStickyNav(heroId: string = "home") {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = document.getElementById(heroId)?.offsetHeight || 0;
      setIsSticky(window.scrollY >= heroHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [heroId]);

  return isSticky;
}
