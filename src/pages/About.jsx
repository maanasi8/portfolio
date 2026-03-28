import styled, { keyframes, css } from "styled-components";
import ProfilePic from "../assets/profile.jpeg";

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
  margin-bottom: 5rem;
  ${anim(0.28)}

  @media (max-width: 48rem) {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
`;

const Bio = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

const BioP = styled.p`
  font-family: "Heebo", sans-serif;
  font-size: 0.97rem;
  font-weight: 300;
  line-height: 1.85;
  color: #5c3e22;
  margin: 0;
`;

const PhotoCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const SectionLabel = styled.h3`
  font-family: "Open Sans", sans-serif;
  font-size: 0.68rem;
  font-weight: 500;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #a6782a;
  margin: 0 0 1rem;
`;

const EduList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
  border-left: 0.125rem solid rgba(200, 150, 62, 0.3);
`;

const EduItem = styled.div`
  padding: 0.9rem 0 0.9rem 1.25rem;
  position: relative;
  border-bottom: 0.0625rem solid rgba(44, 26, 14, 0.08);

  &:last-child {
    border-bottom: none;
  }

  &::before {
    content: "";
    position: absolute;
    left: -0.3125rem;
    top: 1.15rem;
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    background: #c8963e;
    border: 0.09375rem solid #f5edd8;
  }
`;

const EduHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-bottom: 0.25rem;
`;

const EduDegree = styled.span`
  font-family: "Open Sans", sans-serif;
  font-size: 1.05rem;
  font-weight: 500;
  color: #2c1a0e;
`;

const EduScore = styled.span`
  font-family: "Heebo", sans-serif;
  font-size: 0.72rem;
  font-weight: 500;
  color: #c8963e;
  letter-spacing: 0.04em;
  white-space: nowrap;
`;

const EduMeta = styled.div`
  font-family: "Heebo", sans-serif;
  font-size: 0.78rem;
  font-weight: 300;
  color: #8a6a3a;
  line-height: 1.5;
`;

const SkillsSection = styled.div`
  ${anim(0.4)}
`;

const SkillsSectionLabel = styled.h2`
  font-family: "Open Sans", sans-serif;
  font-size: 0.68rem;
  font-weight: 500;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #a6782a;
  margin: 0 0 1.75rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;

  &::after {
    content: "";
    flex: 1;
    height: 0.0625rem;
    background: rgba(44, 26, 14, 0.1);
  }
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(12.5rem, 1fr));
  gap: 2rem;

  @media (max-width: 30rem) {
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
  }
`;

const SkillsGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const SkillsCat = styled.p`
  font-family: "Open Sans", sans-serif;
  font-size: 1rem;
  font-weight: 500;
  font-style: italic;
  color: #2c1a0e;
  margin: 0;
  padding-bottom: 0.5rem;
  border-bottom: 0.0625rem solid rgba(200, 150, 62, 0.3);
`;

const SkillsTags = styled.div`
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

const skills = {
  Fundamentals: ["C", "C++", "DSA", "OOP", "OS", "DBMS"],
  Databases: ["MySQL", "PostgreSQL", "MongoDB"],
  "Web Dev": [
    "HTML",
    "CSS",
    "JavaScript",
    "ReactJS",
    "NodeJS",
    "Go",
    "REST APIs",
    "GraphQL",
  ],
  "Tools & Others": [
    "Git",
    "Redis",
    "Kafka",
    "Prometheus (PromQL)",
    "Zoho Desk APIs",
    "Zoho CRM APIs",
  ],
};

const education = [
  {
    degree: "B.E. Computer Science",
    school: "KLE Technological University",
    year: "2021-2025",
    score: "CGPA 9.05",
  },
  {
    degree: "Pre-University",
    school: "The Learning Centre PU College, Mangalore",
    year: "2019-2021",
    score: "95.5%",
  },
  {
    degree: "Schooling",
    school: "Vimal V. Deshpande School, Haliyal",
    year: "2009-2019",
    score: "93.4%",
  },
];

export default function About() {
  return (
    <Page>
      <Inner>
        <PageTag>About Me</PageTag>

        <PageTitle>
          Engineer, builder,
          <br />
          <em>problem solver.</em>
        </PageTitle>

        <Divider />

        <Grid>
          <Bio>
            <BioP>
              I'm Maanasi Shastri, a Software Engineer based in Bengaluru,
              India. I graduated with a B.E. in Computer Science from KLE
              Technological University with a CGPA of 9.05, and I've been
              building production systems ever since.
            </BioP>
            <BioP>
              I enjoy building across the spectrum — from high-throughput
              systems handling thousands of events per second to small UI
              details that elevate user experience. For me, clean code and
              thoughtful design are deeply connected.
            </BioP>
          </Bio>

          <PhotoCol>
            <div>
              <SectionLabel>Education</SectionLabel>
              <EduList>
                {education.map((e, i) => (
                  <EduItem key={i}>
                    <EduHeader>
                      <EduDegree>{e.degree}</EduDegree>
                      <EduScore>{e.score}</EduScore>
                    </EduHeader>
                    <EduMeta>
                      {e.school} · {e.year}
                    </EduMeta>
                  </EduItem>
                ))}
              </EduList>
            </div>
          </PhotoCol>
        </Grid>

        <SkillsSection>
          <SkillsSectionLabel>Skills</SkillsSectionLabel>
          <SkillsGrid>
            {Object.entries(skills).map(([cat, items]) => (
              <SkillsGroup key={cat}>
                <SkillsCat>{cat}</SkillsCat>
                <SkillsTags>
                  {items.map((s) => (
                    <Tag key={s}>{s}</Tag>
                  ))}
                </SkillsTags>
              </SkillsGroup>
            ))}
          </SkillsGrid>
        </SkillsSection>
      </Inner>
    </Page>
  );
}
