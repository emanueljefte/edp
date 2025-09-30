import { useContext} from "react";
import { ThemeContext} from "../theme/ThemeContext";

const resources = [
  {
    title: 'Não use mais esta técnica nos teus apps',
    type: 'Artigo',
    url: 'https://www.linkedin.com/posts/eclesiaste-vaz_vazpattern-flutterdev-uxdesign-activity-7369052335039340544-cbO_?utm_source=share&utm_medium=member_android&rcm=ACoAAEbjeZEBSaX0gUHzHD02fr7_hx9aM7u1kf0',
    description: 'A técnica de Debounce não é ideal para o teu app, confira você mesmo o porquê e a solução que criei.',
},
  {
    title: 'O Processo de digitalização do Ensino em Angola',
    type: 'Artigo',
    url: 'https://www.linkedin.com/pulse/o-processo-de-digitaliza%25C3%25A7%25C3%25A3o-do-ensino-em-angola-afonso-aur%25C3%25A9lio-ff6pf',
    description: 'Em Angola o processo de digitalização do ensino ainda não saiu do papel. Fala-se da sua importância para modernizar a educação e aproximar os alunos das novas tecnologias, mas a realidade mostra que o caminho ainda está por iniciar.',
},
  {
    title: 'Live com Augusto Manzano',
    type: 'Vídeo',
    url: 'https://youtube.com/shorts/OPR5QEh4XqA?si=r9lH90D2uMwOrXKG',
    description: 'Carreira de Dev.',
},
];

export default function EducationalResources() {
  const { isDarkMode} = useContext(ThemeContext);
  const sectionClass = isDarkMode? "section-dark": "section-light";
  const cardClass = isDarkMode? "card-dark": "card-light";

  return (
    <section className={`py-16 px-6 md:px-18 transition-colors duration-300 ${sectionClass}`}>
      <h2 className={`text-3xl md:text-4xl font-bold text-center mb-10 ${isDarkMode? "title-gradient": ""}`}>
        Recursos Educativos
      </h2>

      <div className="grid gap-8 md:grid-cols-3 mb-8">
        {resources.map((item, index) => (
          <a
            key={index}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`${cardClass} block`}
>
            <h3 className="text-lg font-semibold card-title mb-2">{item.title}</h3>
            <p className="text-sm mb-4 opacity-80">{item.description}</p>
            <span className="text-sm opacity-70">{item.type}</span>
          </a>
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
