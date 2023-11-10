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
          <h2 className="font-grotesque text-2xl lg:text-[2rem] font-bold lg:leading-[3.575rem] text-secondary mb-2 md:mb-4">
            Tabish - UI/UX Designer 👋
          </h2>
          <p className="font-inter text-[#3A3D40] text-base lg:text-lg mb-2 md:mb-4">
            Crafting Engaging User Experiences Through a Creative Lens
          </p>
          <p className="font-inter text-base lg:text-lg text-[#3A3D40]">
            Greetings! I&apos;m Tabish, a passionate UI/UX designer with a
            creative flair and a strong background in photography and editing.
            Over the past two years, I&apos;ve immersed myself in the
            captivating world of UI/UX design under the guidance of industry
            experts, honing my skills and gaining invaluable insights into the
            art of creating seamless digital experiences.
          </p>

          <h2 className="font-grotesque text-2xl lg:text-[2rem] lg:leading-[3.575rem] text-secondary mb-2 md:mb-4">
            My Journey and Expertise
          </h2>
          <p className="font-inter text-base lg:text-lg text-[#3A3D40] mb-2 md:mb-4">
            My journey in the realm of design started with my fascination for
            photography and editing, where I developed a keen eye for aesthetics
            and visual storytelling. This passion naturally led me to explore
            the captivating world of user interface and user experience design,
            where I discovered my true calling.
          </p>
          <p className="font-inter text-base lg:text-lg text-[#3A3D40] ">
            Throughout my UI/UX learning journey, I&apos;ve embraced the latest
            tools and technologies, and today, I&apos;m proficient in utilizing
            Figma to bring my creative visions to life. Figma has become my
            trusted canvas, allowing me to translate ideas into visually
            stunning and user-friendly designs.
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
