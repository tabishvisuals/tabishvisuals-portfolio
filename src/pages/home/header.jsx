import Container from "../../components/container";
import illustration from "../../assets/illustration.svg";
import resume from "../../assets/resume.pdf";

function Header() {
  const scrollToContactForm = () => {
    document.getElementById("contact-form").scrollIntoView();
  };

  return (
    <>
      <Container className="h-[calc(100vh-100px)] flex items-center justify-center">
        <div className="max-w-[53.75rem] flex items-center flex-col">
          <h1 className="lg:text-[2.75rem] md:text-4xl text-3xl text-secondary font-medium lg:leading-[2.75rem] font-grotesque text-center">
            Hello,👋 <br /> I&apos;m{" "}
            <span className="text-primary font-bold">Tabish</span> -{" "}
            <span className="text-secondary font-bold">UI/UX Designer.</span>
            Turning experiences into digital magic. Let&apos;s create
            awe-inspiring designs together!{" "}
          </h1>
          <div className="mt-8 flex md:gap-8 gap-4">
            <button
              onClick={scrollToContactForm}
              className="py-2 lg:px-16 px-8 rounded-2xl bg-[#279EFF] shadow-[0px_4px_14px_0px_rgba(39,158,255,0.37)] text-[#fff] text-sm md:text-base lg:text-lg font-bold font-inter active:shadow-none transition-all"
            >
              Contact Me
            </button>

            <a href={resume} download className="inline-block">
              <button
                className="py-2 lg:px-16 px-8 shadow-[0px_4px_14px_0px_rgba(0,0,0,0.25)] text-secondary text-sm md:text-base lg:text-lg font-bold font-inter active:shadow-none transition-all"
                style={{
                  background: `linear-gradient(white, white) padding-box,
              linear-gradient(to right, rgba(0,0,0,1), rgba(58,61,64,1), rgba(0,0,0,0.25)) border-box`,
                  borderRadius: "16px",
                  border: `2px solid transparent`,
                }}
              >
                Get Resume
              </button>
            </a>
          </div>
        </div>
      </Container>

      <Container className="h-[14rem]">
        <img src={illustration} className="h-full" />
      </Container>
    </>
  );
}

export default Header;
