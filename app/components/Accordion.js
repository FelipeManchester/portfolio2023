"use client";

import { Accordion } from "flowbite-react";

export default function DefaultAccordion() {
  return (
    <Accordion className="bg-white">
      <Accordion.Panel className="bg-white">
        <Accordion.Title className="bg-white hover:bg-gray-50 transition duration-300">
          Galaxy
        </Accordion.Title>
        <Accordion.Content className="bg-white">
          <div className="flex gap-7">
            <img src="https://www.typewolf.com/assets/img/sweatshirt.jpg" />
            <p>
              O Galaxy é um miniblog feito com React no Front-End e Firebase no
              Back-end. Nele você pode criar, editar e apagar suas postagens. O
              design foi inspirado no nosso universo.
            </p>
          </div>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel className="bg-white">
        <Accordion.Title className="bg-white hover:bg-gray-50 transition duration-300">
          Mysterious Word
        </Accordion.Title>
        <Accordion.Content className="bg-white">
          <div className="flex gap-7">
            <img src="https://www.typewolf.com/assets/img/sweatshirt.jpg" />
            <p>
              O Galaxy é um miniblog feito com React no Front-End e Firebase no
              Back-end. Nele você pode criar, editar e apagar suas postagens. O
              design foi inspirado no nosso universo.
            </p>
          </div>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel className="bg-white">
        <Accordion.Title className="bg-white hover:bg-gray-50 transition duration-300">
          To-Do List
        </Accordion.Title>
        <Accordion.Content className="bg-white">
          <div className="flex gap-7">
            <img src="https://www.typewolf.com/assets/img/sweatshirt.jpg" />
            <p>
              O Galaxy é um miniblog feito com React no Front-End e Firebase no
              Back-end. Nele você pode criar, editar e apagar suas postagens. O
              design foi inspirado no nosso universo.
            </p>
          </div>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel className="bg-white">
        <Accordion.Title className="bg-white hover:bg-gray-50 transition duration-300">
          DoctorCare
        </Accordion.Title>
        <Accordion.Content className="bg-white">
          <div className="flex gap-7">
            <img src="https://www.typewolf.com/assets/img/sweatshirt.jpg" />
            <p>
              O Galaxy é um miniblog feito com React no Front-End e Firebase no
              Back-end. Nele você pode criar, editar e apagar suas postagens. O
              design foi inspirado no nosso universo.
            </p>
          </div>
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
  );
}
