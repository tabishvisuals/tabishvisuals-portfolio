import Footer from "./footer";
import Navbar from "./navbar";

function Layout(props) {
  const { children } = props;
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
