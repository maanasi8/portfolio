import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import ProfilePic from "../assets/profile.jpeg";

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(1.375rem); }
  to   { opacity: 1; transform: translateY(0); }
`;

const floatFrame = keyframes`
  0%, 100% { transform: translateY(0rem); }
  50%       { transform: translateY(-0.375rem); }
`;

const HomePage = styled.div`
  position: relative;
  min-height: calc(100vh - 3.5rem);
  background-color: #f5edd8;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

const InnerPage = styled.div`
  position: relative;
  z-index: 1;
  flex: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  align-items: center;
  max-width: 68.75rem;
  margin: 0 auto;
  padding: 5rem 2.5rem 4rem;
  width: 100%;

  @media (max-width: 48rem) {
    grid-template-columns: 1fr;
    padding: 3rem 1.5rem 2rem;
    gap: 3rem;
  }
`;

const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
`;

const Header = styled.p`
  font-family: "Open Sans", sans-serif;
  font-size: 0.72rem;
  font-weight: 400;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #a6782a;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin: 0;

  opacity: 0;
  animation: ${fadeUp} 0.6s ease forwards;
  animation-delay: 0.1s;

  &::before {
    content: "";
    display: inline-block;
    width: 2rem;
    height: 0.09375rem;
    background: #c8963e;
    flex-shrink: 0;
  }
`;

const Name = styled.h1`
  font-family: "Cormorant Garamond", serif;
  font-size: clamp(3.5rem, 7vw, 5.5rem);
  font-weight: 500;
  line-height: 1;
  color: #2c1a0e;
  letter-spacing: -0.01em;
  margin: 0;

  opacity: 0;
  animation: ${fadeUp} 0.6s ease forwards;
  animation-delay: 0.22s;

  em {
    font-style: italic;
    font-weight: 300;
    color: #c8963e;
  }
`;

const Desc = styled.p`
  font-family: "Heebo", sans-serif;
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.8;
  color: #5c3e22;
  max-width: 25rem;
  margin: 0;

  opacity: 0;
  animation: ${fadeUp} 0.6s ease forwards;
  animation-delay: 0.34s;
`;

const CtaRow = styled.div`
  display: flex;
  gap: 0.875rem;
  flex-wrap: wrap;

  opacity: 0;
  animation: ${fadeUp} 0.6s ease forwards;
  animation-delay: 0.46s;
`;

const PrimaryButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.7rem 1.5rem;
  background: #2c1a0e;
  color: #f5edd8;
  font-family: "Open Sans", sans-serif;
  font-size: 0.8rem;
  font-weight: 400;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  text-decoration: none;
  border: 0.09375rem solid #2c1a0e;
  transition:
    background 0.22s ease,
    color 0.22s ease,
    border-color 0.22s ease;

  &::after {
    content: "→";
    font-size: 0.85rem;
    transition: transform 0.2s ease;
  }

  &:hover {
    background: #c8963e;
    border-color: #c8963e;
    color: #2c1a0e;
  }

  &:hover::after {
    transform: translateX(0.1875rem);
  }
`;

const SecondaryButton = styled(Link)`
  font-family: "Open Sans", sans-serif;
  display: inline-flex;
  align-items: center;
  padding: 0.7rem 1.5rem;
  background: transparent;
  color: #2c1a0e;
  font-size: 0.8rem;
  font-weight: 400;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  text-decoration: none;
  border: 0.09375rem solid rgba(44, 26, 14, 0.35);
  transition:
    border-color 0.22s ease,
    background 0.22s ease;

  &:hover {
    border-color: #c8963e;
    background: rgba(200, 150, 62, 0.08);
  }
`;

const Aside = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  opacity: 0;
  animation: ${fadeUp} 0.7s ease forwards;
  animation-delay: 0.3s;

  @media (max-width: 48rem) {
    order: -1;
  }
`;

const PhotoFrame = styled.div`
  position: relative;
  width: 17.5rem;
  height: 21.25rem;
  flex-shrink: 0;
  animation: ${floatFrame} 5s ease-in-out infinite;
  animation-delay: 1s;

  @media (max-width: 30rem) {
    width: 13.75rem;
    height: 16.875rem;
  }
`;

const Photo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top center;
  display: block;
  position: relative;
  z-index: 1;
  filter: saturate(0.9) contrast(1.02);
`;

const PhotoBorder = styled.div`
  position: absolute;
  top: 0.75rem;
  left: 0.75rem;
  right: -0.75rem;
  bottom: -0.75rem;
  border: 0.125rem solid #c8963e;
  z-index: 0;
`;

const PhotoCorner = styled.div`
  position: absolute;
  bottom: -1.25rem;
  right: -1.25rem;
  width: 3rem;
  height: 3rem;
  background: #b2c4a4;
  z-index: 2;
`;

export default function Home() {
  return (
    <HomePage>
      <InnerPage>
        <LeftSection>
          <Header>Software Engineer · Bengaluru, India</Header>

          <Name>
            Maanasi
            <br />
            <em>Shastri</em>
          </Name>

          <Desc>
            I build scalable systems and user-centric products — from real-time
            data pipelines to polished frontends.
          </Desc>

          <CtaRow>
            <PrimaryButton to="/projects">View Projects</PrimaryButton>
            <SecondaryButton to="/contact">Get in Touch</SecondaryButton>
          </CtaRow>
        </LeftSection>

        <Aside>
          <PhotoFrame>
            <Photo src={ProfilePic} alt="Maanasi Shastri" />
            <PhotoBorder />
            <PhotoCorner />
          </PhotoFrame>
        </Aside>
      </InnerPage>
    </HomePage>
  );
}
