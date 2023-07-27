import clsx from "clsx";
import DefaultAccordion from "./Accordion";
import { Fira_Sans } from "next/font/google";

const text = Fira_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const Project = () => {
  return (
    <section
      aria-label="Projetos"
      id="projetos"
      className={clsx(
        "max-w-7xl md:py-10 md:px-5 mx-auto my-0 grid lg:grid-cols-[1fr,2fr] md:gap-36 gap-12",
        text.className
      )}
    >
      <h2 className="text-9xl font-bold uppercase text-gray-300 hover:text-gray-400/[.60] transition duration-300">
        Pro
        <br />
        jet
        <br />
        os
      </h2>
      <div>
        <p>
          Desenvolvo pequenos projetos utilizando apenas HTML, CSS e JavaScript.
          Para aplicativos web como o miniblog Galaxy eu utilizo o React. Design
          e código são minhas paixões ❤️
        </p>

        <div className="bg-white rounded-md">
          <h3>Galaxy</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
          </ul>
          <img src="https://www.typewolf.com/assets/img/sweatshirt.jpg" />
          <p>
            O Galaxy é um miniblog feito com React no Front-End e Firebase no
            Back-end. Nele você pode criar, editar e apagar suas postagens. O
            design foi inspirado no nosso universo.
          </p>
        </div>
      </div>
      <DefaultAccordion />
    </section>
  );
};

export default Project;
