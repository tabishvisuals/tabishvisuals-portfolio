import Container from "../../components/container";
import WorkCard from "../../components/work-card";
import caseStudy1 from "../../assets/caseStudy1.png";
import caseStudy2 from "../../assets/caseStudy2.png";

const PROJECTS = [
  {
    title: "A Deep Dive into My Doctor App Case Study",
    description: `Explore the transformative journey of the Healer App, a dedicated mobile solution for doctors and their assistants. Redefining efficiency in healthcare, it seamlessly streamlines appointment scheduling, record-keeping, and time management. Dive into our problem-solving approach, guided by robust design thinking principles, culminating in an intuitive and user-centric interface design. Witness how Healer isn't just an app; it's a remedy for simplifying and enhancing the lives of healthcare professionals.`,
    link: "https://www.behance.net/gallery/154166107/Doctor-App-UXUI-Case-Study",
    thumbnail: caseStudy1,
  },
  {
    title: "Navigating the Islah App Design Collaboration",
    description: `Dive into the collaborative journey behind the Islah App – a joint venture between a developer and me. Given the developer's vision, I embarked on a design odyssey, unraveling challenges through problem-solving, guided by design thinking principles. Explore the meticulous process of curating an intuitive user interface that brings the vision to life. Witness how teamwork and design expertise converge to shape the Islah App into a seamless and user-centric experience`,
    link: "https://www.behance.net/gallery/160487351/The-Quran-Project-UIUX-case-study",
    thumbnail: caseStudy2,
  },
];

function WorkSection() {
  return (
    <Container id="work" className="mt-[5.75rem] mb-24">
      <h2 className="font-grotesque lg:text-[2.75rem] md:text-4xl text-3xl font-bold leading-[3.575rem] text-secondary mb-4 md:mb-8 lg:mb-16">
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
