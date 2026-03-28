import { Routes, Route, Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";
import "./index.css";
import styled from "styled-components";
import { List, X } from "phosphor-react";
import Menu from "./drawers/Menu";

const MainWrapper = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  min-height: 100vh;
  background-color: #f5edd8;
  overflow-x: hidden;
`;

const NavBar = styled.nav`
  position: sticky;
  top: 0;
  z-index: 500;
  height: 3.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.25rem;
  background-color: #c8963e;
  box-shadow: 0 0.125rem 1rem rgba(44, 26, 14, 0.18);
`;

const LogoLink = styled(Link)`
  display: flex;
  color: #000000;
  font-weight: bold;
  font-size: rem;
  align-items: center;
  justify-content: center;
  text-decoration: none;
`;

const MenuToggle = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000000;
`;

const Footer = styled.footer`
  color: #ead9bc;
  text-align: center;
  padding: 2rem 1rem;
  font-size: 0.9rem;
  letter-spacing: 0.08em;
  font-style: italic;
`;

function App() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  return (
    <MainWrapper>
      <NavBar>
        <LogoLink to="/">MS</LogoLink>

        <MenuToggle
          onClick={() => setIsMenuOpen((p) => !p)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X size={20} weight="regular" />
          ) : (
            <List size={20} weight="regular" />
          )}
        </MenuToggle>
      </NavBar>

      <Menu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer>
        <p>© 2026 Maanasi Shastri</p>
      </Footer>
    </MainWrapper>
  );
}

export default App;
