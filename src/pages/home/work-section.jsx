import Container from "../../components/container";
import WorkCard from "../../components/work-card";
import caseStudy1 from "../../assets/caseStudy1.png";
import caseStudy2 from "../../assets/caseStudy2.png";

const PROJECTS = [
  {
    title: "Doctor App Case study",
    description: `The healer app is a mobile app for doctors and doctor's assistant
  it's going to make it easier for their life to provide some great
  features that make help in making appointments and keep remembering
  old records and save time. It's going to heal their lives.`,
    points: ["Problem solving", "Design Thinking", "User interface design"],
    link: "https://www.behance.net/gallery/154166107/Doctor-App-UXUI-Case-Study",
    thumbnail: caseStudy1,
  },
  {
    title: "My Islah app",
    description: `The project is a collaboration between two individuals, me and a developer. He wanted me to do the design for his application. And After getting his basic requirements,
  I began working together`,
    points: ["Problem solving", "Design Thinking", "User interface design"],
    link: "https://www.behance.net/gallery/160487351/The-Quran-Project-UIUX-case-study",
    thumbnail: caseStudy2,
  },
];

function WorkSection() {
  return (
    <Container id="work" className="mt-[5.75rem] mb-24">
      <h2 className="font-grotesque text-[2.75rem] font-bold leading-[3.575rem] text-secondary mb-16">
        Selected Works
      </h2>

      <div className="flex flex-col gap-[3.375rem]">
        {PROJECTS.map((project, i) => (
          <WorkCard key={project.title + i} {...project} />
        ))}
      </div>
    </Container>
  );
}

export default WorkSection;
