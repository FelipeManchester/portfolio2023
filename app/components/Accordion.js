"use client";

import { Accordion } from "flowbite-react";
import githubIcon from "/public/icons/github.svg";
import screenshot1 from "/public/img/galaxy.png";
import screenshot2 from "/public/img/mysteriousword.png";
import screenshot3 from "/public/img/todolist.png";
import screenshot4 from "/public/img/doctorcare.png";

export default function DefaultAccordion() {
  return (
    <Accordion className="bg-white mb-6">
      <Accordion.Panel className="bg-white">
        <Accordion.Title className="bg-white hover:bg-zinc-100 transition duration-300 font-bold text-lg">
          Galaxy
        </Accordion.Title>
        <Accordion.Content className="bg-white">
          <div className="pb-5 grid grid-cols-1 md:grid-cols-2 relative place-items-center md:place-items-start">
            <a href="https://galaxy-star.vercel.app/" target="_blank">
              <img src={screenshot1.src} className="md:h-60 rounded-md mb-4" />
            </a>
            <p className="text-base md:text-xl text-zinc-800 text-left">
              O Galaxy é um miniblog feito com <b>React</b> no Front-End e{" "}
              <b>Firebase</b> no Back-end. Nele você pode criar, editar e apagar
              suas postagens. O design foi inspirado no nosso universo.
            </p>
            <button className="bg-primary w-12 md:h-16 md:w-16 rounded-md flex justify-center items-center absolute bottom-0 right-1 z-10 text-white p-3 hover:bg-orange-500 transition duration-300">
              <a
                href="https://github.com/FelipeManchester/miniblog-galaxy"
                target="_blank"
              >
                <img src={githubIcon.src} />
              </a>
            </button>
          </div>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel className="bg-white">
        <Accordion.Title className="bg-white hover:bg-zinc-50 transition duration-300 font-bold text-lg">
          Mysterious Word
        </Accordion.Title>
        <Accordion.Content className="bg-white">
          <div className="pb-5 grid grid-cols-1 md:grid-cols-2 relative place-items-center md:place-items-start">
            <a
              href="https://felipemanchester.github.io/mysterious-word/"
              target="_blank"
            >
              <img src={screenshot2.src} className="h-60 rounded-md mb-4" />
            </a>
            <p className="text-base md:text-xl text-zinc-800 text-left">
              Esse foi o meu primeiro projeto utilizando o <b>ReactJS</b>, se
              trata de um mini-game interativo onde o objetivo é adivinhar as
              palavras de acordo com o tema fornecido.{" "}
            </p>
            <button className="bg-primary w-12 md:h-16 md:w-16 rounded-md flex justify-center items-center absolute bottom-0 right-1 z-10 text-white p-3 hover:bg-orange-500 transition duration-300">
              <a
                href="https://github.com/FelipeManchester/mysterious-word"
                target="_blank"
              >
                <img src={githubIcon.src} />
              </a>
            </button>
          </div>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel className="bg-white">
        <Accordion.Title className="bg-white hover:bg-zinc-50 transition duration-300 font-bold text-lg">
          To-Do List
        </Accordion.Title>
        <Accordion.Content className="bg-white">
          <div className="pb-5 grid grid-cols-1 md:grid-cols-2 relative place-items-center md:place-items-start">
            <a href="https://todo-react-ts-pi.vercel.app/" target="_blank">
              <img src={screenshot3.src} className="h-60 rounded-md mb-4" />
            </a>
            <p className="text-base md:text-xl text-zinc-800 text-left">
              Feito com <b>ReactJS</b> e <b>TypeScript</b>, uma simples lista de
              tarefa onde você pode adicionar itens, remover e editar. No fim da
              página utilizei uma API de frases motivacionais para ficar mais
              atrativo.
            </p>
            <button className="bg-primary w-12 md:h-16 md:w-16 rounded-md flex justify-center items-center absolute bottom-0 right-1 z-10 text-white p-3 hover:bg-orange-500 transition duration-300">
              <a
                href="https://github.com/FelipeManchester/todo-react-ts"
                target="_blank"
              >
                <img src={githubIcon.src} />
              </a>
            </button>
          </div>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel className="bg-white">
        <Accordion.Title className="bg-white hover:bg-zinc-50 transition duration-300 font-bold text-lg">
          DoctorCare
        </Accordion.Title>
        <Accordion.Content className="bg-white">
          <div className="pb-5 grid grid-cols-1 md:grid-cols-2 relative place-items-center md:place-items-start">
            <a
              href="https://felipemanchester.github.io/DoctorCare/"
              target="_blank"
            >
              <img src={screenshot4.src} className="h-60 rounded-md mb-4" />
            </a>
            <p className="text-base md:text-xl text-zinc-800 text-left">
              Um dos meus primeiros projetos! Feito apenas com <b>HTML</b>,{" "}
              <b>CSS</b> e <b>JavaScript</b> baseado em uma aula do Mayk Brito
              (Rocketseat). O objetivo era criar uma landing page para uma
              clínica médica fictícia.
            </p>
            <button className="bg-primary w-12 md:h-16 md:w-16 rounded-md flex justify-center items-center absolute bottom-0 right-1 z-10 text-white p-3 hover:bg-orange-500 transition duration-300">
              <a
                href="https://github.com/FelipeManchester/DoctorCare"
                target="_blank"
              >
                <img src={githubIcon.src} />
              </a>
            </button>
          </div>
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
  );
}
