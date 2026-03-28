import { useState } from "react";
import styled, { keyframes, css } from "styled-components";
import ContactForm from "../utilities/ContactForm";

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(1.25rem); }
  to   { opacity: 1; transform: translateY(0); }
`;

const anim = (delay) => css`
  opacity: 0;
  animation: ${fadeUp} 0.6s ease forwards;
  animation-delay: ${delay}s;
`;

const Page = styled.div`
  background-color: #f5edd8;
  min-height: calc(100vh - 3.5rem);
`;

const Inner = styled.div`
  max-width: 68.75rem;
  margin: 0 auto;
  padding: 5rem 2.5rem 6rem;
  width: 100%;

  @media (max-width: 48rem) {
    padding: 3rem 1.5rem 4rem;
  }
`;

const PageTag = styled.p`
  font-family: "Open Sans", sans-serif;
  font-size: 0.72rem;
  font-weight: 400;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #a6782a;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin: 0 0 1.25rem;
  ${anim(0.05)}

  &::before {
    content: "";
    display: inline-block;
    width: 2rem;
    height: 0.09375rem;
    background: #c8963e;
    flex-shrink: 0;
  }
`;

const PageTitle = styled.h1`
  font-family: "Cormorant Garamond", serif;
  font-size: clamp(2.8rem, 5vw, 4.5rem);
  font-weight: 500;
  line-height: 1.05;
  color: #2c1a0e;
  margin: 0 0 1.5rem;
  ${anim(0.15)}

  em {
    font-style: italic;
    font-weight: 300;
    color: #c8963e;
  }
`;

const Divider = styled.div`
  width: 4rem;
  height: 0.125rem;
  background: linear-gradient(to right, #c8963e, #b2c4a4);
  margin-bottom: 3.5rem;
  ${anim(0.2)}
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  ${anim(0.28)}

  @media (max-width: 48rem) {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;

const Intro = styled.p`
  font-family: "Heebo", sans-serif;
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.85;
  color: #5c3e22;
  margin: 0;
  max-width: 26.25rem;
`;

const Channels = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
  border-top: 0.0625rem solid rgba(44, 26, 14, 0.1);
`;

const Channel = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  padding: 1.1rem 0;
  border-bottom: 0.0625rem solid rgba(44, 26, 14, 0.1);
`;

const ChannelLabel = styled.span`
  font-family: "Open Sans", sans-serif;
  font-size: 0.62rem;
  font-weight: 500;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #a6782a;
`;

const ChannelRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`;

const ChannelValue = styled.a`
  font-family: "Heebo", sans-serif;
  font-size: 0.92rem;
  font-weight: 300;
  color: #2c1a0e;
  text-decoration: none;
  transition: color 0.18s ease;

  &:hover {
    color: #c8963e;
  }
`;

const ChannelText = styled.span`
  font-family: "Heebo", sans-serif;
  font-size: 0.92rem;
  font-weight: 300;
  color: #2c1a0e;
`;

const CopyBtn = styled.button`
  background: none;
  border: 0.0625rem solid rgba(44, 26, 14, 0.25);
  padding: 0.25rem 0.65rem;
  font-family: "Heebo", sans-serif;
  font-size: 0.65rem;
  font-weight: 400;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${(p) => (p.$copied ? "#8FA882" : "#8A6A3A")};
  border-color: ${(p) => (p.$copied ? "#B2C4A4" : "rgba(44, 26, 14, 0.25)")};
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;

  &:hover {
    background: rgba(200, 150, 62, 0.08);
    border-color: #c8963e;
    color: #2c1a0e;
  }
`;

const Right = styled.div``;

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("maanasishastri8@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Page>
      <Inner>
        <PageTag>Get in Touch</PageTag>

        <PageTitle>
          Let's
          <br />
          <em>Connect</em>
        </PageTitle>

        <Divider />

        <Grid>
          <Left>
            <Intro>
              Whether you want to collaborate on a project, discuss engineering
              challenges, or just say hello — I'd love to hear from you.
            </Intro>

            <Channels>
              <Channel>
                <ChannelLabel>Email</ChannelLabel>
                <ChannelRow>
                  <ChannelValue href="mailto:maanasishastri8@gmail.com">
                    maanasishastri8@gmail.com
                  </ChannelValue>
                  <CopyBtn onClick={handleCopyEmail} $copied={copied}>
                    {copied ? "Copied ✓" : "Copy"}
                  </CopyBtn>
                </ChannelRow>
              </Channel>

              <Channel>
                <ChannelLabel>Phone</ChannelLabel>
                <ChannelValue href="tel:+919353508197">
                  +91 93535 08197
                </ChannelValue>
              </Channel>

              <Channel>
                <ChannelLabel>LinkedIn</ChannelLabel>
                <ChannelValue
                  href="https://linkedin.com/in/maanasi8"
                  target="_blank"
                  rel="noreferrer"
                >
                  linkedin.com/in/maanasi8 ↗
                </ChannelValue>
              </Channel>

              <Channel>
                <ChannelLabel>GitHub</ChannelLabel>
                <ChannelValue
                  href="https://github.com/maanasi8"
                  target="_blank"
                  rel="noreferrer"
                >
                  github.com/maanasi8 ↗
                </ChannelValue>
              </Channel>
            </Channels>
          </Left>

          <Right>
            <ContactForm />
          </Right>
        </Grid>
      </Inner>
    </Page>
  );
}
