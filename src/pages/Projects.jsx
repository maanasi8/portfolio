import styled, { keyframes, css } from "styled-components";

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(1.25rem); }
  to   { opacity: 1; transform: translateY(0); }
`;

const anim = (delay) => css`
  opacity: 0;
  animation: ${fadeUp} 0.6s ease forwards;
  animation-delay: ${delay}s;
`;

const projects = [
  {
    number: "01",
    title: "Spot the Fraudster",
    desc: "A Kafka-based game application with a real-time data pipeline. Players interact with streaming data to identify fraudulent behaviour — designed to showcase the power of real-time event processing.",
    tags: ["Kafka", "Go", "Real-time", "Data Pipeline"],
    link: "https://www.zeliot.in/developer-blog/games-built-using-condense-spot-the-fraudster",
    highlight: "Real-time",
  },
  {
    number: "02",
    title: "Facial Emotion Recognition System",
    desc: "Deployed a CNN model on MAX78000 microcontroller for real-time facial emotion recognition at the edge. Achieved 56.52% accuracy with an inference time of just 1,516 μs using PyTorch-based embedded workflows.",
    tags: ["PyTorch", "CNN", "Edge AI", "MAX78000", "Embedded"],
    link: "https://github.com/maanasi8/Facial-Emotion-Recognition-System",
    highlight: "Edge AI",
  },
  {
    number: "03",
    title: "ITIHAAS - History Quiz Web App",
    desc: "A full-stack history-learning platform built with React.js, Spring Boot, and MongoDB. Designed for accessibility and inclusivity, achieving 20% higher user engagement while supporting SDG 4 (Quality Education).",
    tags: ["React.js", "Spring Boot", "MongoDB", "Full Stack"],
    link: "https://sites.google.com/view/maanasi-itihaas-a-quiz-app",
    highlight: "SDG 4",
  },
  {
    number: "04",
    title: "Bus Reservation System",
    desc: "A console-based C++ application using object-oriented programming principles. Designed admin and user dashboards to manage buses, passengers, and ticket bookings, leveraging STL containers like map and vector.",
    tags: ["C++", "OOP", "STL", "Data Structures"],
    link: null,
    highlight: "OOP",
  },
];

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

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
  border-top: 0.0625 solid rgba(44, 26, 14, 0.1);
`;

const ProjectItem = styled.div`
  display: grid;
  grid-template-columns: clamp(3rem, 8vw, 4rem) 1fr;
  gap: clamp(0.75rem, 3vw, 2rem);
  padding: clamp(1.5rem, 3vw, 2.5rem) 0;
  border-bottom: 0.0625 solid rgba(44, 26, 14, 0.1);
  transition: background 0.2s ease;
  ${(p) => anim(0.18 + p.$index * 0.1)}

  &:hover {
    background: rgba(200, 150, 62, 0.04);
    margin: 0 -1.5rem;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  @media (max-width: 56rem) {
    grid-template-columns: clamp(2.5rem, 7vw, 3.5rem) 1fr;
    gap: clamp(0.75rem, 2.5vw, 1.5rem);
    padding: clamp(1.25rem, 2.5vw, 2rem) 0;
  }

  @media (max-width: 37.5rem) {
    grid-template-columns: clamp(2rem, 5vw, 2.5rem) 1fr;
    gap: clamp(0.75rem, 2vw, 1rem);
    padding: clamp(1.25rem, 2.5vw, 1.75rem) 0;

    &:hover {
      margin: 0;
      padding-left: 0;
      padding-right: 0;
    }
  }

  @media (max-width: 24rem) {
    grid-template-columns: 1fr;
    gap: clamp(0.5rem, 2vw, 0.75rem);
  }
`;

const ProjectNumber = styled.div`
  font-family: "Open Sans", sans-serif;
  font-size: 2rem;
  font-weight: 300;
  color: rgba(200, 150, 62, 0.35);
  line-height: 1;
  padding-top: 0.2rem;
  user-select: none;

  @media (max-width: 37.5rem) {
    font-size: 1.4rem;
  }

  @media (max-width: 24rem) {
    font-size: 1rem;
    padding-top: 0;
  }
`;

const ProjectBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const ProjectTop = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;
`;

const ProjectTitle = styled.h2`
  font-family: "Open Sans", sans-serif;
  font-size: clamp(1.1rem, 4vw, 1.6rem);
  font-weight: 500;
  color: #2c1a0e;
  margin: 0;
  line-height: 1.15;
`;

const ProjectHighlight = styled.span`
  font-family: "Open Sans", sans-serif;
  font-size: 0.62rem;
  font-weight: 500;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #8fa882;
  border: 0.0625 solid #b2c4a4;
  padding: 0.2rem 0.6rem;
  white-space: nowrap;
  align-self: flex-start;
  margin-top: 0.25rem;
`;

const ProjectDesc = styled.p`
  font-family: "Heebo", sans-serif;
  font-size: clamp(0.85rem, 1.5vw, 0.95rem);
  font-weight: 300;
  line-height: 1.8;
  color: #5c3e22;
  margin: 0;
  max-width: 40rem;
`;

const ProjectFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: clamp(0.75rem, 2vw, 1rem);
  flex-wrap: wrap;
`;

const ProjectTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
`;

const Tag = styled.span`
  font-family: "Heebo", sans-serif;
  font-size: 0.68rem;
  font-weight: 400;
  letter-spacing: 0.06em;
  color: #8a6a3a;
  padding: 0.25rem 0.65rem;
  border: 0.0625 solid rgba(200, 150, 62, 0.4);
  background: rgba(200, 150, 62, 0.06);
  transition:
    background 0.18s ease,
    border-color 0.18s ease;

  &:hover {
    background: rgba(200, 150, 62, 0.16);
    border-color: #c8963e;
  }
`;

const ProjectLink = styled.a`
  font-family: "Open Sans", sans-serif;
  font-size: 0.78rem;
  font-weight: 400;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #c8963e;
  text-decoration: none;
  white-space: nowrap;
  transition:
    color 0.18s ease,
    letter-spacing 0.18s ease;

  &:hover {
    color: #a6782a;
    letter-spacing: 0.14em;
  }
`;

export default function Projects() {
  return (
    <Page>
      <Inner>
        <PageTitle>Projects</PageTitle>

        <Divider />

        <List>
          {projects.map((p, i) => (
            <ProjectItem key={p.number} $index={i}>
              <ProjectNumber>{p.number}</ProjectNumber>

              <ProjectBody>
                <ProjectTop>
                  <ProjectTitle>{p.title}</ProjectTitle>
                  <ProjectHighlight>{p.highlight}</ProjectHighlight>
                </ProjectTop>

                <ProjectDesc>{p.desc}</ProjectDesc>

                <ProjectFooter>
                  <ProjectTags>
                    {p.tags.map((t) => (
                      <Tag key={t}>{t}</Tag>
                    ))}
                  </ProjectTags>
                  {p.link && (
                    <ProjectLink href={p.link} target="_blank" rel="noreferrer">
                      View ↗
                    </ProjectLink>
                  )}
                </ProjectFooter>
              </ProjectBody>
            </ProjectItem>
          ))}
        </List>
      </Inner>
    </Page>
  );
}
