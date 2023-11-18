import Nav from "./Nav";
import Footer from "./footer";

function Wrapper({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Nav />
      {children}
      <Footer />
    </>
  );
}

export default Wrapper;
