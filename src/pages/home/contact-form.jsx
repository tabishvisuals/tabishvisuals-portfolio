import Container from "../../components/container";
import Behance from "../../assets/behance.png";
import Gmail from "../../assets/gmail.png";
import Instagram from "../../assets/instagram.png";
import Linkedin from "../../assets/linkedin.png";

function ContactForm() {
  return (
    <Container id="contact-form" className="mb-8">
      <div className="w-full bg-primary h-[37.5rem] rounded-[32px] border border-[#97D9FE] shadow-[0px_4px_25px_12px_rgba(109,51,232,0.08)] flex p-[72px]">
        <div className="flex-1 h-full flex items-start flex-col">
          <div>
            <h2 className="font-grotesque text-[#fff] text-[2.75rem] font-bold leading-[4.125rem] mb-4">
              Let&apos;s Collaborate
            </h2>
            <p className="font-inter text-[#fff] font-normal text-lg max-w-[26.875rem]">
              Thank you for visiting my portfolio. I&apos;m excited about the
              future possibilities, and I look forward to connecting with you!
            </p>
          </div>

          <div className="flex items-center justify-center gap-16 mt-auto">
            <img src={Instagram} className="w-16 h-16 cursor-pointer" />
            <img src={Linkedin} className="w-16 h-16 cursor-pointer" />
            <img src={Behance} className="w-16 h-16 cursor-pointer" />
            <img src={Gmail} className="w-16 h-16 cursor-pointer" />
          </div>
        </div>
        <div className="flex-1 flex justify-end">
          <div className="w-[21.5rem]">
            <h2 className="font-grotesque text-[#fff] text-[2.75rem] font-bold leading-[4.125rem] mb-8">
              Get in touch
            </h2>

            <form
              action=""
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col gap-4"
            >
              <input
                required
                name="name"
                placeholder="Name"
                className="py-3.5 px-4 w-full rounded-lg outline-none placeholder:text-[#322F35] placeholder:font-inter"
              />
              <input
                required
                name="email"
                type="email"
                placeholder="Email"
                className="py-3.5 px-4 w-full rounded-lg outline-none placeholder:text-[#322F35] placeholder:font-inter"
              />
              <textarea
                required
                name="message"
                placeholder="Message"
                rows={4}
                className="py-3.5 px-4 w-full rounded-lg outline-none placeholder:text-[#322F35] placeholder:font-inter"
              />

              <button
                type="submit"
                className="w-full h-14 mt-4 rounded-2xl bg-secondary text-[#fff] text-2xl leading-[3rem] font-medium font-inter border-4 border-[#000] box-border"
              >
                Contact Me
              </button>
            </form>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default ContactForm;
