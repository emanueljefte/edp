import { useContext} from "react";
import { ThemeContext} from "../theme/ThemeContext";

const eventos = [
  {
    nome: 'Live: Como Programar com IA de forma correcta e ter produtividade',
    data: '20 Set 2025',
    hora: '19h',
    tipo: 'Live',
},
  {
    nome: 'TalkShow EDP',
    data: '28 Set 2025',
    hora: '19h',
    tipo: 'TalkShow',
},
];

export default function Eventos() {
  const { isDarkMode} = useContext(ThemeContext);
  const sectionClass = isDarkMode? "section-dark": "section-light";
  const cardClass = isDarkMode? "card-dark": "card-light";

  return (
    <section className={`py-16 px-6 md:px-18 text-center transition-colors duration-300 ${sectionClass}`}>
      <h2 className={`text-3xl md:text-4xl font-bold text-center mb-10 ${isDarkMode? "title-gradient": ""}`}>
        Eventos e Encontros
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {eventos.map((evento, index) => (
          <div key={index} className={`${cardClass} border ${
          isDarkMode ? "border-red-500" : "border-[#333333]"
        }`}>
            <h3 className="text-xl font-semibold card-title mb-2">{evento.nome}</h3>
            <p className="text-sm opacity-80 mb-1">📅 {evento.data}</p>
            <p className="text-sm opacity-80 mb-4">⏰ {evento.hora}</p>
            <span className="inline-block section-button text-sm">
              {evento.tipo}
            </span>
          </div>
))}
      </div>
    </section>
);
}