import { useContext} from "react";
import { ThemeContext} from "../theme/ThemeContext";
import {
  FacebookOutlined,
  GithubOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  MailOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";
import { Link} from "react-router-dom";

const navegacao = [
  { id: 1, li: "Início", path: "/"},
  { id: 2, li: "Projectos", path: "#"},
  { id: 3, li: "Discussões", path: "#"},
  { id: 4, li: "Recursos", path: "#"},
  { id: 5, li: "Eventos", path: "#"},
  { id: 6, li: "Sobre", path: "#"},
];

export default function Rodape() {
  const { isDarkMode} = useContext(ThemeContext);
  const sectionClass = isDarkMode? "section-dark": "bg-white";

  return (
    <footer className={`py-12 px-6 md:px-14 transition-colors duration-300 ${sectionClass}`}>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Navegação */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Navegação</h4>
          <ul className="space-y-2 opacity-80">
            {navegacao.map((nav) => (
              <li key={nav.id}>
                <Link to={nav.path} className={`${isDarkMode ? "hover:text-orange-400" : "hover:text-[dodgerblue]"}`}>
                  {nav.li}
                </Link>
              </li>
))}
          </ul>
        </div>

        {/* Redes sociais */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Conecte-se</h4>
          <div className={`flex justify-center md:justify-start space-x-4 text-2xl ${isDarkMode ? "text-orange-500" : "text-[dodgerblue]"}`}>
            <a href="#"><GithubOutlined /></a>
            <a href="#"><LinkedinOutlined /></a>
            <a href="#"><MailOutlined /></a>
            <a href="#"><FacebookOutlined /></a>
            <a href="#"><YoutubeOutlined /></a>
            <a href="#"><InstagramOutlined /></a>
          </div>
        </div>

        {/* Manifesto */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Sobre a EDP</h4>
          <p className="text-sm opacity-70 mb-4">
            Na EDP, acreditamos que cada erro é uma oportunidade de crescimento. Nossa missão é transformar bugs em aprendizado coletivo.
          </p>
          <a href="#" className={`${isDarkMode ? "bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent" : "text-[dodgerblue]"} hover:underline text-sm`}>
            Termos de uso e privacidade
          </a>
        </div>
      </div>

      <div className="mt-10 text-center text-sm opacity-60">
        © 2025 Erro da Programação. Todos os direitos reservados.
      </div>
    </footer>
);
}
