import clsx from "clsx";
import DefaultAccordion from "./Accordion";
import githubIcon from "/public/icons/github.svg";
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
        "max-w-7xl py-6 px-3 md:py-10 md:px-5 mx-auto mb-28 grid grid-cols-[1fr] lg:grid-cols-[1fr,2fr] md:gap-36 gap-10",
        text.className
      )}
    >
      <h2 className="text-5xl capitalize md:max-w-[3.4ch] break-words md:text-9xl font-bold md:uppercase md:text-zinc-200 md:hover:text-zinc-400/[.60] transition duration-500">
        Projetos
      </h2>
      <div>
        <p className="text-xl md:text-2xl max-w-[46ch] mb-16 text-gray-800">
          Desenvolvo pequenos projetos utilizando apenas <b>HTML</b>,
          <b> CSS </b>e <b>JavaScript</b>. Para aplicativos web como o miniblog
          Galaxy eu utilizo o <b>NextJS</b> + <b>React</b>. Sou apaixonado por
          tecnologia, focado em resolver problemas, sempre com atenção aos
          detalhes e ao design. ❤️
        </p>
        <DefaultAccordion />
        <button className="bg-primary rounded-md text-white p-4 hover:bg-orange-500 transition duration-300 uppercase font-bold">
          <a
            href="https://github.com"
            target="_blank"
            className="flex items-center gap-3"
          >
            Mais projetos
            <img src={githubIcon.src} />
          </a>
        </button>
      </div>
    </section>
  );
};

export default Project;
