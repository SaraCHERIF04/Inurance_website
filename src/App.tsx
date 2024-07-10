import { useEffect } from "react";
import { Routes, Route, useNavigationType, useLocation } from "react-router-dom";
import Frame1 from "./pages/Frame1";
import Frame from "./pages/Frame";
import Desktop from "./pages/Desktop";
import Root from "./pages/Root";
import Rc_chasse from "./pages/Rc_chasse";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "Home";
        metaDescription = "Home Page";
        break;
      case "/frame-3":
        title = "Frame 3";
        metaDescription = "Frame 3 Page";
        break;
      case "/Frame1":
        title = "Frame 1";
        metaDescription = "Frame 1 Page";
        break;
      case "/root":
        title = "Root";
        metaDescription = "Root Page";
        break;
      case "/insurance":
        title = "Rc_chasse";
        metaDescription = "Rc_chasse Page";
        break;
      default:
        title = "Default Title";
        metaDescription = "Default Description";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector('head > meta[name="description"]');
      if (metaDescriptionTag) {
        metaDescriptionTag.setAttribute("content", metaDescription);
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Desktop />} />
      <Route path="/frame-3" element={<Frame />} />
      <Route path="/Frame1" element={<Frame1 />} />
      <Route path="/root" element={<Root />} />
      <Route path="/insurance" element={<Rc_chasse />} />
      
    </Routes>
  );
}

export default App;
