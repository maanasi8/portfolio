import styled, { keyframes, css } from "styled-components";

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
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
  max-width: 1100px;
  margin: 0 auto;
  padding: 5rem 2.5rem 6rem;
  width: 100%;

  @media (max-width: 768px) {
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
    height: 1.5px;
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
  height: 2px;
  background: linear-gradient(to right, #c8963e, #b2c4a4);
  margin-bottom: 3.5rem;
  ${anim(0.2)}
`;

const Timeline = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2.5rem;
  max-width: 100%;
`;

const ExpItem = styled.div`
  display: grid;
  grid-template-columns: 2rem 1fr;
  gap: 1.5rem;
  ${(p) => anim(0.15 + p.$index * 0.12)}
`;

const Rail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 0.35rem;
`;

const Dot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #c8963e;
  border: 2px solid #f5edd8;
  box-shadow: 0 0 0 1.5px #c8963e;
  flex-shrink: 0;
  z-index: 1;
`;

const ExpContent = styled.div`
  padding-bottom: 3rem;
`;

const ExpMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.5rem;
  flex-wrap: wrap;
`;

const ExpType = styled.span`
  font-family: "Open Sans", sans-serif;
  font-size: 0.62rem;
  font-weight: 500;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #f5edd8;
  background: #c8963e;
  padding: 0.2rem 0.6rem;
`;

const ExpPeriod = styled.span`
  font-family: "Heebo", sans-serif;
  font-size: 0.72rem;
  font-weight: 300;
  color: #8a6a3a;
  letter-spacing: 0.04em;
`;

const ExpRole = styled.h2`
  font-family: "Open Sans", sans-serif;
  font-size: 1.75rem;
  font-weight: 500;
  color: #2c1a0e;
  margin: 0 0 0.3rem;
  line-height: 1.1;
`;

const ExpCompany = styled.p`
  font-family: "Heebo", sans-serif;
  font-size: 0.85rem;
  font-weight: 300;
  color: #8a6a3a;
  margin: 0 0 1rem;
`;

const ExpStack = styled.div`
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
  border: 1px solid rgba(200, 150, 62, 0.4);
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
              <Rail>
                <Dot />
              </Rail>

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
