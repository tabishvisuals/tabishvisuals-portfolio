import About from "./about";
import ContactForm from "./contact-form";
import Header from "./header";
import WorkSection from "./work-section";

function Home() {
  return (
    <>
      <Header />
      <WorkSection />
      <About />
      <ContactForm />
    </>
  );
}

export default Home;
