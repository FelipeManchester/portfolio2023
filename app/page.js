import Project from "./components/Project";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Academic from "./components/Academic";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Main />
      <Project />
      <Academic />
      <Footer />
    </>
  );
}
