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

const CommunityHighlights = () => {
  return (
    <section className="bg-[#0F0F0F] text-white py-16 px-6 md:px-18">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
        Destaques da Comunidade
      </h2>
      <div className="grid gap-8 md:grid-cols-3">
        {highlights.map((item, index) => (
          <div
            key={index}
            className="bg-[#1A1A1A] p-6 rounded-lg shadow-md hover:scale-105 transition-transform"
>
            <h3 className="text-xl font-semibold mb-2 text-orange-400">{item.title}</h3>
            <p className="text-sm text-gray-300 mb-4">{item.description}</p>
            <div className="flex justify-between items-center text-sm text-gray-400">
              <span>👤 {item.author}</span>
              <span className="text-orange-500">{item.tag}</span>
            </div>
          </div>
))}
      </div>
    </section>
);
};

export default CommunityHighlights;
