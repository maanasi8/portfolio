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
  gap: clamp(1rem, 3vw, 2rem);
  align-items: center;
  max-width: 68.75rem;
  margin: 0 auto;
  padding: clamp(2rem, 5vw, 5rem) clamp(1rem, 3vw, 2.5rem)
    clamp(1rem, 3vw, 4rem);
  width: 100%;

  @media (max-width: 56rem) {
    grid-template-columns: 1fr;
    padding: clamp(2rem, 4vw, 4rem) clamp(1rem, 2.5vw, 2rem)
      clamp(1.5rem, 3vw, 3rem);
    gap: clamp(1.5rem, 4vw, 3rem);
  }

  @media (max-width: 30rem) {
    padding: clamp(1.5rem, 3vw, 2.5rem) clamp(1rem, 2vw, 1.5rem);
  }
`;

const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: clamp(1rem, 2.5vw, 1.75rem);
`;

const Header = styled.p`
  font-family: "Open Sans", sans-serif;
  font-size: clamp(0.65rem, 2vw, 0.75rem);
  font-weight: 400;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #a6782a;
  display: flex;
  align-items: center;
  gap: clamp(0.5rem, 1vw, 0.75rem);
  margin: 0;

  opacity: 0;
  animation: ${fadeUp} 0.6s ease forwards;
  animation-delay: 0.1s;

  &::before {
    content: "";
    display: inline-block;
    width: clamp(1.25rem, 3vw, 2rem);
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
  font-size: clamp(0.9rem, 1.5vw, 1.05rem);
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

  @media (max-width: 30rem) {
    flex-direction: column;
    gap: 0.75rem;
  }
`;

const PrimaryButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: clamp(0.6rem, 1vw, 0.8rem) clamp(1rem, 2vw, 1.5rem);
  background: #2c1a0e;
  color: #f5edd8;
  font-family: "Open Sans", sans-serif;
  font-size: clamp(0.7rem, 1.2vw, 0.85rem);
  font-weight: 400;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  text-decoration: none;
  border: 0.09375rem solid #2c1a0e;
  transition:
    background 0.22s ease,
    color 0.22s ease,
    border-color 0.22s ease;
  min-height: 2.5rem;

  @media (max-width: 30rem) {
    min-width: 100%;
    padding: clamp(0.7rem, 1.5vw, 0.9rem) clamp(1rem, 2vw, 1.5rem);
  }

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
  justify-content: center;
  padding: clamp(0.6rem, 1vw, 0.8rem) clamp(1rem, 2vw, 1.5rem);
  background: transparent;
  color: #2c1a0e;
  font-size: clamp(0.7rem, 1.2vw, 0.85rem);
  font-weight: 400;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  text-decoration: none;
  border: 0.09375rem solid rgba(44, 26, 14, 0.35);
  transition:
    border-color 0.22s ease,
    background 0.22s ease;
  min-height: 2.5rem;

  @media (max-width: 30rem) {
    min-width: 100%;
    padding: clamp(0.7rem, 1.5vw, 0.9rem) clamp(1rem, 2vw, 1.5rem);
  }

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
  width: clamp(11rem, 45vw, 17.5rem);
  height: clamp(14rem, 55vw, 21.25rem);
  flex-shrink: 0;
  animation: ${floatFrame} 5s ease-in-out infinite;
  animation-delay: 1s;

  @media (max-width: 56rem) {
    width: clamp(10rem, 40vw, 16rem);
    height: clamp(13rem, 50vw, 20rem);
  }

  @media (max-width: 30rem) {
    width: clamp(9rem, 70vw, 14rem);
    height: clamp(11rem, 90vw, 17rem);
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
  top: clamp(0.5rem, 2vw, 0.75rem);
  left: clamp(0.5rem, 2vw, 0.75rem);
  right: clamp(-0.5rem, -2vw, -0.75rem);
  bottom: clamp(-0.5rem, -2vw, -0.75rem);
  border: 0.125rem solid #c8963e;
  z-index: 0;
`;

const PhotoCorner = styled.div`
  position: absolute;
  bottom: clamp(-0.9rem, -3vw, -1.25rem);
  right: clamp(-0.9rem, -3vw, -1.25rem);
  width: clamp(2rem, 5vw, 3rem);
  height: clamp(2rem, 5vw, 3rem);
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
