
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop({ children }) {
  const location = useLocation();

  useEffect(() => {
    // Scroll to top on every route change
    window.scrollTo(0, 0);
  }, [location]);

  return children;
}

export default ScrollToTop;
