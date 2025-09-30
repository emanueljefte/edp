import { useContext} from "react";
import { ThemeContext} from "../theme/ThemeContext";

const highlights = [
  {
    title: 'vulnerabilidade na API Gateway',
    description: 'Descoberta de uma vulnerabilidade na API Gateway.',
    author: 'Redwane Jacline',
    tag: '#cybersecurity',
},
  {
    title: 'XSS no WP Super Cache',
    description: 'Vulnerabilidade num dos plugins do WordPress reportadas.',
    author: 'Nelson',
    tag: '#cybersecurity',
},
  {
    title: 'Projeto em Destaque',
    description: 'Sistema para gestão e recuperação de documentos de identidade - FindBI.',
    author: 'Redwane Jacline',
    tag: '#desenvolvimentoweb',
},
];

export default function CommunityHighlights() {
  const { isDarkMode} = useContext(ThemeContext);
  const themeClass = isDarkMode? "section-dark": "section-light";
  const cardClass = isDarkMode? "card-dark": "card-light";

  return (
    <section className={`py-16 px-6 md:px-18 transition-colors duration-300 ${themeClass}`}>
      <h2 className={`text-3xl md:text-4xl font-bold text-center mb-10 ${isDarkMode? "title-gradient": ""}`}>
        Destaques da Comunidade
      </h2>

      <div className="grid gap-8 md:grid-cols-3">
      {highlights.map((item, index) => (
        <div key={index} className={cardClass}>
          <h3 className="text-xl card-title font-semibold mb-2 ">{item.title}</h3>
          <p className="text-sm mb-4">{item.description}</p>
          <div className="flex justify-between items-center text-sm">
            <span>👤 {item.author}</span>
            <span className="card-title">{item.tag}</span>
          </div>
        </div>
))}
    </div>
    </section>
);
}
