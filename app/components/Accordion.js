"use client";

import { Accordion } from "flowbite-react";
import githubIcon from "/public/icons/github.svg";

export default function DefaultAccordion() {
  return (
    <Accordion className="bg-white mb-6">
      <Accordion.Panel className="bg-white">
        <Accordion.Title className="bg-white hover:bg-gray-50 transition duration-300 font-bold text-lg">
          Galaxy
        </Accordion.Title>
        <Accordion.Content className="bg-white">
          <div className="flex flex-col gap-7 text-justify relative">
            <div className="flex gap-7">
              <a href="https://github.com">
                <img
                  src="https://felipemanchester.github.io/portfolio/assets/images/project-2.png"
                  className="rounded-md w-96"
                />
              </a>
              <p className="text-sm text-gray-800">
                O Galaxy é um miniblog feito com React no Front-End e Firebase
                no Back-end. <br />
                Nele você pode criar, editar e apagar suas postagens. <br />O
                design foi inspirado no nosso universo.
              </p>
            </div>
            <button className="bg-primary rounded-md text-white p-3 hover:bg-orange-500 transition duration-300 w-12 absolute bottom-0 right-0">
              <a href="https://github.com" target="_blank">
                <img src={githubIcon.src} className="w-6" />
              </a>
            </button>
          </div>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel className="bg-white">
        <Accordion.Title className="bg-white hover:bg-gray-50 transition duration-300 font-bold text-lg">
          Mysterious Word
        </Accordion.Title>
        <Accordion.Content className="bg-white">
          <div className="flex gap-7 text-justify relative">
            <img
              src="https://www.typewolf.com/assets/img/sweatshirt.jpg"
              className="flex-1 rounded-md"
            />
            <p className="text-sm text-gray-800">
              O Galaxy é um miniblog feito com React no Front-End e Firebase no
              Back-end. <br />
              Nele você pode criar, editar e apagar suas postagens. <br />O
              design foi inspirado no nosso universo.
            </p>
            <button className="bg-primary rounded-md text-right absolute bottom-0 right-1 z-10 text-white p-3 hover:bg-orange-500 transition duration-300">
              <a href="https://github.com" target="_blank">
                <img src={githubIcon.src} />
              </a>
            </button>
          </div>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel className="bg-white">
        <Accordion.Title className="bg-white hover:bg-gray-50 transition duration-300 font-bold text-lg">
          To-Do List
        </Accordion.Title>
        <Accordion.Content className="bg-white">
          <div className="flex gap-7 text-justify relative">
            <img
              src="https://www.typewolf.com/assets/img/sweatshirt.jpg"
              className="flex-1 rounded-md"
            />
            <p className="text-sm text-gray-800">
              O Galaxy é um miniblog feito com React no Front-End e Firebase no
              Back-end. <br />
              Nele você pode criar, editar e apagar suas postagens. <br />O
              design foi inspirado no nosso universo.
            </p>
            <button className="bg-primary rounded-md text-right absolute bottom-0 right-1 z-10 text-white p-3 hover:bg-orange-500 transition duration-300">
              <a href="https://github.com" target="_blank">
                <img src={githubIcon.src} />
              </a>
            </button>
          </div>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel className="bg-white">
        <Accordion.Title className="bg-white hover:bg-gray-50 transition duration-300 font-bold text-lg">
          DoctorCare
        </Accordion.Title>
        <Accordion.Content className="bg-white">
          <div className="flex gap-7 text-justify relative">
            <img
              src="https://www.typewolf.com/assets/img/sweatshirt.jpg"
              className="flex-1 rounded-md"
            />
            <p className="text-sm text-gray-800">
              O Galaxy é um miniblog feito com React no Front-End e Firebase no
              Back-end. <br />
              Nele você pode criar, ver, editar e apagar suas postagens. <br />O
              design foi inspirado no nosso universo.
            </p>
            <button className="bg-primary rounded-md text-right absolute bottom-0 right-1 z-10 text-white p-3 hover:bg-orange-500 transition duration-300">
              <a href="https://github.com" target="_blank">
                <img src={githubIcon.src} />
              </a>
            </button>
          </div>
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
  );
}
