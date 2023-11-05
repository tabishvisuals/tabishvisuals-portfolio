import Container from "../../components/container";

function About() {
  return (
    <Container className="mb-24">
      <div className="w-full flex">
        <div className="max-w-[32.1875rem]">
          <h2 className="font-grotesque text-[2.75rem] font-bold leading-[3.575rem] text-secondary mb-4">
            Who am I?
          </h2>
          <h2 className="font-grotesque text-[2rem] font-bold leading-[3.575rem] text-secondary mb-4">
            Tabish - UI/UX Designer 👋
          </h2>
          <p className="font-inter text-[#3A3D40] text-lg mb-4">
            Crafting Engaging User Experiences Through a Creative Lens
          </p>
          <p className="font-inter text-lg text-[#3A3D40]">
            Greetings! I&apos;m Tabish, a passionate UI/UX designer with a
            creative flair and a strong background in photography and editing.
            Over the past two years, I&apos;ve immersed myself in the
            captivating world of UI/UX design under the guidance of industry
            experts, honing my skills and gaining invaluable insights into the
            art of creating seamless digital experiences.
          </p>
        </div>
        <div className="flex-1">image will come here</div>
      </div>
    </Container>
  );
}

export default About;
