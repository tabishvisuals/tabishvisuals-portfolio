import Container from "../../components/container";
import logo from "../../assets/logo.svg";

function Navbar() {
  return (
    <nav className="sticky top-0 bg-[rgba(255,255,255,0.25)] backdrop-blur-lg">
      <Container>
        <div className="w-full flex justify-between items-center py-[26px]">
          <div
            onClick={() => document.getElementById("header").scrollIntoView()}
          >
            <img src={logo} className="lg:h-12 h-10 cursor-pointer" />
          </div>

          <div className="flex items-center gap-8">
            <a
              className="font-grotesque lg:text-2xl font-normal leading-9 text-secondary text-lg"
              href="#about"
            >
              About
            </a>
            <a
              className="font-grotesque lg:text-2xl font-normal leading-9 text-secondary text-lg"
              href="#work"
            >
              Work
            </a>
          </div>
        </div>
      </Container>
    </nav>
  );
}

export default Navbar;
