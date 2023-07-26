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
        "max-w-7xl md:py-10 md:px-5 mx-auto my-0 grid grid-cols-[1fr,1fr] lg:grid-cols-[1fr,2fr] gap-5 sm:gap-10 md:gap-10 items-center",
        text.className
      )}
    >
      <img
        src={mainPhoto.src}
        alt="Foto de Felipe, o desenvolvedor desse site"
      />
      <div>
        <h1 className="relative text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold leading-tight tracking-tight">
          <span className="bg-decoration absolute top-4 left-2 w-8 h-6 transform -translate-x-1/2 -translate-y-1/2 sm:w-12 sm:h-12 sm:top-5 sm:left-3 md:w-16 md:h-16 md:top-5 md:left-5 lg:w-20 lg:h-20 lg:top-8 lg:left-6"></span>
          Desenvolvedor
          <br /> Front End &<br /> UX/UI Designer
        </h1>
      </div>
    </div>
  );
};

export default Main;
