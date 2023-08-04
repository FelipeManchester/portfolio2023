import clsx from "clsx";
import { Fira_Sans } from "next/font/google";

const text = Fira_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const Academic = () => {
  return (
    <section
      aria-label="Formação"
      id="formacao"
      className={clsx(
        "bg-gradient-to-r from-[#454545] to-[#242424]",
        text.className
      )}
    >
      <div className="max-w-7xl py-6 px-3 md:py-10 md:px-5 mx-auto my-0 grid grid-cols-[1fr] md:grid-cols-[2fr,1fr] lg:grid-cols-[4fr,1fr] md:gap-36 gap-10">
        <h2 className="text-5xl capitalize md:max-w-[3.4ch] break-words md:text-9xl font-bold md:uppercase md:text-zinc-700 md:hover:text-zinc-600/[.60] transition duration-300 md:order-1">
          Formação
        </h2>
        <div>
          <p className="text-[#a3a3a3] md:text-2xl md:max-w-[40ch] mb-16">
            Estou cursando
            <b className="text-white">
              {" "}
              Análise e Desenvolvimento de Sistemas{" "}
            </b>
            👨‍🎓️ pela Universidade Norte do Paraná (Unopar) com conclusão em
            Dezembro de 2023. Além disso, sempre me mantenho atualizado fazendo
            cursos e treinamentos online.
          </p>
          <ul className="flex flex-wrap gap-5 mb-16 text-white">
            <li className="bg-zinc-950 p-5 flex flex-col rounded-md">
              <span className="uppercase text-zinc-400">Tecnólogo</span>
              <h3 className="text-lg mb-10 relative font-bold">
                <span className="absolute block w-1 h-5 bg-primary left-[-24px]"></span>
                Análise e Desenvolvimento de Sistemas
              </h3>
              <span className="text-lg uppercase text-zinc-400 mb-3">
                Unopar 2022/2023
              </span>
            </li>
          </ul>
          <div>
            <div className="mb-14">
              <h3 className="text-lg uppercase text-zinc-400 mb-8">
                Certificados
              </h3>
              <ul className="flex flex-col gap-6">
                <li>
                  Algoritmo e Lógica de Programação
                  <span>Curso em Vídeo, 40h</span>
                </li>
                <li>
                  Responsive Web Design<span>FreeCodeCamp, 300h</span>
                </li>
                <li>
                  JavaScript Algorithms and Data Structures
                  <span>FreeCodeCamp, 300h</span>
                </li>
                <li>
                  React (Do zero ao avançado)<span>Udemy, 30h</span>
                </li>
                <li>
                  TypeScript para Iniciantes<span>Origamid, 22h</span>
                </li>
                <li>
                  Front-End Development Libraries<span>FreeCodeCamp, 300h</span>
                </li>
                <li>
                  UI Design Para Iniciantes<span>Origamid, 30h</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Academic;
