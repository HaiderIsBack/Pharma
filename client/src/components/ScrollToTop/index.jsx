import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();  // Get the current path

  useEffect(() => {
    window.scrollTo(0, 0);  // Scroll to the top of the page
  }, [pathname]);  // Run this effect whenever the route changes

  return null;  // This component does not render anything
}

export default ScrollToTop;
