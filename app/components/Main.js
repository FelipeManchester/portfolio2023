import clsx from "clsx";
import mainPhoto from "../img/foto-hold.svg";
import { Fira_Sans } from "next/font/google";

const text = Fira_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const Main = () => {
  return (
    <div
      className={clsx(
        "max-w-7xl md:py-10 md:px-5 mx-auto my-0 grid grid-cols-[1fr,2fr] gap-20 md:gap-28 items-center",
        text.className
      )}
    >
      <img
        src={mainPhoto.src}
        alt="Foto de Felipe, o desenvolvedor desse site"
      />
      <div>
        <h1 className="md:text-7xl font-extrabold leading-tight tracking-tight">
          Desenvolvedor
          <br /> Front End &<br /> UX/UI Designer
        </h1>
      </div>
    </div>
  );
};

export default Main;
