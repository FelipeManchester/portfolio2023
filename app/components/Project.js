import { Fira_Sans } from "next/font/google";

const text = Fira_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const Project = () => {
  return (
    <section aria-label="Projetos" id="projetos" className={text.className}>
      <h2>Projetos</h2>
      <div>
        <p>
          Desenvolvo pequenos projetos utilizando apenas HTML, CSS e JavaScript.
          Para aplicativos web como o miniblog Galaxy eu utilizo o React. Design
          e código são minhas paixões ❤️
        </p>

        <div>
          <h3>Galaxy</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
          </ul>
          <img src="https://www.typewolf.com/assets/img/sweatshirt.jpg" />
          <p>
            O Galaxy é um miniblog feito com React no Front-End e Firebase no
            Back-end. Nele você pode criar, editar e apagar suas postagens. O
            design foi inspirado no nosso universo.
          </p>
          <button>Código</button>
        </div>
      </div>
    </section>
  );
};

export default Project;
