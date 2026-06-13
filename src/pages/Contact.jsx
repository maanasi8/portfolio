import React, { useState } from "react";
import styled, { keyframes, css } from "styled-components";
import { ArrowUpRight } from "phosphor-react";

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
  padding: clamp(2rem, 5vw, 5rem) clamp(1rem, 3vw, 2.5rem)
    clamp(2rem, 5vw, 6rem);
  width: 100%;

  @media (max-width: 56rem) {
    padding: clamp(2rem, 4vw, 4rem) clamp(1rem, 2.5vw, 2rem)
      clamp(2rem, 4vw, 4rem);
  }

  @media (max-width: 30rem) {
    padding: clamp(1.5rem, 3vw, 2.5rem) clamp(1rem, 2vw, 1.5rem);
  }
`;

const PageTag = styled.p`
  font-family: "Open Sans", sans-serif;
  font-size: clamp(0.65rem, 2vw, 0.75rem);
  font-weight: 400;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #a6782a;
  display: flex;
  align-items: center;
  gap: clamp(0.5rem, 1vw, 0.75rem);
  margin: 0 0 clamp(0.75rem, 2vw, 1.25rem);
  ${anim(0.05)}

  &::before {
    content: "";
    display: inline-block;
    width: clamp(1.25rem, 3vw, 2rem);
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
  width: clamp(2.5rem, 5vw, 4rem);
  height: 0.125rem;
  background: linear-gradient(to right, #c8963e, #b2c4a4);
  margin-bottom: clamp(2rem, 5vw, 3.5rem);
  ${anim(0.2)}
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: clamp(2rem, 5vw, 4rem);
  ${anim(0.28)}

  @media (max-width: 56rem) {
    gap: clamp(1.5rem, 4vw, 3rem);
  }

  @media (max-width: 30rem) {
    gap: clamp(1.25rem, 3vw, 2rem);
  }
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  gap: clamp(1.5rem, 3vw, 2.5rem);
  max-width: 26.25rem;
`;

const Intro = styled.p`
  font-family: "Heebo", sans-serif;
  font-size: clamp(0.9rem, 1.5vw, 1.05rem);
  font-weight: 300;
  line-height: 1.85;
  color: #5c3e22;
  margin: 0;
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
  gap: clamp(0.2rem, 0.5vw, 0.3rem);
  padding: clamp(0.75rem, 2vw, 1.1rem) 0;
  border-bottom: 0.0625rem solid rgba(44, 26, 14, 0.1);
`;

const ChannelLabel = styled.span`
  font-family: "Open Sans", sans-serif;
  font-size: clamp(0.55rem, 1.5vw, 0.65rem);
  font-weight: 500;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #a6782a;
`;

const ChannelRow = styled.div`
  display: flex;
  align-items: center;
  gap: clamp(0.25rem, 0.75vw, 0.5rem);
  flex-wrap: wrap;

  @media (max-width: 30rem) {
    flex-direction: column;
    align-items: flex-start;
    gap: clamp(0.2rem, 0.5vw, 0.3rem);
  }
`;

const IconArrow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #2c1a0e;
  transition:
    transform 0.2s ease,
    color 0.18s ease;
  flex-shrink: 0;

  ${ChannelRow}:hover & {
    color: #c8963e;
    transform: translateX(0.1875rem) translateY(-0.1875rem);
  }
`;

const ChannelValue = styled.a`
  font-family: "Heebo", sans-serif;
  font-size: clamp(0.85rem, 1.5vw, 0.95rem);
  font-weight: 300;
  color: #2c1a0e;
  text-decoration: none;
  transition: color 0.18s ease;
  word-break: break-word;
  overflow-wrap: break-word;
  max-width: 100%;

  &:hover {
    color: #c8963e;
  }
`;

const ChannelText = styled.span`
  font-family: "Heebo", sans-serif;
  font-size: clamp(0.85rem, 1.5vw, 0.95rem);
  font-weight: 300;
  color: #2c1a0e;
`;

const CopyBtn = styled.button`
  font-family: "Open Sans", sans-serif;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: clamp(0.6rem, 1vw, 0.8rem) clamp(1rem, 2vw, 1.5rem);
  background: #c8963e;
  color: #f5edd8;
  font-size: clamp(0.7rem, 1.2vw, 0.85rem);
  font-weight: 400;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  border: none;
  cursor: pointer;
  transition:
    background 0.22s ease,
    color 0.22s ease;
  min-height: 2.5rem;

  @media (max-width: 30rem) {
    padding: clamp(0.7rem, 1.5vw, 0.9rem) clamp(1rem, 2vw, 1.5rem);
    width: 100%;
  }

  &:hover {
    background: #a6782a;
    color: #f5edd8;
  }
`;

const fadeInItem = keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
`;

const ChannelCopied = styled.span`
  font-family: "Heebo", sans-serif;
  font-size: clamp(0.75rem, 1.5vw, 0.85rem);
  font-weight: 300;
  color: #2c1a0e;
  margin-top: clamp(0.5rem, 1vw, 0.75rem);
  opacity: 0;
  animation: ${fadeInItem} 0.35s ease forwards;
  animation-delay: 0.1s;
`;

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("maanasishastri8@gmail.com").then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
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
                  <CopyBtn onClick={handleCopyEmail}>
                    {copied ? "Copied!" : "Copy"}
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
                <ChannelRow>
                  <ChannelValue
                    href="https://linkedin.com/in/maanasi8"
                    target="_blank"
                    rel="noreferrer"
                  >
                    linkedin.com/in/maanasi8
                  </ChannelValue>
                  <IconArrow>
                    <ArrowUpRight size="1rem" weight="bold" />
                  </IconArrow>
                </ChannelRow>
              </Channel>

              <Channel>
                <ChannelLabel>GitHub</ChannelLabel>
                <ChannelRow>
                  <ChannelValue
                    href="https://github.com/maanasi8"
                    target="_blank"
                    rel="noreferrer"
                  >
                    github.com/maanasi8
                  </ChannelValue>
                  <IconArrow>
                    <ArrowUpRight size="1rem" weight="bold" />
                  </IconArrow>
                </ChannelRow>
              </Channel>
            </Channels>
          </Left>
        </Grid>
      </Inner>
    </Page>
  );
}
