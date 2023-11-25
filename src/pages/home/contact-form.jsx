import Container from "../../components/container";
import Behance from "../../assets/behance.png";
import Instagram from "../../assets/instagram.png";
import Linkedin from "../../assets/linkedin.png";
import { useState } from "react";

const INSTAGRAM = "https://instagram.com/tabishvisuals?igshid=MzMyNGUyNmU2YQ==";
const BEHANCE = "https://www.behance.net/khantabish";
const LINKEDIN = "https://www.linkedin.com/in/tabishvisuals/";

function ContactForm() {
  const [state, setState] = useState({
    name: "",
    email: "",
    message: "",
    accessKey: "90589f42-9f8a-48d4-aa3c-b8ad21af5f46",
  });
  const [busy, setBusy] = useState(null);

  const onInputChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    setState((prevState) => ({ ...prevState, [key]: value }));
  };

  const socialMediaHandler = (url) => {
    window.open(url, "_blank");
  };

  const formSubmitHandler = async (e) => {
    e.preventDefault();
    setBusy("loading");
    try {
      const response = await fetch("https://api.staticforms.xyz/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(state),
      });

      if (response.ok) {
        setBusy(null);
        alert(
          "Form submitted successfully! ✅, I will get back to you soon 😊"
        );
        setState((prevState) => ({
          ...prevState,
          name: "",
          email: "",
          message: "",
        }));
      } else {
        setBusy("error");
        alert("Something went wrong! 🤯, Please try again!");
      }
    } catch (error) {
      setBusy("error");
      alert("Something went wrong! 🤯, Please try again!");
    }
  };

  return (
    <Container id="contact-form" className="mb-8">
      <div className="w-full bg-primary flex-col lg:flex-row lg:h-[37.5rem] rounded-[32px] border border-[#97D9FE] shadow-[0px_4px_25px_12px_rgba(109,51,232,0.08)] flex p-8 lg:p-[72px] gap-10 lg:gap-0">
        <div className="flex-1 lg:h-full flex items-start flex-col gap-4 lg:gap-0">
          <div>
            <h2 className="font-grotesque text-[#fff] lg:text-[2.75rem] md:text-4xl text-3xl font-bold lg:leading-[4.125rem] mb-4">
              Let&apos;s Collaborate
            </h2>
            <p className="font-inter text-[#fff] font-normal text-base lg:text-lg max-w-[26.875rem]">
              Thank you for visiting my portfolio. I&apos;m excited about the
              future possibilities, and I look forward to connecting with you!
            </p>
          </div>

          <div className="flex items-center justify-center gap-8 lg:gap-16 mt-auto">
            <img
              src={Instagram}
              onClick={() => socialMediaHandler(INSTAGRAM)}
              className="w-8 h-8 lg:w-16 lg:h-16 cursor-pointer"
            />
            <img
              src={Linkedin}
              onClick={() => socialMediaHandler(LINKEDIN)}
              className="w-8 h-8 lg:w-16 lg:h-16 cursor-pointer"
            />
            <img
              src={Behance}
              onClick={() => socialMediaHandler(BEHANCE)}
              className="w-8 h-8 lg:w-16 lg:h-16 cursor-pointer"
            />
          </div>
        </div>
        <div className="flex-1 flex justify-start lg:justify-end">
          <div className="w-[21.5rem]">
            <h2 className="font-grotesque text-[#fff] lg:text-[2.75rem] md:text-4xl text-3xl font-bold lg:leading-[4.125rem] mb-8">
              Get in touch
            </h2>

            <form className="flex flex-col gap-4" onSubmit={formSubmitHandler}>
              {/* <input
                type="hidden"
                name="accessKey"
                value="90589f42-9f8a-48d4-aa3c-b8ad21af5f46"
              /> */}

              <input
                required
                name="name"
                placeholder="Name"
                className="py-3.5 px-4 w-full rounded-lg outline-none placeholder:text-[#322F35] placeholder:font-inter"
                onChange={onInputChange}
                value={state.name}
              />
              <input
                required
                name="email"
                type="email"
                placeholder="Email"
                className="py-3.5 px-4 w-full rounded-lg outline-none placeholder:text-[#322F35] placeholder:font-inter"
                onChange={onInputChange}
                value={state.email}
              />
              <textarea
                required
                name="message"
                placeholder="Message"
                rows={4}
                className="py-3.5 px-4 w-full rounded-lg outline-none placeholder:text-[#322F35] placeholder:font-inter"
                onChange={onInputChange}
                value={state.message}
              />

              <button
                type="submit"
                className="w-full h-12 lg:h-14 mt-2 lg:mt-4 rounded-2xl bg-secondary text-[#fff] text-xl lg:text-2xl lg:leading-[3rem] font-medium font-inter border-4 border-[#000] box-border"
              >
                {busy === "loading" ? "Loading..." : "Contact Me"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default ContactForm;
