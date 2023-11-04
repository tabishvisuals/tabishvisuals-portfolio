import Container from "../../components/container";
import illustration from "../../assets/illustraion.svg";

function Header() {
  return (
    <>
      <Container className="h-[calc(100vh-100px)] flex items-center justify-center">
        <div className="max-w-[53.75rem] flex items-center flex-col">
          <h1 className="text-[2.75rem] text-secondary font-medium leading-[2.75rem] font-grotesque text-center">
            Hello,👋 <br /> I&apos;m{" "}
            <span className="text-primary font-bold">Tabish</span> -{" "}
            <span className="text-secondary font-bold">UI/UX Designer.</span>
            Turning experiences into digital magic. Let&apos;s create
            awe-inspiring designs together!{" "}
          </h1>
          <div className="mt-8 flex gap-8">
            <button className="py-2 px-16 rounded-2xl bg-[#279EFF] shadow-[0px_4px_14px_0px_rgba(39,158,255,0.37)] text-[#fff] text-lg font-bold font-inter active:shadow-none transition-all">
              Contact Me
            </button>
            <button
              className="py-2 px-16 shadow-[0px_4px_14px_0px_rgba(0,0,0,0.25)] text-secondary text-lg font-bold font-inter active:shadow-none transition-all"
              style={{
                background: `linear-gradient(white, white) padding-box,
              linear-gradient(to right, rgba(0,0,0,1), rgba(58,61,64,1), rgba(0,0,0,0.25)) border-box`,
                borderRadius: "16px",
                border: `2px solid transparent`,
              }}
            >
              Get Resume
            </button>
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
