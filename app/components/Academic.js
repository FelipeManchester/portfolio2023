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
      <div className="max-w-7xl py-16 px-5 md:py-32 md:px-5 mx-auto my-0 grid grid-cols-[1fr] md:grid-cols-[2fr,1fr] lg:grid-cols-[4fr,1fr] md:gap-36 gap-10">
        <h2 className="text-5xl text-zinc-50 capitalize md:max-w-[3.2ch] break-words md:text-9xl font-bold md:uppercase md:text-zinc-900 md:hover:text-zinc-950 transition duration-300 md:order-1">
          Formação
        </h2>
        <div>
          <p className="text-[#a3a3a3] text-xl md:text-2xl md:max-w-[40ch] mb-16">
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
              <h3 className="text-lg uppercase text-zinc-400 mb-4">
                Certificados
              </h3>
              <ul className="flex flex-col gap-6 text-lg sm:text-xl md:text-2xl text-zinc-100">
                <li className="font-bold flex justify-between">
                  Algoritmo e Lógica de Programação
                  <span className="text-zinc-400 font-normal">
                    Curso em Vídeo, 40h
                  </span>
                </li>
                <li className=" font-bold flex justify-between">
                  Responsive Web Design
                  <span className="text-zinc-400 font-normal">
                    FreeCodeCamp, 300h
                  </span>
                </li>
                <li className=" font-bold flex justify-between">
                  JavaScript Algorithms and Data Structures
                  <span className="text-zinc-400 font-normal">
                    FreeCodeCamp, 300h
                  </span>
                </li>
                <li className=" font-bold flex justify-between">
                  React (do zero ao avançado)
                  <span className="text-zinc-400 font-normal">Udemy, 30h</span>
                </li>
                <li className=" font-bold flex justify-between">
                  TypeScript para Iniciantes
                  <span className="text-zinc-400 font-normal">
                    Origamid, 22h
                  </span>
                </li>
                <li className=" font-bold flex justify-between">
                  Front-End Development Libraries
                  <span className="text-zinc-400 font-normal">
                    FreeCodeCamp, 300h
                  </span>
                </li>
                <li className=" font-bold flex justify-between">
                  UI Design Para Iniciantes
                  <span className="text-zinc-400 font-normal">
                    Origamid, 30h
                  </span>
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
