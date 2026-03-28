import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { X } from "phosphor-react";
const slideIn = keyframes`
  from { transform: translateX(100%); opacity: 0; }
  to   { transform: translateX(0);    opacity: 1; }
`;

const fadeInItem = keyframes`
  from { opacity: 0; transform: translateX(0.75rem); }
  to   { opacity: 1; transform: translateX(0); }
`;

const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  z-index: 800;
  background: rgba(44, 26, 14, 0.35);
  backdrop-filter: blur(0.1875rem);
`;

const Drawer = styled.aside`
  position: fixed;
  top: 0;
  right: 0;
  width: min(18.75rem, 82vw);
  height: 100%;
  z-index: 900;
  background: linear-gradient(160deg, #f5edd8 0%, #ead9bc 60%, #dfc9a4 100%);
  border-left: 0.125rem solid #2c1a0e;
  box-shadow: -0.5rem 0 3rem rgba(44, 26, 14, 0.25);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  animation: ${slideIn} 0.32s cubic-bezier(0.22, 1, 0.36, 1) forwards;
`;

const NavList = styled.nav`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const CloseDiv = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;

  padding: 0.85rem;
  text-decoration: none;

  opacity: 0;
  animation: ${fadeInItem} 0.35s ease forwards;
  animation-delay: ${(p) => p.$delay}ms;

  cursor: pointer;
  color: #000000;
  transition: color 0.2s ease;

  &:hover {
    color: #c8963e;
  }
`;

const NavItem = styled(Link)`
  position: relative;
  display: flex;
  align-items: baseline;
  gap: 1rem;
  padding: 0.85rem 1.75rem;
  text-decoration: none;
  border-left: 0.1875rem solid ${(p) => (p.$active ? "#C8963E" : "transparent")};
  background: ${(p) =>
    p.$active ? "rgba(200, 150, 62, 0.14)" : "transparent"};
  transition:
    background 0.18s ease,
    border-color 0.18s ease;

  opacity: 0;
  animation: ${fadeInItem} 0.35s ease forwards;
  animation-delay: ${(p) => p.$delay}ms;

  &:hover {
    background: rgba(200, 150, 62, 0.14);
    border-left-color: #c8963e;
  }
`;

const NavLabel = styled.span`
  font-family: "Heebo", sans-serif;
  font-size: 1.2rem;
  font-weight: 500;
  color: #1d1510;
  letter-spacing: 0.02em;
  line-height: 1;
  transition: letter-spacing 0.2s ease;

  ${NavItem}:hover & {
    letter-spacing: 0.06em;
  }
`;

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/experience", label: "Experience" },
  { to: "/contact", label: "Contact" },
];

export default function Menu({ isOpen, onClose }) {
  const location = useLocation();

  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      <Backdrop onClick={onClose} />
      <Drawer role="dialog" aria-label="Navigation menu">
        <CloseDiv onClick={onClose} aria-hidden="true">
          <X size={"1.55rem"} weight="regular" />
        </CloseDiv>
        <NavList>
          {navLinks.map(({ to, label, num }, i) => (
            <NavItem
              key={to}
              to={to}
              onClick={onClose}
              $active={location.pathname === to}
              $delay={80 + i * 55}
            >
              <NavLabel>{label}</NavLabel>
            </NavItem>
          ))}
        </NavList>
      </Drawer>
    </>
  );
}
