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

const experience = [
  {
    role: "Software Engineer I",
    company: "Zeliot",
    type: "Full-time",
    period: "Jul 2025 – Present",
    location: "Bengaluru, India",
    stack: ["React", "Go", "Kafka", "Prometheus", "Zoho APIs", "RBAC"],
  },
  {
    role: "Software Engineer Intern",
    company: "Zeliot",
    type: "Internship",
    period: "Feb 2025 – May 2025",
    location: "Bengaluru, India",
    stack: ["React", "Grafana", "Zoho Desk"],
  },
  {
    role: "Project Intern",
    company: "Software Research and Services Pvt. Ltd. (Knit Space)",
    type: "Internship",
    period: "Jul 2024 – Aug 2024",
    location: "Remote",
    stack: ["Python", "TF-IDF", "NLP", "Web Crawling"],
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

const Timeline = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
  max-width: 100%;
  border-left: 0.125rem solid rgba(200, 150, 62, 0.3);
  padding-left: clamp(1rem, 2.5vw, 2rem);

  @media (max-width: 30rem) {
    padding-left: clamp(0.875rem, 2vw, 1.25rem);
  }
`;

const ExpItem = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: clamp(1rem, 2.5vw, 1.5rem);
  padding-bottom: clamp(1.5rem, 3vw, 2.5rem);
  position: relative;
  ${(p) => anim(0.15 + p.$index * 0.12)}

  &:last-child {
    padding-bottom: 0;
  }

  @media (max-width: 30rem) {
    gap: clamp(0.75rem, 2vw, 1rem);
    padding-bottom: clamp(1.25rem, 2.5vw, 2rem);
  }
`;

const Rail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 0.35rem;
`;

const Dot = styled.div`
  width: 0.625rem;
  height: 0.625rem;
  border-radius: 50%;
  background: #c8963e;
  border: 0.125rem solid #f5edd8;
  box-shadow: 0 0 0 0.09375rem #c8963e;
  flex-shrink: 0;
  z-index: 1;
`;

const ExpContent = styled.div`
  padding-bottom: 3rem;
`;

const ExpMeta = styled.div`
  display: flex;
  align-items: center;
  gap: clamp(0.5rem, 1.5vw, 0.75rem);
  margin-bottom: clamp(0.25rem, 1vw, 0.5rem);
  flex-wrap: wrap;
`;

const ExpType = styled.span`
  font-family: "Open Sans", sans-serif;
  font-size: clamp(0.55rem, 1.5vw, 0.65rem);
  font-weight: 500;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #f5edd8;
  background: #c8963e;
  padding: clamp(0.15rem, 0.5vw, 0.2rem) clamp(0.4rem, 1vw, 0.6rem);
`;

const ExpPeriod = styled.span`
  font-family: "Heebo", sans-serif;
  font-size: clamp(0.65rem, 1.5vw, 0.75rem);
  font-weight: 300;
  color: #8a6a3a;
  letter-spacing: 0.04em;
`;

const ExpRole = styled.h2`
  font-family: "Open Sans", sans-serif;
  font-size: clamp(1.1rem, 4vw, 1.75rem);
  font-weight: 500;
  color: #2c1a0e;
  margin: 0 0 clamp(0.2rem, 1vw, 0.3rem);
  line-height: 1.1;
`;

const ExpCompany = styled.p`
  font-family: "Heebo", sans-serif;
  font-size: clamp(0.8rem, 1.5vw, 0.9rem);
  font-weight: 300;
  color: #8a6a3a;
  margin: 0 0 clamp(0.75rem, 2vw, 1rem);
`;

const ExpStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: clamp(0.3rem, 1vw, 0.5rem);
`;

const Tag = styled.span`
  font-family: "Heebo", sans-serif;
  font-size: clamp(0.6rem, 1.2vw, 0.7rem);
  font-weight: 400;
  letter-spacing: 0.06em;
  color: #8a6a3a;
  padding: clamp(0.15rem, 0.5vw, 0.25rem) clamp(0.4rem, 1vw, 0.65rem);
  border: 0.0625rem solid rgba(200, 150, 62, 0.4);
  background: rgba(200, 150, 62, 0.06);
  transition:
    background 0.18s ease,
    border-color 0.18s ease;

  &:hover {
    background: rgba(200, 150, 62, 0.16);
    border-color: #c8963e;
  }
`;

export default function Experience() {
  return (
    <Page>
      <Inner>
        <PageTag>Career</PageTag>

        <PageTitle>
          Work
          <br />
          <em>Experience</em>
        </PageTitle>

        <Divider />

        <Timeline>
          {experience.map((exp, i) => (
            <ExpItem key={i} $index={i}>
              <ExpContent>
                <ExpMeta>
                  <ExpType>{exp.type}</ExpType>
                  <ExpPeriod>{exp.period}</ExpPeriod>
                </ExpMeta>

                <ExpRole>{exp.role}</ExpRole>
                <ExpCompany>
                  {exp.company} · {exp.location}
                </ExpCompany>

                <ExpStack>
                  {exp.stack.map((s) => (
                    <Tag key={s}>{s}</Tag>
                  ))}
                </ExpStack>
              </ExpContent>
            </ExpItem>
          ))}
        </Timeline>
      </Inner>
    </Page>
  );
}
