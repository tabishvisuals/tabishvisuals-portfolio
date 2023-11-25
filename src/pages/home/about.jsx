import Container from "../../components/container";
import Tabish from "../../assets/tabish.png";

function About() {
  return (
    <Container id="about" className="mb-24">
      <div className="w-full flex flex-col-reverse gap-4 lg:gap-0 lg:flex-row">
        <div className="max-w-[32.1875rem]">
          <h2 className="font-grotesque lg:text-[2.75rem] md:text-4xl text-3xl font-bold lg:leading-[3.575rem] text-secondary mb-2 md:mb-4">
            Who am I?
          </h2>
          <h2 className="font-grotesque text-2xl font-bold text-secondary mb-2">
            👋 Tabish - UI/UX Designer
          </h2>
          <p className="font-inter text-[#3A3D40] text-base lg:text-lg mb-4">
            Photography enthusiast turned UI/UX designer, I blend aesthetics and
            technology. Proficient in Figma, I turn ideas into visually stunning
            designs.
          </p>
          <h2 className="font-grotesque text-2xl font-bold text-secondary mb-2">
            💡 Problem-Solving Pro
          </h2>
          <p className="font-inter text-[#3A3D40] text-base lg:text-lg mb-4">
            I thrive on dissecting complex challenges, from delving into user
            research to enhancing visual appeal. Every design is an opportunity
            to make a lasting impact
          </p>
          <h2 className="font-grotesque text-2xl font-bold text-secondary mb-2">
            🌱 Experience & Growth
          </h2>
          <p className="font-inter text-[#3A3D40] text-base lg:text-lg mb-4">
            Web Team Lead at Osumare Leading Osumare&amps;s web team, I
            orchestrate innovative design solutions, ensuring a seamless blend
            of creativity and functionality in every project.
          </p>
          <h2 className="font-grotesque text-2xl font-bold text-secondary mb-2">
            🌟 Vision
          </h2>
          <p className="font-inter text-[#3A3D40] text-base lg:text-lg mb-4">
            In this dynamic digital era, I&amps;m dedicated to creating
            experiences that resonate, elevate brands, and evoke emotions.
            Let&amps;s push design boundaries together for unparalleled user
            experiences!
          </p>
        </div>
        <div className="flex-1 flex justify-start lg:justify-end">
          <img src={Tabish} alt="tabish profile pic" className="lg:h-[42rem]" />
        </div>
      </div>
    </Container>
  );
}

export default About;
