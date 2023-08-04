import React from "react";
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
      <div className="max-w-7xl py-16 px-5 md:py-32 md:px-5 mx-auto my-0 grid grid-cols-[1fr] md:grid-cols-[1fr,2fr] md:gap-36 gap-10">
        <h2 className="text-5xl text-zinc-50 capitalize md:max-w-[3.2ch] break-words md:text-9xl font-bold md:uppercase md:text-zinc-700 md:hover:text-zinc-600/[.60] transition duration-300">
          Contato
        </h2>
        <p className="text-zinc-100 text-2xl">
          Aqui estão meus principais contatos! No momento estou disponível para
          novos projetos. Entre em contato comigo e conversaremos melhor ;D
        </p>
      </div>
    </footer>
  );
};

export default Footer;
