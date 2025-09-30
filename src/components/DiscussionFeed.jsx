import { useContext} from "react";
import { ThemeContext} from "../theme/ThemeContext";

const discussions = [
  {
    title: "Dados os desafios sócio econômico e político do nosso país, há chances das startups se manterem vivas e crescerem?",
    author: "Fábio Aurélio",
    replies: 12,
    tag: "#startups",
},
  {
    title: "O que acham do Mercado de trabalho em Angola?",
    author: "Leandro Malungo",
    replies: 8,
    tag: "#mercadodetrabalho",
},
  {
    title: "O que achas sobre o processo de digitalização do ensino em Angola?",
    author: "Fábio Aurélio",
    replies: 10,
    tag: "#digitalizacaodoensino",
},
];

export default function DiscussionFeed() {
  const { isDarkMode} = useContext(ThemeContext);
  const sectionClass = isDarkMode? "section-dark": "section-light";
  const cardClass = isDarkMode? "card-dark": "card-light";

  return (
    <section className={`py-16 px-6 md:px-18 transition-colors duration-300 ${sectionClass}`}>
      <h2 className={`text-3xl md:text-4xl font-bold text-center mb-10 ${isDarkMode? "title-gradient": ""}`}>
        Discussões da Comunidade
      </h2>

      <div className="space-y-6 mb-8">
        {discussions.map((item, index) => (
          <div key={index} className={cardClass}>
            <h3 className="text-lg font-semibold card-title mb-2">{item.title}</h3>
            <div className="flex justify-between text-sm opacity-70">
              <span>👤 {item.author}</span>
              <span>💬 {item.replies} respostas</span>
              <span className="card-title">{item.tag}</span>
            </div>
          </div>
))}
      </div>

      <div className="text-center">
        <a href="#" className="inline-block section-button">
          Ver Mais
        </a>
      </div>
    </section>
);
}
