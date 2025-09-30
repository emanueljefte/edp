import { useContext } from "react";
import { ThemeContext } from "../theme/ThemeContext";

export default function HeroSection() {
  const { isDarkMode} = useContext(ThemeContext);

  return (
    <section className={`text-center py-20 px-4 md:px-20 transition-colors duration-300 ${isDarkMode? "section-dark": "section-light"}`}>
      <h2 className={`text-4xl md:text-6xl font-extrabold mb-6 title-gradient`}>
        ERRO DA PROGRAMAÇÃO
      </h2>
      <p className="text-base md:text-lg max-w-xl mx-auto mb-8">
        Transformando bugs em aprendizado. Aqui, cada erro é uma oportunidade.
      </p>
      <a href="#" className="inline-block section-button">
        Junte-se à comunidade
      </a>
    </section>
);
}