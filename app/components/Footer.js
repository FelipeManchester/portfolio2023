import github from "/public/icons/github-logo 1.svg";
import linkedin from "/public/icons/linkedin-logo 1.svg";
import telegram from "/public/icons/telegram-logo 1.svg";
import whatsapp from "/public/icons/whatsapp-logo 1.svg";
import email from "/public/icons/envelope 1.svg";

import { Fira_Sans } from "next/font/google";
import clsx from "clsx";

const text = Fira_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const Footer = () => {
  return (
    <footer
      id="contato"
      className={clsx(
        "bg-gradient-to-r from-[#000] to-[#141414]",
        text.className
      )}
    >
      <div className="max-w-7xl py-16 px-5 md:py-32 md:px-5 mx-auto grid grid-cols-[1fr] md:grid-cols-[1fr,2fr] md:gap-36 gap-10">
        <h2 className="text-5xl text-zinc-50 capitalize md:max-w-[3.2ch] break-words md:text-9xl font-bold md:uppercase md:text-zinc-900 md:hover:text-zinc-700/[.60] transition duration-500">
          Contato
        </h2>
        <div className="flex flex-wrap justify-between divide-dashed divide-x">
          <p className="text-zinc-300 md:text-3xl mb-8">
            Aqui estão meus principais contatos! No momento estou{" "}
            <span className="text-white">disponível </span>
            para novos projetos. Entre em contato comigo e conversaremos melhor
            😁️
          </p>
          <a
            href="https://github.com/FelipeManchester"
            target="_blank"
            className="h-16"
          >
            <img
              src={github.src}
              alt="GitHub Logo"
              className="w-8 md:w-16 hover:brightness-125 md:hover:w-[65px] transition duration-300"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/FelipeManchester"
            target="_blank"
          >
            <img
              src={linkedin.src}
              alt="Linkedin Logo"
              className="w-8 md:w-16 hover:brightness-125 md:hover:w-[65px] transition duration-300"
            />
          </a>
          <a href="https://telegram.me/felipemanchester" target="_blank">
            <img
              src={telegram.src}
              alt="Telegram Logo"
              className="w-8 md:w-16 hover:brightness-125 md:hover:w-[65px] transition duration-300"
            />
          </a>
          <a href="https://wa.me/+5522997264111" target="_blank">
            <img
              src={whatsapp.src}
              alt="Whatsapp Logo"
              className="w-8 md:w-16 hover:brightness-125 md:hover:w-[65px] transition duration-300"
            />
          </a>
          <a
            href="https://mail.google.com/mail/u/0/?fs=1&to=f.p2809@gmail.com&su=Assunto+do+email&tf=cm"
            target="_blank"
          >
            <img
              src={email.src}
              alt="Email Logo"
              className="w-8 md:w-16 hover:brightness-125 md:hover:w-[65px] transition duration-300"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
