import Container from "../../components/container";
import logo from "../../assets/logo.svg";

function Navbar() {
  return (
    <nav>
      <Container>
        <div className="w-full flex justify-between items-center py-[26px]">
          <div>
            <img src={logo} className="h-12" />
          </div>

          <div className="flex items-center gap-8">
            <a
              className="font-grotesque text-2xl font-normal leading-9 text-secondary"
              href=""
            >
              About
            </a>
            <a
              className="font-grotesque text-2xl font-normal leading-9 text-secondary"
              href=""
            >
              Work
            </a>
            <a
              className="font-grotesque text-2xl font-normal leading-9 text-secondary underline"
              href=""
            >
              Resume
            </a>
          </div>
        </div>
      </Container>
    </nav>
  );
}

export default Navbar;
