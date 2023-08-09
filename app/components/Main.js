import clsx from "clsx";
import mainPhoto from "/public/img/foto-hold.svg";
import { Fira_Sans } from "next/font/google";

const text = Fira_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const Main = () => {
  return (
    <div
      className={clsx(
        "max-w-7xl md:py-10 md:px-5 py-6 px-3 mx-auto mb-28 grid grid-cols-[1fr,1fr] lg:grid-cols-[1fr,2fr] gap-5 sm:gap-10 md:gap-36 items-center",
        text.className
      )}
    >
      <img
        src={mainPhoto.src}
        alt="Foto de Felipe, o desenvolvedor desse site"
      />
      <div className="relative">
        <h1 className="relative text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-tight tracking-tight">
          <span className="bg-decoration absolute top-3.5 left-2 w-8 h-8 transform -translate-x-1/2 -translate-y-1/2 sm:w-12 sm:h-12 sm:top-5 sm:left-3 md:w-16 md:h-16 md:top-5 md:left-5 lg:w-20 lg:h-20 lg:top-8 lg:left-6"></span>
          Desenvolvedor
          <br /> Front End &<br /> UX/UI Designer
        </h1>

        <button className="bg-primary rounded-md text-white text-xs md:text-lg mt-2 p-4 hover:bg-orange-500 transition duration-300 uppercase font-bold absolute md:left-1 md:mt-4">
          <a href="https://wa.me/+5522997264111" target="_blank">
            Fale comigo! 👋️
          </a>
        </button>
      </div>
    </div>
  );
};

export default Main;
