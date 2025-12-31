import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import ProjectDetail from "./pages/ProjectDetail";
import "./App.css";

function AppContent() {
  const location = useLocation();
  const isProjectDetail = location.pathname.startsWith("/projets/") && location.pathname !== "/projets";

  return (
    <>
      {!isProjectDetail && <Header />}
      <main className={`content ${isProjectDetail ? "no-header-footer" : ""}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projets" element={<Projects />} />
          <Route path="/projets/:slug" element={<ProjectDetail />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </>
  );
}

function App() {
  return <AppContent />;
}

export default App;
