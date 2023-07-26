import clsx from "clsx";
import logo from "/public/icons/Felipe..svg";
import { Fira_Sans } from "next/font/google";

const text = Fira_Sans({ subsets: ["latin"], weight: "400" });

const Navbar = () => {
  return (
    <nav
      className={clsx(
        "flex flex-col gap-10 md:flex-row justify-between items-center py-5 md:py-10 md:px-5 max-w-7xl mx-auto my-0",
        text.className
      )}
    >
      <a href="#">
        <img src={logo.src} alt="My Image" />
      </a>
      <ul className="flex flex-wrap gap-3 text-sm md:text-lg">
        <li>
          <a
            href="#projetos"
            className="py-2.5 px-2.5 block bg-gray-50 rounded-md md:bg-inherit text-lg"
          >
            Projetos
          </a>
        </li>
        <li>
          <a
            href="#formacao"
            className="py-2.5 px-2.5 block bg-gray-50 rounded-md md:bg-inherit text-lg"
          >
            Formação
          </a>
        </li>
        <li>
          <a
            href="#contato"
            className="py-2.5 px-2.5 block bg-gray-50 rounded-md md:bg-inherit text-lg"
          >
            Contato
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
